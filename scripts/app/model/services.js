// Factories and Services definition
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