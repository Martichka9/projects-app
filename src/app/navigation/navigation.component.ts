import { Component, OnInit, HostListener, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  // updating menu styles on window size changed
  @HostListener('window:resize', ['$event'])
    onResize(event) {
    event.target.innerWidth;
  }

  ngAfterViewChecked() {
    document.querySelectorAll('.links')[0].click();
  }
}
