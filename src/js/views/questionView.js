import View from './View';

class QuestionView extends View {
  _currentScore;
  _lastQuestionNo;
  _lastQuestionResult;
  _answerButtons = document.querySelectorAll('.btn___answer');

  render(data, currentScore, lastQuestionNo, lastQuestionResult) {
    this._data = data;
    this._currentScore = currentScore;
    this._lastQuestionNo = lastQuestionNo;
    this._lastQuestionResult = lastQuestionResult;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderWrongAnswerModal() {}

  addHandlerClickedAnswer(handler) {
    const buttons = document.querySelectorAll('.btn__answer');
    this._parentElement
      .querySelector('.question__answers')
      .addEventListener('click', function (e) {
        if (e.target.tagName !== 'BUTTON') return;
        const btn = e.target;
        if (!btn) return;
        buttons.forEach(button =>
          button.classList.remove('btn__answer--clicked')
        );
        btn.classList.toggle('btn__answer--clicked');
        handler(btn.dataset.answer);
      });
  }

  addHandlerSubmittedAnswer(handler) {
    this._parentElement
      .querySelector('.btn__submit')
      .addEventListener('click', handler);
  }

  _generateMarkup() {
    return `
        <div class="main__title">
            <h2>Question: ${this._lastQuestionNo + 1}/10</h2>
            <h4>Current Score: ${this._currentScore}</h4>
        </div>

        <div class="main__text">
            <p>
                ${this._data.question}
            </p>
        </div>
        <div class="question__answers">
            <button class="btn__answer" data-answer="${
              this._data.allAnswers[0]
            }">${this._data.allAnswers[0]}</button>
                      <button class="btn__answer" data-answer="${
                        this._data.allAnswers[1]
                      }">${this._data.allAnswers[1]}</button>
                      <button class="btn__answer" data-answer="${
                        this._data.allAnswers[2]
                      }">${this._data.allAnswers[2]}</button>
                      <button class="btn__answer" data-answer="${
                        this._data.allAnswers[3]
                      }">${this._data.allAnswers[3]}</button>
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
