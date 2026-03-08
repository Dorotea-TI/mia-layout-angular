import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

if (environment.production) {
  console.info('Running example app in production mode.');
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
