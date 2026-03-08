# @doroteati/mia-layout

Libreria Angular 21 compatible con:

- componentes standalone
- aplicaciones basadas en `NgModule`
- apps browser
- apps SSR

## Exportaciones principales

- `MiaMainLayoutComponent`
- `MiaListComponent`
- `MiaPageCrudComponent`
- `MiaLayoutModule`
- `MIA_LAYOUT_STANDALONE_IMPORTS`
- `UserMenuService`

## Uso en app standalone

```ts
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import {
  MIA_LAYOUT_STANDALONE_IMPORTS,
  MiaMainLayoutComponent,
} from '@doroteati/mia-layout';

@Component({
  standalone: true,
  imports: [...MIA_LAYOUT_STANDALONE_IMPORTS],
  template: `<mia-page-crud [config]="config"></mia-page-crud>`,
})
export class AdminPageComponent {}

export const routes: Routes = [
  {
    path: '',
    component: MiaMainLayoutComponent,
    children: [
      {
        path: 'crud',
        component: AdminPageComponent,
      },
    ],
  },
];
```

## Uso en app con modulos

```ts
import { NgModule } from '@angular/core';
import { MiaLayoutModule } from '@doroteati/mia-layout';

@NgModule({
  imports: [MiaLayoutModule],
})
export class AdminModule {}
```

## Build

```bash
npm run build
```

## Peer dependencies esperadas

- `@angular/core`
- `@angular/common`
- `@angular/forms`
- `@angular/router`
- `@angular/material`
- `@angular/cdk`
- `@doroteati/mia-auth`
- `@doroteati/mia-core`
- `@doroteati/mia-form`
- `@doroteati/mia-loading`
- `@doroteati/mia-table`

## Observacion importante

Aunque esta libreria ya fue migrada a Angular 21 y standalone, algunas dependencias transitivas del ecosistema `@doroteati/*` todavia usan paquetes heredados. Eso afecta peso del bundle, pero no impide compilar ni usar la libreria.
