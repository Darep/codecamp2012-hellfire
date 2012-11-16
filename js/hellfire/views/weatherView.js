define(['jquery', 'backbone', 'hellfire/models/weather'], function ($, Backbone, WeatherModel) {

    var View = Backbone.View.extend({
        el: '#weather',

        initialize: function () {
            this.model = WeatherModel;
            this.model.on('change', this.render, this);
        },

        render: function () {
            var weather = this.model.weather();

            var temperature = this.model.temperature();
            var city = this.model.cityLabel();

            $(this.el).find(".city").text(city);
            $(this.el).find(".temperature").text(temperature);
        }
    });
    return new View();
});
