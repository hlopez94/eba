import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimersComponent } from './primers.component';

describe('PrimersComponent', () => {
  let component: PrimersComponent;
  let fixture: ComponentFixture<PrimersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
