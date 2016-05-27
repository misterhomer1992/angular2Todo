import {Component, Output, EventEmitter} from '@angular/core';
import {TodoList} from './todo/todo-list.component';
import {TodoAdd} from './todo/todo-add.component';
import {Todo} from './todo/todo';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [TodoList, TodoAdd]
})


export class AppComponent {
    @Output() addTodoToList = new EventEmitter();
    todos:Todo[];
    todo:Todo = new Todo();

    constructor() {
        this.todos = [
            new Todo("Buy a milk"),
            new Todo("Admin task"),
            new Todo("Finish with cleaning")
        ];
    }

    addTodo(todo: Todo) {
        this.addTodoToList.emit(todo);
    }
}
