import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyFormsLessComponent } from './udemy-forms-less.component';

describe('UdemyFormsLessComponent', () => {
  let component: UdemyFormsLessComponent;
  let fixture: ComponentFixture<UdemyFormsLessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyFormsLessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyFormsLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
