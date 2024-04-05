import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterLink } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]
};
