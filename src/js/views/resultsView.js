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

    return `
        <div class="main__title">
            <h2>Quiz Over!</h2>
            <h4>Your Score: ${score}</h4>
        </div>
    
    
        <div class="main__submit">
            <form id="settings-form">
                <button class="btn__restart">Try Again</button>
            </form>
        </div>
    `;
  }
}

export default new ResultsView();
