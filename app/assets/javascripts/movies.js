var MovieModule = (function($) {

  var init = function() {
    console.log('initing');
    _$table = $('#movies-table');
    _addMovies(_getMovies());
  }

  var _addMovies = function(movies) {

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

  var _getMovies = function() {
    $.get({url:'/movies.json'}).always(function(r){console.log(r)})
  }

  var _$table;

  return {
    init: init
  }
})($);

$(document).ready(function(){
  console.log("hey")
  MovieModule.init();
});