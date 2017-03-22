angular.module('ContactCtrl', ['ngMap', 'Angular.config'])
    .controller('ContactCtrl', function($scope, NgMap, GOOGLE) {
        $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE;

        // NgMap.getMap().then(function(map) {
        //     console.log(map.getCenter());
        //     console.log('markers', map.markers);
        //     console.log('shapes', map.shapes);
        // });
        NgMap.getMap('gmap', { timeout: 200000 }).then(function(map) {
            console.log('map initialized');
        }).catch(function(map) {
            console.error('map error: ', map);
        });
    })
