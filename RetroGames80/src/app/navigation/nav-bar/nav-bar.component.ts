import {Component, Input, OnInit} from '@angular/core';

export class IMenuItem {
  label: string;
  routerLink?;
  items?: IMenuItem[];
  src?: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  @Input() items: IMenuItem[];
  constructor() { }

  ngOnInit() {
  }

}
