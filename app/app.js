/*
In NativeScript, the app.js file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/


require("./bundle-config");
var application = require("application");

var AndroidApplication = application.AndroidApplication;
var Intent = android.content.Intent;
var ShortcutManager = android.content.pm.ShortcutManager;
var ShortcutInfo = android.content.pm.ShortcutInfo;
var Icon = android.graphics.drawable.Icon;
var Uri = android.net.Uri;
var R = org.nativescript.shortcutdemo.R;
var Arrays = java.util.Arrays;

application.android.on(AndroidApplication.activityDestroyedEvent, function (args) {
    console.log("Destroyed")
    var shortcutManager = args.activity.getSystemService(ShortcutManager.class);
    shortcutManager.removeAllDynamicShortcuts()
})

application.android.on(AndroidApplication.activityCreatedEvent, function (args) {
    var self = args.activity;
    var shortcutManager = self.getSystemService(ShortcutManager.class);
    var context = self.getApplicationContext()

    var shortcut = new ShortcutInfo.Builder(context, "id1")
        .setShortLabel("Demo Shortcut 1")
        .setLongLabel("Demo Shortcut 1 Long")
        .setIcon(Icon.createWithResource(context, R.drawable.icon))
        .setIntent(new Intent(Intent.ACTION_VIEW, Uri.parse("https://www.mysite.example.com/")))
        .build();
    var shortcuts = [shortcut];

    shortcutManager.setDynamicShortcuts(Arrays.asList(shortcuts));
})


application.start({ moduleName: 'main-page'});
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
