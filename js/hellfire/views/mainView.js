define(
    [
        'jquery',
        'backbone',
        'hellfire/views/CreditsView',
        'hellfire/utils/calculator',
        'hellfire/models/weather'
    ],
    function($, Backbone, CreditsView, Calculator, WeatherModel){

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
                console.log("Oulu", WeatherModel.data["Oulu"]);
                console.log(WeatherModel.getTemperature("Oulu"))
            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
