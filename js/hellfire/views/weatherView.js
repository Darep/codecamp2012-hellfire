define(['jquery', 'backbone', 'hellfire/models/weather'], function ($, Backbone, WeatherModel) {

    var SUNNY_THRESHOLD = 30;


    function getImageName(weather) {
        switch (weather) {
            case 'cloudy':
                return 'Cloud';
            case 'sunny':
                return 'Sun';
            default:
            case 'rainy':
                return 'Cloud-Rain';
        }
    }


    var View = Backbone.View.extend({
        el: '#weather',

        initialize: function () {
            this.model = WeatherModel;
            this.model.on('change', this.render, this);
        },

        render: function () {

            var temperature = this.model.temperature();
            var city = this.model.cityLabel();

            var weather = this.model.weather();

            if (parseInt(temperature, 10) > SUNNY_THRESHOLD) {
                weather = 'sunny';
            }

            var imageName = getImageName(weather);

            $(this.el).find(".img").attr('src', 'img/climacons/' + imageName + '.svg');
            $(this.el).find(".city").text(city);
            $(this.el).find(".temperature").text(temperature);
        }
    });
    return View;
});
