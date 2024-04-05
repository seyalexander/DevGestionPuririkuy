import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDatosPaquetesComponent } from './tabla-datos-paquetes.component';

describe('TablaDatosPaquetesComponent', () => {
  let component: TablaDatosPaquetesComponent;
  let fixture: ComponentFixture<TablaDatosPaquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaDatosPaquetesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaDatosPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
