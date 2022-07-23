import '../styles/main.css';
import '../img/all.js';
import * as model from './model';
import View from './views/View';
import welcomeView from './views/welcomeView';

const controlGetCategories = function () {};

const controlStartQuiz = function () {
  console.log('Quiz started');
};

const init = async function () {
  welcomeView.renderSpinner();
  const categories = await model.getCategories();
  welcomeView.render(categories);
  welcomeView.addHandlerStartQuiz(controlStartQuiz);
};

init();
