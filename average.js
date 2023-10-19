function calculateAverage(...args) {
    var x = 0;
    var y = 0;
    console.log(...args);
    for (var i=0; i < args.length; i++) {
         x += args[i];
    }
     y = x / args.length;
     return y;
}

module.exports = calculateAverage;
// console.log(calculateAverage(2,2));