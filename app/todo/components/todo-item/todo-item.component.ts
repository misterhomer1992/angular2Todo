import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../todoClass';

@Component({
    selector: 'todo-item',
    moduleId: module.id,
    templateUrl: './todo-item.component.html'
})

export class TodoItem {
    @Input() todo:Todo;
    @Output() removeTodo = new EventEmitter();

    toggleStatus() {
        this.todo.status = this.todo.status == 'started' ? 'completed' : 'started';
    }

    event__statusBtn_click():void {
        this.toggleStatus();
    }

    event__deleteBtn_click():void {
        var deleteTodo = this.todo;
        this.removeTodo.emit(deleteTodo);
    }
}