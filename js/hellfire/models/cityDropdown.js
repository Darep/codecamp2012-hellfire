define(['jquery', 'backbone'], function($, Backbone){

    var Model = Backbone.Model.extend({

        defaults: {
            id: "Turku",
            name: "Turku"
        },

        initialize: function () {
            
        }
    });

    return new Model();
});
