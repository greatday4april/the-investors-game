# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "csv"
Tick.delete_all # in case multiple seeds

Dir.glob(File.dirname(__FILE__) + "/raw/*.csv") do |csv_filename|
  symbol = csv_filename.split("/")[-1].split("_")[0]
  p "symbol: #{symbol}"
  # inspect if there's already a selected version
  next unless Dir.glob(File.dirname(__FILE__) + "/selected/#{symbol}*.csv").empty?

  ticks = CSV.read( # 2D array
    File.expand_path(csv_filename, File.dirname(__FILE__) + "/raw")
  )
  start_time = Time.zone.parse("2009-01-01 12:00am")
  end_time = Time.zone.parse("2010-01-01 12:00am")
  ticks = ticks.select do |tick|
    tick_time = Time.zone.parse(tick[0])
    tick_time > start_time && tick_time < end_time
  end
  CSV.open(File.expand_path("#{symbol}_2009_2010.csv", File.dirname(__FILE__) + "/selected"), "wb") do |csv|
    ticks.each do |tick|
      csv << tick
    end
    puts "selected #{ticks.length} stock tick records"
  end
end

Dir.glob(File.dirname(__FILE__) + "/selected/*.csv") do |csv_filename|
  p "Reading & seeding Tick:#{csv_filename}"
  ticks = CSV.read(
    File.expand_path(csv_filename, File.dirname(__FILE__) + "/selected")
  )
  symbol = csv_filename.split("/")[-1].split("_")[0]
  ticks.map! do |tick|
    { symbol: symbol,
      tick_time: Time.zone.parse(tick[0]),
      open: tick[1].to_f,
      high: tick[2].to_f,
      low: tick[3].to_f,
      close: tick[4].to_f,
      volume: tick[5].to_i }
  end
  Tick.create!(ticks)
end

Housing.delete_all # in case multiple seeds
# Housing will include all the MONTHLY data after from January 2008 to June 2020.
# Housing type includes single-family, condo, 1-bedroom, 2-bedroo, 3-bedroom, 4-bedroom, 5+-bedroom
# City includes NYC, LA, DC, SF, Chicago, Boston, Miami, Atlanta, Seattle,

csv_text = CSV.read(Rails.root.join("db", "housing", "Metro.csv"))
date = csv_text[0][2..-1]
csv_text[1..-1].each do |row|
  row[2..-1].each_with_index do |price, index|
    h = Housing.new()
    h.home_type = row[0]
    h.region = row[1]
    h.date = date[index]
    h.price = price
    h.save
    p "#{h.region}, #{h.home_type}, #{h.date}, #{h.price} saved"
  end
end
