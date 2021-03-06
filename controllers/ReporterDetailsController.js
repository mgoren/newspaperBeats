app.controller('ReporterDetailsCtrl', function ReporterDetailsCtrl($scope, $stateParams, ReportersFactory, BeatsFactory, UtilitiesFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.ReportersFactory = ReportersFactory;
  $scope.BeatsFactory = BeatsFactory;
  $scope.reporter = UtilitiesFactory.findById(ReportersFactory.reporters, $stateParams.reporterID)
  $scope.activate = UtilitiesFactory.activate;

  $scope.beat = function(reporter) {
    return UtilitiesFactory.findById($scope.BeatsFactory.beats, reporter.beatID);
  };

});
