import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkgimage1Component } from './bkgimage1.component';

describe('Bkgimage1Component', () => {
  let component: Bkgimage1Component;
  let fixture: ComponentFixture<Bkgimage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bkgimage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bkgimage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
