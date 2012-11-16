define(['jquery', 'backbone', 'hellfire/service/weather', 'hellfire/utils/calculator'],
function($, Backbone, WeatherService, Calculator){

    var Model = Backbone.Model.extend({

        defaults: {
            weather: 'sunny',
            city: 'Tampere',
            cityLabel: 'Tampere',
            calculationYear: 3012,
            temperature: "23 'C"
        },

        initialize: function () {
            this.on("change:city", this.refreshData, this);
            this.on("change:calculationYear", this.refreshData, this);
        },

        refreshData: function (model) {
            console.log(model);
            var city = this.get("city");
            var calcYear = this.get("calculationYear");
            console.log(calcYear);
            var temperature = WeatherService.getTemperature(city);

            this.set("weather", WeatherService.getWeather(city));
            this.set("temperature", Calculator.calculate(temperature, calcYear) + "' C");
            this.set("cityLabel", WeatherService.getCityByKey(city).name);
        }
    });

    return new Model();
});
