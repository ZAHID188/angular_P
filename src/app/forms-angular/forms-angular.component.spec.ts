import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAngularComponent } from './forms-angular.component';

describe('FormsAngularComponent', () => {
  let component: FormsAngularComponent;
  let fixture: ComponentFixture<FormsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
