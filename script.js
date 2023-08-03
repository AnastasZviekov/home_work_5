arr=[];
userArrLength=prompt(`choose length of array 2-10`);
revisedArrLength=parseFloat(Math.round(Math.abs(userArrLength)));
minLength=2;
maxLength=10;



while(revisedArrLength<minLength||revisedArrLength>maxLength||revisedArrLength===null){
    revisedArrLength=prompt(`choose length of array 2-10`);
    revisedArrLength=parseFloat(Math.round(Math.abs(revisedArrLength)));
    if(revisedArrLength>minLength&&revisedArrLength<maxLength) {
        arr.length=revisedArrLength;
        break;
    }
}

 arr.length=revisedArrLength;
console.log(revisedArrLength);
console.log(arr);
console.log(arr.length);


minRandom=Math.ceil(-10);
maxRandom=Math.floor(10);
for (let i=0; i<arr.length; i++) {
    randomFigure= Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom;
    if (randomFigure>minRandom&&randomFigure<maxRandom){
        arr[i] = randomFigure;
    } else {
        arr[i]=Math.floor(Math.random()*10);
    }
}
console.log(arr);


minArrNumber=maxArrNumber=arr[0];

multiplyArrRes=1;
for(let i=0; i<arr.length; i++) {
    multiplyArrRes*=arr[i];
    currentNumb=arr[i];
    if (currentNumb<minArrNumber) {
       minArrNumber=currentNumb;
    }
    if (currentNumb>maxArrNumber) {
        maxArrNumber=currentNumb;
    }

}

console.log(`${minArrNumber} is minimum number in the Array`);
console.log(`${maxArrNumber} is maximum number in the Array`);
console.log(multiplyArrRes);

document.write(`<ul> <li>Array: ${arr} </li>
<li> min number in the Array ${minArrNumber} </li>
<li> max Number in the  Array ${maxArrNumber} </li>
<li> multiplication of numbers in the Array ${multiplyArrRes} </li>
</ul>
`);

