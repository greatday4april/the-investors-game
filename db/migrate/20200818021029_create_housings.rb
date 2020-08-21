class CreateHousings < ActiveRecord::Migration[6.0]
  def change
    create_table :housings do |t|
      t.string :region
      t.date :date
      t.integer :price
      t.string :home_type
    end
  end
end
