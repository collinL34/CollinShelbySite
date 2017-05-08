angular.module('ContactCtrl', ['Angular.config'])
    .controller('ContactCtrl', function($scope, $http) {
        $scope.email = {};

        $scope.sendEmail = function() {
            $scope.email = { name: $scope.name, subject: $scope.subject, sender: $scope.sender, message: $scope.message };

            $http.post('/contact-email', $scope.email)
                .then(function(data) {
                        console.log(data, 'success');
                    },
                    function(response) {
                        console.log(response, 'error');
                    });
            $scope.name = '';
            $scope.sender = '';
            $scope.subject = '';
            $scope.message = '';
        };
    })
