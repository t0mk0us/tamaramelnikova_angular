import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tehnologies1Component } from './tehnologies1.component';

describe('Tehnologies1Component', () => {
  let component: Tehnologies1Component;
  let fixture: ComponentFixture<Tehnologies1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tehnologies1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tehnologies1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
