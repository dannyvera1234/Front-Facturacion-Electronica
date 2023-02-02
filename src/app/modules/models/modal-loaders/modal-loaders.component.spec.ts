import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoadersComponent } from './modal-loaders.component';

describe('ModalLoadersComponent', () => {
  let component: ModalLoadersComponent;
  let fixture: ComponentFixture<ModalLoadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLoadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
