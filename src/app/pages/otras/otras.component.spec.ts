import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrasComponent } from './otras.component';

describe('OtrasComponent', () => {
  let component: OtrasComponent;
  let fixture: ComponentFixture<OtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
