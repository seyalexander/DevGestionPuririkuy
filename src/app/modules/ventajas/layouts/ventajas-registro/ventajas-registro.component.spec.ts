import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentajasRegistroComponent } from './ventajas-registro.component';

describe('VentajasRegistroComponent', () => {
  let component: VentajasRegistroComponent;
  let fixture: ComponentFixture<VentajasRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentajasRegistroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentajasRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
