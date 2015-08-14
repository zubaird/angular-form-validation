var ONLYNUMBERS = /^\-?\d+$/;

angular.module('practiceApp',[])
.controller('mainController',["$scope", function($scope){

    $scope.user = {};
    $scope.party = {};



    $scope.$watch('user.firstname', function() {
      if ($scope.user.firstname != undefined) {
        $scope.user.firstname = $scope.user.firstname.slice(0,1).toUpperCase() + $scope.user.firstname.slice(1)
      };
    })

    $scope.$watch('user.lastname', function() {
      if ($scope.user.lastname != undefined) {
        $scope.user.lastname = $scope.user.lastname.slice(0,1).toUpperCase() + $scope.user.lastname.slice(1)
      };
    })

    $scope.$watch('party.firstname', function() {
      if ($scope.party.firstname != undefined) {
        $scope.party.firstname = $scope.party.firstname.slice(0,1).toUpperCase() + $scope.party.firstname.slice(1)
      };
    })

    $scope.$watch('party.lastname', function() {
      if ($scope.party.lastname != undefined) {
        $scope.party.lastname = $scope.party.lastname.slice(0,1).toUpperCase() + $scope.party.lastname.slice(1)
      };
    })

    $scope.submitted = false;
    $scope.submitForm = function(isValid) {
      if (isValid) {
        $scope.submitted = true;
      }
    };
  }

])
.directive('phoneNumber', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.phonevalid = function(modelValue,viewValue){
        var phoneNum = elm[0].value.replace(/\(|\)|\-/g,"")
        var firstThree = phoneNum.slice(0, 3)
        var secondThree = phoneNum.slice(3,6)
        var lastFour = phoneNum.slice(6)

        function validNumbers(expectedCount, nums){
          return viewValue.length == expectedCount && ONLYNUMBERS.test(nums)
        }

        if (ctrl.$isEmpty(modelValue)) {
          return true
        }
        if ( validNumbers(3,firstThree)) {
          elm[0].value = "\(" + firstThree + "\)"
          return false
        }
        if (validNumbers(8,firstThree + secondThree)) {
          elm[0].value = "\(" + firstThree + "\)" + secondThree + "-"
          return false
        }
        if (validNumbers(13,firstThree + secondThree + lastFour)) {
          elm[0].value = "\(" + firstThree + "\)" + secondThree + "-" + lastFour;
          return true
        }
        return false
      }
    }
  };
})
