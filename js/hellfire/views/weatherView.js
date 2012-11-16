define(['jquery', 'backbone', 'hellfire/models/weather'], function ($, Backbone, WeatherModel) {

    var View = Backbone.View.extend({
        el: '#weather',

        initialize: function () {
            this.model = WeatherModel;
            this.model.on('change', this.render, this);
        },

        render: function () {
            var temperature = this.model.get("temperature");
            var city = this.model.get("cityLabel");
            var weather = this.model.get("weather");

            $(this.el).find(".city").text(city);
            $(this.el).find(".temperature").text(temperature);
        }
    });
    return new View();
});
