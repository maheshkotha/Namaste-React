# React Testing

  * Unit Testing
  * Integratign Testing
  * End to End Testing

  - React Testing Library

* React Testing Library builds on top of DOM Testing Library

*  _npm install --save-dev @testing-library/react_


 --- JUST ---
  * Jest is a delightful javascript Testing framework with a focus on simplicity.

  * It works with projects using: Babel, Typescript, Node, React, Angular, Vue and more.


  We are Using Two Libraries -- React Testing Library -- and -- JEST --

  _npm install --save-dev jest_

* Using Babel, need to install aditional dependencies
 
 -  _npm i --save-dev babel-jest @babel/core @babel/preset-env_


* Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:

code: babel.config.js
  module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  }

# Parcel
  - Dev Build
  - Local Server
  - HMR : Hot Module Replacement
  - File Watching Algorithm
  - Caching - Fast builder
  - Image Optimization
  - Minification our file
  - Bundle
  - Compress
  - Consistent Hashing
  - Code Spliting
  - Differential Bundling - Support Older browsers
  - Diagonostics
  - Error Handling
  - HTTPs
  

# summaery - Setting up Testing our app
- Install React testing library
- Install Jest
- Install JEST- Babel dependencies (@babel/preset-env)
- Configure babel
- Configure Parcel Config file to disabel default babel transpilation (Babel , Webpack, vite)
- nex jest init for config jest.config.js
- Install jsdom library












 