import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserMenuService } from '@doroteati/mia-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly userMenuService = inject(UserMenuService);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.userMenuService.onClick
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((item: unknown) => console.log(item));
  }
}
