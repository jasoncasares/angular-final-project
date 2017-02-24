class ProjectsController < ApplicationController

  before_action :find_project, only: [:show, :update, :destroy]
  def index
    render json: Project.all
  end

  def create
    project = Project.new(project_params)
    if project.save
      render json: project
    else
      render json: { error: "This project was not created!", status: 500 },
      status: 500
    end
  end

  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: { error: "This project was not created!", status: 500 },
      status: 500
    end
  end

  def show
    if @project
      render json: @project
    else
      render json: { error: "Could not find this project!", status: 404 },
      status: 404
    end
  end

  def destroy
    @project.destroy
    render json: { message: "Project was destroyed", status: 200 }, status: 200
  end



  private

    def project_params
      params.require(:project).permit(:name, :date, :task)
    end

    def find_project
      @project = Project.find_by_id(params[:id])
    end
end
