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

  var addMovie = function addMovie(data) {
    console.log(JSON.stringify(data));
    return $.ajax({
            url: '/movies.json',
            method: "POST",
            data: data,
            dataType: "json",
            success: function( r ){
              console.log(r.title);
              _movies.unshift(r);
            },
            complete: function( r ){
              console.log(r);
            }
          });
  }

  return {
    init: init,
    all: all,
    getMovies: getMovies,
    addMovie: addMovie
  }
})();
