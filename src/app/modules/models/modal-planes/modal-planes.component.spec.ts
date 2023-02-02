import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlanesComponent } from './modal-planes.component';

describe('ModalPlanesComponent', () => {
  let component: ModalPlanesComponent;
  let fixture: ComponentFixture<ModalPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
