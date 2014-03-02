/**
 * Gets my Rdio 'Current Rotation' playlist via my proxy at api.capshaw.me. The
 * proxy server handles all of the hard parts and keeps my API key secret.
 *
 * As a note: usually, you would never build an Angular.js app in one file.
 * However, the scope of this project is so small that I figured it would be
 * silly to split it into multiple files.
 */
'use strict';

var api_url = 'http://api.capshaw.me/rdio/rotation/';
var rotation = angular.module('rotation', []);

rotation.controller('RotationCtrl', function RotationCtrl($scope, $http) {
    $http({
        method: 'GET',
        url: api_url
    }).
    success(function(data, status, headers, config) {
        $scope.playlist = data;
    }).
    error(function(data, status, headers, config) {
        $scope.error = true;
        $scope.error_message = status;
    });
});