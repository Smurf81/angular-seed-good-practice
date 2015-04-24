angular.module('myApp.core').factory('HttpInterceptor',HttpInterceptor);

HttpInterceptor.$inject = [];
function HttpInterceptor(){
    return {
        'request': function(config){
            console.log('Request is send');

            return config;
        },
        'response': function(response){
            console.log('Response is receive');

            return response;
        }
    }
}
