define(["knockout", "text!/Scripts/App/ViewControls/Home/home.html"], function (ko, inTemplate) {
    function homeViewModel(params) {
        var self = this;
        self.title = ko.observable('Home');
        self.guests = ko.observableArray([]);
        self.guests.push({ guestName: "Linda Yue" });
        return self;
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