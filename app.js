let correct;
let num1, num2;
let wrongAnswer;
const generateq = () => {
  let x, y;
  x = 1 + Math.round(9 * Math.random());
  y = 1 + Math.round(9 * Math.random());
  correct = x * y;

  let pos = 1 + Math.round(Math.random() * 3);

  let answers = [correct];
  for (i = 1; i <= 4; i++) {
    if (i !== pos) {
      do {
        num1 = 1 + Math.round(9 * Math.random());
        num2 = 1 + Math.round(9 * Math.random());
        wrongAnswer = num1 * num2;
      } while (answers.includes(wrongAnswer));
      answers.push(wrongAnswer);
    }
    console.log(answers);
  }
};
generateq();
