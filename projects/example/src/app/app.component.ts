import { Component, OnInit } from '@angular/core';
import { UserMenuService } from 'projects/doroteati/mia-layout/src/lib/services/user_menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(protected userMenuService: UserMenuService) {}

  ngOnInit(): void {
    this.userMenuService.onClick.subscribe((item) => console.log(item));
  }
}
