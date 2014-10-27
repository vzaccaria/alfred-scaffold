
# var alfredo = 'alfredo'

# /* Just an example */
# alfredo.feedback(new alfredo.Item({title: "you item name", valid: false}))

debug                     = require('debug')('as:main')
_                         = require('lodash')
filter                    = require('fuzzy-filter')
q                         = require('bluebird')
ev                        = require('extract-values')
moment                    = require('moment')
urlencode                 = require('urlencode')

# false = use lowdown db instead of redis
cachedb                   = require('./cache')(false)
{item, feedback, noitem}  = require('./feedback')
S                         = require('string');

# Cache 10 queries
{ showqueries, addquery } = require('./querycache')(cachedb,10)


cachedb.open!
    .then(showqueries)
    .then ->
        cachedb.close!





