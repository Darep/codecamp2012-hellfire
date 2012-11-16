define(
    [
        'jquery',
        'backbone',
        'hellfire/views/CreditsView',
        'hellfire/views/CityDropdownView',
        'hellfire/views/weatherView',
        'hellfire/utils/calculator',
        'hellfire/models/weather'
    ],
    function($, Backbone, CreditsView, CityDropdownView, WeatherView, Calculator, WeatherModel){

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
                console.log(WeatherModel);
                console.log("Oulu", WeatherModel.data["Oulu"]);
                console.log(WeatherModel.getTemperature("Oulu"));

                // render cityDropDownView, weatherView and sliderView
                WeatherView.render();
                //CityDropdownView.render();
                //SliderView.render();

                console.log(WeatherModel.getCities());
                CityDropdownView.render();
            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
