define(
    [
        'jquery',
        'backbone',
        'hellfire/views/CreditsView',
        'hellfire/utils/calculator',
        'hellfire/models/weather',
        'hellfire/views/weatherView'
    ],
    function($, Backbone, CreditsView, Calculator, WeatherModel, WeatherView){

        var View = Backbone.View.extend({
            el: 'body',

            events: {
                'click #test': 'test'
            },

            initialize: function() {
                //this.cityDropDownView = new CityDropdownView();
            },

            render: function() {
                console.log('fuuu');
                console.log(Calculator);
                console.log(Calculator.calculate(1, 3012));
                console.log("Oulu", WeatherModel.data["Oulu"]);
                console.log(WeatherModel.getTemperature("Oulu"));


                // render cityDropDownView, weatherView and sliderView
                WeatherView.render();
                //CityDropdownView.render();
                //SliderView.render();
            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
