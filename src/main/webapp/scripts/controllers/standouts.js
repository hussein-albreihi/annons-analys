'use strict';

angular.module('annons-analys').controller(
		'StandsCtrl',
		[
				'$scope',
				'$http',
				'store',
				'$location',
				'localStorageService',
				function($scope, $http, localStorageService, store,
						$location) {

					$scope.allKeywords = localStorageService.get("allkeywords");
					$scope.info = localStorageService.get('info');
					
				} ]);
