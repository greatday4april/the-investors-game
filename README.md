# The Investor's Game

a investment game Inspired by Monopoly and Paper Trading

## setup

1. `yarn install`
2. `bundle install && rails db:setup`
3. `rails db:seed` to seed the data (it will take > 20mins)
4. `rails s` and now you can visit http://localhost:3000

## development

1. you dont need to restart the server whenever you made change
2. if you encounter weird frontend issues, delete public/pack

## notes
1. to actually upgrade the packages to latest we could do `yarn global add npm-check-updates && npm-check-updates -u && yarn upgrade`
