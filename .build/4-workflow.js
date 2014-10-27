(function(){
  var debug, _, filter, q, ev, moment, urlencode, cachedb, ref$, item, feedback, noitem, S, showqueries, addquery;
  debug = require('debug')('as:main');
  _ = require('lodash');
  filter = require('fuzzy-filter');
  q = require('bluebird');
  ev = require('extract-values');
  moment = require('moment');
  urlencode = require('urlencode');
  cachedb = require('./cache')(false);
  ref$ = require('./feedback'), item = ref$.item, feedback = ref$.feedback, noitem = ref$.noitem;
  S = require('string');
  ref$ = require('./querycache')(cachedb, 10), showqueries = ref$.showqueries, addquery = ref$.addquery;
  cachedb.open().then(showqueries).then(function(){
    return cachedb.close();
  });
}).call(this);
