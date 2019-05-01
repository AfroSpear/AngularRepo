import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalTodoRolodexComponent } from './local-todo-rolodex.component';

describe('LocalTodoRolodexComponent', () => {
  let component: LocalTodoRolodexComponent;
  let fixture: ComponentFixture<LocalTodoRolodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalTodoRolodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalTodoRolodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
