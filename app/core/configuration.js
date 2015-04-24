angular.module('myApp.core').config(config);

config.$inject = ['$locationProvider','$compileProvider','$httpProvider'];
function config($locationProvider,$compileProvider,$httpProvider){
    $locationProvider.html5Mode(true);

    $compileProvider.debugInfoEnabled(false);

    $httpProvider.interceptors.push('HttpInterceptor');
}
