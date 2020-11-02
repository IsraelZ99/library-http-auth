import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromLogoutComponent } from './prom-logout.component';

describe('PromLogoutComponent', () => {
  let component: PromLogoutComponent;
  let fixture: ComponentFixture<PromLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
