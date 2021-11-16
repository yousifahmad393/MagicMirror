/* Magic Mirror Config Sample
*
* By Michael Teeuw http://michaelteeuw.nl
* MIT Licensed.
*/
var config = {
	"port": 8080,
	"language": "en",
	"timeFormat": 24,
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
			"classes":'always',
			"position": "bottom_left",
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
			}
		},
		{
			"module": "calendar",
			"header": "Bahrain Holidays",
			"position": "top_left",
			"classes":'yusuf',
			"config": {
				"calendars": [
					{
						"symbol": "calendar-check",
						//"url": "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
						"url": "https://www.officeholidays.com/ics/bahrain"
					}
				]
			}
		},
		{
			"module": "compliments",
			"position": "lower_third",
			"classes":'yusuf'
		},
		{
			"module": "weather",
			"position": "top_center",
			"classes":'always',
			"config": {
				"location": "Manama",
				"locationID": "290340",
				"weatherProvider": "openweathermap",
				"type": "current",
				"apiKey": "60758f8cce095ab429d85a98b096efc5"
			}
		},
		{
			"module": "weather",
			"header": "Weather Forecast",
			"position": "top_right",
			"classes":'always',
			"config": {
				"location": "Manama",
				"locationID": "290340",
				"weatherProvider": "openweathermap",
				"type": "forecast",
				"apiKey": "60758f8cce095ab429d85a98b096efc5"
			}
		},
		{
			"module": "newsfeed",
			"position": "bottom_bar",
			"classes":'always',
			"config": {
				"feeds": [
					{
						"title": "New York Times",
						"url": "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				"showSourceTitle": true,
				"showPublishDate": true,
				"broadcastNewsFeeds": true,
				"broadcastNewsUpdates": true
			}
		},
{
    module: 'MMM-Face-Reco-DNN',
    config: {
      // Logout 15 seconds after user was not detected any more
      // If they are detected within this period, the delay will start again
      logoutDelay: 3000,
      // How often the recognition starts in milliseconds
      // With a Raspberry Pi 3+ it works well every 2 seconds
      checkInterval: 1000,
      // Module set used for when there is no face detected ie no one is in front of the camera
      noFaceClass: 'noface',
      // Module set used for when there is an unknown/unrecognised face detected
      unknownClass: 'unknown',
      // Module set used for when there is a known/recognised face detected
      knownClass: 'known',
      // Module set used for strangers and if no user is detected
      defaultClass: 'default',
      // Set of modules which should be shown for any user ie when there is any face detected
      everyoneClass: 'everyone',
      // Set of modules that are always shown - show if there is a face or no face detected
      alwaysClass: 'always',
      // XML to recognize with haarcascade
      cascade: 'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
      // Pre-encoded pickle with the faces
      encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
      // Use Raspberry Pi camera or another type
      // 1 = RasPi camera, 0 = other camera
      usePiCamera: 0,
      // If using another type of camera, you can choose
      // i.e. 0 = /dev/video0 or 'http://link.to/live'
      source: 0,
      // Rotate camera
      rotateCamera: 0,
      // Method of facial recognition
      // dnn = deep neural network, haar = haarcascade
      method: 'dnn',
      // Which face detection model to use
      // "hog" is less accurate but faster on CPUs
      // "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated
      detectionMethod: 'hog',
      // How long in milliseconds modules take to hide and show
      animationSpeed: 0,
      // Path to Python to run the face recognition
      // null or '' means default path
      pythonPath: null,
      // Should a welcome message be shown using the MagicMirror alerts module?
      welcomeMessage: true,
      // Dictionary for person name mapping in welcome message
      // Allows for displaying name with complex character sets in welcome message e.g. jerome => Jérôme, hideyuki => 英之
      usernameDisplayMapping: null,
      // Capture new pictures of recognized people, if unknown we save it in folder "unknown"
      // So you can extend your dataset and retrain it afterwards for better recognitions
      extendDataset: false,
      // If extendDataset is true, you need to set the full path of the dataset
      dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
      // How much distance between faces to consider it a match. Lower is more strict.
      tolerance: 0.45,
      // allow multiple concurrent user logins, 0=no, any other number is the maximum number of concurrent logins
      multiUser: 0,
    }
}

	],
	"address": "localhost",
	"basePath": "/",
	"ipWhitelist": [
		"127.0.0.1",
		"::ffff:127.0.0.1",
		"::1"
	],
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
