import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiaMainLayoutComponent, MiaMainLayoutConfig } from 'projects/agencycoda/mia-layout/src/public-api';

const routes: Routes = [
  {
    path: '',
    component: MiaMainLayoutComponent,
    data: {
      title: 'Agency Coda',
      logoImage: 'https://agencycoda.com/wp-content/uploads/2021/02/agency-coda-white-text@3x.png',
      mainRoute: '/',
      itemsMenu: [
        {
          title: 'Dashboard',
          route: '/dashboard',
          icon: 'dashboard'
        }
      ]
    } as MiaMainLayoutConfig,
    children: [
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
