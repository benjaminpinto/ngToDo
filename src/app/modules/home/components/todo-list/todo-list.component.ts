import { Component, DoCheck, OnInit } from '@angular/core'
import { Item } from 'src/types/itemTypes'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  constructor() {}

  ngDoCheck(): void {
    this.sortAndStore()
  }

  public itemList: Array<Item> = JSON.parse(
    localStorage.getItem('itemList') || '[]'
  )

  public deleteItem(id: number) {
    this.itemList = this.itemList.filter((item) => item.id !== id)
  }

  public deleteAll() {
    const confirm = window.confirm('Deseja realmente excluir tudo?')
    if (confirm) this.itemList = []
  }

  public addItem(event: string) {
    event = event.trim()
    if (event) {
      console.log(`Salvando a task: ${event}`)
      const id = this.itemList[this.itemList.length - 1]?.id + 1 || 1
      this.itemList.push({
        id,
        title: event,
        completed: false,
      })
    }
  }

  public sortAndStore() {
    this.itemList.sort((a, b) => Number(a.completed) - Number(b.completed))
    localStorage.setItem('itemList', JSON.stringify(this.itemList))
  }
}
