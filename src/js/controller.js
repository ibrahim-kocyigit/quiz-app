import '../styles/main.css';
import '../img/all.js';
import * as model from './model';
import View from './views/View';
import welcomeView from './views/welcomeView';
import questionView from './views/questionView';

const controlStartQuiz = async function (data) {
  questionView.renderSpinner('Getting the questions...');
  await model.getQuestions(data);
  controlNewQuestion();
};

const controlFinishQuiz = function () {
  console.log('End');
};

const controlNewQuestion = function () {
  questionView.render(
    model.getCurrentQuestion(),
    model.state.currentScore,
    model.state.lastQuestionNo
  );
  questionView.addHandlerClickedAnswer(controlClickedAnswer);
  questionView.addHandlerSubmittedAnswer(controlSubmittedAnswer);
};

const controlIfQuizEnded = function () {
  if (model.state.lastQuestionNo > 9) {
    controlFinishQuiz();
  } else {
    controlNewQuestion();
  }
};

const controlSubmittedAnswer = function () {
  if (!model.state.currentQuestion.givenAnswer) return;

  const givenAnswer = model.state.currentQuestion.givenAnswer;
  const correctAnswer = model.state.currentQuestion.correctAnswer;

  givenAnswer === correctAnswer
    ? model.updateScoreAndQuestionNo(true)
    : model.updateScoreAndQuestionNo(false);

  controlIfQuizEnded();
};

const controlClickedAnswer = function (answer) {
  model.updateAnswer(answer);
};

const init = async function () {
  welcomeView.renderSpinner();
  const categories = await model.getCategories();
  welcomeView.render(categories);
  welcomeView.addHandlerSendPreferences(controlStartQuiz);
};

init();
