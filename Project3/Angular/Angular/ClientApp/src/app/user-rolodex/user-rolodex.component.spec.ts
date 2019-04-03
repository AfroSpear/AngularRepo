import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolodexComponent } from './user-rolodex.component';

describe('UserRolodexComponent', () => {
  let component: UserRolodexComponent;
  let fixture: ComponentFixture<UserRolodexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRolodexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRolodexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
