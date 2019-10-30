n = 5;
numArray = [];
numTotal = 1;
for(i = 0; n > i; n -= 1) {
numArray.push(n);
}
numArray.forEach(function(myNumb) {
numTotal *= myNumb;
});

console.log(numArray, numTotal)
