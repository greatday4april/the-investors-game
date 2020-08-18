# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "csv"
Housing.delete_all # in case multiple seeds

csv_text = File.read(Rails.root.join("lib", "seeds", "Metro.csv"))
csv = CSV.parse(csv_text, :headers => true, :encoding => "ISO-8859-1")
csv.each do |row|
  # p row.to_ary
  type = row[0]
  city = row[1]

  data = row.to_a[2..-1]
  data.each do |datePrice|
    h = Housing.new()
    h.region = city
    h.home_type = type
    h.date = datePrice.first
    h.price = datePrice.last
    h.save
  end
end
