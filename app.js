const billInput = document.querySelector("#bill-input");
const cashInput = document.querySelector("#cash-input");
const submitButton = document.querySelector("#submit-button");
const errMsg = document.querySelector("#error");
const changeLog = document.querySelector("#change-register");

const changeAvl = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const calculateChange = (cash, bill) => {
	var changeRequired = cash - bill;
	changeAvl.forEach((change, i) => {
		var changeValue;
		changeValue = Math.trunc(changeRequired / change);
		changeLog.rows[1].cells[i + 1].innerText = String(changeValue);
		changeRequired = changeRequired % change;
	});
};

const submitClickHandler = () => {
	var billAmount = billInput.value;
	var cashAmount = cashInput.value;
	if (!isNaN(cashAmount) && !isNaN(billAmount)) {
		var cash = Number(cashAmount);
		var bill = Number(billAmount);
		if (cash >= bill) {
			calculateChange(cash, bill);
		} else {
			errMsg.innerText = "Do you wanna wash dishes?";
		}
	} else {
		errMsg.innerText = "Please enter cash in digits!!";
	}
};

submitButton.addEventListener("click", submitClickHandler);
