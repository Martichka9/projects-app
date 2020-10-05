import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // updating menu styles on window size changed
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    event.target.innerWidth;
  }

  // @HostListener('document:load', ['$event'])
  //   onReady(event){
  //     document.querySelectorAll('.links')[0].click();
  //   }
  // }
}
