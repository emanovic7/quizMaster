require 'rest-client'
require 'pry'

ActiveRecord::Base.connection.tables.each do |t|
 ActiveRecord::Base.connection.reset_pk_sequence!(t)
end



##FETCH
response = RestClient.get("https://opentdb.com/api.php?amount=50&difficulty=easy&type=multiple")
response_hash = JSON.parse(response)
#binding.pry

#QUIZES
all_quizes = [];
response_hash["results"].each do |data|
 all_quizes << Quiz.create(category: data["category"], difficulty: data["difficulty"], score: 0)
end

all_quizes.each do |quiz|
  response_hash["results"].each do |data|
   question = Question.create(
   quiz_id: quiz.id,
   query: data["question"],
   correct_answer: data["correct_answer"],
   incorrect_answer_a: data["incorrect_answers"][0],
   incorrect_answer_b: data["incorrect_answers"][1],
   incorrect_answer_c: data["incorrect_answers"][2]
   )

   Answer.create(question_id: question.id, content: data["correct_answer"], correct: true)
   Answer.create(question_id: question.id, content: data["incorrect_answers"][0], correct: false)
   Answer.create(question_id: question.id, content: data["incorrect_answers"][1], correct: false)
   Answer.create(question_id: question.id, content: data["incorrect_answers"][2], correct: false)
  end
end



puts "Done Seeding :)"




#####
