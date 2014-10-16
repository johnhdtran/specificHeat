(function(){
	'use strict';

var homeCtrl = function($scope, $http, names) {
	this.title = 'Home';
	this.selectedValue = 'home';
};

angular
	.module('myApp')

	.controller('homeCtrl', [
		'$scope',
		'$http',
		homeCtrl
		]);

})();
