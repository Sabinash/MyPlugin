cordova.define("cordova-plugin-app-garmin.Garmin", function(require, exports, module) {

function Garmin() {}

Garmin.prototype.scanForDevice = function(options, successCallback, errorCallback) {
		cordova.exec(successCallback , errorCallback , "Garmin", "scanForDevice", [options]);

};

Garmin.prototype.requestSleepData = function(successCallback, errorCallback) {

	cordova.exec(successCallback , errorCallback , "Garmin", "requestSleepData", []);
};


Garmin.prototype.garminInitializer = function(successCallback, errorCallback) {

	cordova.exec(successCallback , errorCallback , "Garmin", "garminInitializer", []);
};

Garmin.prototype.initSyncHandler = function(successCallback, errorCallback) {
	cordova.exec(successCallback , errorCallback , "Garmin", "initSyncHandler", [options]);
};


Garmin.install = function () {
	if (!window.plugins) {
		window.plugins = {};
	}

	window.plugins.garmin = new Garmin();
	return window.plugins.garmin;
};

cordova.addConstructor(Garmin.install);

});
