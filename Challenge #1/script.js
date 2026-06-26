'use strict';


// Today, We Will Be Doing A Challenge, A Farely Difficult Challenge1 At This Moment,
// So Lettuce Begin🥬!

// Here Are The Main Things You Need To Do,

// A Poll Has A Question, An Array Of Options From Which People Can Choose,
// And An Array With The Number Of Replies For Each Option,
// This Data Is Stored In The Starter Object Below,
// Your Tasks:
// 1. Create A Method Called 'registerNewAnswer' On The 'poll' Object,
// The Method Does 2 Things:
// 1.1: Display A Prompt Window For The User To Input The Number Of The Selected Option,
// The Prompt Should Look Like This:
//     What Is Your Favorite Programming Language?
//     0: JavaScript,
//     1: Python,
//     2: Rust,
//     3: C++
//     (Write Option Number),

// 1.2: Based On The Input Number, Update The Answers Array,
// For Example, If The Option Is 3, Increase The Value AT POSITION 3 Of The Array By 1,
// Make Sure To Check If The Input Is A Number And If The Number Makes Sense,
// (e.g Answer 52 Wouldnt Make Sense Right?),
// 2. Call This Method Whenever The User Clicks The "Answer Poll" Button,
// 3. Create A Method Called 'displayResults' Which Displays The Poll Results,
// The Method Takes A String As An Input(Called 'type'), Which Can Be Either,
// 'String' Or 'Array', If type Us 'Array', Simply Delay The Results Array As It Is,
// Using console.log(), This Should Be The Default Option, If type Is 'String',
// Display A String Like "Poll Results Are 13, 2, 4, 1",
// 4. Run The 'displayResults' Method At The End Of Each 'registerNewAnswer' Method Call,

// HINT: Use Many Of The Tools You Learned About In This And The Last Section😉,

// BONUS: Use The 'displayResults' Method To Display The 2 Arrays In The Test Data,
// Use Both The 'Array' And The 'String' Option, Do NOT Put The Array In The Poll Object,
// So What Should The this Keyword Look Like In This Situation?

// BONUS TEST DATA 1: [5, 2, 4],
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1],

// Keep In Mind, The Bonus Is Optional, And For The Main Tasks,
// You Should Do 2 Of The 4 Main Tasks, If Thats Not Possible Or You Cant Do It,
// Then At The Very Least Try, The Challenge Answer Is In answer.js, But Good Luck✌️,

const poll = {
  question: 'What Is Your Favorite Programming Language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

 // This Generates [0, 0, 0, 0]. More In The Next Section,
 answers: new Array(4).fill(0),
};
