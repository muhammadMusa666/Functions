'use strict';
// Hopefully You At Least Tried The Challenge, Here Is The Answer,
// Including The Bonus Answer, See You In The Next Subrepo,
const poll = {
  question: 'What Is Your Favorite Programming Language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

 // This Generates [0, 0, 0, 0]. More In The Next Section,
 answers: new Array(4).fill(0),
 registerNewAnswer() {
  // Get Answer
  const answer = Number(
    prompt(
      `${this.question}\n${this.options.join('\n')}
      \n(Write Option Number)`
    )
   );
   console.log(answer);

   // Register Answer:
   typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
  //  console.log(this.answers);
  this.displayResults();
  this.displayResults('string');
 },
 displayResults(type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    // Poll Results Are 13, 2, 4, 1,
    console.log(`Poll results are ${this.answers.join(', ')}`);
  }
 },
};
// poll.registerNewAnswer();

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

// Bonus Answer:
poll.displayResults.call({answers: [5, 2, 4]}, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string');
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]});