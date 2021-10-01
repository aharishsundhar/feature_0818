import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateallComponent } from './createall.component';

describe('CreateallComponent', () => {
  let component: CreateallComponent;
  let fixture: ComponentFixture<CreateallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});