var app = angular.module('Beats', ['ui.router']);

app.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('reporters', {
    url: "/reporters",
    templateUrl: "partials/reporters.html",
    controller: 'ReportersCtrl'
  });

  $stateProvider.state('home.reporters', {
    url: "/:beatID",
    templateUrl: "partials/home.reporters.html",
    controller: 'ReportersCtrl'
  });

  $stateProvider.state('reporter-details', {
    url: "/reporters/:reporterID",
    templateUrl: "partials/reporter-details.html",
    controller: 'ReporterDetailsCtrl'
  });
  
});
