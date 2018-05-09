//Hold on!
//Functional Programming, no variables
//Calling another method in amethod
test(successor(5))

function successor(a) {
  myNum = (a + 1);
  return myNum;
}

//
function test() {
  return (myNum - 1);
}

var predecessor = function(myNum) {
  return (myNum - 1);
}
//var m = predecessor(n);
//var o = predecessor(successor(5));

//Upg 3
//with if
function not(v) {
  if (v == true) {
    return false;
  } else {
    return true;
  }
}

//styled with if
function not2(b) {
  if (b) {
    return false;
  } //else
  return true;
}

//without if
function not3(b) {
  return !b;
}

console.log(not3(true), not3(false));

//upg 4
function successor2(a) {
  return ++a;
}

//upg 5
// function authenticate(userName, passWord) {
// if uerName = 'jonkri' && passWord = 'secret' {
//   return true;
// }else {
//   return false;
// }
// }
