define(
    [
        'jquery',
        'backbone',
        'hellfire/views/mainView'
    ],
    function($, Backbone, mainView){
        var Router = Backbone.Router.extend({
            initialize: function() {
                this.mainView = mainView;
                Backbone.history.start();
            },
            routes: {
                '': 'home'
            },
            'home': function() {
                this.mainView.render();
            }
        });

        return Router;
    }
);
