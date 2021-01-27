const subButton = document.getElementById("sub-btn");
const submitArea = document.getElementById("submit-area");
const transactionArea = document.getElementById("trans-area");
subButton.addEventListener("click", function (event) {
  submitArea.style.display = "none";
  transactionArea.style.display = "block";
});
//deposit system
const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input").value;
  const depositAmount = parseFloat(depositInput);
  updateSpanText("deposit-text", depositAmount);
  updateSpanText("blance-text", depositAmount);
  document.getElementById("deposit-input").value = "";
});
//update system
function updateSpanText(id, depositAmount) {
  const current = parseFloat(document.getElementById(id).innerText);
  const totalAmount = depositAmount + current;
  document.getElementById(id).innerText = totalAmount;
}
//withdraw system
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawAmout = parseFloat(
    document.getElementById("withdraw-input").value
  );
  updateSpanText("withdraw-text", withdrawAmout);
  updateSpanText("blance-text", -1 * withdrawAmout);
  document.getElementById("withdraw-input").value = "";
});
