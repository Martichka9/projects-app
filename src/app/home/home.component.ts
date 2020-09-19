import { Component, OnInit, Renderer2, AfterViewChecked, OnDestroy } from '@angular/core';
import { LoadProjectsService } from '../services/load-projects.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewChecked, OnDestroy {

  constructor(private rend: Renderer2) { }
  ngOnInit() {
  }

  ngAfterViewChecked() {
    if(document.getElementById('homeBody').offsetHeight + 80 <= window.innerHeight){
      this.rend.setStyle(document.getElementById('footer'), 'position', 'absolute');
      this.rend.setStyle(document.getElementById('footer'), 'bottom', '0');
    }
  }
  ngOnDestroy() {
    this.rend.setStyle(document.getElementById('footer'), 'position', '');
    this.rend.setStyle(document.getElementById('footer'), 'bottom', '');
  }
}
