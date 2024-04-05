import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadersTabletsPagesComponent } from './loaders-tablets-pages.component';

describe('LoadersTabletsPagesComponent', () => {
  let component: LoadersTabletsPagesComponent;
  let fixture: ComponentFixture<LoadersTabletsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadersTabletsPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadersTabletsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
