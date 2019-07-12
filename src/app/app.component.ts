import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  implements AfterViewInit{
  title = 'hasher';
  menuItemList = [
    {
      'title':'SHA-256',
      'description':'The SHA (Secure Hash Algorithm) is one of a number of cryptographic hash functions. A cryptographic hash is like a signature for a text or a data file. SHA-256 algorithm generates an almost-unique, fixed size 256-bit (32-byte) hash. Hash is a one way function – it cannot be decrypted back. This makes it suitable for password validation, challenge hash authentication, anti-tamper, digital signatures.'
    },
    {
      'title':'MD-5',
      'description':'The MD5 is some other algorithm'
    },
    {
      'title':'SHA-2',
      'description':'This represents the family of SHA algorithms that are a succesor to SHA-1. It includes SHA-256,SHA-212,SHA-246,etc.'
    }
  ]

  @ViewChild(SideBarComponent, {static: false}) SideBarComponent: any

  ngAfterViewInit(){
    // console.log(SideBarComponent)
  }
}
