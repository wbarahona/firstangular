//Global framework vars
	// Creating a module for the framework
		var angularApp = angular.module('angularApp', ['ngRoute']);
	// Creating a object of controller functions
		var controllers 	= {};



// Routes definition
// ----------------------------------------------------------------------------
	angularApp.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/viewA.htm',
				controller: 'indexController'
			})
			.when('/viewB', {
				templateUrl: 'views/viewB.htm',
				controller: 'indexController'
			})
			.when('/404', {
				templateUrl: 'views/404.htm',
				controller: 'indexController'
			})
			.otherwise({ redirectTo: '/404' });
	});

// Factory definition
// ----------------------------------------------------------------------------
	angularApp.factory('peopleFactory', [function () {
		// Data definition
		var people = [
			{name:'Willmer Cruz',			occupation:'Senior Goal Keeper'},
			{name:'Willmer Barahona',		occupation:'developer'},
			{name:'Joe Doe',				occupation:'jarheads gf banger'},
			{name:'John Smith',				occupation:'Mormonism Founder'}
		];
		
		var factory = {};

		factory.getPeople = function() {
			return people;
		};
		return factory;
	}]);

// Controllers definition
// ----------------------------------------------------------------------------
	controllers.indexController = function ($scope, peopleFactory) {
			$scope.people = [];

			init();
			
			function init() {
				$scope.people = peopleFactory.getPeople();
			}
		// Controller Function definition
			$scope.addPeople = function() {
				$scope.people.push({
					name 			:$scope.newPeople.nname,
					occupation 		:$scope.newPeople.noccupation
				});
			};
	};
	angularApp.controller(controllers);
