Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :stocks, only: [:show]
  end
  get '(*slug)', to: 'static_pages#root', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
