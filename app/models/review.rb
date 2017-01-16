class Review < ApplicationRecord
  belongs_to :movie

  before_save :save_date

  private

  def save_date
    self.review_date = Date.today
  end
end
