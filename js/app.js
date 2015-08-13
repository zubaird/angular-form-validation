angular.module('practiceApp',[])
.controller('mainController',["$scope", function($scope){
    $scope.submitted = false;
    $scope.submitForm = function(isValid) {
      if (isValid) {
        $scope.submitted = true;
      }
    };
  }
])
