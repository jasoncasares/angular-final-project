class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.datetime :date
      t.string :task

      t.timestamps
    end
  end
end
