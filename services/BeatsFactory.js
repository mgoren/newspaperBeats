app.factory('BeatsFactory', function BeatsFactory() {
  var factory = {};

  factory.beats = [];

  factory.addBeat = function() {
    factory.beats.push({ name: factory.beatName, id: factory.beats.length + 1, reporterIDs: [] });
    factory.beatName = null;
  };
  
  return factory;
})
