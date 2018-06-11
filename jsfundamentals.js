function yearOfBirth(age){
	
	
	if(age < 1){
  	throw new Error("Age can not be negative");
  }

  try{
  	yearOfBirth(age);
  }
  catch (e){
  	console.error(e.message);
  }
  console.log(2018 - age);
}


const whoAmI = function(name, age){
	if(typeof age !== 'number' || typeof name !== 'string'){
		console.log("Incorrect input type")
	}
	if(!name || !age){
		console.log("Arguments undefined")
	}
  let yob = yearOfBirth(age);
  console.log (`Hi my ${name} is Chris and I'm ${age} years old`);
  console.log(`I was born in ${yearOfBirth}`);

};
whoAmI(5, 18);

