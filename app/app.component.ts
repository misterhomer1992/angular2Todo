import {Component} from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

export class Task {
    task: string;
    hasAccess: boolean;

    constructor(task: string, hasAccess: boolean = true) {
        this.task = task;
        this.hasAccess = hasAccess;
    }
}

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoListComponent]
})

export class AppComponent {

    tasks:Task[];
    taskName:string;

    constructor() {

        this.tasks = [
            new Task("Buy a milk"),
            new Task("Admin task", false),
            new Task("Finish with cleaning")
        ];
    }

    //events
    event_addNewTask() {
        let newTask:string = this.taskName;

        if (newTask.length === 0) {
            return;
        }

        this.addNewTask(newTask);

        console.info(`added new task ${newTask}`);
        this.taskName = '';
    }

    event_addNewTaskOnInput(event) {
        if(event.which === 13) {
           this.event_addNewTask();
        }
    }

    addNewTask(taskName:string) {
        let newTask: Task = new Task(taskName);

        this.tasks.push(newTask);
    }

    event_removeTask(task: Task) {
        var taskIndex = this.tasks.indexOf(task);

        if(taskIndex!== -1) {
            this.tasks.splice(taskIndex, 1);
        }
    }

}
