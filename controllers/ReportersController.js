app.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, ReportersFactory, BeatsFactory, UtilitiesFactory) {
  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.ReportersFactory = ReportersFactory;
  $scope.BeatsFactory = BeatsFactory;
  $scope.reporters = ReportersFactory.reporters;
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatID)
  $scope.activate = UtilitiesFactory.activate;


  $scope.addReporter = function() {
    $scope.beat.reporterIDs.push($scope.reporters.length + 1)
    $scope.reporters.push({ name: $scope.reporterName, years: $scope.reporterYears, bday: $scope.reporterBday, id: $scope.reporters.length + 1, beatID: $scope.beat.id });
    $scope.reporterName = null;
    $scope.reporterYears = null;
    $scope.reporterBday = null;
  };

  $scope.reporterById = function(reporterID) {
    return UtilitiesFactory.findById($scope.reporters, reporterID);
  };

});
