# The Investor's Game

a investment game Inspired by Monopoly and Paper Trading

## setup

1. `yarn install`
2. `bundle install && rails db:setup`
3. `rails db:seed` to seed the data (it will take > 20mins)
4. `gem install foreman`
5. `foreman start` to run

## development

1. you dont need to restart the server whenever you made change
2. if you encounter weird frontend issues, delete public/pack

### Create the backend resource chain (example)

run `rails g model user && rails g scaffold_controller api/user --api` (for pure api resource) (replace api/user with your model name), it will generate the following files for you:

- DB migration file
- model
- controller
- jbuider views
  You would still need to add resource :users to routes.rb

### Frontend implementation

- some react code used react hooks, and you could read [this video](https://open.appacademy.io/learn/full-stack-online/react/react-hooks-demo) and [that cheatsheet](https://blog.engineering.publicissapient.fr/wp-content/uploads/2019/06/cheat-sheet-xebia.pdf)

```JavaScript
// ComponentDidMount()
useEffect(() => {
  fetchAllTicks('2009-01-02 07:06:00', '1d', 'AAPL');
}, []);

// ComponentDidMount() and ComponentDidUpdate()
useEffect(() => {
  fetchAllTicks('2009-01-02 07:06:00', '1d', 'AAPL');
});

// ComponentWillUnMount()
useEffect(() => {
  fetchAllTicks('2009-01-02 07:06:00', '1d', 'AAPL');
  return () => alert('unmounting')
});
```

- run `rails g react:component Users users:array` based on react component name and props it takes. reference: https://github.com/reactjs/react-rails#component-generator
- add `Route` to wherever your routes defined for your new top-level component
- you should use [axios](https://www.npmjs.com/package/axios#note-commonjs-usage) with a similar syntax rather than `ajax`
- `yarn add react-redux redux redux-logger redux-thunk` if you need redux, and add provider to `root.jsx`

### Run server

- run `foreman start` and it will load webpack as well, supports auto-reloading when there's code change

## notes

1. to actually upgrade the packages to latest we could do `yarn global add npm-check-updates && npm-check-updates -u && yarn upgrade`

## Backend Routes

### HTML

- `GET /` `StaticPagesController#root`

### API Endpoints

#### `ticks`

- `GET /api/ticks` - return all ticks matching conditions
  - filtered by `start_time` and `period`

## Postgres Database Schema

### `ticks`

| column name | data type | details |
| ----------- | :-------: | ------: |
| `id`        |  integer  |         |
| `tick_time` | datetime  |         |
| `open`      |   float   |         |
| `close`     |   float   |         |
| `low`       |   float   |         |
| `high`      |   float   |         |
| `volume`    |  integer  |         |
