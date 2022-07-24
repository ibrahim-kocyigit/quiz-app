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
    allAnswers: [],
  },
  currentScore: 0,
  lastQuestionNo: 0,
};

export const getCategories = async function () {
  try {
    const data = await getJSON(CATEGORY_API);
    return data.trivia_categories;
  } catch (error) {
    throw error;
  }
};

// Creates the next question as an object, saves it to the state, and also returns it
export const getCurrentQuestion = function () {
  const question = state.questions[state.lastQuestionNo];
  state.currentQuestion = {
    category: question.category,
    difficulty: question.difficulty,
    question: question.question,
    correctAnswer: question.correct_answer,
    incorrectAnswers: question.incorrect_answers,
    allAnswers: [...question.incorrect_answers, question.correct_answer].sort(
      () => Math.random() - 0.5
    ),
  };
  return state.currentQuestion;
};

export const getQuestions = async function (settings) {
  try {
    let { category, difficulty } = settings;
    category = category === 'any' ? '' : `&category=${category}`;
    difficulty = difficulty === 'any' ? '' : `&difficulty=${difficulty}`;
    const data = await getJSON(`${QUESTIONS_API}${category}${difficulty}`);
    state.questions = data.results;
  } catch (error) {
    throw error;
  }
};
