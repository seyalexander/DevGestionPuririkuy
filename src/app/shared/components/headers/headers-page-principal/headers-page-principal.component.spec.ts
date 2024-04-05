import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersPagePrincipalComponent } from './headers-page-principal.component';

describe('HeadersPagePrincipalComponent', () => {
  let component: HeadersPagePrincipalComponent;
  let fixture: ComponentFixture<HeadersPagePrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadersPagePrincipalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadersPagePrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
