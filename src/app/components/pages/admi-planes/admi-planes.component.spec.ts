import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiPlanesComponent } from './admi-planes.component';

describe('AdmiPlanesComponent', () => {
  let component: AdmiPlanesComponent;
  let fixture: ComponentFixture<AdmiPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
