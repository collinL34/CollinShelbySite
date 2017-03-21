angular.module('AngularConfig', ['Angular.config'])
    .run(function(GOOGLE) {
        console.log("The string constant!", GOOGLE);
    });
