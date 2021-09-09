import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class MiaItemList {
  title: string = '';
  route: string = '';
  icon?: string;
}

@Component({
  selector: 'mia-list',
  templateUrl: './mia-list.component.html',
  styleUrls: ['./mia-list.component.scss']
})
export class MiaListComponent implements OnInit {

  @Input() isOpen = true;
  @Input() items?: Array<MiaItemList> = [];
  @Output() clickItem = new EventEmitter<MiaItemList>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(item: MiaItemList) {
    this.clickItem.emit(item);
  }
}
