app.controller('BeatsCtrl', function BeatsCtrl($scope, BeatsFactory, UtilitiesFactory) {
  $scope.BeatsFactory = BeatsFactory;
  $scope.beats = BeatsFactory.beats;
  $scope.activate = UtilitiesFactory.activate;
});
