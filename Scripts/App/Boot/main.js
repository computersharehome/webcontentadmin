require(['router', "app", "logger", "jqx-all", "mockjax", "bootstrap", "ko.bindings", "date"], function (router, app) {
	
    $("#document").ready(function () {
	    app.start();
	    router.startRouting();  
		app.logger.info("app started");
    });
});