import { Component, OnInit, Input } from '@angular/core';
import { TitleShareService } from "../services/title-share.service";

@Component({
  selector: 'app-view-window',
  templateUrl: './view-window.component.html',
  styleUrls: ['./view-window.component.sass']
})
export class ViewWindowComponent implements OnInit {

  constructor(
    private titleService:TitleShareService
  ) { }

  @Input() menuItemList
  menuItem:any
  ngOnInit() {
    this.titleService.currentMenuItem.subscribe(
      record => this.menuItem = record
    )
  }

}
