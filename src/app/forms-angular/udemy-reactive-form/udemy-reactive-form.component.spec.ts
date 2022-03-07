import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdemyReactiveFormComponent } from './udemy-reactive-form.component';

describe('UdemyReactiveFormComponent', () => {
  let component: UdemyReactiveFormComponent;
  let fixture: ComponentFixture<UdemyReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdemyReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UdemyReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
