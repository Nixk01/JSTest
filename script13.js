// Logical opr. OR || & AND && 

// Else if stmt

/* 
const pass = "NixkJaadhav1"

if(pass.length>=12 && pass.includes('@')){
    console.log("Pass is Strong");    
} else if(pass.length>=8 || pass.includes('@') && pass.length >= 5){
    console.log("Pass is long");
} else{
    console.log("Not long enough");
}
*/

let n=false;
if(!n){
    console.log("Logged in")
}

// Brk & cont.

const sc= [22,11,0,44,100,5,53,33];

for(let i =0;i < sc.length;i++){
    if(sc[i]==0){
        continue; 
    }
    console.log('your scores are - ',sc[i]);
    if(sc[i]===100){
        console.log('Won!!')
        break;
    }
}