var require = {
    baseUrl: "/",
    waitSeconds: 5,
    paths: {
        "bootstrap": "Scripts/Lib/bootstrap/bootstrap",
        "bootstrap-editable": "Scripts/Lib/bootstrap-editable/bootstrap-editable",
        "breeze": "Scripts/Lib/breeze/breeze.debug",
        "jquery": "Scripts/Lib/jquery/jquery-1.10.2",
        "jqx-all": "Scripts/Lib/jqwidgets/jqx-all",
        "knockout": "Scripts/Lib/knockout/knockout-3.2.0",
        "knockout-projections": "Scripts/Lib/knockout/knockout-projections.min",
        "knockout-x-editable": "Scripts/Lib/knockout-x-editable/knockout.x-editable",
        "knockout-validation": "Scripts/Lib/knockout-validation/knockout.validation",
        "koGrid": "Scripts/Lib/koGrid/koGrid-2.1.1",
		"mockjax": "Scripts/Lib/mockjax/jquery.mockjax",
		"modernizr": "Scripts/Lib/modernizr/modernizr-2.6.2",
        "Q": "Scripts/Lib/q/q.min",
        "savequeuing": "Scripts/Lib/breeze/breeze.savequeuing",
        "text": "Scripts/Lib/require/text",
		"toastr": "Scripts/Lib/toastr/toastr.min",
        "underscore": "Scripts/Lib/underscore/underscore-min",
        // Boot
        "main": "Scripts/App/Boot/main",
        "router": "Scripts/App/Boot/router",
		"app": "Scripts/App/Boot/app",
		// Helpers
		"logger": "Scripts/App/Helpers/logger",
		// Models
        "user": "Scripts/App/Models/user",
		// Services
		"dataservice": "Scripts/App/Services/dataservice",
        // Components - register inside "main.js"
		// Controllers
		"homeController": "Scripts/App/Controllers/homeController",
		"portfolioController": "Scripts/App/Controllers/portfolioController",
		"settingsController": "Scripts/App/Controllers/settingsController",
        // ViewControls
        "homeView": "Scripts/App/ViewControls/Home/homeView",
        "portfolioView": "Scripts/App/ViewControls/Portfolio/portfolioView",
        "settingsView": "Scripts/App/ViewControls/Settings/settingsView",
        // Utils
		"ko.bindings": "Scripts/Lib/utils/ko.bindings",
		"date": "Scripts/Lib/utils/date",
		"UUID": "Scripts/Lib/utils/UUID"
		},
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        "breeze": {
            deps: ["Q"]
        },
        "jqx-all": {
            export: "$",
            deps: ["jquery", "knockout", "app"]
        }
    }
}
