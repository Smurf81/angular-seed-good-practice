angular.module('myApp.core').config(route);

route.$inject = ['$routeProvider'];
function route($routeProvider) {
    $routeProvider.
        when('/',{
            templateUrl : 'view1/view1.html',
            controller : 'View1Ctrl',
            controllerAs : 'view1'
        }).
        when('/view2',{
            templateUrl : 'view2/view2.html',
            controller: 'View2Ctrl',
            controllerAs : 'view2',
            resolve : {
                promise : promise
            }
        })
        .otherwise({
            redirectTo:'/'
        }
    );
}

promise.$inject = ['$q','$timeout'];
function promise($q,$timeout){
    var defer = $q.defer();

    $timeout(function(){
        defer.resolve('resolve');
    },500);

    return defer.promise;
}