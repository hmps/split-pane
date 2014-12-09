/* global angular */
(function iife() {
    'use strict';

    angular
        .module('app')
        .controller('appController', appController);

    /* @ngInject */
    function appController($stateParams) {
        /*jshint validthis: true */
        var vm = this;


        vm.model = [
            { id: 1, name: 'Hampus Persson', age: 31, gender: 'm' },
            { id: 2, name: 'Karin Fredholm', age: 31, gender: 'f' },
            { id: 3, name: 'Kajsa Fredholm', age: 1, gender: 'f' },
            { id: 4, name: 'Miguel Espinoza', age: 30, gender: 'm' }
        ];



        vm.fn = {
            save: function save() {
                console.log('save', vm.selected);
            },
            create: function create() {
                console.log('create');
            },
            remove: function remove() {
                vm.model.forEach(function forEach(model, index) {
                    if ( vm.selected.id === model.id ) {
                        vm.model.splice(index, 1);
                        vm.selected = {};
                        return false;
                    }
                });
            }
        };

        return vm;
    }
})();
