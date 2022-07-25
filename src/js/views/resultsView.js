import View from './View';

class ResultsView extends View {
  _data;

  addHandlerRestart(handler) {
    this._parentElement
      .querySelector('.btn__restart')
      .addEventListener('click', handler);
  }

  _generateMarkup() {
    const score = this._data.score;
    const failedQuestions = this._data.failedQuestions;
    const category = this._data.category;
    const difficulty = this._data.difficulty;

    if (score === 10) {
      return `
      <div class="main__title">
          <h2>Quiz Over!</h2>
          <h4>Your Score: ${score}</h4>
      </div>

      <div class="main__text">
          <p class="results__congrats">Congratulations!</p>                    
      </div>

      <div class="main__submit">
          <form id="settings-form">
              <button class="btn__restart">Go Again</button>
          </form>
      </div>
      `;
    } else {
      let failedQuestionsMarkup = ``;

      failedQuestions.forEach(fq => {
        const markup = `
        <div class="main__text">
          <p class="results__question">${fq.question}</p>
          <p class="results__answer--bold">Your Answer: <span class="results__answer--red">${fq.givenAnswer}</span></p>
          <p class="results__answer--bold">Correct Answer: <span class="results__answer">${fq.correctAnswer}</span></p>
        </div>`;
        failedQuestionsMarkup += markup;
      });
      return `
      <div class="main__title">
        <h2>Quiz Over!</h2>
        <h4>Your Score: ${score}</h4>
      </div>
      <div class="main__text">
        <p>Here is your learning opportunity:</p>        
      </div>

    ${failedQuestionsMarkup}

    <div class="main__submit">
        <form id="settings-form">
            <button class="btn__restart">Go Again</button>
        </form>
    </div>
    `;
    }
  }
}

export default new ResultsView();
