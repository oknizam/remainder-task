# remainder-task
Remainder task react app with webpcak


# generate package.json

-> npm init -y

# install react and react-dom

-> npm i react react-dom

# configure webpack

-> npm install --save-dev webpack webpack-dev-server webpack-cli

# creating index.html at root


# create web.config.js

-> write script to generate build file

# Configuring Babel

->The React component we wrote above used the class syntax, which is a feature of ES6. Webpack needs Babel to process ES6 into ES5 syntaxes in order for this class to work.


# creating .babelrc file


# adding live reloading in webpack.config.js adding below keys

 target:"web", // it accepst two value web -> for developent browserslist for production
    devtool:"source-map"