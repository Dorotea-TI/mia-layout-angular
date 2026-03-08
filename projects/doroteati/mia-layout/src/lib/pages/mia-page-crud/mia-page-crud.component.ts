import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  inject,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MiaConfirmModalComponent,
  MiaConfirmModalConfig,
  MiaPagination,
  truly,
} from '@doroteati/mia-core';
import {
  MiaFilterBoxConfig,
  MiaFormModule,
  MiaFormModalComponent,
  MiaFormModalConfig,
} from '@doroteati/mia-form';
import { MiaTableComponent, MiaTableConfig, MiaTableModule } from '@doroteati/mia-table';

export class MiaPageCrudConfig {
  title = '';
  tableConfig = new MiaTableConfig();
  hasSearch = true;
  buttons: Array<{
    key: string;
    title: string;
    icon?: string;
    classes?: string;
  }> = [];
  formConfig = new MiaFormModalConfig();
  filterBox?: MiaFilterBoxConfig;
  showColumnsButton?: boolean = false;
}

@Component({
  selector: 'mia-page-crud',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MiaFormModule,
    MiaTableModule,
  ],
  templateUrl: './mia-page-crud.component.html',
  styleUrls: ['./mia-page-crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiaPageCrudComponent implements OnInit {
  protected readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  @ViewChild('tableComp') tableComp!: MiaTableComponent;

  @Input() config!: MiaPageCrudConfig;
  @Output() action = new EventEmitter<{ key: string; item: any }>();
  @Output() loadDataCompleted = new EventEmitter<MiaPagination<any>>();

  @Input() hasBackButton = false;
  inputSearch = new FormControl('', { nonNullable: true });

  @Input() lang: string = 'es';

  ngOnInit(): void {
    this.loadConfig();
  }

  openForm(item: any) {
    this.config.formConfig.item = item;
    return this.openFormCustom(this.config.formConfig);
  }

  openFormCustom(config: MiaFormModalConfig) {
    return this.dialog
      .open(MiaFormModalComponent, {
        width: '500px',
        panelClass: 'modal-full-width-mobile',
        data: config,
      })
      .afterClosed();
  }

  onClickButton(key: string) {
    this.action.emit({ key: key, item: undefined });
  }

  onRemove(item: any) {
    this.config.tableConfig.service.remove(item.id).subscribe((result) => {
      this.loadItems();
    });
  }

  onClickRemovePrivate(item: any, title: string, buttons: Array<any>) {
    let config = new MiaConfirmModalConfig();
    config.title = title;
    config.buttons = buttons;
    this.dialog
      .open(MiaConfirmModalComponent, {
        data: config,
      })
      .afterClosed()
      .pipe(truly())
      .subscribe((result) => this.onRemove(item));
  }

  onClickRemove(item: any) {
    this.onClickRemovePrivate(item, 'Are you sure?', [
      { title: 'NO', value: false },
      { title: 'YES', value: true },
    ]);
  }

  onClickRemoveEs(item: any) {
    this.onClickRemovePrivate(item, '¿Usted esta seguro?', [
      { title: 'NO', value: false },
      { title: 'SI', value: true },
    ]);
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
    this.ensureTableConfigId();

    this.config.tableConfig.onClick.subscribe((result) => {
      this.action.emit(result);
    });

    this.inputSearch.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((text) =>
      this.action.emit({ key: 'search', item: text })
      );
  }

  private ensureTableConfigId(): void {
    if (this.config.tableConfig.id?.trim()) {
      return;
    }

    const routeKey = this.router.url
      .split('?')[0]
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase();

    const titleKey = this.config.title
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase();

    this.config.tableConfig.id = routeKey || titleKey || 'mia-page-crud-table';
  }
}
