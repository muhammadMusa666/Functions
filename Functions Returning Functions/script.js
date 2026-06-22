'use strict';


// Today, We Will Be Learning About Functions,
// Specifically, Functions Returning Functions,
// Which Seems Confusing, But Its Actually Pretty Simple And Useful To Understand,
// This Topic Is Short So This Subrepo Will Be Short Aswell,
// But Anywho, Lettuce Begin🥬!

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting}, ${name}!`);
  };
};

// Now Lets Actually Use The Greet Function,
const greeterHey = greet('Hello');
greeterHey('Jax'); // Output: Hello, Jax!
greeterHey('Pomni'); // Output: Hello, Pomni!
// We Will Also Learn About Closures Somewhere At The End Of This Section, JSYK,
// But That Out Of The Way, What Matters Here Is Our Greet Function,
// Returned A New Function Which We Stored In The greeterHey Variable,
// And So That Variable Is Now Just A Function That We Can Call As We Did Before,
// With The Parenthesis Syntax, And Of Course, We Can Also Do It All In One Go,
greet('Hi')('Jax'); // Output: Hi, Jax!
// I Really Want You All To Understand This One Line Above,
// If You Understand That, Im Sure You Understood The Rest Of The Code,
// Here's A Small Challenge, Try To Rewrite The Greet Function Using Arrow Functions,
// Only Arrow Functions, It Will Definitely Look A Bit Confusing, But Im Sure You Can Do It,
// Here's The Solution To Said Challenge, You Can Make Your Own File And Try The Challenge There,
// Challenge:
const greetArrow = greeting => name => console.log(`${greeting}, ${name}!`);
greetArrow('Hey')('Jax'); // Output: Hey, Jax!
// Thats All For This Subrepo, Hopefully You Learnt Something New,