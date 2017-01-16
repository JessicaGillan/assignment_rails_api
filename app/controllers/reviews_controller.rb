class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      respond_to do |format|
        format.html { redirect_to reviews_path }
        format.js { render :create }
      end
    else
      respond_to do |format|
        format.html { render :index }
        format.js { render :index } # render index.html?
      end
    end
  end

  def destroy
    @review = Review.find_by_id(params[:id])
    @review.destroy

    redirect_to reviews_path
  end

  private

  def review_params
    params.require(:review).permit(:reviewer_name, :title, :review_text, :movie_id)
  end
end
