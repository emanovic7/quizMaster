class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :query
      t.string :correct_answer
      t.string :incorrect_answer_a
      t.string :incorrect_answer_b
      t.string :incorrect_answer_c

      t.integer :quiz_id

      t.timestamps
    end
  end
end
