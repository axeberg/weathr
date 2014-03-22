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

### Heroku Deployment

We provide an extremely simplifed deployment process for heroku.

`yo angular-fullstack:deploy heroku` generates a `dist` folder that is deployment ready  for [heroku.com](http://heroku.com/). 

**Create and Deploy an app in 4 steps**

1. `mkdir foo && cd foo`

2. `yo angular-fullstack`

3. `yo angular-fullstack:deploy heroku`

4. `cd dist && git push heroku master`

5. Optional (if using mongoDB) `heroku addons:add mongohq`

That's it! Your app should be live and shareable. Type `heroku open` to view it.  

## Fullstack sub-generators

### Deploy
Initalizes a heroku app and generates a `dist` folder which is ready to push to heroku.

To do the same manually, you need to:

1. Build a dist folder
2. Create a Procfile in the dist folder
3. Create a repository: `git init && git add -A && git commit -m "Initial commit"`
4. Create a heroku app: `heroku apps:create && heroku config:set NODE_ENV=production`

Example:
```bash
yo angular-fullstack:deploy heroku
```

After app modifications run:
```bash
grunt build
```
then commit and push the dist folder.

## Testing

Running `grunt test` will run the client and server unit tests with karma and mocha.

Use `grunt test:server` to only run server tests.

Use `grunt test:client` to only run client tests.

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)


  [1]: https://github.com/yeoman/generator-angular#generators
