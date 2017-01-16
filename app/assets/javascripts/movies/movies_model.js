var MOVIES = MOVIES || {};

MOVIES.model = (function() {
  var _movies;

  var init = function() {

  }

  var all = function all(){
    return fetch('/movies.json').then( function(r) {
      if (r.ok) {
        _movies = r;
      }
    });
  };

  return {
    init: init,
    all: all
  }
})();
