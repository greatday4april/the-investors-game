class Api::TicksController < ApplicationController
  include Api::TicksHelper
  before_action :validate_params, only: [:index]
  # GET /api/ticks
  # GET /api/ticks.json
  def index
    symbols = params[:symbols]
    duration = end_time - start_time
    query = Tick.where(['tick_time >= ?', start_time])
                .where(['tick_time <= ?', end_time])
    query = query.where(['symbol in (?)', symbols]) unless symbols.nil?
    query = query.order('tick_time')

    granularity = if duration / 1.year >= 1
                    DAYS_PER_YEAR
                  elsif duration / 1.month >= 1
                    DAYS_PER_MONTH
                  elsif duration / 1.week >= 1
                    DAYS_PER_WEEK
                  else
                    DEFAULT
                  end

    @api_ticks = query.where(['id % ? = 0', granularity])

    ticks_by_symbol = Hash.new { |h, k| h[k] = [] }
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
    Time.zone.parse(params[:end_time])
  end

  def valid_params
    !params[:start_time].nil? && !params[:end_time].nil?
  end

  # private

  # Use callbacks to share common setup or constraints between actions.
  # def set_api_tick
  #   @api_tick = Api::Tick.find(params[:id])
  # end

  # Only allow a list of trusted parameters through.
  def validate_params
    params.require(:start_time)
    params.require(:end_time)
  end
end
