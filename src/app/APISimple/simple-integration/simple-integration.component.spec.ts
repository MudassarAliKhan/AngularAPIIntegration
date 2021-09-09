import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleIntegrationComponent } from './simple-integration.component';

describe('SimpleIntegrationComponent', () => {
  let component: SimpleIntegrationComponent;
  let fixture: ComponentFixture<SimpleIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleIntegrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
