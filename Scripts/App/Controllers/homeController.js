define(['homeView', 'app', 'breeze', 'dataservice', 'koGrid'], function(myView, app, breeze) {
    
    function start(actionName){
		
		if (!actionName) {
			myView.render();
		} else {
			myView.render();			
		}
        //apply the binding when done
        ko.applyBindings({}, $('#app')[0]);
    }
    
    return {
        start:start
    };
});