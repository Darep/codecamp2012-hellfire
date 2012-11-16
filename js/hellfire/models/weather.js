define(['jquery', 'backbone'], function($, Backbone) {
	var WeatherModel = Backbone.Model.extend({
		data: {
                Tampere:   {"city": "Tampere", "temperature": 2.5, "windSpeed": 1.1 },
	            Rovaniemi: {"city": "Rovaniemi", "temperature": -0.7, "windSpeed": 2.4 },
	            Oulu:      {"city": "Oulu", "temperature": -0.1, "windSpeed": 2.2 },
	            Jyväskylä: {"city": "Jyväskylä", "temperature": 2.9, "windSpeed": 2.1 },
	            Turku:     {"city": "Turku", "temperature":  4.9, "windSpeed": 1.6 }
	          },
    	initialize: function() {
    	  
    	},

    	getTemperature: function(city) {
    		return this.data[city].temperature;
    	}
    });
    
    return new WeatherModel();
});
