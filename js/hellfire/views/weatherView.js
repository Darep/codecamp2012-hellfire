define(['jquery', 'backbone', 'hellfire/models/weather'], function ($, Backbone, WeatherModel) {

    var View = Backbone.View.extend({
        el: '#weather',

        initialize: function () {
            this.model = WeatherModel;
            this.model.on('change', this.render, this);
        },

        render: function () {
            console.log('weather render');
        }
    });
    return new View();
});
