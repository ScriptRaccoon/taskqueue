import { TaskQueue } from "./TaskQueue.js";
import { sleep } from "./utils.js";

const inputs = document.getElementById("inputs");
const output = document.getElementById("output");

const myQueue = new TaskQueue();

const numbers = "0123456789".split("");

document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (numbers.includes(key)) {
        inputs.innerHTML += key;
        myQueue.add(async () => {
            output.innerHTML += `<p>${key}</p>`;
            await sleep(1000);
        });
    }
});
