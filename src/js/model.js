// https://opentdb.com/api_config.php
import { CATEGORY_API } from './config';
import { getJSON } from './helpers';

export const state = {
  question: {
    text: '',
    rightAnswer: '',
    wrongAnswer: '',
  },
  currentScore: 0,
  currentQuestion: 0,
  category: '',
  difficulty: '',
  categoryList: [],
};

export const getCategories = async function () {
  const data = await getJSON(CATEGORY_API);
  return data.trivia_categories;
};

getCategories();
