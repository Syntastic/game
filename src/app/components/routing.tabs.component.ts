import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-tabs',
  styleUrls: ['./routing.tabs.component.scss'],
  templateUrl: './routing.tabs.component.html',
})
export class RoutingTabsComponent {
  public tabs: Tab[] = [
    { route: 'game', display: 'Start' },
    { route: 'list', display: 'Song List' },
    { route: 'scoring', display: 'Score Sheet' },
    { route: 'links', display: 'Links' },
  ];

  public constructor(private router: Router) {}

  public routeTo(route: string): void {
    this.router.navigate([route]);
  }
}

interface Tab {
  route: string;
  display: string;
}
