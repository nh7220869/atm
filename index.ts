let myBalance = 20000; // Initial Balance
let myPin = 1098;

// Get elements from DOM
const pinInput = document.getElementById("pin") as HTMLInputElement;
const message = document.getElementById("message") as HTMLElement;
const pinSection = document.getElementById("pinSection") as HTMLElement;
const operationScreen = document.getElementById("operationScreen") as HTMLElement;
const balanceMessage = document.getElementById("balanceMessage") as HTMLElement;
const withdrawAmount = document.getElementById("withdrawAmount") as HTMLInputElement;

document.getElementById("pinSubmit")?.addEventListener("click", () => {
  let enteredPin = parseInt(pinInput.value);
  if (enteredPin === myPin) {
    message.textContent = "Correct PIN!";
    pinSection.style.display = "none"; // Hide PIN section
    operationScreen.style.display = "block"; // Show operation buttons
  } else {
    message.textContent = "Incorrect PIN! Try again.";
  }
});

// Check Balance Functionality
document.getElementById("checkBalance")?.addEventListener("click", () => {
  hideOperations(); // Hide other operations
  balanceMessage.textContent = `Your balance is $${myBalance}`;
  balanceMessage.style.display = "block"; // Show balance message
});

// Withdraw Functionality
document.getElementById("withdraw")?.addEventListener("click", () => {
  hideOperations(); // Hide other operations
  document.getElementById("withdrawSection")!.style.display = "block"; // Show withdraw section
});

// Withdraw Amount Functionality
document.getElementById("withdrawSubmit")?.addEventListener("click", () => {
  let withdrawAmountValue = parseInt(withdrawAmount.value);
  if (withdrawAmountValue <= myBalance) {
    myBalance -= withdrawAmountValue;
    balanceMessage.textContent = `Withdrawal successful! Remaining balance: $${myBalance}`;
  } else {
    balanceMessage.textContent = "Insufficient funds!";
  }
  balanceMessage.style.display = "block"; // Show balance message after withdrawal
});

// Hide other operations
function hideOperations() {
  // Hide Check Balance and Withdraw buttons
  document.getElementById("checkBalance")!.style.display = "none"; // Hide Check Balance button
  document.getElementById("withdraw")!.style.display = "none"; // Hide Withdraw button
  
  // Hide withdraw section and balance message
  document.getElementById("withdrawSection")!.style.display = "none"; // Hide withdraw section
  balanceMessage.style.display = "none"; // Hide balance message
}
