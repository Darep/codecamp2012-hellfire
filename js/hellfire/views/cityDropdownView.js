define(
    [
        'jquery',
        'backbone',
        'hellfire/models/weather'
    ],
    function($, Backbone, WeatherModel){

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
                console.log(selected);
            }

        });

        return new View();
    }
);
