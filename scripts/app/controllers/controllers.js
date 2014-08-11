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
