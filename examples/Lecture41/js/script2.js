var message = "in global";
console.log("global: message = " + message);

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);
  b();
}

// function b is defined in Global Scope
// so the message will be = "in global"

function b () {
    console.log("b: message = " + message); 
  }

a();