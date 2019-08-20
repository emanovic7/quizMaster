# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'rest-client'
require 'pry'

ActiveRecord::Base.connection.tables.each do |t|
 ActiveRecord::Base.connection.reset_pk_sequence!(t)
end


response = RestClient.get("https://opentdb.com/api.php?amount=50")
response_hash = JSON.parse(response)
#binding.pry

response_hash["results"].each do |data|
 Quiz.create(category: data["category"], difficulty: data["difficulty"])
end


response_hash["results"].each do |data|
 question = Question.create(quiz_id: rand(1..50), query: data["question"], correct_answer: data["correct_answer"])
 Answer.create(question_id: question.id, content: data["correct_answer"], correct: true)
  data["incorrect_answers"].each do |answer|
    Answer.create(question_id: question.id, content: answer, correct: false)
  end
end

puts "Done Seeding :)"
