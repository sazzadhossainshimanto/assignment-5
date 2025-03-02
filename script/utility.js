function getInputVlauebyID(id) {
        const amount = document.getElementById(id).innerText;
        const convertedValue = parseInt(amount);
        return convertedValue;
}