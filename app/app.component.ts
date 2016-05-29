import {Component, Output, EventEmitter} from '@angular/core';
import {TodoComponent} from './todo/main';

@Component({
    selector: 'todo-app',
    directives: [TodoComponent],
    template: `
        <todo>sss</todo>
    `
})


export class AppComponent {

}