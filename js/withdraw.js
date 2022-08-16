document.getElementById("btn-withdraw").addEventListener("click", function () {
  // step 2: get the amount from deposit input field
  const withdrawField = document.getElementById("withdraw-amount");
  const newWithdrawAmount = parseFloat(withdrawField.value);

  // step 3: get the current deposit total ammount
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

  // step 5: balance
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

  if (newWithdrawAmount >= 0 && newWithdrawAmount <= previousBalanceTotal){
  }
   else {
    withdrawField.value = "";
    alert("Input");
    return;
  }

  // step 4: add total deposit
  const currentWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 6: calculate total balance
  const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  // step 7: clear field
  withdrawField.value = "";
});
