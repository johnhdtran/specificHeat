(function(){
	'use strict';

var engToolsCtrl = function(specificHeat) {
	this.title = 'Engineering Tools';
	this.header = 'Engineering Tools';
	this.specificHeat = specificHeat;
	this.homeItems = ['home', 'lectures', 'engineering tools'];
	this.sortField = 'name';
  	this.reverse = false;
};

angular
	.module('myApp')

	.controller('engToolsCtrl', [
		'specificHeat',
		engToolsCtrl
		]);

})();