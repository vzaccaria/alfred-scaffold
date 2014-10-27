(function(){
  var debug, _, filter, q, ev, moment, urlencode, ref$, item, feedback, noitem, S, _module;
  debug = require('debug')('as:main');
  _ = require('lodash');
  filter = require('fuzzy-filter');
  q = require('bluebird');
  ev = require('extract-values');
  moment = require('moment');
  urlencode = require('urlencode');
  ref$ = require('./feedback'), item = ref$.item, feedback = ref$.feedback, noitem = ref$.noitem;
  S = require('string');
  _module = function(cachedb, limit){
    var iface, this$ = this;
    this.queries = [];
    iface = {
      addquery: function(s){
        return cachedb.get('queries').then(function(queries){
          return this$.queries = _.values(queries);
        })['catch'](function(){
          return this$.queries = [];
        }).then(function(){
          var found, i, ref$, r;
          debug(this$.queries);
          found = false;
          for (i in ref$ = this$.queries) {
            r = ref$[i];
            if (s.substr(0, r.value.length) === r.value) {
              this$.queries[i] = {
                value: s,
                date: moment()
              };
              found = true;
              break;
            }
          }
          if (!found) {
            this$.queries.push({
              value: s,
              date: moment()
            });
          }
          this$.queries = _.sortBy(this$.queries, function(it){
            return -1 * moment(it.date).valueOf();
          });
          this$.queries = _.first(this$.queries, limit);
          debug("Writing queries " + JSON.stringify(this$.queries, 0, 4));
          return cachedb.put('queries', this$.queries);
        });
      },
      showqueries: function(){
        return cachedb.get('queries').then(function(queries){
          var items;
          items = queries.map(function(v){
            return item({
              title: v.value,
              subtitle: "query cached",
              autocomplete: v.value,
              valid: true
            });
          });
          return feedback(items);
        })['catch'](function(){
          var items;
          items = [""];
          return feedback(items);
        });
      }
    };
    return iface;
  };
  module.exports = _module;
}).call(this);
