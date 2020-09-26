var teamArr = JSON.parse(teamMembers);


// for loop for Bonus 1
// Output of Pictures with Text below
for (var i = 0; i < teamArr.length; i++) {

	document.getElementById("teamID").innerHTML += 
		`<div class="teamImage" id="hoverImg${i}" value="${i}"> <img src='${teamArr[i].image}'>` + 
		"<p id='teamP]'>" + teamArr[i].name + "</p>" +
		"<p id='teamP'>" + teamArr[i].email + "</p>" 
		+ `</div>`;
};





// Function for Bonus 2 - Not Finished
// function hoverMe() {

// 	if((document.getElementById("hoverImg0").value) == 0) {
// 		document.getElementById("result1").innerHTML = "Hobbies: " + teamArr[0].hobby;
// 	} 
// 	else if((document.getElementById("hoverImg1").value) == 1) {
// 		document.getElementById("result1").innerHTML = "Hobbies: " + teamArr[1].hobby;
// 	}
// }

// document.getElementById("hoverImg1").addEventListener("mouseover", hoverMe, false);
// document.getElementById("hoverImg2").addEventListener("mouseover", hoverMe, false);