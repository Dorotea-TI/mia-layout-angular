import { Type } from '@angular/core';
import { MiaListComponent } from './components/mia-list/mia-list.component';
import { MiaMainLayoutComponent } from './components/mia-main-layout/mia-main-layout.component';
import { MiaPageCrudComponent } from './pages/mia-page-crud/mia-page-crud.component';

export const MIA_LAYOUT_STANDALONE_IMPORTS: ReadonlyArray<Type<unknown>> = [
  MiaMainLayoutComponent,
  MiaListComponent,
  MiaPageCrudComponent,
];
