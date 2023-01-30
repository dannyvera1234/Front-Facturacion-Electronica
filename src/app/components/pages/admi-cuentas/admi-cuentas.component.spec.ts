import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiCuentasComponent } from './admi-cuentas.component';

describe('AdmiCuentasComponent', () => {
  let component: AdmiCuentasComponent;
  let fixture: ComponentFixture<AdmiCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiCuentasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
