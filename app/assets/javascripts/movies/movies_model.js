var MOVIES = MOVIES || {};

MOVIES.model = (function() {
  var _movies;

  var init = function() {

  }

  var all = function all(){
    return $.get({
        url:'/movies.json'
      }).done( function(r) {
        _movies = r;
      });
  };

  var getMovies = function getMovies() {
    return _movies;
  }

  return {
    init: init,
    all: all,
    getMovies: getMovies
  }
})();
