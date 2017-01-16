# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
N = 10

puts "Cleaning database"

if Rails.env == 'development'
  Rake::Task['db:migrate:reset'].invoke
end

puts "Creating Movies"

N.times do
  Movie.create(title: Faker::Book.title, release_date: Faker::Date.backward(300))
end

puts "Adding reviews"

Movie.all.each do |movie|
  N.times do
    movie.reviews.create(review_text: Faker::Lorem.paragraph , title: Faker::Book.title, reviewer_name: Faker::Name.name, review_date: Faker::Date.backward(300) )
  end
end
