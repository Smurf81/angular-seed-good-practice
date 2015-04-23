'use strict';

describe('myApp routing', function(){


    beforeEach(module('myApp'));

    // We want to store a copy of the three services we'll use in our tests
    // so we can later reference these services in our tests.
    var $location, $route, $rootScope,$httpBackend,$injector;

    // We added _ in our dependencies to avoid conflicting with our variables.
    // Angularjs will strip out the _ and inject the dependencies.
    beforeEach(inject(function(_$location_, _$route_, _$rootScope_,_$injector_){
        $location = _$location_;
        $route = _$route_;
        $rootScope = _$rootScope_;
        $injector = _$injector_;

        // Set up the mock http service responses
        $httpBackend = _$injector_.get('$httpBackend');
    }));

    beforeEach(inject(function($httpBackend){
        //$httpBackend.expectGET('view1/view1.html').respond(200,'main HTML');
    }))

    // When a user navigates to the index page, they are shown the index page with the proper
    // controller
    it('should load the index page on successful load of /', function(){
        $httpBackend.expectGET('view1/view1.html').respond(200,'main HTML');

        expect($location.path()).toBe('');

        $location.path('/');

        // The router works with the digest lifecycle, wherein after the location is set,
        // it takes a single digest loop cycle to process the route,
        // transform the page content, and finish the routing.
        // In order to trigger the location request, we’ll run a digest cycle (on the $rootScope)
        // and check that the controller is as expected.
        $rootScope.$digest();

        expect($location.path()).toBe( '/' );
        expect($route.current.controller).toBe('View1Ctrl');

        expect($route.current.resolve).toBeUndefined();
    });

    it('should redirect to the index path on non-existent route', function(){
        $httpBackend.expectGET('view1/view1.html').respond(200,'main HTML');
        expect($location.path()).toBe('');

        $location.path('/a/non-existent/route');

        $rootScope.$digest();

        expect($location.path()).toBe( '/' );
        expect($route.current.controller).toBe('View1Ctrl');
    });


    it('should load the view2 page', function(){
        $httpBackend.expectGET('view2/view2.html').respond(200,'main HTML');
        $location.path('/view2');

        $rootScope.$digest();

        expect($location.path()).toBe( '/view2' );
        expect($route.current.controller).toBe('View2Ctrl');

        expect($injector.invoke($route.current.resolve.promise)).toBeDefined();

    })

})
