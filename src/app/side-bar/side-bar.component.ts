import { Component, OnInit, Input } from '@angular/core';
import { TitleShareService } from "../services/title-share.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.sass']
})
export class SideBarComponent implements OnInit {

  constructor(
    private titleService:TitleShareService
  ) { }
  
  @Input() menuItemList
  ngOnInit() {
    
  }

  changeMenuAndReturnToViewWindow(menuItem){
    this.titleService.changeMenuItem(menuItem)
    // console.log(menuItem)
  }

}
