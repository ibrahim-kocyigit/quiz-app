export default class View {
  _data;
  _parentElement = document.querySelector('.main__container');

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner(message = 'Loading...') {
    const markup = `
    <div class="spinner">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <p class="loading">${message}</p>
    </div> 
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}
