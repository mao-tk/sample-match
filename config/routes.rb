Rails.application.routes.draw do
  devise_for :users
  root 'top#index'
  resources :users, only: [:index, :show]
  resources :reactions, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
