require "csv"
Table.delete_all # in case multiple seeds
# Housing will include all the MONTHLY data after from January 2008 to June 2020.
# Housing type includes single-family, condo, 1-bedroom, 2-bedroo, 3-bedroom, 4-bedroom, 5+-bedroom
# City includes NYC, LA, DC, SF, Chicago, Boston, Miami, Atlanta, Seattle,
# Dir.glob(File.dirname(__FILE__) + "/news.csv") do |csv_filename|
  # news_data = CSV.read(
  #   File.expand_path(csv_filename, File.dirname(__FILE__))
  # )
  news_data = CSV.read(File.dirname(__FILE__) + '/news.csv')

#   dates = columns[3]
  news_data.each.with_index do |row, idx|
    symbol= row[0]
    news = row[2]
    date = row[3]
    source = row[-1]
    p(source)
    Table.insert(
    #   row.map.with_index do |record, idx|
        {
            symbol: symbol,
            news: news,
            date: date,
            source: source
        }
    #   end
    )
  end