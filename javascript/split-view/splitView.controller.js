/* global angular */
(function iife() {
    'use strict';

    angular
        .module('splitView')
        .controller('splitViewController', splitViewController);

    /* @ngInject */
    function splitViewController($scope) {
        /*jshint validthis: true */
        var vm = this;

        vm.model = $scope.ctrl.model;
        vm.updateSelected = updateSelected;
        vm.create = $scope.ctrl.fn.create;

        activate();

        return vm;


        // ///////////////////////////////////


        function updateSelected(_index) {
            // $scope.ctrl.selected.index = _index;
            if ( undefined === _index ) {
                $scope.ctrl.selected = {};
            } else {
                $scope.ctrl.selected = $scope.ctrl.model[_index];
            }
        }


        function activate() {
            $scope.ctrl.selected = $scope.ctrl.selected || {};
        }
    }
})();
