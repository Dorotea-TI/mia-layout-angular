import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MiaFilterBoxConfig, MiaFilterType } from '@doroteati/mia-form';
import {
  MiaPageCrudComponent,
  MiaPageCrudConfig,
} from '@doroteati/mia-layout';
import { AuctionService } from '../../services/auction.service';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [MiaPageCrudComponent],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  @ViewChild('pageComp') pageComp!: MiaPageCrudComponent;

  config = new MiaPageCrudConfig();
  protected readonly auctionService = inject(AuctionService);

  ngOnInit(): void {
    this.loadConfig();
  }

  onSearch(text: string) {
    this.config.tableConfig.query.resetWhere();
    if (text.length > 2) {
      this.config.tableConfig.query.addWhereLikes(['title'], text);
    } else if (text.length > 0) {
      return;
    }
    this.pageComp.loadItems();
  }

  onAction(action: { key: string; item: any }) {
    if (action.key === 'add') {
      alert('Click ADD');
    } else if (action.key === 'search') {
      this.onSearch(action.item);
    } else if (action.key === 'remove') {
      this.pageComp.onClickRemoveEs(action.item);
    }
    // El resto de acciones permanecen igual como antes
    console.log('Action:', action);
  }

  loadTableConfig() {
    this.config.tableConfig.query.addWith('group');

    this.config.tableConfig.loadingColor = 'black';
    this.config.tableConfig.hasEmptyScreen = false;

    // ¡CONECTAR EL SERVICIO REAL!
    this.config.tableConfig.service = this.auctionService;

    this.config.tableConfig.columns = [
      { key: 'id', type: 'string', title: '#', field_key: 'id' },
      {
        key: 'group',
        type: 'user',
        title: 'Subasta',
        extra: {
          field_firstname: ['group', 'title'],
          field_subtitle: ['group', 'code'],
        },
      },
      { key: 'title', type: 'string', title: 'Nombre', field_key: 'title' },
      {
        key: 'date_at',
        type: 'string',
        title: 'Inicio / Finalización',
        field_key: 'end_date',
      },
      { key: 'code', type: 'string', title: 'Key code', field_key: 'code' },
      {
        key: 'visibility',
        type: 'status',
        title: 'Visibilidad',
        field_key: 'visibility',
        extra: {
          options: [
            { value: 0, title: 'Invitacion Cerrada' },
            { value: 1, title: 'Publica' },
          ],
        },
      },
      {
        key: 'type',
        type: 'status',
        title: 'Tipo',
        field_key: 'type',
        extra: {
          options: [
            { value: 0, title: 'Subasta en Linea' },
            { value: 1, title: 'Martillo virtual' },
            { value: 2, title: 'Martillo presencial' },
          ],
        },
      },
      {
        key: 'status',
        type: 'status',
        title: 'Estado',
        field_key: 'status',
        extra: {
          options: [
            { value: 0, title: 'En Borrador', color: 'pending' },
            { value: 1, title: 'Activa', color: 'success' },
            { value: 2, title: 'Finalizada', color: 'accent' },
            { value: 3, title: 'Completada', color: 'black' },
            { value: 4, title: 'Cerrada con visualización', color: 'accent' },
            {
              value: 5,
              title: 'Programada con visualización',
              color: 'accent',
            },
          ],
        },
      },
    ];
  }

  loadFilterBox() {
    this.config.filterBox = new MiaFilterBoxConfig();
    this.config.filterBox.filters = [
      {
        key: 'visibility',
        title: 'Visibilidad',
        value: 1,
        type: MiaFilterType.TYPE_OPTIONS,
        options: [
          { id: 0, title: 'Invitacion Cerrada', color: 'warning' },
          { id: 1, title: 'Publica', color: 'success' },
        ],
      },
      {
        key: 'type',
        title: 'Tipo',
        value: 0,
        type: MiaFilterType.TYPE_OPTIONS,
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
        type: MiaFilterType.TYPE_OPTIONS,
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

  loadConfig() {
    this.config.title = 'Activos';
    this.config.showColumnsButton = true;
    this.config.buttons = [{ key: 'add', title: 'Agregar', icon: 'add' }];

    this.loadTableConfig();
    this.loadFilterBox();
  }
}
