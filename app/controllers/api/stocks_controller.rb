class Api::StocksController < ApplicationController
  before_action :set_api_stock, only: [:show, :update, :destroy]

  # GET /api/stocks
  # GET /api/stocks.json
  def index
    @api_stocks = Api::Stock.all
  end

  # GET /api/stocks/1
  # GET /api/stocks/1.json
  def show
  end

  # POST /api/stocks
  # POST /api/stocks.json
  def create
    @api_stock = Api::Stock.new(api_stock_params)

    if @api_stock.save
      render :show, status: :created, location: @api_stock
    else
      render json: @api_stock.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/stocks/1
  # PATCH/PUT /api/stocks/1.json
  def update
    if @api_stock.update(api_stock_params)
      render :show, status: :ok, location: @api_stock
    else
      render json: @api_stock.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/stocks/1
  # DELETE /api/stocks/1.json
  def destroy
    @api_stock.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_stock
      @api_stock = Api::Stock.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def api_stock_params
      params.fetch(:api_stock, {})
    end
end
