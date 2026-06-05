'use strict';


// Today, We Will Be Learning How Passing Arguments Work In Functions,
// So Value Vs Reference, This Is A Very Important Distinction To Understand,
// This Is Kind Of A Review Of One Of The Subrepo's We Did,
// About Primitive Types And Reference Types, But Applied To Functions,
// Anyways, Lettuce Begin🥬!


// We'll Start With A Simple Example Here,
const flight = 'LH234';
const liger = {
  name: '',
  passport: 5837194286057318,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 5837194286057318) {
    alert('Checked In');
  } else {
    alert('Wrong Passport!');
  }
};

checkIn(flight, liger);
console.log(flight);
console.log(liger);

// Same As Doing This,
// const flightNum = flight;
// const passenger = liger;

checkIn(flightNum, passenger);
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(liger);
checkIn(flight, liger);

// So As You Can See, The Flight Number Did Not Change, But The Name Of The Passenger Did Change,
// This Is Because The Flight Number Is A Primitive Type, And When We Pass It To The Function,
// It Creates A Copy Of It, So When We Change The Value Of The Flight Number Inside The Function,
// It Does Not Affect The Original Value Outside The Function,
// On The Other Hand, The Passenger Is An Object, And When We Pass It To The Function,
// It Does Not Create A Copy Of It, Instead, It Passes A Reference To The Original Object,
// So When We Change The Name Of The Passenger Inside The Function,
// It Affects The Original Object Outside The Function,
// This Is Why We Say That Primitive Types Are Passed By Value, And Reference Types Are Passed By Reference,
// But Actually, This Is Not Entirely True, Because In JavaScript, All Function Arguments Are Passed By Value,
// Even Objects Are Passed By Value, But The Value Of An Object Is A Reference To The Object,
// So When We Pass An Object To A Function, We Are Passing A Copy Of The Reference To The Object,
// Meaning When We Change The Name Of The Passenger Inside The Function,
// We Are Changing The Object That The Reference Points To, Not The Reference Itself,
// This Is Why It Affects The Original Object Outside The Function,
// Hopefully This Makes Sense, Its Somewhat Confusing But It Works,
// And Still Its Your Choice For Which Coding Style You Want To Use,
// Whether Its Hard Coding Or Something More Dynamic,

