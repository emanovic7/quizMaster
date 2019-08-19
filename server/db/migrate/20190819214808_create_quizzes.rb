class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :category
      t.string :difficulty
      t.string :type
      t.integer :user_id

      t.timestamps
    end
  end
end
