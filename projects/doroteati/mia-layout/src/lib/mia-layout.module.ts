/** Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* import { FlexLayoutModule } from '@angular/flex-layout'; */
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

/** MIA Libraries */
import { MiaAuthModule } from '@doroteati/mia-auth';
import { MiaTableModule } from '@doroteati/mia-table';
import { MiaLoadingModule } from '@doroteati/mia-loading';
import { MiaCoreModule } from '@doroteati/mia-core';
import { MiaFormModule } from '@doroteati/mia-form';

/** Components */
import { MiaMainLayoutComponent } from './components/mia-main-layout/mia-main-layout.component';
import { MiaListComponent } from './components/mia-list/mia-list.component';

/** Pages */
import { MiaPageCrudComponent } from './pages/mia-page-crud/mia-page-crud.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    // Components
    MiaMainLayoutComponent,
    MiaListComponent,

    // Pages
    MiaPageCrudComponent,
  ],
  imports: [
    // Angular Core
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    /* FlexLayoutModule, */

    // Angular Material
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,

    // Mia Libraries
    MiaCoreModule,
    MiaAuthModule,
    MiaLoadingModule,
    MiaTableModule,
    MiaFormModule,
  ],
  exports: [
    // Components
    MiaMainLayoutComponent,
    MiaListComponent,

    // Pages
    MiaPageCrudComponent,
  ],
})
export class MiaLayoutModule {}
