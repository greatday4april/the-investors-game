require 'json'
require 'net/http'
require 'uri'
require 'csv'
require 'openssl'
require 'set'
def get_recursive_keys(hash, nested_key = nil)
  hash.each_with_object([]) do |(k, v), keys|
    k = "#{nested_key}.#{k}" unless nested_key.nil?
    if v.is_a? Hash
      keys.concat(get_recursive_keys(v, k))
    else
      keys << k
  end
  end
end

symbols = ['Elon%20Musk']
symbols.each do |symbol|
  url = URI('https://google-news.p.rapidapi.com/v1/search?from=2020-07-01&when=1d&country=US&lang=en&q=' + symbol)
  newSymbol = symbol.gsub! '%20', ' '
  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  request = Net::HTTP::Get.new(url)
  request['x-rapidapi-host'] = 'google-news.p.rapidapi.com'
  request['x-rapidapi-key'] = 'd3bb905fe3msh07ebb409768548dp18d375jsn405df3f854d7'
  response = http.request(request)
  data = JSON.parse(response.read_body)
  rows = data['articles'].take(4)
  headings = Set.new
  rows.each do |hash|
    headings.merge(get_recursive_keys(hash))
  end
  headings = headings.to_a
  headings.unshift('symbol')
  CSV.open('news.csv', 'w') do |csv|
    csv << headings
    rows.each do |hash|
      row = { 'symbol': newSymbol }
      hash.each do |k, v|
        row[k] = if k == 'source'
                   v['title']
                 else
                   v.to_s.gsub(/\r\n?/, '').delete("\n").delete("\r")
                 end
      end
      csv << row.values
    end
  end
end
