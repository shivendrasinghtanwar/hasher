import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  menuItemList = [
    {
      'title':'SHA-256'
    },
    {
      'title':'MD-5'
    },
    {
      'title':'SHA-64'
    }
  ]
  ngOnInit() {
    
  }

}
