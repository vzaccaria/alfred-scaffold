(function(){
  var filter, _, debug, _module;
  filter = require('fuzzy-filter');
  _ = require('lodash');
  debug = require('debug')('as:filter');
  _module = function(){
    var iface;
    iface = {
      filterBy: function(pattern, array, accessor, opts){
        var indexed, names, filtered;
        debug(pattern);
        indexed = _.groupBy(array, accessor);
        names = array.map(accessor);
        filtered = filter(pattern, names, opts);
        debug(filtered);
        return _.flatten(_.values(_.pick(indexed, filtered)));
      }
    };
    return iface;
  };
  module.exports = _module();
}).call(this);
