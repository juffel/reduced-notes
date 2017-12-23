Rails.application.routes.draw do
  get '/notes', to: 'home#index'

  namespace :api do
    namespace :v1 do
      resources :notes
    end
  end

  root to: 'home#index'
end
