import { MiaConfirmModalComponent, MiaConfirmModalConfig, MiaPagination, truly } from '@agencycoda/mia-core';
import { MiaFilterBoxConfig, MiaFormModalComponent, MiaFormModalConfig } from '@agencycoda/mia-form';
import { MiaTableComponent, MiaTableConfig } from '@agencycoda/mia-table';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

export class MiaPageCrudConfig {
  title = '';
  tableConfig = new MiaTableConfig();
  hasSearch = false;
  buttons: Array<{ key: string, title: string, icon?: string, classes?: string }> = [];
  formConfig = new MiaFormModalConfig();
  filterBox?: MiaFilterBoxConfig;
  showColumnsButton?: boolean = false;
}

@Component({
  selector: 'mia-page-crud',
  templateUrl: './mia-page-crud.component.html',
  styleUrls: ['./mia-page-crud.component.scss']
})
export class MiaPageCrudComponent implements OnInit {

  @ViewChild('tableComp') tableComp!: MiaTableComponent;

  @Input() config!: MiaPageCrudConfig;
  @Output() action = new EventEmitter<{key: string; item: any;}>();
  @Output() loadDataCompleted = new EventEmitter<MiaPagination<any>>();

  @Input() hasBackButton = false;
  inputSearch = new FormControl('');

  @Input() lang: string = 'en';

  constructor(
    protected dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  openForm(item: any) {
    this.config.formConfig.item = item;
    return this.openFormCustom(this.config.formConfig);
  }

  openFormCustom(config: MiaFormModalConfig) {
    return this.dialog.open(MiaFormModalComponent, {
      width: '500px',
      panelClass: 'modal-full-width-mobile',
      data: config
    }).afterClosed();
  }

  onClickButton(key: string) {
    this.action.emit({ key: key, item: undefined });
  }

  onRemove(item: any) {
    this.config.tableConfig.service.remove(item.id).then(result => {
      this.loadItems();
    });
  }

  onClickRemovePrivate(item: any, title: string, buttons: Array<any>) {
    let config = new MiaConfirmModalConfig();
    config.title = title;
    config.buttons = buttons;
    this.dialog.open(MiaConfirmModalComponent, {
      data: config
    }).afterClosed().pipe(truly()).subscribe(result => this.onRemove(item));
  }

  onClickRemove(item: any) {
    this.onClickRemovePrivate(item, 'Are you sure?', [{ title: 'NO', value: false }, { title: 'YES', value: true } ]);
  }

  onClickRemoveEs(item: any) {
    this.onClickRemovePrivate(item, '¿Usted esta seguro?', [{ title: 'NO', value: false }, { title: 'SI', value: true } ]);
  }

  onFilter(filters: any) {
    this.action.emit({ key: 'on-filter', item: filters });
    this.tableComp.loadItems();
  }

  onLoadDataCompleted(data: MiaPagination<any>) {
    this.loadDataCompleted.emit(data);
  }

  loadItems() {
    this.tableComp.loadItems();
  }

  loadConfig() {
    this.config.tableConfig.onClick.subscribe(result => {
      this.action.emit(result);
    });

    this.inputSearch.valueChanges.subscribe(text => this.action.emit({ key: 'search', item: text }));
  }
}
