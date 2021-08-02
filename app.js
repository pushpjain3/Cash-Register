const billInput = document.querySelector("#bill-input");
const cashInput = document.querySelector("#cash-input");
const submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click", submitClickHandler)

const submitClickHandler =()=>{
    var billAmount = billInput.value;
    var cashAmount = cashInput.value;
}