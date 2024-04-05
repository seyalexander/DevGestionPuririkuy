import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosListadoComponent } from './servicios-listado.component';

describe('ServiciosListadoComponent', () => {
  let component: ServiciosListadoComponent;
  let fixture: ComponentFixture<ServiciosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
