define(['jquery', 'backbone'], function($, Backbone){

    var Model = Backbone.Model.extend({

        defaults: {
            weather: 'sunny',
            city: 'Tampere',
            temperature: "23 'C"
        },

        initialize: function () {

        }
    });

    return new Model();
});
