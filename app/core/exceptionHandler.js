angular.module('myApp.core').config(exceptionHandler);

exceptionHandler.$inject = ['$provide'];
function exceptionHandler($provide){
    $provide.decorator('$exceptionHandler',extendExceptionHandler);
}

extendExceptionHandler.$inject = ['$delegate'];
function extendExceptionHandler($delegate){
    return function(exception,cause){
        $delegate(exception,cause);
        var errorData = {
            exception : exception,
            cause : cause
        }

        /**
         * Handle exception for the app
         * throw exception;
         */
        console.log(exception);
    }
}
