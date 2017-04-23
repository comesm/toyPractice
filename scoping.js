var name = "John";

  (function(){
      console.log("The name is : " + name);

      var name = "Jane";

      console.log("The name is : " +name);
  })();

var data = [0, 1, 2];
  var funcs = [];

  function init() {           // 0
    for (var i = 0; i < 3; i++) {

        var x = data[i];        // 1
        var innerFunc = function() {
          // 2
          return x;
        };

      funcs.push(innerFunc);      // 3
    }
  }

  function run() {            // 4
    for (var i = 0; i < 3; i++) {
        console.log(data[i] + ", " +  funcs[i]());   // 5
      }
  }

  init();
  run();