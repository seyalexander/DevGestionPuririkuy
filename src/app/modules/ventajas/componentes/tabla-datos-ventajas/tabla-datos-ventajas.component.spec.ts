import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDatosVentajasComponent } from './tabla-datos-ventajas.component';

describe('TablaDatosVentajasComponent', () => {
  let component: TablaDatosVentajasComponent;
  let fixture: ComponentFixture<TablaDatosVentajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaDatosVentajasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaDatosVentajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
