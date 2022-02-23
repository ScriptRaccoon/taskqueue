const queueLength = document.getElementById("queueLength");

export class TaskQueue {
    constructor() {
        this.queue = [];
        this.executing = false;
    }

    add(task) {
        this.queue.push(task);
        queueLength.innerHTML = this.queue.length;
        if (!this.executing) {
            this.executing = true;
            this.execute();
        }
    }

    async execute() {
        if (this.queue.length > 0) {
            const task = this.queue.shift();
            queueLength.innerHTML = this.queue.length;
            await task();
            this.execute();
        } else {
            this.executing = false;
        }
    }
}
