'use strict';

angular.module('annons-analys').controller(
		'PrioCtrl',
		[
				'$scope',
				'$http',
				'store',
				'localStorageService',
				'$location',
                'myFactory',
				function($scope, $http, localStorageService, store, $location, myFactory) {

					var theKeys = {keywords : []};
					var keywords = localStorageService.get("keywords");
					var missingKeywords = localStorageService
							.get('missingkeywords');

					$scope.allKeywords = keywords.concat(missingKeywords);


					$scope.done = function() {
						localStorageService.set('allkeywords', $scope.allKeywords);

                        for(var i = 0; i < $scope.allKeywords.length; i++) {
                            theKeys.keywords.push($scope.allKeywords[i]);
                        }
                        console.log(theKeys);
                        myFactory.saveKeywordsToDatabase(theKeys);

						$location.path('info');
					};

                    $scope.theWords = localStorageService.get('allKeywords');
				} ]);