'use strict';


// Today, We Will Be Learning About Functions Accepting Callback Functions,
// Which Is Something That Is A Bit Confusing And Higher-Level,
// But It Is Very Important And Very Useful To Understand,
// And First You Need To Know What Higher Order Functions Are So We Can Begin,
// Basically, A Higher Order Function Is,
// A Function That Does At Least One Of These:
// 1. Accepts Another Function As An Argument (Callback), Or
// 2. Returns A Function As Its Result,

// When People Talk About "Functions Accepting Callback Functions,",
// They're Describing One Common Type Of Higher-order Function,

// What Is A Callback?

// A Callback Is Simply A Function Passed To Another Function So It Can Be Executed Later,
// Example In JavaScript:

// function greet(name) {
//     console.log("Hello, " + name);
// }

// function processUser(callback) {
//     callback("Alice");
// }

// processUser(greet);

// Output: Hello, Alice

// Here:

// > Greet Is A Callback Function.
// > ProcessUser Accepts A Function As An Argument.
// > Therefore, ProcessUser Is A Higher-order Function.

// You Can Learn More About This By Watching Videos, Asking AI,
// Reading Documentation Especially From MDN, And So On,
// But Anyways, Lettuce Begin🥬!

// Starting With Two Generic Functions That Do String Transformations,
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order Function That Accepts A Callback Function As An Argument,
const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
    console.log(`Transformed By: ${fn.name}`);
};

// Using The Higher-order Function With Different Callback Functions,
transformer('JavaScript Is The Best!', upperFirstWord);
transformer('JavaScript Is The Best!', oneWord);

// Output:
// Original String: JavaScript Is The Best!
// Transformed String: JAVASCRIPT Is The Best!
// Transformed By: upperFirstWord,
// Original String: JavaScript Is The Best!
// Transformed String: javascriptisthebest!
// Transformed By: oneWord,

// This Example Shows How We Can Pass Different Functions To The Same Higher-order Function,
// And It Will Produce Different Results Based On The Callback Function We Provide,
// This Is A Powerful Concept That Allows For Flexible And Reusable Code,

const high5 = function () {
    console.log('👋');
};

document.body.addEventListener('click', high5);
['Alice', 'Bob', 'Charlie'].forEach(high5);

// In This Example, We Define A Simple Function High5 That Logs A Hand Emoji,
// We Then Use It As A Callback For Two Different Scenarios:
// 1. We Add An Event Listener To The Document Body That Calls High5 Whenever The Body Is Clicked,
// 2. We Use The ForEach Method On An Array Of Names To Call High5 For Each Name,
// This Demonstrates How Callback Functions Can Be Used In Various Contexts,
// Such As Event Handling And Array Iteration, Making Our Code More Modular And Reusable, Thats All For Today, Happy Coding😄💻🩵!