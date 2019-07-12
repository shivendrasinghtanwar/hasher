import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.sass']
})
export class SideBarMenuComponent implements OnInit {

  constructor() { }
  @Input() record;

  ngOnInit() {
   
  }

  

}
