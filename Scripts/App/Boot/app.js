define("app", ["jquery", "knockout", "underscore", "text!/Scripts/App/Boot/menu.js"], function ($, ko, _, menu) {
    var root = (typeof window === "object" && window) || this;
    root.ko = ko;
    root._ = _;
	root.app = { 
		baseUrl: requirejs.s.contexts._.config.baseUrl,
		theme: 'orange'
	}
	
	// Components
    ko.components.register('greeter', { require: 'Scripts/App/Components/greeter/greeting' });

	// Mocks

    var data = menu; //$.parseJSON(getRemote());
	  
    var source =
    {
          datatype: "json",
          datafields: [
              { name: 'id' },
              { name: 'parentid' },
              { name: 'text' },
              { name: 'subMenuWidth' }
          ],
          localdata: data
    };

    function getRemote() {
          return $.ajax({
              dataType:'json',
              type: 'GET',
              url: 'Scripts/Menu',
              async: false
          }).responseText;
    }

    function start() {
	      // create data adapter.
	      var dataAdapter = new $.jqx.dataAdapter(source);
	      // perform Data Binding.
	      dataAdapter.dataBind();
	      // get the menu items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
	      // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'text' field. The last parameter 
	      // specifies the mapping between the 'text' and 'label' fields.  
	      var records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label'}]);
	      // Create a jqxMenu
	      $("#jqxMenu").jqxMenu({ source: records, height: '30px', theme: app.theme });
	      $("#jqxMenu").css('visibility', 'visible');
	      $("#jqxMenu").on('itemclick', function (event) {
			if (event.args.id) {
					window.location.hash = event.args.id;
			} else {
					window.location.hash = '#/Home/';
			}
	      });
    }
	    
    root.app.start = start;
    return root.app;
});