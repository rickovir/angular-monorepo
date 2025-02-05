import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from '@angular-monorepo/greeting';

@Component({
  imports: [CommonModule, GreetingComponent],
  selector: 'app-remote1-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class RemoteEntryComponent {}
