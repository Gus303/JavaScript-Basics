function simpleCalculator(a, b, operation) {
    let calcResult;
    if (operation === 'plus') {
        calcResult = a + b;
    } else if (operation === 'minus') {
        calcResult = a - b;
    } else if (operation === 'times') {
        calcResult = a * b;
    } else if (operation === 'divided') {
        calcResult = a / b;
    } else {
        calcResult = 'Operação não reconhecida';
    }
    return calcResult;
}