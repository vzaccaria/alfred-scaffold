
require! 'alfredo'
require! 'winston'
path    = require('path')
_       = require('underscore')
_.str   = require('underscore.string');
moment  = require 'moment'
shelljs = require('shelljs')

_.mixin(_.str.exports());
_.str.include('Underscore.string', 'string');

winston.add(winston.transports.File, { filename: '~/.alfred-inspect.log', level: 'silly', prettyPrint: true });
winston.remove(winston.transports.Console);

winston.info process.argv


args = process.argv[2]

args = _.words(args)

# process arguments from here on...

# The following is just an example...

# words = _.reject args, -> 
#     _.str.include it, ":"

# fire = _.any words, ->
#     it.length > 4

# q-content = (txt) ->
#     "kMDItemTextContent=\"#txt\""

# q-contents = [ q-content(w) for w in words ] 

# query = q-contents * ' && '

# if fire 
#     winston.info "Executing query #query"
#     shelljs.exec "mdfind '#query' -onlyin ~", {+silent}, (err, output) ->
#         if not err
#             files = _.lines(output)
#             files = _.first(files, 30)
#             files = files.map ->
#                 new alfredo.Item(title: path.basename(it), subtitle: it, valid: true)
#             alfredo.feedback(files)
#         # alfredo.feedback(new alfredo.Item(title: "sorry", valid: true))

# else 
#     alfredo.feedback(new alfredo.Item(title: "sorry, try a longer term to look for", valid: false))
