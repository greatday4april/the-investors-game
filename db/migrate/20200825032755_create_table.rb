class CreateTable < ActiveRecord::Migration[6.0]
  def change
    create_table :tables do |t|
      t.string :symbol
      t.text :news
      t.date :date
      t.string :source
    end
  end
end
