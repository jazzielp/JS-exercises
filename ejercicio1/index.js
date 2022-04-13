const numMax = 10;
const legend = "tabla del ";

const mult = number => {
    console.log(legend + number);

    for(let i = 1; i <= numMax; i++){
        let result = i * number;
        console.log(`  ${i} x ${number} = ${result}`);
    }
}

const setNumber = () => {
    
    let num = prompt("Introduce el numero a multiplicar:", 0);
    mult(num);
} 

setNumber();