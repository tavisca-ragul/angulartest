import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RagulComponent } from './ragul.component';

describe('RagulComponent', () => {
  let component: RagulComponent;
  let fixture: ComponentFixture<RagulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RagulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RagulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
