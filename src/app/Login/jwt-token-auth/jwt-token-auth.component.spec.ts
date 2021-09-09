import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtTokenAuthComponent } from './jwt-token-auth.component';

describe('JwtTokenAuthComponent', () => {
  let component: JwtTokenAuthComponent;
  let fixture: ComponentFixture<JwtTokenAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JwtTokenAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtTokenAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
