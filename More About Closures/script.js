'use strict';

// Today, We Will Be Learning About More About Closures,
// Specifically More Example For CLosures, We'll Be Creating Two More Situations,
// Where Closures Will Appear, So That You Can Start Identifying Closures,
// In Your Own Code In The Future, So, Lettuce Begin🥬!

// Example 1:
let f;

const g = function () {
  const a = 24;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 48

// Re-assigning f Function
h();
f(); // 1554

console.dir(f);

// Example 2:
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We Are Now Boarding All ${n} Passengers`);
    console.log(`There Are 3 Groups, Each With ${perGroup} Passengers`);
  }, wait * 1000);

  console.log(`Will Start Boarding In ${wait} Seconds`);
};

const perGroup = 1000; // This Variable Is Not Related To The perGroup Variable Inside The boardPassengers Function, Because The perGroup Variable Inside The boardPassengers Function Is A Closure, And It Has Access To Its Own Scope, So It Will Not Be Affected By The perGroup Variable Outside Of The Function,
boardPassengers(180, 3);
// For Reference,
// setTimeout(function () {
//   console.log('This Will Run After 2 Seconds');
// }, 2000);

// These Examples Will Help You Understand Closures, But Wont Completely,
// As I've Not Specified Anything That Much, So You'll Have To Search The Web,
// Ask AIs, And What Not, To Get A Better Understanding Of Closures,
// So Now, Keep On Analyzing, Researching, Practicing And Learning,
// And Happy Coding🩵😄💻💙!