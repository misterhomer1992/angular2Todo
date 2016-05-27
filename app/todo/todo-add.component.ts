import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from './todo';
import {TodoItem} from './todo-item.component';

@Component({
    selector: 'todo-add',
    templateUrl: './app/todo/todo-add.component.html'
})

export class TodoAdd {
    @Input() todo:Todo;
    @Input() todos:TodoItem[];
    @Output() addTodo = new EventEmitter();

    action_addTask() {
        if (this.todo.task.length === 0) {
            return;
        }

        this.addTodo.emit(this.todo);
        this.todo = new Todo();
    }

    event__onSubmit_addNewTask() {
        this.action_addTask()
    }
}