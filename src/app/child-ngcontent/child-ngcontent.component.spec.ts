import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgcontentComponent } from './child-ngcontent.component';

describe('ChildNgcontentComponent', () => {
  let component: ChildNgcontentComponent;
  let fixture: ComponentFixture<ChildNgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNgcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
