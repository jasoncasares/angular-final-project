Rails.application.routes.draw do
  resources :project

  root to: "application#angular_home"
end
