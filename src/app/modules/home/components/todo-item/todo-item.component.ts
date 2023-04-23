import { Component } from '@angular/core'
import { Item } from 'src/types/itemTypes'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  public item: Item = {
    id: 0,
    title: '',
    completed: false,
  }
  constructor() {}
}
