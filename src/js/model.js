import { CATEGORY_API, QUESTIONS_API } from './config';
import { getJSON } from './helpers';

export const state = {
  questions: [],
  currentQuestion: {
    category: '',
    difficulty: '',
    question: '',
    correctAnswer: '',
    incorrectAnswers: [],
  },
  currentScore: 0,
  currentQuestion: 1,
};

export const getCategories = async function () {
  try {
    const data = await getJSON(CATEGORY_API);
    return data.trivia_categories;
  } catch (error) {
    throw error;
  }
};

export const getQuestion = function (questionNo) {
  const question = state.questions[questionNo];
  console.log(question);
  //TODO reformat and save the current question to the state
};

export const getQuestions = async function (settings) {
  try {
    let { category, difficulty } = settings;
    category = category === 'any' ? '' : `&category=${+category}`;
    difficulty = difficulty === 'any' ? '' : `&difficulty=${difficulty}`;
    const data = await getJSON(`${QUESTIONS_API}`);
    state.questions = data.results;
    console.log(state.questions);
  } catch (error) {
    throw error;
  }
};
