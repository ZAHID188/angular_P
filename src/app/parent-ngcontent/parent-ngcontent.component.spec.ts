import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgcontentComponent } from './parent-ngcontent.component';

describe('ParentNgcontentComponent', () => {
  let component: ParentNgcontentComponent;
  let fixture: ComponentFixture<ParentNgcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNgcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNgcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
