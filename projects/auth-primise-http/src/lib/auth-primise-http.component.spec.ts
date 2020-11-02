import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPrimiseHttpComponent } from './auth-primise-http.component';

describe('AuthPrimiseHttpComponent', () => {
  let component: AuthPrimiseHttpComponent;
  let fixture: ComponentFixture<AuthPrimiseHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPrimiseHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPrimiseHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
