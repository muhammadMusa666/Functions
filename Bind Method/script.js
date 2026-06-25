'use strict';


// Today, We Will Be Learning More About The Bind Method,
// This Will Be A Very Long Subrepo, So I Hope You're Ready,
// Lettuce Begin🥬!

// Just Like The Call Method, Bind Also Allows Us To Manually Set The this keyword,
// But The Difference Is That Bind Does Not Immediately Call The Function,
// Instead It Returns A New Function Where The this keyword Is Bound,
// So Its Set To Whatever Value We Pass Into Bind,
// We'll Continue With Our Airline Example From The Previous Subrepo,
// But Unlike Before, I'll Do The Previous Subrepo's Code A Bit Differently,
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(`${name} Booked A Seat On ${this.airline} (${this.iataCode}${flightNum})`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  },
};

lufthansa.book(239, 'John Doe');
lufthansa.book(635, 'Jane Doe');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT Work:
// book(57, 'Sarah Williams');

// Call Method:
book.call(eurowings, 57, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'John Smith');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss AirLines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'John Smith');
console.log(swiss);

// Apply Method:
const flightData = [583, 'Jane Smith'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(swiss);


// Todays Lesson Will Start Here,
// Bind Method:
// book.call(eurowings, 57, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(57, 'Steven Williams');
// We Can Take This A Bit Further As well,
// For Example We Can Use Bind To Create A Function,
// Or One Specific Airline And A Specific Flight Number,
const bookEW57 = book.bind(eurowings, 57);
bookEW57('Leeroy Mateo');
bookEW57('Abigail Brooks');
// By The Way, What We Did Here, So Basically Specifying Parts Of The Argument Beforehand,
// Is Actually A Common Pattern Called "Partial Application",
// Essentially A Part Of The Arguments Of The Original Function Is Already Applied,
// Which Means It's Already Set, Exactly What The bookEW57 Function Is,

// With Event Listeners:
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);

  this.planes++
  console.log(this.planes)
};
// lufthansa.buyPlane();


document.querySelector('.buy').addEventListener
('click', lufthansa.buyPlane);
// Now Just One More Final Example Here,
// Which Will Again Be About "Partial Application",
// Because This Is Another Big Use Case For The Bind Method,
// And In This Case Of Partial Application, Many Times We Are Not Interested,
// In The this Keyword, But We Still Use Bind For This,
// Since Partial Applications Mean We Can Preset Parameters,
// We'll Start With A General Function,
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.11);
// addVAT = value = value + value * 0.11;
console.log(addVAT(100));
console.log(addVAT(57));
// By The Way, The Order Of The Arguments Is Important,
// If You Wanted To Preset The Rate, Then It Has To Be The First Argument,
// In The Function, Or It Will Not Really Work,
// But Now I Have A Challenge For You, Which Is To Essentially,
// Rewrite The Whole Example Above, By Using The Technique Of One Function,
// Returning Another Function, Which We Did Do In The Subrepo Before The Previous One,
// You Can Go And Take A Look At It From There If You Want,
// Now This Is A Really Hard Challenge, So It's Completely Okay If You Couldn't Do It,
// Start This Challenge In Another JS File, Because I Will Be Showing The Answer Here,
const addTaxRate = function(rate) {
  return function(value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.11);
console.log(addVAT2(100));
console.log(addVAT2(57));