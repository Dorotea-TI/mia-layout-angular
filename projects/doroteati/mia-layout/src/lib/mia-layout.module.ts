/** Angular */
import { NgModule } from '@angular/core';

import { MiaAuthModule } from '@doroteati/mia-auth';
import { MiaCoreModule } from '@doroteati/mia-core';
import { MiaLoadingModule } from '@doroteati/mia-loading';
import { MiaMainLayoutComponent } from './components/mia-main-layout/mia-main-layout.component';
import { MiaListComponent } from './components/mia-list/mia-list.component';
import { MiaPageCrudComponent } from './pages/mia-page-crud/mia-page-crud.component';

@NgModule({
  imports: [
    MiaCoreModule,
    MiaAuthModule,
    MiaLoadingModule,
    MiaMainLayoutComponent,
    MiaListComponent,
    MiaPageCrudComponent,
  ],
  exports: [
    MiaMainLayoutComponent,
    MiaListComponent,
    MiaPageCrudComponent,
  ],
})
export class MiaLayoutModule {}
