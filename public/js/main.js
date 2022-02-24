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
            await pressKey(key);
        });
    }
});

async function pressKey(key) {
    output.innerHTML += `<p>${key}</p>`;
    await sleep(1000);
}

const buttons = document.querySelectorAll("#buttons > button");

for (const button of buttons) {
    button.addEventListener("click", (e) => {
        const key = e.target.innerText;
        inputs.innerHTML += key;
        myQueue.add(async () => {
            await pressKey(key);
        });
    });
}
