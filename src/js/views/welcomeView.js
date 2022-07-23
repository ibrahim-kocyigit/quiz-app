import View from './View';

class welcomeView extends View {
  _data;
  _categoriesMarkup;

  render(data) {
    this._data = data;
    this._categoriesMarkup = this._generateCategoriesMarkup();
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerSendPreferences(handler) {
    this._parentElement
      .querySelector('.main__submit')
      .addEventListener('submit', function (e) {
        e.preventDefault();
        const dataArr = [
          ...new FormData(document.getElementById('settings-form')),
        ];
        const data = Object.fromEntries(dataArr);
        handler(data);
      });
  }

  _generateCategoriesMarkup() {
    this._categoriesMarkup = '<option value="any">All Categories</option>';
    this._data.forEach(category => {
      this._categoriesMarkup += `<option value="${category.id}">${category.name}</option>`;
    });
    return this._categoriesMarkup;
  }

  _generateMarkup() {
    return `
        <div class="main__title">
            <h2>Welcome!</h2>
        </div>
    
        <div class="main__text main__text--centered">
            <p>
                Please select a category and a difficulty level.
            </p>
        </div>
    
        <div class="settings__container">
    
            <div class="category__container">
                <select form="settings-form" class="select select--category" name="category" id="category-select">
                    ${this._categoriesMarkup} 
                </select>
            </div>
    
            <div class="difficulty__container">
                <select form="settings-form" class="select select--difficulty" name="difficulty" id="difficulty-select">
                    <option value="any">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
    
        </div>
    
        <div class="main__submit">
            <form id="settings-form">
                <button class="btn__submit">Start the Quiz</button>
            </form>
        </div>
    
        `;
  }
}

export default new welcomeView();
