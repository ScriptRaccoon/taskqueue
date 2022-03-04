import { TaskQueue } from "./TaskQueue.js";
import { sleep } from "./utils.js";

const addBtn = document.getElementById("addBtn");
const undoBtn = document.getElementById("undoBtn");
const output = document.getElementById("output");
const numberInput = document.getElementById("numberInput");
const inputs = document.getElementById("inputs");

let outputNumber = 0;

async function fun({ number }) {
    outputNumber += number;
    output.innerText = outputNumber;
    await sleep(1000);
}

function inversion({ number }) {
    return { number: -number };
}

const myQueue = new TaskQueue(fun, inversion);

addBtn.addEventListener("click", () => {
    const number = parseInt(numberInput.value);
    inputs.innerText += number + ",";
    myQueue.add({ number });
});

undoBtn.addEventListener("click", () => {
    myQueue.undo();
});
