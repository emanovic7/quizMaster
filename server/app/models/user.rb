class User < ApplicationRecord
  #has_many :quizzes
  has_many :questions, through: :quizzes
end
