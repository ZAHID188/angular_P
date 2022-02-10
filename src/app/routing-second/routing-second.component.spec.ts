import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingSecondComponent } from './routing-second.component';

describe('RoutingSecondComponent', () => {
  let component: RoutingSecondComponent;
  let fixture: ComponentFixture<RoutingSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
