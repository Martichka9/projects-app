import { Component, OnInit, Renderer2, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit, AfterViewChecked, OnDestroy {

  constructor(private rend: Renderer2) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (document.getElementById('container').offsetHeight + 80 <= window.innerHeight){
      this.rend.setStyle(document.getElementById('footer'), 'position', 'absolute');
      this.rend.setStyle(document.getElementById('footer'), 'bottom', '0');
    }
  }

  ngOnDestroy() { 
    this.rend.setStyle(document.getElementById('footer'), 'position', '');
    this.rend.setStyle(document.getElementById('footer'), 'bottom', '');
  }
}

