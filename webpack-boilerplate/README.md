## Webpack boilerplate with babel
Use this to quicly set up a project dev environment with webpack and babel already set up
No need to configure anything. 
Just run - 
npm i - install all requirements
npm run serve - starts the webpack dev server in development mode. Then you can start to develop.
npm run serve - use when ready to deploy. will spit out all code into dist/assets/bundle.js

#Distribution folder (dist)
Will contain all the end code that will be uploaded to the web server.
dist/assets folder will have all the JS, CSS etc.
dist/assets/bundle.js will have the converted code by babel-webpack which will be cross browser compatible.

#Source folder (src)
All modern JS code will be in this folder.
Will write the JS only here and Babel-webpack will convert this and output into dist/assets/bundle.js

##Courtesy of Shaun - TheNetNinja