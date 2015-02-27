app.controller('ReporterDetailsCtrl', function ReporterDetailsCtrl($scope, $stateParams, ReportersFactory, BeatsFactory, UtilitiesFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.ReportersFactory = ReportersFactory;
  $scope.BeatsFactory = BeatsFactory;
  $scope.reporter = UtilitiesFactory.findById(ReportersFactory.reporters, $stateParams.reporterID)

});
