define(
    [
        'jquery',
        'backbone',
        'hellfire/views/CreditsView',
        'hellfire/views/CityDropdownView',
        'hellfire/views/weatherView',
        'hellfire/utils/calculator'
    ],
    function($, Backbone, CreditsView, CityDropdownView, WeatherView, Calculator){

        var View = Backbone.View.extend({
            el: 'body',

            events: {
                'click #test': 'test'
            },

            initialize: function() {
                CityDropdownView.model.on("change", this.handleCityChange);
            },

            handleCityChange: function() {
                var id = CityDropdownView.model.get("id");
                WeatherView.model.set({city: id});
            },

            render: function() {
                console.log('fuuu');

                // render cityDropDownView, weatherView and sliderView
                WeatherView.render();
                //CityDropdownView.render();
                //SliderView.render();

                
                CityDropdownView.render();
            },

            test: function () {
                CreditsView.render();
            }
        });

        return new View();
    }
);
