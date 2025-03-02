let dateTime = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = dateTime.toLocaleDateString("en-us", options);

const date = document.getElementById("date-today").innerText = today;


