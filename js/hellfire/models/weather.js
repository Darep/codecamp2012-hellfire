define(['jquery', 'backbone', 'hellfire/service/weather', 'hellfire/utils/calculator'],
function($, Backbone, WeatherService, Calculator){

    var Model = Backbone.Model.extend({

        defaults: {
            city: 'Helsinki',
            //calculationYear: 2012
        },

        initialize: function () {

        },

        weather: function () {
            var city = this.get('city');
            return WeatherService.getWeather(city);
        },

        cityLabel: function () {
            var city = this.get('city');
            return WeatherService.getCityByKey(city).name;
        },

        temperature: function () {
            var city = this.get('city');
            var calculationYear = this.get('calculationYear');
            var temperature = WeatherService.getTemperature(city);

            return Calculator.calculate(temperature, calculationYear) + " °C";
        }
    });

    return new Model();
});
