define(["knockout", "text!/Scripts/App/ViewControls/Settings/settings.html"], function (ko, inTemplate) {
    function settingsViewModel(params) {
        var self = this;
        self.title = ko.observable('Settings');
        self.guests = ko.observableArray([]);
        self.guests.push({ guestName: "Peak Xu" });
        return self;
    }

    function settingsTemplate(xml) {
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
				viewModel: settingsViewModel,
				template: settingsTemplate(inTemplate)
			}
		);
	}
	
	return {
        render:render
	}
});