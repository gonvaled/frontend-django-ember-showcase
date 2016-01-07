# Frontend-django-ember-showcase

This is a simple Ember application which talks with a JSON API compatible backend.
The application has been generated with ember-cli. The deployment process has been slightly customized to be embedded in a Django backend.

The related backend project can be found [here](https://github.com/gonvaled/backend-django-ember-showcase)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment dev-django` (to embed development build into Django)
* `ember build --environment production` (production)

### Deploying

The application is intended to be embedded into a Django backend. The following steps must be performed

* `ember build --environment dev-django` or `ember build --environment production`
* `cp -rT FE_TOP_DIR/dist DJ_TOP_DIR/static/ember-app`, where `FE_TOP_DIR` is the frontend (this application) top directory, and `DJ_TOP_DIR` is the backend top directory
* `python manage.py collectstatic --noinput`, which will collect static assets so that Django can serve the Ember application
* `python manage.py runserver`

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Legal

[Daniel Gonzalez](http://gonvaled.com) &copy; 2016

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
