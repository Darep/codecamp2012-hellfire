define(
    [
        'jquery',
        'backbone',
        'hellfire/models/weather'
    ],
    function($, Backbone, WeatherModel){

        var View = Backbone.View.extend({
            el: '#cities',

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
                	var option = $("<option>").attr({"name": val.id}).text(val.name);
                	select.append(option);
                });
                console.log(select.html());
            }
        });

        return new View();
    }
);
