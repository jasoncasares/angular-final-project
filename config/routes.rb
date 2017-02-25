Rails.application.routes.draw do
  resources :projects

  root to: "application#angular_home"
end
