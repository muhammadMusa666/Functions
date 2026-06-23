'use strict';


// Today, We Will Be Learning About The Call And Apply Methods,
// Basically Going Back To The this Keyword, And Learn How We Can Set The this Keyword,
// Manually, And Also Why We Would Want To Do That,
// So, Lettuce Begin🥬!

// Lets Say We're An Airline Again, This Time With Lufthansa Airlines,
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
// book: function() {}, <-- Before We Used This Syntax, And If You Prefer This, You Can Use This Syntax However You Like, But I Prefer Using The Enhanced Object Literal Syntax,
  // Also I Will Now Start Using The Way Of Writing Methods, Using The Enhanced Object Literal Syntax,
  // Now, We Want To Create A Method For Booking A Flight,
  // So, We Can Do That By Creating A Function Inside The Object,
  // And This Function Will Take In The Flight Number And The Name Of The Passenger,
  // And Then Push An Object Into The Bookings Array,
  // So, Let's Do That Now,
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'John Doe');
lufthansa.book(635, 'Jane Doe');

console.log(lufthansa);

// Now, Let's Create Another Airline Object, Called Eurowings Airlines,
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  book: lufthansa.book,
};

// Now, Let's Say We Want To Use The Same Book Method For Eurowings,
// We Can Do That By Using Call Or Apply To Set The this Keyword Manually,
// Let's Use Call First,
eurowings.book.call(eurowings, 23, 'Bob Smith');

// Or We Can Use Apply (Which Is Similar But Takes An Array Of Arguments),
eurowings.book.apply(eurowings, [23, 'Bob Smith']);

// Or We Can Use Bind To Create A New Function With The this Keyword Set,
const bookEW = lufthansa.book.bind(eurowings);
bookEW(23, 'Bob Smith');

console.log(eurowings);

// And Now Let's Do The Same With Lufthansa but Bind It To Eurowings,
const bookLH = lufthansa.book.bind(lufthansa);
bookLH(239, 'John Smith');

console.log(lufthansa);

// By The Way, The Apply Method Is Not Used That Much Nowadays In JavaScript,
// Because We Can Use The Spread Operator Instead, Which We Learnt About Before,
lufthansa.book(...[239, 'John Smith']); // <-- Same Result As The Apply Method, But More Modern And Cleaner Syntax,
// But Thats All For Todays Subrepo, Hope You Learnt Something New, Cya Later Coders😎!