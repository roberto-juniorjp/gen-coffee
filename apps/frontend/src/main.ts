import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
  ],
}).catch(err => console.error(err));