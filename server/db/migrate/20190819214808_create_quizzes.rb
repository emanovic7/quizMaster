class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :category
      t.string :difficulty

      t.timestamps
    end
  end
end
