
function calculateInsurance() {
	// Assigning Input-Value to Variables
	var inpName = document.getElementById("nameInput").value;
	var inpAge = Number(document.getElementById("ageInput").value);
	var inpCountry = document.getElementById("countrySelect").value;
	var inpHp = Number(document.getElementById("hpInput").value);


	// Calculation of Insurance Cost - comparison based on Country
	var insurance =	0;

	if (inpCountry == "austria") {
		insurance = inpHp * 100 / inpAge + 50;
	} else if(inpCountry == "greece") {
		insurance = inpHp * 150 / (inpAge + 3) + 50;
	} else if(inpCountry == "hungary") {
		insurance = inpHp * 120 / inpAge + 100;
	}

	// OutPut
	document.getElementById("result").innerHTML = inpName + ", your insurance costs " + insurance.toFixed(2) + " €";
}

// DOM 
document.getElementById("submit").addEventListener("click", calculateInsurance, false);