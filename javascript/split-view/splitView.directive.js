/* global angular */
(function iife() {
    'use strict';

    angular
        .module('splitView')
        .directive('splitView', splitView);

    /* @ngInject */
    function splitView() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            controllerAs: 'splitView',
            controller: 'splitViewController',
            restrict: 'A',
            replace: true,
            scope: {
                ctrl: '='
            },
            templateUrl: 'javascript/split-view/splitView.template.html',
            transclude: true
        };
        return directive;
    }
})();
