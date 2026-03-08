# Mia Layout Angular

Workspace Angular 21 para la libreria `@doroteati/mia-layout` con:

- componentes standalone
- compatibilidad con `NgModule`
- app example moderna
- soporte para browser normal y SSR

## Comandos

```bash
npm install
npm run build
npm run build:example
npm run build:ssr
npm run dev:ssr
```

## Estado actual

- Libreria migrada a Angular `21.2.1`
- Angular Material `21.2.1`
- Example migrado a `bootstrapApplication`
- Example con SSR real usando `@angular/ssr`
- Compatibilidad mantenida para apps antiguas con modulo mediante `MiaLayoutModule`

## Estructura importante

- Libreria: `projects/doroteati/mia-layout`
- Example browser/standalone: `projects/example/src`
- SSR server: `projects/example/src/server.ts`

## Notas de compatibilidad

La libreria propia ya usa enfoque moderno, pero parte del ecosistema `@doroteati/*` aun arrastra dependencias heredadas que siguen siendo necesarias para compilar:

- `moment`
- `@angular/material-moment-adapter`
- `ng2-currency-mask`
- `ngx-quill`
- `parchment`
- `@ngx-pwa/local-storage`

No se eliminaron porque siguen siendo requeridas por `@doroteati/mia-form`, `@doroteati/mia-auth` y `@doroteati/mia-table`.

## SSR

El example ya soporta SSR con estos scripts:

```bash
npm run build:ssr
npm run serve:ssr
npm run dev:ssr
```

## API local del example

El `example` quedó apuntando a la API local en:

```text
http://localhost/
```

Endpoint validado para listar activos:

```text
POST /auction/list
```

Notas:

- autenticacion opcional
- el endpoint devuelve `success: true`
- el example usa este endpoint para poblar la tabla principal
- se quitó el filtro remoto por grupo del demo porque ese endpoint no fue parte de la verificación local

## Publicacion

```bash
npm run build
cd dist/doroteati/mia-layout
npm publish --access=public
```
