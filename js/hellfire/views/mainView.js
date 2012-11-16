define(
    [
        'jquery',
        'backbone',
        'hellfire/views/CreditsView',
        'hellfire/utils/calculator'
    ],
    function($, Backbone, CreditsView, Calculator){
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
                console.log(Calculator);
                console.log(Calculator.calculate(1, 3012));
                // TODO: render view
            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
