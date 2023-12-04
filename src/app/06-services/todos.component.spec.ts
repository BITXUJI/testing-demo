import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { of, throwError } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server ', () => {
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return of(todos);
    });

    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should call the server to save the changes when a new todo item is added ', () => {
    let spy = spyOn(service, 'add').and.callFake(() => {
      return of();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });
  it('should add the new todo returned from the server', () => {
    let todo = { id: 1 };
    spyOn(service, 'add').and.callFake(() => {
      return of(todo);
    });

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });
  it('should set the message property if server returns an error when adding a todo', () => {
    let error = 'error from the server';
    // spyOn(service, 'add').and.callFake(() => {
    //   return throwError(() => new Error(error));
    // });
    spyOn(service, 'add').and.returnValue(throwError(() => new Error(error)));

    component.add();

    expect(component.message).toBe(error);
  });

});