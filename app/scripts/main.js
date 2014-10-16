console.log('Welcome to ENE-5A');

(function(){
  'use strict';

angular
  .module('myApp', [
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controllerAs: 'home',
        controller: 'homeCtrl',
        resolve: {
        	names: ['$http', function($http) {
        		return $http.get('/api/names.json').then(function(response) {
        			return response.data;
        		});
        	}]
        }
      })
      .state('calc', {
        url: '/calc',
        templateUrl: 'templates/calc.html',
        controllerAs: 'calc',
        controller: 'calcCtrl'
      })
      .state('engTools', {
        url: '/engTools',
        templateUrl: 'templates/engTools.html',
        controllerAs: 'engTools',
        controller: 'engToolsCtrl',
        resolve: {
        	specificHeat: ['$http', function($http) {
        		return $http.get('/api/specificHeat.json').then(function(response) {
        			return response.data;
        		});
        	}]
        }
      });
  }]);
})();