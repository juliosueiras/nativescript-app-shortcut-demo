/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

var AndroidApplication = application.AndroidApplication;

require("./bundle-config");
var application = require("application");

application.start();

application.android.on(AndroidApplication.activityCreatedEvent, function (args) {
})
application.android.on(AndroidApplication.activityDestroyedEvent, function (args) {
})
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
