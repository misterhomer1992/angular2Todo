export class Todo {
    task: string;
    status: string;

    constructor(task: string = '', status: string = "started") {
        this.task = task;
        this.status = status;
    }
}