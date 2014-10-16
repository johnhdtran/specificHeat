(function(){
	'use strict';

var calcCtrl = function() {
	this.title = 'Calculator';
	this.homeItems = ['home', 'calculator', 'engineering tools'];


	this.Qeqn = function() {
		this.heatEnergy = ( this.mass * this.heatc * (this.Ti - this.Tf) );
	};

	this.checkAns = function() {
		if(this.myAns !== this.heatEnergy)
		{
			alert('Please check your calculations!');
		}
		else {
			alert('Good job! You got the correct answer!');
		}
	};
};

angular
	.module('myApp')

	.controller('calcCtrl', [
		calcCtrl
		]);

})();