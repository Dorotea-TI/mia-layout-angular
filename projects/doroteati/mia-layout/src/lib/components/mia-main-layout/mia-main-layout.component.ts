import { Component, OnInit } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MiaItemList } from '../mia-list/mia-list.component';
import { UserMenuService } from '../../services/user_menu.service';
import { MiaAuthService, MiaUser } from '@doroteati/mia-auth';
import { nil } from '@doroteati/mia-core';

export class MiaMainLayoutConfig {
  title?: string;
  logoImage?: string;
  mainRoute: string = '/';
  itemsMenu?: Array<MiaItemList> = [];
  userMenu?: Array<MiaItemList> = [];
}

@Component({
  selector: 'mia-main-layout',
  templateUrl: './mia-main-layout.component.html',
  styleUrls: ['./mia-main-layout.component.scss'],
})
export class MiaMainLayoutComponent implements OnInit {
  config!: MiaMainLayoutConfig;
  isSidebarOpen: boolean = true;
  currentUser?: MiaUser;

  constructor(
    protected breakpointObserver: BreakpointObserver,
    protected route: ActivatedRoute,
    protected authService: MiaAuthService,
    protected navigator: Router,
    protected userMenuService: UserMenuService
  ) {}

  ngOnInit(): void {
    this.loadConfig();
    this.configResponsive();
    this.loadUser();
  }

  onClickItem(item?: MiaItemList) {
    if (this.breakpointObserver.isMatched('(max-width: 959px)')) {
      this.isSidebarOpen = false;
    }
  }

  onClickItemInUserMenu(item?: MiaItemList) {
    this.userMenuService.onClick.next(item);
  }

  loadUser() {
    this.authService.currentUser
      .pipe(nil())
      .subscribe((data) => (this.currentUser = data as MiaUser));
  }

  loadConfig() {
    this.route.data.subscribe((result) => {
      this.config = result as MiaMainLayoutConfig;
    });
  }

  configResponsive() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSidebarOpen = false;
        }
      });
  }

  onClickLogout() {
    this.authService.logOut();
    this.navigator.navigateByUrl(this.config.mainRoute);
  }
}
