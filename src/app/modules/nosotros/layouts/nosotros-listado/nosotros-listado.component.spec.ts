import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosListadoComponent } from './nosotros-listado.component';

describe('NosotrosListadoComponent', () => {
  let component: NosotrosListadoComponent;
  let fixture: ComponentFixture<NosotrosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosotrosListadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NosotrosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
