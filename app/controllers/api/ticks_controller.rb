class Api::TicksController < ApplicationController
  include Api::TicksHelper
  before_action :validate_params, only: [:index]
  # GET /api/ticks
  # GET /api/ticks.json
  def index
    symbols = params[:symbols]
    unit = params[:period][-1]
    query = Tick.where(['tick_time >= ?', start_time])
                .where(['tick_time <= ?', end_time])

    query = query.where(['symbol in (?)', symbols]) unless symbols.nil?
    query = query.order('tick_time')
    granularity = case unit
                  when 'w'
                    DAYS_PER_WEEK
                  when 'm'
                    DAYS_PER_MONTH
                  when 'y'
                    DAYS_PER_YEAR
                  else
                    DEFAULT
                  end
    @api_ticks = query.where(['id % ? = 0', granularity])

    ticks_by_symbol = Hash.new {|h,k| h[k] = Array.new}
    @api_ticks.each do |tick|
      ticks_by_symbol[tick.symbol] << tick
    end

    ticks_by_symbol.each do |symbol, ticks|
      ticks_by_symbol[symbol] = TickSegmentTree.new(ticks).json
    end

    render json: ticks_by_symbol
  end

  def start_time
    Time.zone.parse(params[:start_time])
  end

  def end_time
    number = params[:period][0...-1]
    unit = params[:period][-1] # string: "d"/"w"/"m"/"y"
    time_keys = { 'd' => :days, 'w' => :weeks, 'm' => :months, 'y' => :years }
    start_time.advance(time_keys[unit] => number.to_i)
  end

  def valid_params
    !params[:start_time].nil? && !params[:period].nil?
  end

  # private

  # Use callbacks to share common setup or constraints between actions.
  # def set_api_tick
  #   @api_tick = Api::Tick.find(params[:id])
  # end

  # Only allow a list of trusted parameters through.
  def validate_params
    params.require(:start_time)
    params.require(:period)
  end
end
