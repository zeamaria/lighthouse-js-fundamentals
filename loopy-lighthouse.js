/* var start = 100; // when to start
while (start <= 200) { // when to stop
  console.log(start);
  start ++; // how to get to the next item
} 
*/


/* let start = 100;
while (start <=200) {
  console.log(start);
  start ++;
}
*/


for (let i = 100; i <=200; i++){
  if(i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  } else if(i % 3 === 0) {
    console.log("Loopy");
  }
  else if(i % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    console.log(i);
  }
}


/*
for (let i = 100; i <=200; i++){
  if(i % 3 === 0 && i % 4 === 0){
    console.log("Loopylighthouse");
  }else if (i % 4 === 0){
    console.log("Lighthouse");
  }else if (i % 3 === 0){
    console.log("Loopy");
    }
  }
*/

/*
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number. */