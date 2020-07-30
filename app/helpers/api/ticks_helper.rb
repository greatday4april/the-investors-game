module Api::TicksHelper
  DEFAULT = 1
  DAYS_PER_WEEK = 7
  DAYS_PER_MONTH = 30
  DAYS_PER_YEAR = 365

  MONTHS_IN_A_YEAR = 12
  HOURS_IN_A_DAY = 24
  MINUTES_IN_A_HOUR = 60

  class TickSegmentTree
    attr_reader :json
    def initialize(ticks)
      @json = {}
      ticks.each {|tick| self.insert(tick)}
    end

    def insert(tick)
      time = tick.tick_time
      @json[time.year] = Array.new(MONTHS_IN_A_YEAR + 1) if @json[time.year].nil?

      year_tree = @json[time.year]
      year_tree[time.month] = Array.new(Time.days_in_month(time.month, time.year) + 1) if year_tree[time.month].nil?

      month_tree = year_tree[time.month]
      month_tree[time.day] = Array.new(HOURS_IN_A_DAY) if month_tree[time.day].nil?

      day_tree = month_tree[time.day]
      day_tree[time.hour] = Array.new(MINUTES_IN_A_HOUR) if day_tree[time.hour].nil?

      hour_tree = day_tree[time.hour]
      hour_tree[time.min] = {
        close: tick.close,
        tick_time: time
      }

      @json
    end
  end
end
