class MoviesController < ApplicationController
  def index
    @movies = Movie.all

    respond_to do |format|
      format.json { render json: @movies }
      format.html
    end
  end
end
