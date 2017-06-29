
'use strict';
angular.module('app', [
    'ui.router',
    'ngCookies',
    'validation',
    'ngAnimate'
]);
//run 初始化全局数据
//angular.module('app').run(['$http', '$rootScope', function($http, $rootScope){
//    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
//    $http.defaults.xsrfCookieName = 'csrftoken';
//
//    $rootScope.$on('$stateChangeStart', function(event){
//
//    });
//}]);



