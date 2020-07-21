class Api::TicksController < ApplicationController
  before_action :set_api_tick, only: [:show, :update, :destroy]

  # GET /api/ticks
  # GET /api/ticks.json
  def index
    @api_ticks = Api::Tick.all
  end

  # GET /api/ticks/1
  # GET /api/ticks/1.json
  def show
  end

  # POST /api/ticks
  # POST /api/ticks.json
  def create
    @api_tick = Api::Tick.new(api_tick_params)

    if @api_tick.save
      render :show, status: :created, location: @api_tick
    else
      render json: @api_tick.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/ticks/1
  # PATCH/PUT /api/ticks/1.json
  def update
    if @api_tick.update(api_tick_params)
      render :show, status: :ok, location: @api_tick
    else
      render json: @api_tick.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/ticks/1
  # DELETE /api/ticks/1.json
  def destroy
    @api_tick.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_tick
      @api_tick = Api::Tick.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_tick_params
      params.fetch(:api_tick, {})
    end
end
