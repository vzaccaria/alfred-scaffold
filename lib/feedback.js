(function(){
  var debug, S, _module, join$ = [].join;
  debug = require('debug')('as:feedback');
  S = require('string');
  _module = function(){
    var iface;
    iface = {
      item: function(obj){
        return (function(){
          var v;
          this.valid == null && (this.valid = false);
          this.subtitle == null && (this.subtitle = this.title);
          this.autocomplete == null && (this.autocomplete = 'none');
          this.icon == null && (this.icon = 'icon.png');
          this.argn == null && (this.argn = 'noarg');
          v = (function(){
            switch (false) {
            case !this.valid:
              return 'yes';
            default:
              return false;
            }
          }.call(this));
          return "<item autocomplete=\"" + S(this.autocomplete).escapeHTML() + "\" \n      uid=\"\" \n      valid=\"" + v + "\" \n      arg=\"" + this.arg + "\">\n      <title>" + S(this.title).escapeHTML() + "</title>\n  <subtitle>" + S(this.subtitle).escapeHTML() + "</subtitle>\n  <icon>" + this.icon + "</icon>\n</item>";
        }.call(obj));
      },
      noitem: function(){
        return "";
      },
      feedback: function(items){
        console.log("<items>");
        console.log(join$.call(items, '\n'));
        return console.log("</items>");
      }
    };
    return iface;
  };
  module.exports = _module();
}).call(this);
