import View from './View';

class QuestionView extends View {
  _currentScore;
  _lastQuestionNo;

  render(data, currentScore, lastQuestionNo) {
    this._data = data;
    this._currentScore = currentScore;
    this._lastQuestionNo = lastQuestionNo;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkup() {
    console.log(this._data);
    return `
        <div class="main__title">
            <h2>Question: ${this._lastQuestionNo + 1}/10</h2>
            <h4>Score: ${this._currentScore}/${this._lastQuestionNo}</h4>
        </div>

        <div class="main__text">
            <p>
                ${this._data.question}
            </p>
        </div>
        <div class="question__answers">
            <button class="btn__answer">${this._data.allAnswers[0]}</button>
            <button class="btn__answer">${this._data.allAnswers[1]}</button>
            <button class="btn__answer">${this._data.allAnswers[2]}</button>
            <button class="btn__answer">${this._data.allAnswers[3]}</button>
        </div>

        <div class="question__submit">
            <button class="btn__submit">Final Answer</button>
        </div>
        <div class="main__infobox">
        <p><span class="bold">Category:</span> ${
          this._data.category
        }<span class="line"></span> | <span class="bold"> Difficulty: </span>${
      this._data.difficulty[0].toUpperCase() +
      this._data.difficulty.slice(1).toLowerCase()
    } 
        </p>
    </div>

        `;
  }
}

export default new QuestionView();
