class CreateHousings < ActiveRecord::Migration[6.0]
  def change
    create_table :housings do |t|
      t.string :region
      t.string :date
      t.integer :price
      t.string :home_type
      t.timestamps
    end
  end
end
