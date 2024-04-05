import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinosListadoComponent } from './destinos-listado.component';

describe('DestinosListadoComponent', () => {
  let component: DestinosListadoComponent;
  let fixture: ComponentFixture<DestinosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinosListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DestinosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
