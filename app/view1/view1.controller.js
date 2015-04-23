angular.module('myApp.view1').controller('View1Ctrl', View1Ctrl);

function View1Ctrl(LogService) {
    var vm = this;
    vm.helloMessage = 'Hello World';

    activate();

    ////////////////////////////

    function activate(){
        LogService.info('activation de la vue 1');
    }

};
View1Ctrl.$inject = ['LogService'];