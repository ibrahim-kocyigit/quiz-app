import '../styles/main.css';
import '../img/all.js';
import * as model from './model';
import View from './views/View';
import welcomeView from './views/welcomeView';
import questionView from './views/questionView';

const controlStartQuiz = async function (data) {
  questionView.renderSpinner('Getting the questions...');
  await model.getQuestions(data);
  const currentScore = model.state.currentScore;
  const lastQuestionNo = model.state.lastQuestionNo;
  const currentQuestion = model.getCurrentQuestion();
  questionView.render(currentQuestion, currentScore, lastQuestionNo);
};

const init = async function () {
  welcomeView.renderSpinner();
  const categories = await model.getCategories();
  welcomeView.render(categories);
  welcomeView.addHandlerSendPreferences(controlStartQuiz);
};

init();
