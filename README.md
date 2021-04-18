# Boilerplate

- React for frontend
- Express for backend
- Webpack for compilation
- MongoDB for database

## Directories set up

- **main (main file path for project)**
  - **client (for react)**
    - index.js
    - components (for react components)
      - App.jsx (main react component)
  - **controller (for route controllers)**
    - mainController.js
  - **models (for mongo)**
    - mainModel.js (for schema)
  - **public (for static files)**
    - index.html
    - style.css
    - build/ (created automatically by webpack.config)
      - houses webpack bundles
  - **routes (for server routes)**
    - mainRouter.js
  - **server.js (for express backend)**
  - **webpack.config.js (for webpack configuration)**

# Package.json

Dependencies:<br>
`npm install express` <br>
`npm install nodemon` <br>
`npm install @babel/core @babel/preset-react babel-loader react react-dom webpack webpack-cli`<br>
`npm install mongoose` <br>

Scripts:

- `"start: nodemon server.js"` (to hot reload server)
- `"webpack": "./node_modules/.bin/webpack -w"` (to hot rebundle webpack)
