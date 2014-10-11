(function(){
  var alfredo, winston, path, _, moment, shelljs, args;
  alfredo = require('alfredo');
  winston = require('winston');
  path = require('path');
  _ = require('underscore');
  _.str = require('underscore.string');
  moment = require('moment');
  shelljs = require('shelljs');
  _.mixin(_.str.exports());
  _.str.include('Underscore.string', 'string');
  winston.add(winston.transports.File, {
    filename: '~/.alfred-inspect.log',
    level: 'silly',
    prettyPrint: true
  });
  winston.remove(winston.transports.Console);
  winston.info(process.argv);
  args = process.argv[2];
  args = _.words(args);
}).call(this);
