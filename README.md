## CsvEditor based on FLUX React JS Boilerplate

Read more about FLUX over at [Facebook Flux Website](http://facebook.github.io/flux/) 
Read more about RejactJS on [React JS Website](http://facebook.github.io/react/) 
Read more about Gulp on [Gulp Website](http://gulpjs.com/)

### Development - setup 

* Run `sudo npm install -g gulp` to install gulp globally
* Run `npm install --save-dev gulp` to install gulp locally
* Run `npm install` to install other packages

### Development 

* Run `gulp` to get watcher running
* Start a web server with root in the `build` folder, with  `gulp webserver`
* Go to `localhost:31337` to display the app
* Go to `localhost:31337/testrunner.html` to see your tests
* Any changes to `app` or `styles` folder will automatically rebuild to `build` folder
* Both tests and application changes will refresh automatically in the browser
* Run `gulp test` to run all tests with phantomJS and produce XML reports

### Minify the code, ready for production
* Run `gulp deploy`

### Directory
* **build/**: Where your automatically builds to. This is where you launch your app in development
* **dist/**: Where the deployed code exists, ready for production
* **styles/**: Where you put your css files
* **specs/**: Where you put your test files
* **gulpfile**: Gulp configuration
