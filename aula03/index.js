document.querySelector("button").addEventListener("click", calculate);

function calculate () {
    
    const operating1 = parseInt(document.querySelector("#operating1").value);
    const operating2 = parseInt(document.querySelector("#operating2").value);
    const result = document.querySelector("#result");
    let select = document.querySelector("#operator").value;
    
     // ------ Soma ------ 
    if (select == "+") {
        const addition = operating1 + operating2;

        result.innerHTML = `${addition}`;
        console.log(`${addition}`);
    // ------ Divisão ------ 
    } else if (select == "/") {
        const division = parseFloat(operating1 / operating2).toFixed(2);

        result.innerHTML = `${division}`;
        console.log(`${division}`);
    // ------ Subtração ------ 
    } else if (select == "-") {
        const subtraction = operating1 - operating2;
        
        result.innerHTML = `${subtraction}`;
        console.log(`${subtraction}`);
    // ------ Multiplicação ------ 
    } else if (select == "*") {
        const multiplication = operating1 * operating2;

        result.innerHTML = `${multiplication}`;
        console.log(`${multiplication}`);
    }
}