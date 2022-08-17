document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositeFeild = document.getElementById('deposite-ammount')
    const depositeAmountString = depositeFeild.value;
    // console.log(depositeAmountString);

    const depositeAmount = parseFloat(depositeAmountString);
    depositeFeild.value = "";
    if (isNaN(depositeAmountString)) {
        alert('input number')
        return;
    }

    const previousAmountString = document.getElementById('deposite-total').innerText;
    const previousAmount = parseFloat(previousAmountString);

    const newDepositeAmmount = depositeAmount + previousAmount;

    document.getElementById('deposite-total').innerText = newDepositeAmmount;

    const previousBalenceString = document.getElementById('balence-total').innerText;
    const previousBalence = parseFloat(previousBalenceString);
    const newBalence = previousBalence + depositeAmount;
    document.getElementById('balence-total').innerText = newBalence;

})