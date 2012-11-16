define(
    [
        'jquery',
        'backbone',
        'hellfire/service/weather',
        'hellfire/models/CityDropdown',
        'hellfire/utils/calculator'],
    function($, Backbone, WeatherService, CityDropdownModel, Calculator){
        var View = Backbone.View.extend({
            el: '#cities',

            events: {
                'change select': 'citiesChange'
            },

            initialize: function() {
                console.log('cities init');
                this.model = CityDropdownModel;
                this.model.on('change', this.render, this);
            },

            render: function() {
                console.log('cities rend');
                var select = $(this.el).children('select');
                $.each(WeatherService.getCities(),
	                function (index, val) {
	                	var option = $("<option>").attr({"value": val.id}).text(val.name);
	                	select.append(option);
	                });
            },

            citiesChange: function(data) {
                var selected = $(this.el).find("select").val();

                var initialTemperature = WeatherService.getTemperature(selected);
                console.log(selected, initialTemperature, Calculator.calculate(initialTemperature, 3012));
            }

        });

        return new View();
    }
);
