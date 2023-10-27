let result = '';
function appendChar(char) {
    result += char;
    document.getElementById('result').value = result;
}
function clearResult() {
    result = '';
    document.getElementById('result').value = result;
}
function calculateResult() {
    if (/^[0-9+\-*%/. ]+$/.test(result)) {
        try {
            result = eval(result);
            document.getElementById('result').value = result;
        } catch (error) {
            document.getElementById('result').value = 'Error';
        }
    }
}
