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
  //console.log(typeof namedFuncExp());

})();

(function() {
  var func = function namedFuncExp() {
    console.log('60', typeof namedFuncExp);
    return 23;
  };
  func();
})();

// function foo(){} // declaration, since it's part of a <em>Program</em>
// var bar = function foo(){}; // expression, since it's part of an <em>AssignmentExpression</em>

// new function bar(){}; // expression, since it's part of a <em>NewExpression</em>

// (function(){
//   function bar(){} // declaration, since it's part of a <em>FunctionBody</em>
// })();


function testing() {
  console.log('68', typeof testing)
}

console.log('71',typeof testing);

(function() {
  var fun = function() {
    console.log('75', typeof fun);
  }

  function newFunc() {

  fun();
  }

newFunc()

})();

//(function(){console.log(6)})()

(function(){
  var newScope = function scopeExp() {
      console.log('98', typeof scopeExp);
      console.log('99', typeof newScope);

      return 23;

  }

  console.log(typeof scopeExp)
  console.log(typeof newScope)
})()



