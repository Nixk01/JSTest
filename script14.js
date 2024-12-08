// Swtich Stmt

/*
const gr = 'E';
switch(gr){
    case 'B':
        console.log('Wrong attempt');
        break;
    case 'C':
        console.log('Wrong attempt');
        break;
    case 'A':
        console.log('Voila got it');
        break;
    case 'D':
        console.log('Wrong attempt');
        break;
    default:
        console.log('not found');
}

*/

// var & block scope;

const a=1;

if(true){
    const a=33;
    const n='nixk';
    console.log('inside',a,n);

    if(true){
    const a=66;
    console.log('inside 2nd block',a);
    }
}

console.log('outside',a);