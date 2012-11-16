define(
    [
        'jquery',
        'jquery_ui',
        'backbone',
        'hellfire/views/creditsView',
        'hellfire/views/cityDropdownView',
        'hellfire/views/weatherView',
        'hellfire/utils/calculator'
    ],
    function($, jquery_ui, Backbone, CreditsView, CityDropdownView, WeatherView, Calculator){

        var DEFAULT_YEAR = 2012;

        var View = Backbone.View.extend({
            el: 'body',

            events: {
                'click #credits': 'test'
            },

            initialize: function() {
                CityDropdownView.model.on("change", this.handleCityChange);
            },

            handleCityChange: function(model) {
                var id = model.get("id");
                WeatherView.model.set({ city: id });
            },

            render: function() {
                // render cityDropDownView, weatherView and sliderView
                console.log('render main');
                WeatherView.render();
                CityDropdownView.render();

                var self = this;
                $('#slider').slider({
                    orientation: 'horizontal',
                    value: DEFAULT_YEAR,
                    max: 4012,
                    min: 2012,
                    step: 100,
                    slide: function (event, ui) {
                        WeatherView.model.set({ calculationYear: parseInt(ui.value, 10) });
                    },
                    stop: function (event, ui) {
                        //self.model.set({year: ui.value});
                    }
                });
                WeatherView.model.set({ calculationYear: parseInt(DEFAULT_YEAR, 10) });

            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
