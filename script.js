var operationArray = ["", "", ""];

const numberButtons = document.querySelectorAll(".number-btn");
const operationButtons = document.querySelectorAll(".operation-btn");


// Get the value of a number button when clicked, and stores it in the operationArray
numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        const number = this.getAttribute("data-number");
        const index = operationArray[1] === "" ? 0 : 2;
        if(operationArray[index].length < 10){
            operationArray[index] += number;
            console.log(operationArray);
        }
    })
})

// Get the operation button when clicked, and stores it in the operationArray
operationButtons.forEach(button =>{
    button.addEventListener('click', function (){
        const operation = this.getAttribute("data-operation");
            operationArray[1] = operation;
            console.log(operationArray);
    })
})