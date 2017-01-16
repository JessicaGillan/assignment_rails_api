$(document).ready(function(){
  if ($('body').data('controller-id') === 'movies#index')
    MOVIES.controller.init(MOVIES.model, MOVIES.view);
});
