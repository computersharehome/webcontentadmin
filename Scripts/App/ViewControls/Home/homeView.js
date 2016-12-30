define(["jquery", "knockout", "text!/Scripts/App/ViewControls/Home/home.html"], function ($, ko, inTemplate) {
    function homeViewModel(params) {
        return window.app.viewModels;
    }

    function homeTemplate(xml) {
        //xmlDoc = $.parseXML(xml);
        //$xml = $(xmlDoc);
        //var body = $xml.find("body").html();
        //return body;
        return xml;
    }

	function render() {
		ko.components.unregister('page-view');
		ko.components.register('page-view', 
			{
				viewModel: homeViewModel,
				template: homeTemplate(inTemplate)
			}
		);
	}
	
	return {
        render:render
	}
});