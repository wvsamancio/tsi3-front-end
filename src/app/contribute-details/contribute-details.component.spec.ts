import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributeDetailsComponent } from './contribute-details.component';

describe('ContributeDetailsComponent', () => {
  let component: ContributeDetailsComponent;
  let fixture: ComponentFixture<ContributeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
