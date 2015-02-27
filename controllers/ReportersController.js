app.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatID)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName });
    $scope.reporterName = null;
  }
});
