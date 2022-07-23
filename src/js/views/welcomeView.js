import View from './View';

class welcomeView extends View {
  _data;

  _generateMarkup() {
    return `
        <div class="main__title">
            <h2>Welcome to the Quiz App</h2>
        </div>
    
        <div class="main__text main__text--centered">
            <p>
                Please select a category and a difficulty level.
            </p>
        </div>
    
        <div class="settings__container">
    
            <div class="category__container">
                <select class="select select--category" name="category" id="category-select">
                    <option value="any">Any Category</option>  
                </select>
            </div>
    
            <div class="difficulty__container">
                <select class="select select--difficulty" name="difficulty" id="difficulty-select">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
    
        </div>
    
        <div class="main__submit">
            <button class="btn__submit">Start the Quiz</button>
        </div>
    
        `;
  }
}
