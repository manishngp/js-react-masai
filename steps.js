// function minimumSteps(n) {
     let n = 999999;  
    let step =0;
   while(n>0){
      if(n>5){
         step = Math.floor(n/5)
         n = n % 5;
       }
     else if(n>4){
       step++;
       n = n-4;
     }
     else if(n>3){
       step++;
       n = n-3;
     }
     else if(n>2){
       step++;
       n = n-2;
     }
     else if(n==1){
       step++
       n--;
     }
  
   }
console.log(step);
// }