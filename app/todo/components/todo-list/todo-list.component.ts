import {Component, Input} from '@angular/core';
import {TodoItem} from '../todo-item/todo-item.component';
import {TodoService} from '../service/todoService';

@Component({
    selector: 'todo-list',
    moduleId: module.id,
    templateUrl: 'todo-list.component.html',
    directives: [TodoItem]
})

export class TodoList {
    @Input() todos: TodoItem[];
    todoService: TodoService = new TodoService();

    constructor() {

    }

    removeTodo(todo: TodoItem) {
        console.log(this.todoService)
        let todoIndex = this.todos.indexOf(todo);

        if (todoIndex !== -1) {
            this.todos.splice(todoIndex, 1);
        }
    }

    addTodo(todo: TodoItem) {
        debugger
        this.todos.push(todo);
        //console.info(`added new task: ${todo.task}`);
    }

    addTodoToList() {
        debugger
    }
}