import {Component} from '@angular/core';
import {TodoList} from './todo/todo-list.component';
import {Todo} from './todo/todo';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoList]
})


export class AppComponent {
    todos:Todo[];
    todo:Todo = new Todo();

    constructor() {
        this.todos = [
            new Todo("Buy a milk"),
            new Todo("Admin task"),
            new Todo("Finish with cleaning")
        ];
    }

    //events
    action_addTask() {
        if (this.todo.task.length === 0) {
            return;
        }

        this.todos.push(this.todo);
        console.info(`added new task ${this.todo.task}`);
        this.todo = new Todo();
    }

    event__onSubmit_addNewTask() {
        this.action_addTask()
    }
}
