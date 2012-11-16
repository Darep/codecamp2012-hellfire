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
        var DEFAULT_DATE = '16.11.';

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
                var yearElem = $('<p class="year"></p>');
                var self = this;
                $('#slider').slider({
                    orientation: 'horizontal',
                    value: DEFAULT_YEAR,
                    max: 4012,
                    min: 2012,
                    step: 50,
                    slide: function (event, ui) {
                        self.weatherView.model.set({ calculationYear: parseInt(ui.value, 10) });
                        var left = $(ui.handle).css('left');
                        yearElem.text(DEFAULT_DATE + ui.value);
                        yearElem.css('left', left);
                    },
                    stop: function (event, ui) {
                        var left = $(ui.handle).css('left');
                        yearElem.text(DEFAULT_DATE + ui.value);
                        yearElem.css('left', left);
                    }
                });

                this.weatherView.model.set({ calculationYear: parseInt(DEFAULT_YEAR, 10) });
                yearElem.text(DEFAULT_DATE + DEFAULT_YEAR);

                $('#slider').append(yearElem);
            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
