class AddColumnToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :name, :string, null: false, default: "", limit: 100
    add_column :users, :self_introduction, :string, limit: 500
    add_column :users, :sex, :integer, null: false, default: 0
  end
end
