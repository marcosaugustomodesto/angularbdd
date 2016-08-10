### Setup

`nvm use 5.0`

`npm install`

`node server.js`

### Test

`npm install -g karma-cli`

`karma start`


### inslacoes e teste

npm install -g karma-cli

npm install gulp --save-dev
npm install gulp-util --save-dev
npm install gulp-uglify --save-dev
npm install gulp-watch --save-dev


=====================================
http://angularjs.org/

angular.min.js

http://getbootstrap.com/

bootstrap.min.css

<!DOCTYPE html>
<html ng-app="store">
   <head>
      <link rel="stylesheet" type="text/css" href="bootstrap.min.css" />
   </head>
   <body>
      <script type="text/javascript" src="angular.min.js"></script>
	  <script type="text/javascript" src="app.js"></script>
	  
	  <p>I am {{4 + 6}}</p>
	  <p>{{"hello" + " you"}}
	  
   </body>
</html>

var app = angular.module('store',[]);

http://docs.angularjs.org/guide/expression