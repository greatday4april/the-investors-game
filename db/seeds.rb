# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'csv'

Tick.delete_all # in case multiple seeds
file_name = 'AAPL_2010_2019.csv'
ticks = CSV.read(
  File.expand_path(file_name, File.dirname(__FILE__))
)
p ticks[0...3]
symbol = file_name.split('_')[0]
ticks.map! do |tick|
  { symbol: symbol,
    tick_time: Time.zone.parse(tick[0]),
    open: tick[1].to_f,
    high: tick[2].to_f,
    low: tick[3].to_f,
    close: tick[4].to_f,
    volume: tick[5].to_i }
end
p ticks[0...3]
Tick.create(ticks)
