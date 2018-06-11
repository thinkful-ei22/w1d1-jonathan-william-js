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
