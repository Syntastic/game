import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SongGuard implements CanActivate {
  public constructor(private router: Router) {}

  public canActivate(): boolean | UrlTree {
    return this.router.url === '/' ? this.router.parseUrl('game') : true;
    // return true;
  }
}
