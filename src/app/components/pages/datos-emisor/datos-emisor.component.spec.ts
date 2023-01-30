import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosEmisorComponent } from './datos-emisor.component';

describe('DatosEmisorComponent', () => {
  let component: DatosEmisorComponent;
  let fixture: ComponentFixture<DatosEmisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosEmisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosEmisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
