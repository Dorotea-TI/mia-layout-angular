import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

/** Angular Material */
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

/** MIA Libraries */
import { MiaAuthModule } from '@agencycoda/mia-auth';

/** Components */
import { MiaMainLayoutComponent } from './components/mia-main-layout/mia-main-layout.component';
import { MiaListComponent } from './components/mia-list/mia-list.component';




@NgModule({
  declarations: [
    MiaMainLayoutComponent,
    MiaListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,

    // Angular Material
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

    // Mia Libraries
    MiaAuthModule
  ],
  exports: [
    MiaMainLayoutComponent,
    MiaListComponent
  ]
})
export class MiaLayoutModule { }
