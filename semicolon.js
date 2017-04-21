function retrunMisbehaves() {
      return {
          key: 1
      };
  }
  console.log(typeof retrunMisbehaves());

  function retrunMisbehaves() {
    return;         // 1
    {           // 2
        key: 1
      };
  }
  console.log(typeof retrunMisbehaves());

  var root = {};

  var elementOne = {key: '1'};
  var elementTwo = {key: '2'};

  root[elementOne] = 'Element One';
  root[elementTwo] = 'Element Two';


var root = {};

var elementOne = {
  key: '1',
  toString: function() {
    return '1';
  }
};

var elementTwo = {
  key: '2',
  toString: function() {
    return '2';
  }
};

  root[elementOne] = 'element one';
  root[elementTwo] = 'element two';
  console.log(root[elementOne], root[elementTwo]);


(function() {
  var func = function namedFuncExp() {
        return 23;
  };

  console.log(typeof func);
  console.log(typeof func());
  console.log(typeof namedFuncExp);
  console.log(typeof namedFuncExp());

})();