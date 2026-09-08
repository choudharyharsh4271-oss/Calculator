const historyList = document.getElementById("history-list");
let history = [];
const display = document.getElementById("user-input");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            display.innerText = "0";
        } 
        else if (value === "DEL") {
            display.innerText = display.innerText.slice(0, -1);
            if (display.innerText === "") {
                display.innerText = "0";
            }
        } 
        else if (value === "=") {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = "NaN";
            }
        } 
        else {
            if (display.innerText === "0") {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});
