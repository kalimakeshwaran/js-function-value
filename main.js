
//value//
//1.
let sum=(a,b) =>a*b;
console.log(sum(10,50));

//2
let sum1 =(a,b) => ((a*a)+(b*b));
console.log(sum1(2,4))

//3
let sum3 =(a,b,c) =>(a+b+c);
console.log(sum3(1,2,3));

//4
let sum4 =(a,b,c) =>((a*b)+(b*c)-(c*a)+(a*c));
console.log(sum4(10,20,30));

//5
let sum5=(a,b,c,d) =>(d*c*a*b);
console.log(sum5(10,29,46,46));

//6
let sum6=(a,b) =>(a+b);
console.log(sum6(546,464));

//7
sum7=(a,b)=>c=a*b;
sum71=(a=sum7(10,15))=>a=a*10;
console.log(sum7());

//8
call4=(a,b)=>c=a+b;
back4=(a=call4(15,100)) => a=a*1;
console.log(back4());




//9

call4=(a,b)=>c=a+b;
back4=(a=call4(15,100)) => a=a*19;
console.log(back4());




//10
call4=(a,b)=>c=a+b;
back4=(a=call4(15,100)) => a=a*16;
console.log(back4());
