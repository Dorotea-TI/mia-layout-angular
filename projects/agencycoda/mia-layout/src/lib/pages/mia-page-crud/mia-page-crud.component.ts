import { MiaConfirmModalComponent, MiaConfirmModalConfig, truly } from '@agencycoda/mia-core';
import { MiaTableComponent, MiaTableConfig } from '@agencycoda/mia-table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

export class MiaPageCrudConfig {
  title = '';
  tableConfig = new MiaTableConfig();

  buttons: Array<{ key: string, title: string, icon?: string, classes?: string }> = [];
}

@Component({
  selector: 'mia-page-crud',
  templateUrl: './mia-page-crud.component.html',
  styleUrls: ['./mia-page-crud.component.scss']
})
export class MiaPageCrudComponent implements OnInit {

  @ViewChild('tableCom') tableCom!: MiaTableComponent;

  @Input() config!: MiaPageCrudConfig;
  @Output() action = new EventEmitter<{key: string; item: any;}>();

  constructor(
    protected dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onClickButton(key: string) {
    this.action.emit({ key: key, item: undefined });
  }

  onRemove(item: any) {
    this.config.tableConfig.service.remove(item.id).then(result => {
      this.loadItems();
    });
  }

  onClickRemove(item: any) {
    let config = new MiaConfirmModalConfig();
    config.title = 'Are you sure?';
    this.dialog.open(MiaConfirmModalComponent, {
      data: config
    }).afterClosed().pipe(truly()).subscribe(result => this.onRemove(item));
  }

  loadItems() {
    this.tableCom.loadItems();
  }

  loadConfig() {
    this.config.tableConfig.onClick.subscribe(result => {
      this.action.emit(result);
    });
  }
}
