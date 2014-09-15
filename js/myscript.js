$(document).ready(function() {
	var weight,waist,pounds,kilograms,selectOption

	$('#calculate').click(function() {
		getValue();
		checkOption(selectOption);
		if(selectOption == "pounds") {
			bodyFatPoundsCalculation(weight,waist);
		} else if (selectOption == "kilograms") {
			bodyFatKilogramsCalculation(weight,waist);
			//alert("kilograms is not working yet");
		} else {
			alert("Please Select an Option!");
		}
	});

	$('#reset').click(function() {
		reset();
	});

	/*This function will get the value for weight,waist
	and selectOption*/
	function getValue() {
		weight = $('#weight').val();
		console.log(weight);
		waist = $('#waist').val();
		console.log(waist);
		selectOption = $('#selectOption').val();
		console.log(selectOption);
	}

	/*This function will check which value was picked*/
	function checkOption(value1) {
		if (value1 == "pounds") {
			console.log("Pounds!");
			return value1;
		} else {
			console.log("kilograms!");
			return value1;
		}
	}

	/*This function will calculate lean body weight and
	actual body fat*/
	function bodyFatPoundsCalculation(value1,value2) {
		var bodyWeight = value1;

		value1 = value1 * 1.082;
		value1 = value1 + 94.42;
		//console.log(value1);
		value2 = value2 * 4.15;
		//console.log(value2);
		var leanBodyWeight = value1 - value2;
		leanBodyWeight = Math.round(leanBodyWeight);
		var actualFat = bodyWeight - leanBodyWeight;
		//console.log("Lean Body Weight:" + leanBodyWeight);
		$('#leadBodyWeightRow span').text(leanBodyWeight);
		//console.log("Actual Fat:" + actualFat);
		$('#actualFatRow span').text(actualFat);
	}

	function bodyFatKilogramsCalculation(value1,value2) {
		var bodyWeight = value1 * 2.2;
		value1 = value1 * 2.2;

		value1 = value1 * 1.082;
		value1 = value1 + 94.42;
		value2 = value2 * 4.15;
		var leanBodyWeight = value1 - value2;
		leanBodyWeight = Math.round(leanBodyWeight);
		var actualFat = bodyWeight - leanBodyWeight;
		$('#leadBodyWeightRow span').text(leanBodyWeight);
		$('#actualFatRow span').text(actualFat);
	}

	function reset() {
		$('#leadBodyWeightRow span').text("");
		$('#actualFatRow span').text("");
	}
});