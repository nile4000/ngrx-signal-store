import { Component, inject } from '@angular/core';
import { TodosStore } from './store/todos.store';
import { JsonPipe } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonPipe, TodosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  store = inject(TodosStore);

  ngOnInit() {
    this.loadTodos().then(() => console.log('Todos loaded'));
  }
  async loadTodos() {
    await this.store.loadAll();
  }
}
