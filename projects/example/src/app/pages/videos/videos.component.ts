import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaPageCrudComponent, MiaPageCrudConfig } from 'projects/agencycoda/mia-layout/src/public-api';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  @ViewChild('pageComp') pageComp!: MiaPageCrudComponent;

  config = new MiaPageCrudConfig();

  constructor() { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onAction(action: {key: string; item: any;}) {
    if(action.key == 'add'){
      alert('Click ADD');
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
      { key: 'provider', type: 'string', title: 'Proveedor', field_key: 'provider' },
      { key: 'status', type: 'string', title: '', field_key: 'status' },
      { key: 'more', type: 'more', title: '', extra: {
        actions: [
          { icon: 'warning', title: 'Sin aprobar (si es costo fijo)', key: 'withou_approve' },
          { icon: 'check', title: 'Aprobar (si es costo fijo)', key: 'approve' },
          { icon: 'create', title: 'Editar', key: 'edit' },
          { icon: 'delete', title: 'Borrar', key: 'remove' },
        ]
      } }
    ];
  }

  loadConfig() {
    this.config.title = 'Videos';

    this.config.buttons.push({ key: 'add', title: 'Agregar', icon: 'edit' });

    this.loadTableConfig();
  }
}
