define(
  	[],
    function(){

    	var startYear = 2012;
    	var climateChangeRate = 0.03;

    	var calculator = {
    		calculate: function (intialTemperature,endYear) {
    			var years = endYear - startYear;
    			return intialTemperature + years * climateChangeRate;
    		}
    	};
    	return calculator;

    }
);
