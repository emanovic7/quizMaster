class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.boolean :correct
      t.string :content
      t.integer :question_id

      t.timestamps
    end
  end
end
