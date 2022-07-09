function handelProductChange(product, isIncrease) {
    const productCount = getInputValue(product);

    let productNewCount = productCount;

    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }

    document.getElementById(product + '-count').value = productNewCount;

    let productNewTotal = 0;
    if (product == 'case') {
        productNewTotal = productNewCount * 59;
    }
    if (product == 'phone') {
        productNewTotal = productNewCount * 1219;
    }

    document.getElementById(product + '-total').innerText =
        '$ ' + productNewTotal;
    handelCheckout();
}

function handelCheckout() {
    const phoneCount = getInputValue('phone');

    const caseCount = getInputValue('case');

    const totalPrice = caseCount * 59 + phoneCount * 1219;
    document.getElementById('total-price').innerText = '$ ' + totalPrice;

    const tax = Math.round(totalPrice * .1);
    document.getElementById('tax-amount').innerText = '$ ' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$ ' + grandTotal;
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    return productCount;
}
