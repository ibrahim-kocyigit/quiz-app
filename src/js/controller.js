import '../styles/main.css';
import '../img/all.js';
import * as model from './model';
import View from './views/View';
import welcomeView from './views/welcomeView';

const controlStartQuiz = async function (data) {
  await model.getQuestions(data);
  model.getQuestion(model.state.currentQuestion - 1);
};

const init = async function () {
  welcomeView.renderSpinner();
  const categories = await model.getCategories();
  welcomeView.render(categories);
  welcomeView.addHandlerSendPreferences(controlStartQuiz);
};

init();
