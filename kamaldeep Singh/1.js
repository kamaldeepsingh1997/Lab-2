//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34//

//Hey...! this is the solution to the question//

function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}


function zeros (n) {
  var exponent = Math.floor(Math.log(n)/Math.log(5));
  var sum=0;
  for(var i=1; i<=exponent; i++){
    var num=Math.pow(5,i);
    sum+=Math.floor(n/num);
  }
  return sum;
}