angular.module('ContactCtrl', ['Angular.config'])
    .controller('ContactCtrl', function($scope, $http) {
        $scope.email = {};

        $scope.sendEmail = function() {
            $scope.email = { subject: $scope.subject, sender: $scope.sender, message: $scope.message };

            console.log($scope.email);
            $http.post('/contact-email', $scope.email)
                .then(function(data) {
                        console.log(data, 'success');
                        $scope.email = {};
                    },
                    function(response) {
                        console.log(response, 'error');
                    });
        };
    })
