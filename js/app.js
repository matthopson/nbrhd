'use strict';
// Bootstrap the application when Google Maps has loaded.
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
    'ui.map',
    'ui.bootstrap'
]);

/* Controllers */
var controllers = angular.module('letsGo.controllers', []);

/* Directives */
var directives = angular.module('letsGo.directives', []);

/* Filters */
var filters = angular.module('letsGo.filters', []);

/* Services */
// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('letsGo.services', []);
services.
    value('version', '0.1');
