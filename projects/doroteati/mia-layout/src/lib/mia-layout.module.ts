/** Angular */
import { NgModule } from '@angular/core';

import { MiaAuthModule } from '@doroteati/mia-auth';
import { MiaCoreModule } from '@doroteati/mia-core';
import { MiaFormModule } from '@doroteati/mia-form';
import { MiaLoadingModule } from '@doroteati/mia-loading';
import { MiaTableModule } from '@doroteati/mia-table';
import { MiaMainLayoutComponent } from './components/mia-main-layout/mia-main-layout.component';
import { MiaListComponent } from './components/mia-list/mia-list.component';
import { MiaPageCrudComponent } from './pages/mia-page-crud/mia-page-crud.component';

@NgModule({
  imports: [
    MiaCoreModule,
    MiaAuthModule,
    MiaLoadingModule,
    MiaTableModule,
    MiaFormModule,
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
