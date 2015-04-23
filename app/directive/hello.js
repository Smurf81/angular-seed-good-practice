angular.module('myApp.directive')
    .directive('hello', HelloDirective);

function HelloDirective() {
    var directive = {
        restrict:'E',
        controller : controller,
        controllerAs:'vm',
        scope : {
            name : '@'
        },
        bindToController : true,
        template : '<H1> hello {{vm.name}}</H1>'
    }

    return directive;

    function controller(){
        var vm = this;
    }
}

HelloDirective.$inject = [];
