import { TestBed } from '@angular/core/testing';

import { VentajasService } from './ventajas.service';

describe('VentajasService', () => {
  let service: VentajasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentajasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
