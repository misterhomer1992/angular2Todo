import {Component, Input} from '@angular/core';
import {Task} from '../app.component'

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo-list/todo-list.component.html'
})

export class TodoListComponent {
    @Input() tasks: Task;
}