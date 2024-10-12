var _a, _b, _c, _d;
var myBalance = 20000; // Initial Balance
var myPin = 1098;
// Get elements from DOM
var pinInput = document.getElementById("pin");
var message = document.getElementById("message");
var pinSection = document.getElementById("pinSection");
var operationScreen = document.getElementById("operationScreen");
var balanceMessage = document.getElementById("balanceMessage");
var withdrawAmount = document.getElementById("withdrawAmount");
(_a = document.getElementById("pinSubmit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var enteredPin = parseInt(pinInput.value);
    if (enteredPin === myPin) {
        message.textContent = "Correct PIN!";
        pinSection.style.display = "none"; // Hide PIN section
        operationScreen.style.display = "block"; // Show operation buttons
    }
    else {
        message.textContent = "Incorrect PIN! Try again.";
    }
});
// Check Balance Functionality
(_b = document.getElementById("checkBalance")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    hideOperations(); // Hide other operations
    balanceMessage.textContent = "Your balance is $".concat(myBalance);
    balanceMessage.style.display = "block"; // Show balance message
});
// Withdraw Functionality
(_c = document.getElementById("withdraw")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    hideOperations(); // Hide other operations
    document.getElementById("withdrawSection").style.display = "block"; // Show withdraw section
});
// Withdraw Amount Functionality
(_d = document.getElementById("withdrawSubmit")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var withdrawAmountValue = parseInt(withdrawAmount.value);
    if (withdrawAmountValue <= myBalance) {
        myBalance -= withdrawAmountValue;
        balanceMessage.textContent = "Withdrawal successful! Remaining balance: $".concat(myBalance);
    }
    else {
        balanceMessage.textContent = "Insufficient funds!";
    }
    balanceMessage.style.display = "block"; // Show balance message after withdrawal
});
// Hide other operations
function hideOperations() {
    // Hide Check Balance and Withdraw buttons
    document.getElementById("checkBalance").style.display = "none"; // Hide Check Balance button
    document.getElementById("withdraw").style.display = "none"; // Hide Withdraw button
    // Hide withdraw section and balance message
    document.getElementById("withdrawSection").style.display = "none"; // Hide withdraw section
    balanceMessage.style.display = "none"; // Hide balance message
}
