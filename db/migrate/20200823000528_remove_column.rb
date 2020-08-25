class RemoveColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :housings, :updated_at
  end
end
