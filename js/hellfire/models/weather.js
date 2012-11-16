define(['jquery', 'backbone', 'hellfire/service/weather'],
function($, Backbone, WeatherService){

    var Model = Backbone.Model.extend({

        defaults: {
            weather: 'sunny',
            city: 'Tampere',
            cityLabel: 'Tampere',
            temperature: "23 'C"
        },

        initialize: function () {
            this.on("change:city", this.refreshData, this);
        },

        refreshData: function () {
            var city = this.get("city");
            this.set("weather", WeatherService.getWeather(city));
            this.set("temperature", WeatherService.getTemperature(city)+"' C");
            this.set("cityLabel", WeatherService.getCityByKey(city).name);
        }
    });

    return new Model();
});
