// function runStack (n) {
//   if (n === 0) return 100;

// //return runStack( n- 2);
//   return setTimeout(function(){runStack( n- 2)},0);
// //   console.log('qqq');
// }
// runStack(50000)

function runStack (n, result=100) {
    if (n === 0) return result;
    return runStack( n- 2, result);
}
runStack(50000, 100)