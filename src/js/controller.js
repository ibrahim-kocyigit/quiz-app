import '../styles/main.css';

import * as model from './model';
import View from './views/View';
import welcomeView from './views/welcomeView';
import questionView from './views/questionView';
import resultsView from './views/resultsView';

const controlStartQuiz = async function (data) {
  questionView.renderSpinner('Getting the questions...');
  await model.getQuestions(data);
  controlNewQuestion();
};

const controlNewQuestion = function () {
  questionView.render(
    model.getCurrentQuestion(),
    model.state.currentScore,
    model.state.lastQuestionNo,
    model.state.lastQuestionResult
  );
  questionView.addHandlerClickedAnswer(controlClickedAnswer);
  questionView.addHandlerSubmittedAnswer(controlSubmittedAnswer);
};

const controlClickedAnswer = function (answer) {
  model.updateAnswer(answer);
};

const controlSubmittedAnswer = function () {
  if (!model.state.currentQuestion.givenAnswer) return;

  const givenAnswer = model.state.currentQuestion.givenAnswer;
  const correctAnswer = model.state.currentQuestion.correctAnswer;

  if (givenAnswer === correctAnswer) {
    model.updateUserPerformance(true);
  } else {
    model.updateUserPerformance(false);
  }
  controlIfQuizEnded();
};

const controlIfQuizEnded = function () {
  if (model.state.lastQuestionNo > 9) {
    controlFinishQuiz();
  } else {
    controlNewQuestion();
  }
};

const controlFinishQuiz = function () {
  const failedQuestions = model.state.failedQuestions;
  const category = model.state.category;
  const difficulty = model.state.difficulty;
  const score = model.state.currentScore;
  resultsView.render({ score, failedQuestions, category, difficulty });
  resultsView.addHandlerRestart(init);
};

const init = async function () {
  welcomeView.renderSpinner();
  const categories = await model.getCategories();
  welcomeView.render(categories);
  welcomeView.addHandlerSendPreferences(controlStartQuiz);
};

init();
