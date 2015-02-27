app.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, ReportersFactory, BeatsFactory, UtilitiesFactory) {
  $scope.ReportersFactory = ReportersFactory;
  $scope.reporters = ReportersFactory.reporters;
  $scope.BeatsFactory = BeatsFactory;
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatID)

  $scope.addReporter = function() {
    $scope.beat.reporterIDs.push($scope.reporters.length + 1)
    $scope.reporters.push({ name: $scope.reporterName, years: $scope.reporterYears, bday: $scope.reporterBday, id: $scope.reporters.length + 1 });
    $scope.reporterName = null;
    $scope.reporterYears = null;
    $scope.reporterBday = null;
  };

  $scope.reporterById = function(reporterID) {
    return UtilitiesFactory.findById($scope.reporters, reporterID);
  }

  $scope.debug = function() {debugger;};

});
