import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyProgramComponent } from './monthly-program.component';

describe('MonthlyProgramComponent', () => {
  let component: MonthlyProgramComponent;
  let fixture: ComponentFixture<MonthlyProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
