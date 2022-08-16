// deposit
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step 2: get the amount from deposit input field
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmount = parseFloat(depositField.value);

    // step 3: get the current deposit total ammount
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    




    // step 4: add total deposit
    const currentDepositTotal = newDepositAmount + previousDepositTotal;


    
    if(newDepositAmount >= 0){    }

    else{
        depositField.value = '';
        alert('Input');
        return;
    }


    depositTotalElement.innerText = currentDepositTotal;


    // step 5: balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    // step 6: calculate total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;











    // step 7: clear field
    depositField.value = '';
    
})
