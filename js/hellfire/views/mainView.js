define(
    [
        'jquery',
        'backbone',
        'hellfire/views/CreditsView'
    ],
    function($, Backbone, CreditsView){

        var View = Backbone.View.extend({
            el: 'body',

            events: {
                'click #test': 'test'
            },

            initialize: function() {
                console.log('fuuu');
                // TODO: initialize model

                // TODO: bind events

            },

            render: function() {
                console.log('fuuu');
                // TODO: render view
            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
