# Boilerplate

- React for frontend
- Express for backend
- Webpack for compilation
- MongoDB for database

## Directories set up

- **mern-boilerplate (main file path for project)**
  - **client (for react)**
    - index.js
    - components
      - App.jsx
  - **controller (for route controllers)**
    - mainController.js
  - **models (for mongo)**
    - mainModel.js
  - **public (for static files)**
    - index.html
    - style.css
    - build/ (created automatically by webpack.config)
      - houses webpack bundles
  - **routes (for server routes)**
    - mainRouter.js
  - **server.js (for express backend)**
  - **webpack.config.js (for webpack configuration)**

## Package.json

Dependencies:<br>
If forked, running one `npm install` should install all dependencies in package.json.
<br>

<hr>
<br>

`npm install express` <br>
`npm install nodemon` <br>
`npm install @babel/core @babel/preset-react babel-loader react react-dom webpack webpack-cli`<br>
`npm install mongoose` <br>

Scripts:

- `"start: nodemon server.js"` (to hot reload server)
- `"webpack": "./node_modules/.bin/webpack -w"` (to hot rebundle webpack)

## Credit

Inspo from https://github.com/kriscfoster/Express-React-BP.
