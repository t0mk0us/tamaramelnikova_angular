import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tehnologies2Component } from './tehnologies2.component';

describe('Tehnologies2Component', () => {
  let component: Tehnologies2Component;
  let fixture: ComponentFixture<Tehnologies2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tehnologies2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Tehnologies2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
