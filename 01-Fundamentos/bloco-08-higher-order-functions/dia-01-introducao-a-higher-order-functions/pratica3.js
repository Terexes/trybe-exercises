const checkAnswers = (rightAnswers, students) => {
  let score = 0;
  rightAnswers.forEach((item, index) => {
    if (item === students[index]) {
      score += 1;
    }
    if (item !== students[index]) {
      score += 0.5;
    }
  });
  return score;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(checkAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS));

const wordsArray = ['bil', 'plante', 'kaffe', 'bog', 'ei', 'planetarium'];
