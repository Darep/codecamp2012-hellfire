define(
    [
        'jquery',
        'backbone',
        'hellfire/views/creditsView',
        'hellfire/views/cityDropdownView',
        'hellfire/views/weatherView',
        'hellfire/views/sliderView',
        'hellfire/utils/calculator'
    ],
    function($, Backbone, CreditsView, CityDropdownView, WeatherView, SliderView, Calculator){

        var View = Backbone.View.extend({
            el: 'body',

            events: {
                'click #credits': 'test'
            },

            initialize: function() {
                CityDropdownView.model.on("change", this.handleCityChange);
                SliderView.model.on("change:year", this.handleSliderChange);
            },

            handleCityChange: function(model) {
                var id = model.get("id");
                WeatherView.model.set({city: id});
            },

            handleSliderChange: function (model) {
                var year = model.get("year");
                WeatherView.model.set({ calculationYear: parseInt(year, 10) });
            },

            render: function() {
                // render cityDropDownView, weatherView and sliderView
                console.log('render main');
                WeatherView.render();
                CityDropdownView.render();
                SliderView.render();
            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
