import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

export class MiaItemList {
  title: string = '';
  route?: string = '';
  icon?: string;
  action?: string = '';
}

@Component({
  selector: 'mia-list',
  standalone: true,
  imports: [MatIconModule, MatListModule, RouterLink, RouterLinkActive],
  templateUrl: './mia-list.component.html',
  styleUrls: ['./mia-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiaListComponent {
  @Input() isOpen = true;
  @Input() items?: Array<MiaItemList> = [];
  @Output() clickItem = new EventEmitter<MiaItemList>();

  onClick(item: MiaItemList) {
    this.clickItem.emit(item);
  }
}
