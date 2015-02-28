app.factory('BeatsFactory', function BeatsFactory(UtilitiesFactory) {
  var factory = {};
  var utils = UtilitiesFactory;

  factory.beats = [];

  factory.addBeat = function() {
    factory.beats.push({ name: utils.capitalize(factory.beatName), id: factory.beats.length + 1, reporterIDs: [] });
    factory.beatName = null;
  };
  
  return factory;
})
