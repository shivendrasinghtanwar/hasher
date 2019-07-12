import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-window',
  templateUrl: './view-window.component.html',
  styleUrls: ['./view-window.component.sass']
})
export class ViewWindowComponent implements OnInit {

  constructor() { }

  @Input() menuItemList
  ngOnInit() {
  }

}
