
import { HttpClient } from '@angular/common/http';

export class TodoService {
  constructor(private http: HttpClient | null) {
  }

  add(todo: any) {
    return this.http?.post<any>('...', todo);
  }

  getTodos() {
    return this.http?.get<any[]>('...');
  }

  delete(id: number) {
    return this.http?.delete<any>('...');
  }
}