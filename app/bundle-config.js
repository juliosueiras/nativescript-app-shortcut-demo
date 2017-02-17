if (global.TNS_WEBPACK) {
    //registers tns-core-modules UI framework modules
    require("bundle-entry-points");

    global.registerModule("main-page", function () { return require("./main-page"); });
}
