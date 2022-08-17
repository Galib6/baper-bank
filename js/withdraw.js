document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFeild = document.getElementById('withdraw-ammount')
    const withdrawAmountString = withdrawFeild.value;
    // console.log(withdrawAmountString);

    const withdrawAmount = parseFloat(withdrawAmountString);
    withdrawFeild.value = "";
    if (isNaN(withdrawAmountString)) {
        alert('input number')
        return;
    }

    const previousAmountString = document.getElementById('withdraw-total').innerText;
    const previousAmount = parseFloat(previousAmountString);

    const newWithdrawAmmount = withdrawAmount + previousAmount;



    const previousBalenceString = document.getElementById('balence-total').innerText;
    const previousBalence = parseFloat(previousBalenceString);

    if (previousBalence < newWithdrawAmmount) {
        alert("transection not possible")
        return;
    }
    document.getElementById('withdraw-total').innerText = newWithdrawAmmount;

    const newBalence = previousBalence - newWithdrawAmmount;
    document.getElementById('balence-total').innerText = newBalence;

})