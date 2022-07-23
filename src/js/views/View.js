class View {
  _data;
  _parentElement = document.querySelector('.main__container');

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
}

export default new View();
