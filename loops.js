function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 1){array.push("I am 1 strange loop.")}
    else {array.push("I am ${i} strange loops.")}
  }
  return array;
}
function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n = n - 1;
  }
  return "done";
}
function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
 while (array.length > 0 && maybeTrue())
 {array.length = array.length-1};
 return array;
}
