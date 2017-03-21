angular.module('ContactCtrl', [])
    .controller('ContactCtrl', function($scope, NgMap) {
        // $scope.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=GOOGLE';
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });
    })
