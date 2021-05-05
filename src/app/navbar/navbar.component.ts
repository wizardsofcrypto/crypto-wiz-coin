import { Component, OnInit } from '@angular/core';
import { NavbarLink } from './navbar-link';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public menuIsOpen: boolean;
  public navbarLinks: NavbarLink[];

  constructor() {
    this.menuIsOpen = false;
    this.createNavbarLinks();
  }

  public shouldShowMenu(): any {
    return { 'is-active': this.menuIsOpen };
  }

  public toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  private createNavbarLinks(): void {
    this.navbarLinks = [
      new NavbarLink('Home', 'home'),
      new NavbarLink('Utility', 'utility'),
      new NavbarLink('How to Buy', 'buy'),
      new NavbarLink('Tokenomics', 'whitepaper'),
      new NavbarLink('Road Map', 'whitepaper'),
      new NavbarLink('Whitepaper', 'whitepaper'),
      new NavbarLink('Contact Us', 'whitepaper'),
    ];
  }
}
