function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
  
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
    
    return innerVariable;
  }
}

function doNothing()
{}
function sayHello() {
  console.log('Hello!')
}
function SayHelloToIsabel() {
  console.log('Hello, Isabel!')
}
