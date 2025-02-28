import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from '@angular-monorepo/greeting';

@Component({
  imports: [NxWelcomeComponent, RouterModule, ButtonComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'host';

  router = inject(Router);

  test(x: string) {
    return 'test';
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
