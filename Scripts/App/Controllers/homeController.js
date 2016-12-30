define(['homeView', 'app', 'breeze', 'dataservice', 'koGrid'], function(myView, app, breeze) {
    
    function start(actionName){

		if (!actionName) {
			myView.render();
		} else {
			myView.render();			
		}
		
        var manager = app.dataservice.manager;

        var query = new breeze.EntityQuery()
            .from("GetCompanyConfigs");
            
        manager.executeQuery(query).then(function(data){
            app.viewModels = data;
            var myObservableArray = ko.observableArray(data.results);    // Initially an empty array
            //myObservableArray.push({ "text": 'Some value'}); 
            app.viewModels.myObservableArray = myObservableArray; 
            //apply the binding when done
            ko.applyBindings({}, $('#app')[0]);
        }).fail(function(e) {
            alert(e);  
        });
    }
    
    return {
        start:start
    };
});