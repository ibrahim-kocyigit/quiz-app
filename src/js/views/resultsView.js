import View from './View';

class ResultsView extends View {
  _data;

  _generateMarkup() {
    const score = this._data.score;
    const failedQuestions = this._data.failedQuestions;
    const category = this._data.category;
    const difficulty = this._data.difficulty;

    return `
        <div class="main__title">
            <h2>Quiz Over!</h2>
            <h4>Your Score: ${score}</h4>
        </div>
    
    
        <div class="main__submit">
            <form id="settings-form">
                <button class="btn__submit">Start the Quiz</button>
            </form>
        </div>
    `;
  }
}

export default new ResultsView();
