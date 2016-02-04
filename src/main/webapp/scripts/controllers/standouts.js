'use strict';

angular.module('annons-analys').controller(
		'StandsCtrl',
		[
				'$scope',
				'$http',
				'store',
				'$location',
				'localStorageService',
                'myFactory',
				function($scope, $http, localStorageService, store,
						$location, myFactory) {

					$scope.keywords = localStorageService.get('keywords');
					$scope.missingkeywords = localStorageService.get('missingkeywords');


                    $scope.allKeywords = { keywords: []};

                    $scope.confirmAll = function() {
                        for(var i = 0; i < $scope.keywords.length; i++) {
                            $scope.allKeywords.keywords.push($scope.keywords[i]);
                        }
                        for(var i = 0; i < $scope.missingkeywords.length; i++) {
                            $scope.allKeywords.keywords.push($scope.missingkeywords[i]);
                        }

                        myFactory.saveKeywordsToDatabase($scope.allKeywords);

                    };

                    $scope.theKeywords = localStorageService.get('allKeywords');
                    $scope.position = localStorageService.get('ls.position');
                    $scope.employer = localStorageService.get('ls.employer');


                    $scope.createDoc = function() {

                        console.log("keywords :" + localStorageService.get('allKeywords') + " position: " +
                            localStorageService.get('ls.position') + " employer: " + localStorageService.get('ls.employer'));

                        var loadFile = function(url, callback) {
                            JSZipUtils.getBinaryContent(url,callback);
                        };

                            loadFile("../documents/applicationMall.docx",function(err,content){
                            var doc=new Docxgen(content);
                            doc.setData( {"position": $scope.position,
                                    "employer": $scope.employer,
                                    "keywords": $scope.theKeywords.toLocaleString(),
                                    "info":"New Website"
                                }
                            ); //set the templateVariables
                            doc.render(); //apply them (replace all occurences of {first_name} by Hipp, ...)
                            var out=doc.getZip().generate({type:"blob"}); //Output the document using Data-URI
                            saveAs(out,"output.docx")
                     });
                    };



				} ]);
