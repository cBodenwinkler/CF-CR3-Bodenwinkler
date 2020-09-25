// Creation of Function
function calculateInsurance() {

	// Assigning Input-Value to Variables
	var inpName = document.getElementById("nameInput").value;
	var inpAge = Number(document.getElementById("ageInput").value);
	var inpCountry = document.getElementById("countrySelect").value;
	var inpHp = Number(document.getElementById("hpInput").value);

	// Calculation of Insurance Cost - comparison based on Country
	var insurance =	0;

	// Outer Comparison to check if Input was sufficient
	if (inpName == "" || inpAge == 0 || inpHp == 0){
		// Output when Input was NOT sufficient
		document.getElementById("result").innerHTML = "No Input given";
	} else {
		// inner Comparison for Calculation
		if (inpCountry == "austria") {
		insurance = inpHp * 100 / inpAge + 50;
		} else if(inpCountry == "greece") {
		insurance = inpHp * 150 / (inpAge + 3) + 50;
		} else if(inpCountry == "hungary") {
		insurance = inpHp * 120 / inpAge + 100;
		}

		//Output when Input was sufficient
		document.getElementById("result").innerHTML = inpName + ", your insurance costs " + insurance.toFixed(2) + " €";
	}
}

// Event Listener - Set for click on Calulate Button
document.getElementById("submit").addEventListener("click", calculateInsurance, false);