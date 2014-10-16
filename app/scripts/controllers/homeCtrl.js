(function(){
	'use strict';

var homeCtrl = function($scope, $http, names) {
	this.title = 'Home';
	this.header = 'Home';
	this.names = names;
	this.homeItems = ['home', 'lectures', 'engineering tools'];
	this.selectedValue = 'home';

	this.saveNames = function() {
		$http.post('/api/names.json', names);
	};
};

angular
	.module('myApp')

	.controller('homeCtrl', [
		'$scope',
		'$http',
		'names',
		homeCtrl
		]);

})();