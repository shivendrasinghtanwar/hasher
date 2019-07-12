import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleShareService {

  private menuItemObject = new BehaviorSubject('default message')
  currentMenuItem = this.menuItemObject.asObservable()
  
  constructor() { }

  changeMenuItem(record: any) {
    this.menuItemObject.next(record)
  }
}
