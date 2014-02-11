'use strict';

function onGoogleReady() {
    angular.bootstrap(document.getElementById("app"), ['letsGo']);
}

// Declare app level module which depends on filters, and services
var app = angular.module('letsGo', [
  'ngRoute',
  'letsGo.filters',
  'letsGo.services',
  'letsGo.directives',
  'letsGo.controllers',
  'ui.event',
  'ui.map'
]);

/* Controllers */
var controllers = angular.module('letsGo.controllers', []);
controllers
    .controller('MyCtrl1', [function() {

    }])
    .controller('MyCtrl2', [function() {

    }]);

/* Directives */
var directives = angular.module('letsGo.directives', []);
directives.
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);

/* Filters */
var filters = angular.module('letsGo.filters', []);
filters.
    filter('interpolate', ['version', function(version) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        }
    }]);

/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('letsGo.services', []);
services.
    value('version', '0.1');

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
