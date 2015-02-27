var app = angular.module('Beats', ['ui.router']);

app.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('beats', {
    url: "/beats",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.reporters', {
    url: "/:beatID",
    templateUrl: "partials/beats.reporters.html",
    controller: 'ReportersCtrl'
  });

  $stateProvider.state('reporters', {
    url: "/reporters/:reporterID",
    templateUrl: "partials/reporters.html",
    controller: 'ReporterDetailsCtrl'
  });
  
});
