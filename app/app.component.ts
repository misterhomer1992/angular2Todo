import {Component} from '@angular/core';
import {ArrayUtility} from '../utility/array';

class Task {
    task: string;
    status: string;

    constructor(task: string = '', status: string = "started") {
        this.task = task;
        this.status = status;
    }

    toggleStatus() :void {
        this.status = this.status == 'started' ? 'completed' : 'started';
    }
}

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})


export class AppComponent {
    tasks:Task[];
    currentTask: Task = new Task();

    constructor() {
        this.tasks = [
            new Task("Buy a milk"),
            new Task("Admin task"),
            new Task("Finish with cleaning")
        ];
    }

    //events
    action_addTask() {
        if (this.currentTask.task.length === 0) {
            return;
        }

        this.tasks.push(this.currentTask);
       // this.tasks = [...this.tasks, this.currentTask];
        console.info(`added new task ${this.currentTask.task}`);
        this.currentTask = new Task();
    }

    event__onSubmit_addNewTask() {
        this.action_addTask();
    }

    event_removeTask(task: Task) {
        var taskIndex = this.tasks.indexOf(task);

        if(taskIndex!== -1) {
            this.tasks.splice(taskIndex, 1);
        }
    }

}
