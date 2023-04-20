import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { defineCustomElements } from '@telekom/scale-components/loader';

import { AppModule } from './app/app.module'

defineCustomElements();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
