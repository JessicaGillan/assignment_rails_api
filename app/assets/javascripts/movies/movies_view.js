var MOVIES = MOVIES || {};

MOVIES.view = (function($) {
  var _$table;

  var init = function() {
    _$table = $('#movies-table');
  }

  var addMovies = function(movies) {
    movies.forEach( function(movie) {
        _addMovie(movie) })
    })
  }

  var _addMovie = function(movie) {
    var $row = $('<tr>')
      .attr('data-movie-id', movie.id);
    var $title = $('<td>').text(movie.title);
    var $release_date = $('<td>').text(movie.release_date);
    $row.append($title);
    $row.append($release_date);
    _$table.append($row);
  }

  return {
    init: init,
    addMovies: addMovies
  }
})($);
