var MOVIES = MOVIES || {};

MOVIES.controller = (function(model, view) {
  var init = function init() {
    _addMovies();
  }

  var _addMovies = function _addMovies() {
    model.all().then( function(r) {
      console.log('this', this)
      console.log('r', r)
      view.addMovies(r);
    })
  }

  return {
    init: init,
  }
})(MOVIES.model, MOVIES.view);

$(document).ready(function(){
  console.log("doc ready")
  MOVIES.controller.init();
});
