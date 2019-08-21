class QuestionsController < ApplicationController

  def index
    questions = Question.all
    render json: questions
  end


  def show
    question = Question.find(params[:id])
    render json: question
  end
end
