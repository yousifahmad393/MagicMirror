const express = require("express");
const app = require("express")();
const path = require("path");
const ipfilter = require("express-ipfilter").IpFilter;
const fs = require("fs");
const helmet = require("helmet");
const { equal } = require("assert");
const upload = require("express-fileupload");
const { exec } = require("child_process");
const Log = require("logger");
const Utils = require("./utils.js");
const { execFile } = require("child_process");

app.use(upload());

/**
 * Server
 *
 * @param {object} config The MM config
 * @param {Function} callback Function called when done.
 * @class
 */
function Server(config, callback) {
	const port = process.env.MM_PORT || config.port;

	let server = null;
	if (config.useHttps) {
		const options = {
			key: fs.readFileSync(config.httpsPrivateKey),
			cert: fs.readFileSync(config.httpsCertificate)
		};
		server = require("https").Server(options, app);
	} else {
		server = require("http").Server(app);
	}
	const io = require("socket.io")(server, {
		cors: {
			origin: /.*$/,
			credentials: true
		},
		allowEIO3: true
	});

	Log.log(`Starting server on port ${port} ... `);

	server.listen(port, config.address || "localhost");

	if (config.ipWhitelist instanceof Array && config.ipWhitelist.length === 0) {
		Log.warn(Utils.colors.warn("You're using a full whitelist configuration to allow for all IPs"));
	}

	app.use(function (req, res, next) {
		ipfilter(config.ipWhitelist, { mode: config.ipWhitelist.length === 0 ? "deny" : "allow", log: false })(req, res, function (err) {
			if (err === undefined) {
				return next();
			}
			Log.log(err.message);
			res.status(403).send("This device is not allowed to access your mirror. <br> Please check your config.js or config.js.sample to change this.");
		});
	});
	app.use(helmet({ contentSecurityPolicy: false }));

	app.use("/js", express.static(__dirname));

	const directories = ["/config", "/css", "/fonts", "/modules", "/vendor", "/translations", "/tests/configs"];
	for (const directory of directories) {
		app.use(directory, express.static(path.resolve(global.root_path + directory)));
	}

	app.get("/version", function (req, res) {
		res.send(global.version);
	});

	app.get("/config", function (req, res) {
		res.send(config);
	});

	app.get("/", function (req, res) {
		let html = fs.readFileSync(path.resolve(`${global.root_path}/index.html`), { encoding: "utf8" });
		html = html.replace("#VERSION#", global.version);

		let configFile = "config/config.js";
		if (typeof global.configuration_file !== "undefined") {
			configFile = global.configuration_file;
		}
		html = html.replace("#CONFIG_FILE#", configFile);

		res.send(html);
	});
	//custom route for the dashboard
	app.get("/dashboard", (req, res) => {
		//get the current path of the file
		var path = __dirname;
		//get the length of the path
		var length = path.length;
		var newPath = path.substr(0, length - 3);
		//res.send("<h1> the path is :" +  newPath);
		console.log("-----------------------------------" + newPath);
		res.sendFile(newPath + "/views/index.html");
	});
	//
	app.get("/newUsers", (req, res) => {
		var path = __dirname;
		var length = path.length;
		var newPath = path.substr(0, length - 3);
		res.sendFile(newPath + "/views/newusers.html");
	});
	//
	app.post("/createNewUser", (req, res) => {
		if (req.files) {
			var files = req.files.file;
			var userName = req.body.name;
			var path = __dirname;
			var length = path.length;
			var newPath = path.substr(0, length - 3);
			exec("mkdir " + newPath + "/modules/MMM-Face-Reco-DNN/dataset/" + userName, async (err, stdout, stderr) => {
				if (err) {
					console.log(err);
					res.send("user exists");
					return;
				}
				for (let index = 0; index < files.length; index++) {
					const toBeUploaded = files[index];
					console.log(toBeUploaded);
					toBeUploaded.mv(newPath + "/modules/MMM-Face-Reco-DNN/dataset/" + userName + "/img" + index + ".jpg");
				}
				res.send("Uploaded successfully! it will take about 5 minutes to add the new users to the database.");
			});
			exec("/home/pi/newUsers.sh", (err, stdout, stderr) => {
				if (err) {
					console.log(err);
					res.send(err);
					return;
				}
				res.send("adding new user");
			});
		}
	});
	if (typeof callback === "function") {
		callback(app, io);
	}
}

module.exports = Server;
