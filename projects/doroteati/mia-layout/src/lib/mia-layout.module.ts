/** Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
/* import { FlexLayoutModule } from '@angular/flex-layout'; */

/** Angular Material */
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

/** MIA Libraries */
import { MiaAuthModule } from '@agencycoda/mia-auth';
import { MiaTableModule } from '@agencycoda/mia-table';
import { MiaLoadingModule } from '@agencycoda/mia-loading';
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaFormModule } from '@agencycoda/mia-form';

/** Components */
import { MiaMainLayoutComponent } from './components/mia-main-layout/mia-main-layout.component';
import { MiaListComponent } from './components/mia-list/mia-list.component';

/** Pages */
import { MiaPageCrudComponent } from './pages/mia-page-crud/mia-page-crud.component';







@NgModule({
  declarations: [
    // Components
    MiaMainLayoutComponent,
    MiaListComponent,

    // Pages
    MiaPageCrudComponent
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
    MiaFormModule
  ],
  exports: [
    // Components
    MiaMainLayoutComponent,
    MiaListComponent,

    // Pages
    MiaPageCrudComponent
  ]
})
export class MiaLayoutModule { }
