import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPuntoEmisionComponent } from './modal-punto-emision.component';

describe('ModalPuntoEmisionComponent', () => {
  let component: ModalPuntoEmisionComponent;
  let fixture: ComponentFixture<ModalPuntoEmisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPuntoEmisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPuntoEmisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
