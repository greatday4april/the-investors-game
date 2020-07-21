class CreateTicks < ActiveRecord::Migration[6.0]
  def change
    create_table :ticks do |t|
      t.string :symbol
      t.float :low
      t.float :high
      t.float :open
      t.float :close
      t.integer :volume
      t.datetime :tick_time
    end
  end
end
