app.controller('BeatsCtrl', function BeatsCtrl($scope, BeatsFactory) {
  $scope.BeatsFactory = BeatsFactory;
  $scope.beats = BeatsFactory.beats;
});
