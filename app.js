function handelProductChange(product, isIncrease) {
    const caseInput = document.getElementById(product + '-count');
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;

    let productNewTotal = 0;
    if (product == 'case') {
        productNewTotal = caseNewCount * 59;
    }
    if (product == 'phone') {
        productNewTotal = caseNewCount * 1219;
    }

    document.getElementById(product + '-total').innerText =
        '$ ' + productNewTotal;
}
