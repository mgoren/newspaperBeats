app.factory('UtilitiesFactory', function() {

  var factory = {};
  factory.active = "beats";

  factory.activate = function(tab) {
    factory.active = tab;
  };

  factory.findById = function(collection, id) {

    for (var i=0; i<collection.length; i++) {
      if (collection[i].id == id) { return collection[i]; }
    }
    return null;
  };
  return factory;
});
