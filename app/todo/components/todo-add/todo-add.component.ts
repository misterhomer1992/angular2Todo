import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../todoClass';

@Component({
    selector: 'todo-add',
    moduleId: module.id,
    templateUrl: './todo-add.component.html'
})

export class TodoAdd {
    @Input() todo:Todo;
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