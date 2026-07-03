'use strict';

// Today, We Will Be Learning About Closures,
// And This Feature, My Friends, Is A Mystical Feature,
// That Many JavaScript Developers Fail To Understand,
// Many People Say The Hardest Concept To Understand In JavaScript,
// Is Closures, But With The Right Explanation, It Wouldnt Be That Hard,
// Especially If You Understood The Other Past Topics We Went Over,
// Or If You Use The Web, AI, Youtube And Other Places To Help You,
// Not Only Me, So, Lettuce Begin🥬!

// This Function Will Create The Closure,
const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passenger(s)`);
  }
}
// The First Thing You Should Know About Closures,
// Is That Its Not A Feature That We Explicitly Use, So We Dont Create Them Manually,
// It Simply Happens Automatically, In Certain Situations,
// We Just Need To Recognize Those Situations,
const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
// Check The Console, And Search The Web Accordingly, See You In The Next Subrepo!