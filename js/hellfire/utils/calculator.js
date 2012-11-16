define(
  	[],
    function(){

    	var startYear = new Date().getFullYear();
    	var climateChangeRate = 0.03;

    	var calculator = {
    		calculate: function (initialTemperature,endYear) {
    			var years = endYear - startYear;
    			return initialTemperature + years * climateChangeRate;
    		}
    	};
    	return calculator;

    }
);
