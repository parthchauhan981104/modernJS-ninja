## Babel Webpack demo
Just trying to understand babel and webpack.
node_modules is not uploaded, use npm i to install

#Distribution folder (dist)
Will contain all the end code that will be uploaded to the web server.
dist/assets folder will have all the JS, CSS etc.
dist/assets/bundle.js will have the converted code by babel-webpack which will be cross browser compatible.

#Source folder (src)
All modern JS code will be in this folder.
Will write the JS only here and Babel-webpack will convert this and output into dist/assets/bundle.js