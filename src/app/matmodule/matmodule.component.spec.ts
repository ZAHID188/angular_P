import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatmoduleComponent } from './matmodule.component';

describe('MatmoduleComponent', () => {
  let component: MatmoduleComponent;
  let fixture: ComponentFixture<MatmoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatmoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
