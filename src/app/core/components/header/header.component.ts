import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  activateMenu(): void {
    this.menuActive ? (this.menuActive = false) : (this.menuActive = true);

    console.log('menu -->', this.menuActive);
  }
}
