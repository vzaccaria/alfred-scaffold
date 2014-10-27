(function(){
  var q, debug, _module;
  q = require('bluebird');
  debug = require('debug')('as:cache');
  _module = function(useRedis){
    var db, iface, this$ = this;
    useRedis == null && (useRedis = false);
    if (!useRedis) {
      db = require('levelup')(__dirname + "/../cache.db", {
        valueEncoding: 'json'
      });
      db = q.promisifyAll(db);
      iface = {
        open: function(){
          return q.resolve(true);
        },
        put: function(key, value){
          return db.putAsync(key, value);
        },
        get: function(key){
          return db.getAsync(key);
        },
        close: function(){
          return q.resolve(false);
        }
      };
      return iface;
    } else {
      this.client = {};
      return iface = {
        open: function(){
          if (_.isEmpty(this$.client)) {
            this$.client = require('redis').createClient();
            this$.client = q.promisifyAll(this$.client);
          }
          return q.resolve(true);
        },
        put: function(key, value){
          return this$.client.HMSETAsync(key, value);
        },
        get: function(key, value){
          return this$.client.hgetallAsync(key).then(function(it){
            if (it == null) {
              debug("Not found!! " + key);
              return q.reject("Invalid key");
            } else {
              return it;
            }
          });
        },
        close: function(){
          return this$.client.end();
        }
      };
    }
  };
  module.exports = _module;
}).call(this);
