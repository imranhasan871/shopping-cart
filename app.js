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
