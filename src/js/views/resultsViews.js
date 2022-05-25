import View from './view';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your query. Please try again ;)`;

  _generateMarkup() {
    return this._data.map(rec => previewView.render(rec, false)).join(' ');
  }
}

export default new ResultsView();
