Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :ticks, only: [:index]
    resources :housings, only: [:index]
  end
  get '(*slug)', to: 'static_pages#root', constraints: lambda {|req| req.path !~ /\.(png|jpg|js|css)$/ }
end
