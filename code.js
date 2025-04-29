let scorevalue = document.getElementById("scorevalue");
let quation = document.getElementById("q");
const btn = document.getElementById("btn");
const timeDisplay = document.getElementById("time");
let correctAnswer;
let start = false;
let Ts = document.getElementById("true");
let tf = document.getElementById("false");
let countdownInterval;
const continer = document.getElementById("game");
let gameOver = document.createElement("div");

console.log(gameOver);

// Attach box click handlers only once
const setupClickListeners = () => {
  for (let i = 1; i <= 4; i++) {
    document.getElementById("box" + i).addEventListener("click", function () {
      if (parseInt(this.textContent) === correctAnswer) {
        console.log("Correct!");
        let value = parseInt(scorevalue.textContent);
        scorevalue.textContent = value + 1;

        Ts.classList.add("active-t");

        setTimeout(() => {
          Ts.classList.remove("active-t");
        }, 1000);

        generate(); // Next question
      } else {
        tf.classList.add("active-f");

        setTimeout(() => {
          tf.classList.remove("active-f");
        }, 1000);
      }
    });
  }
};

// Generate question and answers
const generate = () => {
  let x = 1 + Math.round(9 * Math.random());
  let y = 1 + Math.round(9 * Math.random());
  correctAnswer = x * y;

  quation.textContent = `${x} * ${y}`;

  let correctPosition = 1 + Math.round(3 * Math.random());
  document.getElementById("box" + correctPosition).textContent = correctAnswer;

  let answers = [correctAnswer];

  for (let i = 1; i <= 4; i++) {
    if (i !== correctPosition) {
      let wrongAnswer;
      do {
        let num1 = 1 + Math.round(9 * Math.random());
        let num2 = 1 + Math.round(9 * Math.random());
        wrongAnswer = num1 * num2;
      } while (answers.includes(wrongAnswer));

      answers.push(wrongAnswer);
      document.getElementById("box" + i).textContent = wrongAnswer;
    }
  }

  console.log(`x = ${x}, y = ${y}, correct = ${correctAnswer}`);
};

// Start countdown timer
const startTime = () => {
  let timeRemaining = 60;
  timeDisplay.textContent = timeRemaining;

  countdownInterval = setInterval(() => {
    timeRemaining--;
    timeDisplay.textContent = timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(countdownInterval);
      gameOver.innerHTML = `<p>   Game over </p> `;
      continer.appendChild(gameOver);
      gameOver.classList.add("gameover");
      continer.style.display = "block";
      gameOver.addEventListener("click", function () {
        location.reload();
      });
      console.log(gameOver);
    }
  }, 1000);
};

// Handle start/restart button
btn.addEventListener("click", function () {
  if (!start) {
    start = true;
    btn.textContent = "Restart";
    generate();
    startTime();
  } else {
    location.reload();
  }
});

// Init
setupClickListeners();
