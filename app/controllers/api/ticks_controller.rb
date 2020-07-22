class Api::TicksController < ApplicationController
  # before_action :set_api_tick, only: [:show, :update, :destroy]

  # GET /api/ticks
  # GET /api/ticks.json
  def index
    start_time = Time.zone.parse(params[:start_time])
    number = params[:period][0...-1]
    unit = params[:period][-1] # eg:string: "y"
    time_keys = { 'd' => :days, 'w' => :weeks, 'm' => :months, 'y' => :years }
    end_time = start_time.advance(time_keys[unit] => number.to_i)

    @api_ticks = Tick.where(['tick_time >= ? and tick_time <= ?', start_time, end_time]).order('tick_time')
    render json: @api_ticks
  end

  # private

  # Use callbacks to share common setup or constraints between actions.
  # def set_api_tick
  #   @api_tick = Api::Tick.find(params[:id])
  # end

  # Only allow a list of trusted parameters through.
  # def api_tick_params
  #   params.require(:api_tick).permit(:start_time, :period)
  # end
end
