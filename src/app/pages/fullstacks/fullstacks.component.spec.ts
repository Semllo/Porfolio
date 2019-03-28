import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstacksComponent } from './fullstacks.component';

describe('FullstacksComponent', () => {
  let component: FullstacksComponent;
  let fixture: ComponentFixture<FullstacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullstacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullstacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
