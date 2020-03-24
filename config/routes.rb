Rails.application.routes.draw do
  namespace :api do
    resources :cats, only: [:index, :show, :update]
    get 'my_cats', to: 'cats#my_cats'
  end
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
