Rails.application.routes.draw do
  get 'reviews/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'movies#index'

  resources :movies, only: [:index, :create, :show]
  resources :reviews, only: [:index, :create, :show, :destroy]
end
