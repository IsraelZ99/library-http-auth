import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAuthenticationZnComponent } from './http-authentication-zn.component';

describe('HttpAuthenticationZnComponent', () => {
  let component: HttpAuthenticationZnComponent;
  let fixture: ComponentFixture<HttpAuthenticationZnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpAuthenticationZnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpAuthenticationZnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
