/* global angular */
(function iife() {
    'use strict';

    angular
        .module('app')
        .config(function config($stateProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $stateProvider
            .state('app', {
                url: '/',
                controllerAs: 'app',
                controller: 'appController',
                templateUrl: 'javascript/app.template.html'
            })
            .state('app.user', {
                url: 'user/:id',
                controllerAs: 'app',
                controller: 'appController',
                templateUrl: 'javascript/app.template.html'
            });
        });
})();
