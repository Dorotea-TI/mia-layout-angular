import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaFilterBoxConfig } from '@doroteati/mia-form';
import {
  MiaPageCrudComponent,
  MiaPageCrudConfig,
} from 'projects/doroteati/mia-layout/src/public-api';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @ViewChild('pageComp') pageComp!: MiaPageCrudComponent;

  config = new MiaPageCrudConfig();

  constructor() {}

  ngOnInit(): void {
    this.loadConfig();
  }

  onSearch(text: string) {
    console.log('Searching: ' + text);
  }

  onAction(action: { key: string; item: any }) {
    if (action.key == 'add') {
      alert('Click ADD');
    } else if (action.key == 'search') {
      this.onSearch(action.item);
    }
  }

  loadTableConfig() {
    this.config.tableConfig.loadingColor = 'black';
    this.config.tableConfig.hasEmptyScreen = false;
    //this.config.tableConfig.service = this.videoService;
    this.config.tableConfig.columns = [
      { key: 'id', type: 'string', title: '#', field_key: 'id' },
      { key: 'amount', type: 'string', title: 'Monto', field_key: 'amount' },
      { key: 'title', type: 'string', title: 'Title', field_key: 'title' },
      { key: 'date', type: 'string', title: 'Fecha', field_key: 'date' },
      {
        key: 'provider',
        type: 'string',
        title: 'Proveedor',
        field_key: 'provider',
      },
      { key: 'status', type: 'string', title: '', field_key: 'status' },
      {
        key: 'more',
        type: 'more',
        title: '',
        extra: {
          actions: [
            {
              icon: 'warning',
              title: 'Sin aprobar (si es costo fijo)',
              key: 'withou_approve',
            },
            {
              icon: 'check',
              title: 'Aprobar (si es costo fijo)',
              key: 'approve',
            },
            { icon: 'create', title: 'Editar', key: 'edit' },
            { icon: 'delete', title: 'Borrar', key: 'remove' },
          ],
        },
      },
    ];
  }

  loadConfig() {
    this.config.title = 'Videos';

    this.config.buttons.push({ key: 'add', title: 'Agregar', icon: 'edit' });

    this.loadTableConfig();
    this.loadFilterBox();
  }

  loadFilterBox() {
    this.config.filterBox = new MiaFilterBoxConfig();
    this.config.filterBox.filters = [
      {
        key: 'visibility',
        title: 'Visibilidad',
        value: 1,
        type: 1,
        options: [
          { id: 0, title: 'Invitacion Cerrada', color: 'warning' },
          { id: 1, title: 'Publica', color: 'success' },
        ],
      },
      {
        key: 'type',
        title: 'Tipo',
        value: 0,
        type: 2,
        options: [
          { id: 0, title: 'Subasta en Linea', color: 'warning' },
          { id: 1, title: 'Martillo virtual', color: 'success' },
          { id: 2, title: 'Martillo presencial', color: 'success' },
        ],
      },
      {
        key: 'status',
        title: 'Estado',
        value: 1,
        type: 3,
        options: [
          { id: 0, title: 'En Borrador', color: 'pending' },
          { id: 1, title: 'Activa', color: 'success' },
          { id: 2, title: 'Finalizada', color: 'accent' },
          { id: 3, title: 'Completada', color: 'black' },
          { id: 4, title: 'Finalizada con visualización', color: 'black' },
          { id: 5, title: 'Programada con visualización', color: 'accent' },
        ],
      },
    ];
  }
}
