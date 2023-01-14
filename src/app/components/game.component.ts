import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  styleUrls: ['./game.component.scss'],
  templateUrl: './game.component.html',
})
export class GameComponent {
  public started: boolean;

  public constructor(private router: Router, private route: ActivatedRoute) {}

  public start(): void {
    this.started = true;
    this.router.navigate(['list']);
  }
}
