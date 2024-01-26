import {
  bootstrapApplication,
  platformBrowser,
} from '@angular/platform-browser';
import { appConfig } from './presentation/app/app.config';
import { AppComponent } from './presentation/app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './presentation/app/app.module';

//bootstrapApplication(AppComponent, appConfig)
//.catch((err) => console.error(err));

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
