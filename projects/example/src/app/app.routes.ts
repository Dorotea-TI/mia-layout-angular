import { Routes } from '@angular/router';
import {
  MiaMainLayoutComponent,
  MiaMainLayoutConfig,
} from '@doroteati/mia-layout';
import { VideosComponent } from './pages/videos/videos.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: MiaMainLayoutComponent,
    data: {
      title: 'Agency Coda',
      logoImage:
        'https://doroteati.com/wp-content/uploads/2021/02/agency-coda-white-text@3x.png',
      mainRoute: '/',
      itemsMenu: [
        {
          title: 'Dashboard',
          route: '/dashboard',
          icon: 'dashboard',
        },
        {
          title: 'Videos',
          route: '/videos',
          icon: 'video_library',
        },
      ],
      userMenu: [
        {
          title: 'My Profile',
          route: 'my-profile',
          icon: 'account_circle',
        },
        {
          title: 'Logout',
          action: 'logout',
          icon: 'logout',
        },
      ],
    } as MiaMainLayoutConfig,
    children: [
      { path: 'videos', component: VideosComponent },
      { path: 'dashboard', component: VideosComponent },
      { path: '', pathMatch: 'full', redirectTo: 'videos' },
      { path: '**', redirectTo: 'videos' },
    ],
  },
];
