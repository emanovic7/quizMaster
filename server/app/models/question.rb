class Question < ApplicationRecord
  belongs_to :quiz
  has_many :answers

  def all_answers
    @question.answers.each do |answer|
      puts answer
    end
  end

end
