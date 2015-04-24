angular.module('myApp.service')
    .factory('LogService',LogService);

function LogService($log){
    var logActivated = true;

    var service = {
        info : info,
        activatedLog : activatedLog
    }

    return service;

    //////////////////////

    function info(message){
        if(logActivated)
            $log.info(message);
    }

    function activatedLog(activated){
        logActivated = activated;
    }
}

LogService.$inject = ['$log'];
