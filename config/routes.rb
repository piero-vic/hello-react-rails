Rails.application.routes.draw do
  namespace :v1, default: { format: 'json' } do
    get 'random', to: 'greetings#random'
  end

  get '*page', to: 'static#index', constrains: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
