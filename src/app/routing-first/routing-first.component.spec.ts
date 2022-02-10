import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingFirstComponent } from './routing-first.component';

describe('RoutingFirstComponent', () => {
  let component: RoutingFirstComponent;
  let fixture: ComponentFixture<RoutingFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
