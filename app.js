function handelProductChange(product, isIncrease) {
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount = productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;

    let productNewTotal = 0;
    if (product == 'case') {
        productNewTotal = productNewCount * 59;
    }
    if (product == 'phone') {
        productNewTotal = productNewCount * 1219;
    }

    document.getElementById(product + '-total').innerText =
        '$ ' + productNewTotal;
}

function handelCheckout() {
    const caseInput = document.getElementById('case-count');
    const caseCount = parseInt(caseInput.value);
    const phoneInput = document.getElementById('phone-count');
    const phoneCount = parseInt(phoneInput.value);

    const totalPrice = caseCount * 59 + phoneCount * 1219;
    document.getElementById('total-price').innerText = '$ ' + totalPrice;

}
