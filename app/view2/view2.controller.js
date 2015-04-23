function View2Ctrl(promise) {
    var vm = this;

    vm.name = 'toto';

    activate();

    ////////////////////////

    function activate(){
        vm.name = promise;
    }
}

View2Ctrl.$inject = ['promise'];

angular.module('myApp.view2').controller('View2Ctrl',View2Ctrl);
