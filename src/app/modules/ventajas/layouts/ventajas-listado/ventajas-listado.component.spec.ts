import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentajasListadoComponent } from './ventajas-listado.component';

describe('VentajasListadoComponent', () => {
  let component: VentajasListadoComponent;
  let fixture: ComponentFixture<VentajasListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentajasListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentajasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
