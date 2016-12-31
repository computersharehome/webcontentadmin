define(["knockout", "text!/Scripts/App/ViewControls/Portfolio/portfolio.html"], function (ko, inTemplate) {
    function portfolioViewModel(params) {
        var self = this;
        self.title = ko.observable('Portfolio');
        self.guests = ko.observableArray([]);
        self.guests.push({ guestName: "Jim Xu" });
        return self;
    }

    function portfolioTemplate(xml) {
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
				viewModel: portfolioViewModel,
				template: portfolioTemplate(inTemplate)
			}
		);
	}
	
	return {
        render:render
	}
});