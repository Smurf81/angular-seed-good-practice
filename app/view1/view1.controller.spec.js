'use strict';

describe('myApp.view1 module', function() {

    var scope,view1Ctrl;

    beforeEach(module('myApp.view1'));

    beforeEach(inject(function($rootScope,$controller){
            scope = $rootScope.$new();
            view1Ctrl = $controller('View1Ctrl');
        }
    ));

    it('view1 controller',function(){

        expect(view1Ctrl).toBeDefined();
    })
})