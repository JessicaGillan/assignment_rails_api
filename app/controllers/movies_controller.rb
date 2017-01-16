class MoviesController < ApplicationController
  def index
    @movies = Movie.all

    respond_to do |format|
      format.json { render json: @movies }
      format.html
    end
  end

  def create
    @movie = Movie.new(movie_params)

    if @movie.save
      respond_to do |format|
        format.json { render json: @movie.reload }
      end
    else
      respond_to do |format|
        format.json { render @movie.errors.messages.to_json, status: 400 }
        format.html { render :index }
      end
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title)
  end
end
