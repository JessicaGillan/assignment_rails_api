var MOVIES = MOVIES || {};

MOVIES.view = (function($) {
  var _$tableBody;

  var init = function(formHandler) {
    _$tableBody = $('#movie-table-body');
    _attachFormHandler(formHandler);
  }

  var addMovies = function(movies) {
    _$tableBody.html("");

    movies.forEach(function(movie) {
        _addMovie(movie);
    });
  };

  var _addMovie = function(movie) {
    var $row = $('<tr>')
      .attr('data-movie-id', movie.id);
    var $title = $('<td>').text(movie.title);
    var $release_date = $('<td>').text(movie.release_date);
    $row.append($title);
    $row.append($release_date);
    _$tableBody.append($row);
  }

  var _attachFormHandler = function(formHandler) {
    var $movieForm = $('#new-movie-form')

    $movieForm.submit( function(e) {
      e.preventDefault();

      formHandler($(e.target).serialize());
    })
  };

  return {
    init: init,
    addMovies: addMovies
  }
})($);
