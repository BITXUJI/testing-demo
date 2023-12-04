
import { Component } from '@angular/core';
import { TodoService } from './todo.service'
@Component({
  selector: 'app-todos',
  templateUrl: '../../index.html',
  styleUrls: ['../../styles.css']
})
export class TodosComponent {
  todos: any[] = [];
  message: string = '';

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.getTodos()?.subscribe(t => this.todos = t);
  }

  add() {
    var newTodo = { title: '... ' };
    this.service.add(newTodo)?.subscribe({
      next: t => this.todos.push(t),
      error: err => this.message = err.message
    });

  }

  delete(id: number) {
    if (confirm('Are you sure?'))
      this.service.delete(id)?.subscribe();
  }
}
