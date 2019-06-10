import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menuItem: MenuItem;
  @Input() isRoot: boolean;

  isOpen = false;

  constructor() {}

  ngOnInit() {}

  onMenuItemSelected(menuItem: MenuItem): void {
    console.log(menuItem);
  }
}
