class V1::GreetingsController < ApplicationController
  def random
    random_greeting = Greeting.order(Arel.sql('RANDOM()')).first
    render json: random_greeting, only: [:text]
  end
end
