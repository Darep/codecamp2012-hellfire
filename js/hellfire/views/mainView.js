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
                this.cityDropdownView = new CityDropdownView();
                this.cityDropdownView.model.on("change", this.handleCityChange, this);

                this.weatherView = new WeatherView();
            },

            handleCityChange: function(model) {
                var id = model.get("id");
                this.weatherView.model.set({ city: id });
            },

            render: function() {
                // render cityDropDownView, weatherView and sliderView
                this.cityDropdownView.render();
                this.weatherView.render();

                // render slider
                var self = this;
                $('#slider').slider({
                    orientation: 'horizontal',
                    value: DEFAULT_YEAR,
                    max: 4012,
                    min: 2012,
                    step: 100,
                    slide: function (event, ui) {
                        self.weatherView.model.set({ calculationYear: parseInt(ui.value, 10) });
                    },
                    stop: function (event, ui) {
                        //self.model.set({year: ui.value});
                    }
                });
                this.weatherView.model.set({ calculationYear: parseInt(DEFAULT_YEAR, 10) });

            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
