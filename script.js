class Calculator
{
    constructor(prevData, currData)
    {
        this.dataPrev = prevData;
        this.dataCurrent = currData;
        this.clear();
    }

    clear()
    {
        this.prevOperand = '';
        this.currOperand = '';
        this.operation = undefined;
        this.dataCurrent.innerText = '';
        this.dataPrev.innerText = '';
    }

    compute()
    {
        let computation
        
        const curr = parseFloat(this.currOperand)
        const prev = parseFloat(this.prevOperand)
        console.log(curr +' '+prev+' '+this.operation)
        if(isNaN(prev) || isNaN(curr)) return
        switch(this.operation)
        {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '/':
                computation = prev / curr;
                break;
            default:
                return;
        }
                // this.operation = undefined;
                // this.prevOperand = '';
                this.currOperand = computation;
        
    }
    delete()
    {
        this.currOperand = this.currOperand.toString().slice(0, -1);
        console.log(this.currOperand)
    }
    

    appendNumber(number)
    {
        if(number === '.' && this.currOperand.includes('.')) return
        this.currOperand = this.currOperand.toString() + number.toString();
    }

    chooseOperation(operation)
    {
        this.operation = operation;
        this.prevOperand = this.currOperand;
        this.currOperand = ''
    }
    updateDisplay()
    {
        this.dataCurrent.innerText = this.currOperand;
        this.dataPrev.innerText = this.prevOperand.toString() + this.operation.toString();
    }
}

const dataNumber = document.querySelectorAll('[data-num]');
const dataOperation = document.querySelectorAll('[data-operation]');
const dataEquals = document.querySelector('[data-equals]');
const dataAC = document.querySelector('[data-ac]');
const dataDelete = document.querySelector('[data-del]');
const dataPrev = document.querySelector('[data-prev]');
const dataCurrent = document.querySelector('[data-curr]');

const calc = new Calculator(dataPrev, dataCurrent);

dataNumber.forEach(button => {
    button.addEventListener('click', () =>{
        calc.appendNumber(button.innerText);
        calc.updateDisplay();
    })
})

dataOperation.forEach(button => {
    button.addEventListener('click', () =>{
        calc.chooseOperation(button.innerText);
        calc.updateDisplay();
    })
})

dataEquals.addEventListener('click' , button =>{
    calc.compute();
    calc.updateDisplay();
})

dataAC.addEventListener('click', button =>{
    calc.clear();
    calc.updateDisplay();
})

dataDelete.addEventListener('click', button =>{
    calc.delete();
    calc.updateDisplay();
})