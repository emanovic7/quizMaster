class QuestionsController < ApplicationController

  def index
    questions = Question.all
    render json: questions, include: [:answers]
  end


  def show
    question = Question.find(params[:id])
    render json: question, include: [:answers]
  end
end
