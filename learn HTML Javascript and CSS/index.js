function getInputValue(id) {
    return document.getElementById(id).value
}

function addOp() {
    const firstValue = parseInt(getInputValue("firstInput"))
    const secondValue = parseInt(getInputValue("secondInput"))
    const result = parseInt(firstValue + secondValue)
    document.getElementById("result").value = result
}

function subOp() {
    const firstValue = parseInt(getInputValue("firstInput"))
    const secondValue = parseInt(getInputValue("secondInput"))
    const result = parseInt(firstValue - secondValue)
    document.getElementById("result").value = result
}

function multOp() {
    const firstValue = parseInt(getInputValue("firstInput"))
    const secondValue = parseInt(getInputValue("secondInput"))
    const result = parseInt(firstValue * secondValue)
    document.getElementById("result").value = result
}

function divOp() {
    const firstValue = parseInt(getInputValue("firstInput"))
    const secondValue = parseInt(getInputValue("secondInput"))
    const result = parseFloat(firstValue / secondValue)
    document.getElementById("result").value = result
}

function refreshOp() {
    location.reload();
}