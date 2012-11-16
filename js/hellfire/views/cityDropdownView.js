define(
    [
        'jquery',
        'backbone',
        'hellfire/models/weather',
        'hellfire/utils/calculator'
    ],
    function($, Backbone, WeatherModel, Calculator){

        var View = Backbone.View.extend({
            el: '#cities',

            events: {
                'change select': 'citiesChange'
            },

            initialize: function() {
                console.log('cities init');
                // TODO: initialize model

                // TODO: bind events
            },

            render: function() {
                console.log('cities rend');
                var select = $(this.el).children('select');
                $.each(WeatherModel.getCities(),
	                function (index, val) {
	                	var option = $("<option>").attr({"value": val.id}).text(val.name);
	                	select.append(option);
	                });
            },

            citiesChange: function(data) {
                var selected = $(this.el).find("select").val();

                var initialTemperature = WeatherModel.getTemperature(selected);
                console.log(selected, initialTemperature, Calculator.calculate(initialTemperature, 3012));
            }

        });

        return new View();
    }
);
