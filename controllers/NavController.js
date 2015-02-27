app.controller('NavCtrl', function NavCtrl($scope, UtilitiesFactory) {
  $scope.activate = UtilitiesFactory.activate;
  $scope.UtilitiesFactory = UtilitiesFactory;
});
