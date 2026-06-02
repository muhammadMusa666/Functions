'use strict';

// Welcome To The First Subrepo Of This Section,
// Today, We Will Be Learning About Default Parameters In JavaScript,
// Specifically In Functions, This Is One Of The Easier Ones To Understand,
// So, Lettuce Begin🥬!

// We're Gonna Contiue With The Airline Theme That We Started,
// At The End Of The Last Section, Starting By The Knowledge We Already Have,
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199 /* * numPassengers*/) {
// numPassengers = numPassengers || 1;
// price = price || 199;
// Above Is The Old Ugly Boilerplate Code We Used To Write To Set Default Values,
// Before ES6, But Now, We Can Do A Simpler Version In The Function Parameters Above,
// And We Can Put Almost Any Expression In There,
// Even Other Values Of Other Parameters Set Before It,
// So Above In The Function Parameters, We Can Lets Say Set The Price,
// According To The Number Of Passengers, Also It Should Be BEFORE It, Not After It,

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

// And If We Dont Want To Specify The Number Of Passengers,
// But We Want To Specify The Price, We Can Just Set The Number Of Passengers,
// To Undefined, This Is A Cool Trick To Skip A Default Parameter,
// And Use The Default Value Instead, As Shown Below:
createBooking('LH123', undefined, 1000);
// Thats All For This Subrepo, Keep Up The Pace, And Happy Coding😄💻🩵!