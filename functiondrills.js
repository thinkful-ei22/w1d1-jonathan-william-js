function jediName (firstName, lastName) {
  console.log(lastName.slice(0,3) + firstName.slice(0,2));
}

jediName('Beyonce', 'Knowles');

const beyond = function(num){
	if(!isFinite(num)){
		console.log("And beyond");

	}
	else if(isFinite(num) && num > 0){
		console.log("To infinity");
	}
	else if(isFinite(num) && num < 0){
		console.log("To negative infinity");
	}
	else{
	console.log("Staying home");
	}
}
beyond(0);
beyond(-15);