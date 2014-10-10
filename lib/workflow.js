(function(){
  var alfredo, i;
  alfredo = require('alfredo');
  i = new alfredo.Item({
    title: "A Title",
    subtitle: "This is only a test.",
    uid: "alfredo-test",
    valid: false
  });
  alfredo.feedback(i);
}).call(this);
