'use strict';

angular.module('myApp.directive',[]);
angular.module('myApp.service',[]);

angular.module('myApp.core',[
    /* Angular Module */
    'ngRoute'
    /* Cross App Module */
    /*3rd-party modules */
]);

angular.module('myApp', [
    /*Shared Modules*/
    'myApp.core',
    'myApp.directive',
    'myApp.service',

    /*Features areas*/
    'myApp.view1',
    'myApp.view2'
]);


