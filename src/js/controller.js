import '../styles/main.css';
import '../img/all.js';
import * as model from './model';
import View from './views/View';
import welcomeView from './views/welcomeView';

const controlStartQuiz = function (data) {
  console.log(data);
};

const init = async function () {
  welcomeView.renderSpinner();
  const categories = await model.getCategories();
  welcomeView.render(categories);
  welcomeView.addHandlerSendPreferences(controlStartQuiz);
};

init();
