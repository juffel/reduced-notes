Rails.application.routes.draw do
  get '/notes', to: 'home#index'

  root to: 'home#index'
end
