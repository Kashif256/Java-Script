// loops is also know as iterative loops

for(let i= 0 ; i<5 ; i++){
    const element = i;
    if(element == 3){
        console.log("3 it is best number");
    }
    //console.log(i);  // o/p-> 0,1,2,3 it is best number,3,4,.
}

//i=10
for(i =0 ; i<=6; i++){
    //const element=i; // [during both execution the o/p is same 0,1,2,3,4,5,6]
    //console.log(i)
}

//****************************   LOOP INSIDE LOOP */


//for(let i=0; i<=5; i++){
    //console.log(`outerloops value: ${i}`);
    /**for(let j=0; j<=5; j++){
     console.log(`innner loops value: ${j} and outer loop value is ${i}`);  /** o/p ->[outerloops value: 0
innner loops value: 0 and inner loop value is 0
innner loops value: 1 and inner loop value is 0
innner loops value: 2 and inner loop value is 0
innner loops value: 3 and inner loop value is 0
innner loops value: 4 and inner loop value is 0
innner loops value: 5 and inner loop value is 0
outerloops value: 1
innner loops value: 0 and inner loop value is 1
innner loops value: 1 and inner loop value is 1
innner loops value: 2 and inner loop value is 1
innner loops value: 3 and inner loop value is 1
innner loops value: 4 and inner loop value is 1
innner loops value: 5 and inner loop value is 1
outerloops value: 2
innner loops value: 0 and inner loop value is 2
innner loops value: 1 and inner loop value is 2
innner loops value: 2 and inner loop value is 2
innner loops value: 3 and inner loop value is 2
innner loops value: 4 and inner loop value is 2
innner loops value: 5 and inner loop value is 2
outerloops value: 3
innner loops value: 0 and inner loop value is 3
innner loops value: 1 and inner loop value is 3
innner loops value: 2 and inner loop value is 3
innner loops value: 3 and inner loop value is 3
innner loops value: 4 and inner loop value is 3
innner loops value: 5 and inner loop value is 3
outerloops value: 4
innner loops value: 0 and inner loop value is 4
innner loops value: 1 and inner loop value is 4
innner loops value: 2 and inner loop value is 4
innner loops value: 3 and inner loop value is 4
innner loops value: 4 and inner loop value is 4
innner loops value: 5 and inner loop value is 4
outerloops value: 5
innner loops value: 0 and inner loop value is 5
innner loops value: 1 and inner loop value is 5
innner loops value: 2 and inner loop value is 5
innner loops value: 3 and inner loop value is 5
innner loops value: 4 and inner loop value is 5
innner loops value: 5 and inner loop value is 5
PS C:\Users\kashi\OneDrive\Documents\Desktop\Javascript> node 08_loops/01_loops.js
3 it is best number
outerloops value: 0
innner loops value: 0 and outer loop value is 0
innner loops value: 1 and outer loop value is 0
innner loops value: 2 and outer loop value is 0
innner loops value: 3 and outer loop value is 0
innner loops value: 4 and outer loop value is 0
innner loops value: 5 and outer loop value is 0
outerloops value: 1
innner loops value: 0 and outer loop value is 1
innner loops value: 1 and outer loop value is 1
innner loops value: 2 and outer loop value is 1
innner loops value: 3 and outer loop value is 1
innner loops value: 4 and outer loop value is 1
innner loops value: 5 and outer loop value is 1
outerloops value: 2
innner loops value: 0 and outer loop value is 2
innner loops value: 1 and outer loop value is 2
innner loops value: 2 and outer loop value is 2
innner loops value: 3 and outer loop value is 2
innner loops value: 4 and outer loop value is 2
innner loops value: 5 and outer loop value is 2
outerloops value: 3
innner loops value: 0 and outer loop value is 3
innner loops value: 1 and outer loop value is 3
innner loops value: 2 and outer loop value is 3
innner loops value: 3 and outer loop value is 3
innner loops value: 4 and outer loop value is 3
innner loops value: 5 and outer loop value is 3
outerloops value: 4
innner loops value: 0 and outer loop value is 4
innner loops value: 1 and outer loop value is 4
innner loops value: 2 and outer loop value is 4
innner loops value: 3 and outer loop value is 4
innner loops value: 4 and outer loop value is 4
innner loops value: 5 and outer loop value is 4
outerloops value: 5
innner loops value: 0 and outer loop value is 5
innner loops value: 1 and outer loop value is 5
innner loops value: 2 and outer loop value is 5
innner loops value: 3 and outer loop value is 5
innner loops value: 4 and outer loop value is 5
innner loops value: 5 and outer loop value is 5] */
  //  }
//}


for(let i=0; i<=5; i++){
    //console.log(`outerloops value: ${i}`);
    for(let j=0; j<=5; j++){
       // console.log(i + '*' + j + '=' + i*j);
    }
}


// break and continue

for (let i = 1; i<=20; i++){
    if (i==5){
        //console.log(`detectedb 5`); 
        break
    }
    //console.log(`value of i is ${i}`);
}

for (let i = 1; i<=20; i++){
    if (i==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is ${i}`);
}