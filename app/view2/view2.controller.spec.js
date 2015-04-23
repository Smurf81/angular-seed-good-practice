'use strict';

describe('myApp.view2 module', function() {

  var scope,view2Ctrl;

  beforeEach(module('myApp.view2'));

  beforeEach(inject(function($rootScope,$controller){

        //promi = promise;

        var promise = 'test';

        scope = $rootScope.$new();

        view2Ctrl = $controller('View2Ctrl',{
          promise : promise
        });
      })
  );

  it('should ....', function() {
    expect(view2Ctrl).toBeDefined();
  });


});