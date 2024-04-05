import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesListadoComponent } from './promociones-listado.component';

describe('PromocionesListadoComponent', () => {
  let component: PromocionesListadoComponent;
  let fixture: ComponentFixture<PromocionesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromocionesListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromocionesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
