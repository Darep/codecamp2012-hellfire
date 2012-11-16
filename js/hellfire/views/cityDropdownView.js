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
                this.model = CityDropdownModel;
            },

            render: function() {
                var select = $(this.el).children('select');
                $.each(WeatherService.getCities(),
                    function (index, val) {
                        var option = $("<option>").attr({"value": val.id}).text(val.name);
                        select.append(option);
                    });
            },

            citiesChange: function(data) {
                var selected = $(this.el).find("select").val();
                var cityObj = WeatherService.getCityByKey(selected);

                this.model.set(cityObj);
            }

        });

        return new View();
    }
);
