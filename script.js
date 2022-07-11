function monthlyPayment() {
    let homePrice = document.getElementById('home_price').value;
    let downPayment = document.getElementById('down_payment').value;
    let loanLength = document.getElementById('loan_program').value;
    let interestRate = document.getElementById('interest_rate').value;

    let loanAmount = homePrice * (1 - (downPayment/100));
    let interestAmount = loanAmount * (interestRate/100/12);
    let principalAmount = loanAmount / (loanLength*12);
    let payment = principalAmount + interestAmount;

    document.getElementById('output').innerHTML = "Your Monthly Payment: $" + Math.round(payment);
    document.getElementById('principal').innerHTML = "Your Principal Amount: $" + Math.round(principalAmount);
    document.getElementById('interest').innerHTML = "Your Interest Amount: $" + Math.round(interestAmount);
}

document.getElementById('calculate').addEventListener('click', monthlyPayment);