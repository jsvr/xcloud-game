'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index', {
        url: '/index',
        templateUrl: 'views/home.html',
        controller: 'mainCtrl'
    });
    $urlRouterProvider.otherwise('index');
}])
