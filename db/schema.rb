# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_25_032755) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "housings", force: :cascade do |t|
    t.string "region"
    t.date "date"
    t.integer "price"
    t.string "home_type"
  end

  create_table "news", force: :cascade do |t|
    t.string "symbol"
    t.text "news"
    t.date "date"
    t.string "source"
  end

  create_table "tables", force: :cascade do |t|
    t.string "symbol"
    t.text "news"
    t.date "date"
    t.string "source"
  end

  create_table "ticks", force: :cascade do |t|
    t.string "symbol"
    t.float "low"
    t.float "high"
    t.float "open"
    t.float "close"
    t.integer "volume"
    t.datetime "tick_time"
  end

end
