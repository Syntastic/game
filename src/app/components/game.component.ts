import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  styleUrls: ['./game.component.scss'],
  templateUrl: './game.component.html',
})
export class GameComponent {
  public started: boolean;

  public constructor(private router: Router, private route: ActivatedRoute) {}

  public start(): void {
    this.router.navigate(['list']);
  }
}
