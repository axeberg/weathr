weathr
======

Weathr is a web-application that uses the Open Weather Map API to display location based weather.

The application is built using the Anuglar Fullstack:

https://github.com/DaftMonk/generator-angular-fullstack

----

Featuring: 

 * Express server integrated with grunt tasks
 * Livereload of client and server files
 * Support for Jade and CoffeeScript
 * Easy deployment workflow.
 * Optional MongoDB integration
 * Optional Passport integration for adding user accounts
 * Free weatherdata from the [OpenWeatherMap API] (http://openweathermap.org/)
 * MongoDB - Download and Install [MongoDB](http://www.mongodb.org/downloads) - If you plan on scaffolding your project with mongoose, you'll need mongoDB to be installed.

## Express

Launch your express server in development mode.
```bash
grunt serve
```

Launch your express server in `debug-brk` mode with a node-inspector tab.
```bash
grunt serve:debug
``` 

Launch your express server in production mode, uses the minified/optimized production folder.
```bash
grunt serve:dist
``` 

### Livereload

`grunt serve` will watch client files in `app/`, and server files inside `lib/`, restarting the Express server when a change is detected.

## Deployment

To generate a dist folder that can easily be deployed use:

```bash
grunt
```

This will run unit tests, jshint, concatenate and minify scripts/css, compress images, add css vendor prefixes, and finally copy all files to a tidy dist folder.

Alternatively to skip tests and jshint, use:

```bash
grunt build
```

## Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

Use `grunt test:client` to only run client tests.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


  [1]: https://github.com/yeoman/generator-angular#generators
