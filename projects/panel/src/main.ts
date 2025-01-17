import { platformTerminalDynamic } from 'platform-terminal';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function bootstrap() {

  if (environment.production) {
    enableProdMode();
  }

  platformTerminalDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}
