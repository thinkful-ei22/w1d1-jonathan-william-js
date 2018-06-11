'use strict';

const jediName = function (firstName, lastName) {
  console.log(lastName.slice(0,3) + firstName.slice(0,2));
};

jediName('Beyonce', 'Knowles');

const beyond = function(num){
  if(!isFinite(num)){
    console.log('And beyond');

  }
  else if(isFinite(num) && num > 0){
    console.log('To infinity');
  }
  else if(isFinite(num) && num < 0){
    console.log('To negative infinity');
  }
  else{
    console.log('Staying home');
  }
};
beyond(0);
beyond(-15);

const decode = function (word) {
  if (word[0] === 'a') {
    console.log(word[1]);
  }
  else if (word[0] === 'b' ) {
    console.log(word[2]);
  }
  else if (word[0] === 'c') {
    console.log(word[3]);
  }
  else if (word[0] === 'd') {
    console.log(word[4]);
  }
  else {
	  console.log(' ');
  }
};

decode('craft');




const daysInMonth = function(month, leapYear){
  switch(month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      result = `${month} has 31 days.`;
      break;
  }
  switch(month){
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      result = `${month} has 30 days.`;
      break;

  }
  switch('February'){
    case leapYear == -1:
      result = `February has 29 days.`;
      break;
    }
switch('February'){
  case leapYear === 1:
  result = `February has 28 days.`;
}

throw ("Must provide a valid month");
  
}
daysInMonth('March', -1);