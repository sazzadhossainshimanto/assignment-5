
// for date 

let dateTime = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today = dateTime.toLocaleDateString("en-us", options);

const date = document.getElementById("date-today").innerText = today;

// time
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();



document.getElementById("task-1").addEventListener("click",
        function(event){
                event.preventDefault();
                const taskInnerText = getInputVlauebyID("task-assign-number");
                const competetask = getInputVlauebyID("complete-task");
                const headline = document.getElementById("headlin-1").innerText;

                const sum1 = taskInnerText - 1;
                document.getElementById("task-assign-number").innerText = sum1;
                const sum2 = competetask + 1; 
                document.getElementById("complete-task").innerText = sum2;
                alert("Board Updated Sucessfully")


                const container = document.getElementById("activity-log");
                const p = document.createElement("p");
                p.innerText = `
                You have Complete The Task ${headline} at ${hours}:${minutes}:${seconds} 
                `
                container.appendChild(p);
                container.style.backgroundColor = "#F4F7FF";
                container.style.paddingBottom = "25px";
                container.style.borderRadius = "10px";

               this.disabled= true;
                this.style.backgroundColor = "gray";

        }
)