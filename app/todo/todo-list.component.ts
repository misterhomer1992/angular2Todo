import {Component, Input} from '@angular/core';
import {TodoItem} from './todo-item.component';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html',
    directives: [TodoItem]
})

export class TodoList {
    @Input() todos: TodoItem[];

    removeTodo(todo: TodoItem) {
        let todoIndex = this.todos.indexOf(todo);

        if (todoIndex !== -1) {
            this.todos.splice(todoIndex, 1);
        }
    }
}