var MOVIES = MOVIES || {};

MOVIES.controller = (function() {
  var _model, _view;

  var init = function init(model, view) {
    _model = model;
    _view = view;
    _view.init(formHandler);
    _addMovies();
  }

  var formHandler = function formHandler(data) {
    var promise = _model.addMovie(data);
    promise.done( function() {
      _view.addMovies(_model.getMovies());
    })
  }

  var _addMovies = function _addMovies() {
    var promise = _model.all()
    promise.done( function(r) {
      _view.addMovies(_model.getMovies());
    })
  }

  return {
    init: init,
  }
})();
