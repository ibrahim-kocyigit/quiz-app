export default class View {
  _data;
  _parentElement = document.querySelector('.main__container');
  _errorMessage = 'Please try again later.';

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="main__title">
            <h2>Something Went Wrong!</h2>
        </div>
    
        <div class="main__text main__text--centered">
            <p>
                ${message}
            </p>

        <div class="reload">
            <a href="." class="reload">Reload</a>
        </div>

    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner(message = 'Loading...') {
    const markup = `
    <div class="loader"></div>
    <p class="loading">${message}</p>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
