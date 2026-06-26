'use strict';

// Today, We Will Be Learning About Immediately Invoked Function Expressions (IIFE),
// So, Lettuce Begin🥬!

// So Sometimes In JavaScript, We Need A Function That Is Only Executed Once,
// And Never Again, So Basically A Function That Disappears Right After Its Called Once,
// Or A Disposable Function😅, And This Might Not Appear To Make Much Sense Right Now,
// But We Actually Need This Technique Later, For Example,
// With Something Called, async/await, So Now, How Can We Do That?
// Well We Can Simply Create A Function Then Execute It Once,
const runOnce = function() {
  console.log('This Will Never Ever Run Again!')
};
runOnce();
// However, We Can Actually Run This Function Again,
// At Some Other Point In The Code If We Wanted To, There's Nothing Stopping Us,
// From Later Doing runOnce Again, So We Dont Do This, 
// We Want A Function To Execute Immediately, And Not Having To Saving It Somewhere,
// IIFE:
(function() {
  console.log('This Will Never Run Again.') // <-- Wrapping The Function Tricks JavaScript, Now We're Able To Remove The Error,
})();
// We Dont Need To Call It And It Runs Anyway, 
// Because The Rest Has Become A Function Expression,
// And The Extra Parenthesis At The End Is Where Its Immediately Called,
// This Pattern Is Known As Immediately Invoked Function Expressions(IIFE),
(() => console.log('This Will Also Never Run Again'))();
// By The Way, IIFE Is Not Something JavaScript Made,
// Its A Pattern Made By Developers To Create Private Scopes,
// And Execute Code Within Those Scopes, Here's A Piece Of Code To Help,
{
  const isPrivate = 57;
  var notPrivate = 64; // <-- The Reason Why var Still Works While Being In a Block, Is The Reason Why IIFE Is Not Used That Much Anymore,
} // Because If All We Want Is To Create A New Scope For Data Privacy, We Could Just Create A Block Like That, There's No Need To Make A Function To Create A Scope, Unless We Use var, But We Know We Should Do That,
console.log(isPrivate);
console.log(notPrivate);
// So If You Need To Execute The Function Just Once, Then Using The IIFE Is Great,