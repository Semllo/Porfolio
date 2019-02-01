import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CremotoComponent } from './cremoto.component';

describe('CremotoComponent', () => {
  let component: CremotoComponent;
  let fixture: ComponentFixture<CremotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CremotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CremotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
