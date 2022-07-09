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

    const caseTotal = caseNewCount * 59;
    document.getElementById(product + '-total').innerText = '$ ' + caseTotal;
}
