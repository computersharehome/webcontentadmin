define("dataservice", ["logger", "app", "breeze", "savequeuing"], function (logger, app, breeze) {

/* datacontext: data access and model management layer */
    app.dataservice = (function (breeze) {

    configureBreeze();
    var manager = new breeze.EntityManager("Breeze");
    manager.enableSaveQueuing(true);
    configureManagerToSaveModifiedItemImmediately();

    var dataservice = {
        manager: manager
    };

    return dataservice;

    function configureBreeze() {
        // configure to use camelCase
        breeze.NamingConvention.camelCase.setAsDefault();

        // configure to resist CSRF attack
        var antiForgeryToken = $("#antiForgeryToken").val();
        if (antiForgeryToken) {
            // get the current default Breeze AJAX adapter & add header
            var ajaxAdapter = breeze.config.getAdapterInstance("ajax");
            ajaxAdapter.defaultSettings = {
                headers: {
                    'RequestVerificationToken': antiForgeryToken
                },
            };
        }
    }

    function configureManagerToSaveModifiedItemImmediately() {
        manager.entityChanged.subscribe(entityStateChanged);

        function entityStateChanged(args) {
            if (args.entityAction === breeze.EntityAction.EntityStateChange) {
                var entity = args.entity;
                if (entity.entityAspect.entityState.isModified()) {
                    saveEntity(entity);
                }
            }
        }
    }

  })(breeze);

});