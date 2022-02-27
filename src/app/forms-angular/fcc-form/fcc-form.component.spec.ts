import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FccFormComponent } from './fcc-form.component';

describe('FccFormComponent', () => {
  let component: FccFormComponent;
  let fixture: ComponentFixture<FccFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FccFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FccFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
