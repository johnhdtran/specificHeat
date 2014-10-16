(function(){
	'use strict';

var lecturesCtrl = function() {
	this.title = 'Lectures';
	this.homeItems = ['home', 'lectures', 'engineering tools'];
};

angular
	.module('myApp')

	.controller('lecturesCtrl', [
		lecturesCtrl
		]);

})();