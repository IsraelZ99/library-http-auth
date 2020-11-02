import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromLoginComponent } from './prom-login.component';

describe('PromLoginComponent', () => {
  let component: PromLoginComponent;
  let fixture: ComponentFixture<PromLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
