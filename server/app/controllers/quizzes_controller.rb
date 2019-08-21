class QuizzesController < ApplicationController

  def index
    quizzes = Quiz.all
    render json: quizzes, include: [:questions]
    #render json: QuizSerializer.new(quizzes).to_serialized_json
  end


  def show
    quiz = Quiz.find(params[:id])
    render json: quiz
  end


end
