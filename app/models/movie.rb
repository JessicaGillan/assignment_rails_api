class Movie < ApplicationRecord
  has_many :reviews, dependent: :destroy
  validates :title, presence: true
  before_create :save_date

  private

  def save_date
    self.release_date = Date.today
  end
end
