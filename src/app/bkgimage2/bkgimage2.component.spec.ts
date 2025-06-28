import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bkgimage2Component } from './bkgimage2.component';

describe('Bkgimage2Component', () => {
  let component: Bkgimage2Component;
  let fixture: ComponentFixture<Bkgimage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bkgimage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bkgimage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
