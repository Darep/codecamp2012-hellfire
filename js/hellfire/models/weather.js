define(['jquery', 'backbone'], function($, Backbone) {
	var WeatherModel = Backbone.Model.extend({

		data: {
			    Helsinki: {
			    	"city": "Helsinki",
			    	"temperature": 3,
			    	"windSpeed": 1.3,
			    	"weather": "cloudy"
			    },
                Tampere: {
                	"city": "Tampere",
                	"temperature": 2.5,
                	"windSpeed": 1.1,
                	"weather": "sunny"
                },
	            Rovaniemi: {
	            	"city": "Rovaniemi",
	            	"temperature": -0.7,
	            	"windSpeed": 2.4,
	            	"weather": "rainy"
	            },
	            Oulu: {
	            	"city": "Oulu",
	            	"temperature": -0.1,
	            	"windSpeed": 2.2,
	            	"weather": "rainy"
	            },
	            Jyvaskyla: {
	            	"city": "Jyväskylä",
	            	"temperature": 2.9,
	            	"windSpeed": 2.1,
	            	"weather": "cloudy"
	            },
	            Turku: {
	            	"city": "Turku",
	            	"temperature":  4.9,
	            	"windSpeed": 1.6,
	            	"weather": "cloudy"
	            }
	    },

    	initialize: function() {
    	},

    	getTemperature: function(key) {
    		return this.data[key].temperature;
    	},

    	getWeather: function(key) {
    		return this.data[key].weather;
    	},

    	getCities: function() {
    		var cities = [];
    		for(var key in this.data) {
    			cities.push({id: key, name: this.data[key].city});
    		}
    		return cities;
    	}
    });
    
    return new WeatherModel();
});
