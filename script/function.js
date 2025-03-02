
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

// box 1

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
                const taskNumebr = document.getElementById("complete-task").innerText;
                if (taskNumebr == 29) {
                        alert("congrates You have completed all the current task")
                }



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

// box-2

document.getElementById("task-2").addEventListener("click",
        function(event){
                event.preventDefault();
                const taskInnerText = getInputVlauebyID("task-assign-number");
                const competetask = getInputVlauebyID("complete-task");
                const headline = document.getElementById("headlin-2").innerText;

                const sum1 = taskInnerText - 1;
                document.getElementById("task-assign-number").innerText = sum1;
                const sum2 = competetask + 1; 
                document.getElementById("complete-task").innerText = sum2;
                alert("Board Updated Sucessfully")
                const taskNumebr = document.getElementById("complete-task").innerText;
                if (taskNumebr == 29) {
                        alert("congrates You have completed all the current task")
                }


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
// box-3

document.getElementById("task-3").addEventListener("click",
        function(event){
                event.preventDefault();
                const taskInnerText = getInputVlauebyID("task-assign-number");
                const competetask = getInputVlauebyID("complete-task");
                const headline = document.getElementById("headlin-3").innerText;

                const sum1 = taskInnerText - 1;
                document.getElementById("task-assign-number").innerText = sum1;
                const sum2 = competetask + 1; 
                document.getElementById("complete-task").innerText = sum2;
                alert("Board Updated Sucessfully")
                const taskNumebr = document.getElementById("complete-task").innerText;
                if (taskNumebr == 29) {
                        alert("congrates You have completed all the current task")
                }


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
// box-4
document.getElementById("task-4").addEventListener("click",
        function(event){
                event.preventDefault();
                const taskInnerText = getInputVlauebyID("task-assign-number");
                const competetask = getInputVlauebyID("complete-task");
                const headline = document.getElementById("headlin-4").innerText;

                const sum1 = taskInnerText - 1;
                document.getElementById("task-assign-number").innerText = sum1;
                const sum2 = competetask + 1; 
                document.getElementById("complete-task").innerText = sum2;
                alert("Board Updated Sucessfully")
                const taskNumebr = document.getElementById("complete-task").innerText;
                if (taskNumebr == 29) {
                        alert("congrates You have completed all the current task")
                }


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
// box-5


document.getElementById("task-5").addEventListener("click",
        function(event){
                event.preventDefault();
                const taskInnerText = getInputVlauebyID("task-assign-number");
                const competetask = getInputVlauebyID("complete-task");
                const headline = document.getElementById("headlin-5").innerText;

                const sum1 = taskInnerText - 1;
                document.getElementById("task-assign-number").innerText = sum1;
                const sum2 = competetask + 1; 
                document.getElementById("complete-task").innerText = sum2;
                alert("Board Updated Sucessfully")
                const taskNumebr = document.getElementById("complete-task").innerText;
                if (taskNumebr == 29) {
                        alert("congrates You have completed all the current task")
                }


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
// box-6

document.getElementById("task-6").addEventListener("click",
        function(event){
                event.preventDefault();
                const taskInnerText = getInputVlauebyID("task-assign-number");
                const competetask = getInputVlauebyID("complete-task");
                const headline = document.getElementById("headlin-6").innerText;

                const sum1 = taskInnerText - 1;
                document.getElementById("task-assign-number").innerText = sum1;
                const sum2 = competetask + 1; 
                document.getElementById("complete-task").innerText = sum2;
                alert("Board Updated Sucessfully")

                const taskNumebr = document.getElementById("complete-task").innerText;
                if(taskNumebr == 29){
                        alert("congrates You have completed all the current task")
                }

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

// clear-history
document.getElementById("clear-history").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("activity-log").innerHTML = "";
}
);

// random-color

let colors = ['#ABD1F3', '#C2E0F9', '#FCFCFF', '#DFF7FA', '#1261A0', '#58CCED'];
document.getElementById("colorButton").addEventListener("click",
        function(event){
                event.preventDefault();
                let rendomColor = colors[Math.floor(Math.random() * colors.length)]

                const container = document.getElementById("colourID");
                container.style.backgroundColor = rendomColor;
        }
)