class QuizSerializer

  def initialize(quiz_object)
    @quiz = quiz_object
  end

  def to_serialized_json
    @quiz.to_json(
    :include => :questions
    )
  end

  def quiz_questions
    @quiz.questions.each do |question|
      puts question.query
    end
  end

end
