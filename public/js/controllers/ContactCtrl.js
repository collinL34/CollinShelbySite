angular.module('ContactCtrl', ['Angular.config'])
    .controller('ContactCtrl', function($scope) {
        $scope.email = {
            subject: undefined,
            sender: undefined,
            message: undefined
        };

        $scope.sendEmail = function() {
            console.log($scope.message, $scope.subject, $scope.sender);
        }
    })
