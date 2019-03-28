function getInput() {
    const inputOz = document.getElementById('userInput').value;

    const convertToCups = inputOz / 8;

    
}


function amountDrank() {
    const inputOunces = document.getElementById('userInput').value;
    const getAmount = document.getElementById('incrementAmount').value;
    const setFlag = true;
    while( setFlag ) {
        const l = parseInt(getAmount) + parseInt(inputOunces);
        console.log(l);
    }

    
    

}