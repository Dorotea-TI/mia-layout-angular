import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass } from '@angular/common';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MiaItemList } from '../mia-list/mia-list.component';
import { MiaListComponent } from '../mia-list/mia-list.component';
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
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterOutlet,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MiaListComponent,
  ],
  templateUrl: './mia-main-layout.component.html',
  styleUrls: ['./mia-main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiaMainLayoutComponent implements OnInit {
  protected readonly breakpointObserver = inject(BreakpointObserver);
  protected readonly route = inject(ActivatedRoute);
  protected readonly authService = inject(MiaAuthService);
  protected readonly navigator = inject(Router);
  protected readonly userMenuService = inject(UserMenuService);
  private readonly destroyRef = inject(DestroyRef);

  config!: MiaMainLayoutConfig;
  isSidebarOpen: boolean = true;
  currentUser?: MiaUser;

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
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((data) => (this.currentUser = data as MiaUser));
  }

  loadConfig() {
    this.route.data
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        this.config = result as MiaMainLayoutConfig;
      });
  }

  configResponsive() {
    this.breakpointObserver
      .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
      .pipe(takeUntilDestroyed(this.destroyRef))
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
