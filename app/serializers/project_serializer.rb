class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :task, :completed
end
