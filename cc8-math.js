console.log("Minimum number");
console.log(Math.min(5,78,23,41,67,84,22,10,1));

console.log("Maximum number");
console.log(Math.max(5,78,23,41,67,84,22,10,1));

const arr=[5,78,23,41,67,84,22,10,1];
//console.log(arr);

var count = arr.length;
console.log("count=",count);

var sum=0;
for(var i=0;i<count;i++)
{
    sum = sum + arr[i];
}

var mean = sum/count;
console.log("Mean value=",mean);

console.log("ceiled value",Math.ceil(mean));