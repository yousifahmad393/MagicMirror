/* Magic Mirror Config Sample
*
* 
*
*/
var config = {
	"port": 8080,
	"language": "en",
	"timeFormat": 12,
	"units": "metric",
	"modules": [
		{
			"module": "MMM-Admin-Interface"
		},
		{
			"module": "alert"
		},
		{
			"module": "updatenotification",
			"position": "top_bar"
		},
		{
			"module": "clock",
			"header": "CLOCK",
			"position": "top_right",
			"config": {
				"calendars": [
					{
						"symbol": "",
						"url": ""
					}
				],
				"compliments": {
					"morning": [],
					"afternoon": [],
					"evening": []
				},
				"location": "",
				"locationID": "",
				"appid": "",
				"feeds": [],
				"showSourceTitle": false,
				"showPublishDate": false,
				"showWeek": true
			},
			"classes": "Ali"
		},
		{
			"module": "calendar",
			"header": "Bahrain Holidays",
			"position": "top_left",
			"config": {
				"calendars": [
					{
						"symbol": "calendar-check",
						"url": "https://www.officeholidays.com/ics/bahrain"
					}
				]
			},
			"classes": "yusuf"
		},
		{
			"module": "compliments",
			"position": "lower_third",
			"classes": "yusuf"
		},
		{
			"module": "weather",
			"position": "top_center",
			"config": {
				"location": "Manama",
				"locationID": "290340",
				"weatherProvider": "openweathermap",
				"type": "current",
				"apiKey": "60758f8cce095ab429d85a98b096efc5"
			},
			"classes": "Hazza"
		},
		{
			"module": "weather",
			"header": "Weather Forecast",
			"position": "bottom_left",
			"config": {
				"location": "Manama",
				"locationID": "290340",
				"weatherProvider": "openweathermap",
				"type": "forecast",
				"apiKey": "60758f8cce095ab429d85a98b096efc5"
			},
			"classes": "everyone"
		},
		{
			"module": "newsfeed",
			"position": "bottom_bar",
			"config": {
				"feeds": [
					{
						"title": "Bahrain News",
						"url": "https://www.bna.bh/en/GenerateRssFeed.aspx?categoryId=153"
					}
				],
				"showSourceTitle": true,
				"showPublishDate": true,
				"broadcastNewsFeeds": true,
				"broadcastNewsUpdates": true
			},
			"classes": "yusuf"
		},
		{
			"module": "MMM-NowPlayingOnSpotify",
			"position": "bottom_right",
			"config": {
				"showCoverArt": "true",
				"clientID": "cef8e45ad1e6474e99bdbfbd7fd520c3",
				"clientSecret": "bd1bd0e3be6a4d9b848a5d66ad3c74e1",
				"accessToken": "BQDjno9YZFun5rgEnX6wC_qNxM3CNezWxKMcTYNTkv9g8ezoPy4yvQlxqRh1yUk8h2Qlit2_ruKYwwQaGlvUlMEN7wLkL19WxTH9qcRrdfDO7XoRg7aqR5lePiCTEbI7wJSgCwcP-0m4qtPQLpmA4w2Ad7sBySep6ylMW3Z1Pw",
				"refreshToken": "AQCQKtFGT7nDXAJE2xW9WOu9axEseVNpr4F64agOM9i4V6H-1YEi-VtPkHcajJkaGR41AqAC3KlPCZLlOXTbUJXmvfaNCoeH8BZaYZ8jIO8_0DMpEn2m4YaM7wVwNNHdPSs"
			},
			"classes": "everyone"
		},
		{
  module: 'MMM-MyPrayerTimes',
  position: 'top_right',
  header: 'My Prayer Times',
  "classes":"yusuf",
  config: {
          mptLat: 26.17361,				// Replace with the latitude of your location
	  mptLon: 50.54778,				// Replace with the Longitude of your location
	  mptMethod: 3,			// Which calculation methode is used, see options below
	  mptOffset: "0,0,0,0,0,0,0,0,0",	// Time corrections for your location: Imsak, Fajr, Sunrise, Duhr, Asr, Sunset, Maghrib, Isha, Midnight
	  showSunrise: true,			// Display Sunrise, false if you want to hide
	  showSunset: true,			// Display Sunset, false if you want to hide
	  showMidnight: true,			// Display Midnight, false if you want to hide
	  showImsak: true,			// Display Imsak, false if you want to hide
	  show24Clock: true,			// Default display 24hour clock -> false is 12hour (AM/PM) clock
	  }
},
		{
			"module": "MMM-Face-Reco-DNN",
			"config": {
				"logoutDelay": 3000,
				"checkInterval": 1000,
				"noFaceClass": "noface",
				"unknownClass": "unknown",
				"knownClass": "known",
				"defaultClass": "default",
				"everyoneClass": "everyone",
				"alwaysClass": "always",
				"cascade": "modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml",
				"encodings": "modules/MMM-Face-Reco-DNN/tools/encodings.pickle",
				"usePiCamera": 0,
				"source": 0,
				"rotateCamera": 0,
				"method": "dnn",
				"detectionMethod": "hog",
				"animationSpeed": 0,
				"pythonPath": null,
				"welcomeMessage": true,
				"usernameDisplayMapping": null,
				"extendDataset": false,
				"dataset": "modules/MMM-Face-Reco-DNN/dataset/",
				"tolerance": 0.4,
				"multiUser": 0
			}
		}
	],
	"address": "0.0.0.0",
	"basePath": "/",
	"ipWhitelist": [],
	"useHttps": false,
	"httpsPrivateKey": "",
	"httpsCertificate": "",
	"locale": "en-US",
	"logLevel": [
		"INFO",
		"LOG",
		"WARN",
		"ERROR"
	]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/ 
if (typeof module !== 'undefined') {module.exports = config;}
