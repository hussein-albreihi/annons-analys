angular.module('annons-analys').controller(
		'LoginCtrl',
		[ '$scope', '$http', 'auth', 'store', '$location',
				function($scope, $http, auth, store, $location) {
					$scope.login = function() {
						auth.signin({}, function(profile, token) {
							// Success callback
							store.set('profile', profile);
							store.set('token', token);
							$location.path('post');
						}, function() {
							// Error callback
						});
					}
				} ]);
