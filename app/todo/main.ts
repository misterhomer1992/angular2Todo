import {Component} from '@angular/core';
import {TodoList} from './components/todo-list/todo-list.component';
import {TodoAdd} from './components/todo-add/todo-add.component';
import {Todo} from './todoClass';
import {TodoService} from './components/service/todoService';

@Component({
    selector: 'todo',
    moduleId: module.id,
    templateUrl: 'todo.component.html',
    styleUrls: ['todo.component.css'],
    directives: [TodoList, TodoAdd],
    providers: [TodoService]
})

export class TodoComponent {
    todos:Todo[];
    todo:Todo = new Todo();

    constructor() {
        this.todos = [
            new Todo("Buy a milk"),
            new Todo("Admin task"),
            new Todo("Finish with cleaning")
        ];
    }

    onTodoAdded(todo:Todo) {
        this.todos.push(todo);
    }
}