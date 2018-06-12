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


//drill 3: cracking the code

const message = 'craft block argon meter bells brown croon droop';

// ['craft', 'block', 'argon', 'meter', 'bells', 'brown', 'croon', 'droop'];
//loops i=7

function decode(message){
  let result = ''; //fo
  let stringarr = message.split(' ');
  for (let i=0; i < stringarr.length; i++) {
    let firstLetter = stringarr[i][0];

    switch(firstLetter) {
    case 'a':
      result += stringarr[1];
      break;
    case firstLetter === 'b':
      result += stringarr[2];
      break;
    case firstLetter === 'c':
      result += stringarr[3];
      break;
    case firstLetter === 'd':
      result += stringarr[4];
      break;
    default:
      result += '';
      break;
    }
  }
  return result;
}

// const myArray = message.split(' ');

console.log(decode(message));

<<<<<<< HEAD
// console.log(message.split(' '));

function numberOfDays(month, leapYear) {

  let result;
  /*if (month !== 
    throw 'Must provide a valid month.'
  )*/
  switch(month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    result = 'This month has 31 days';
    break;
  case 'February':
    result = 'This month has 28 days';
  default:
    result = 'this month has 30 days';
  }
  return result;
}
