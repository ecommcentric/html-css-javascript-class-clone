var message = "in global";
console.log("global: message = " + message);

var a = function () {
  var message = "inside a";
  console.log("a: message = " + message);

// function b is defined inside function a
// so the message will be "inside a"

  function b () {
    console.log("b: message = " + message); 
  }

  b();
}

a();