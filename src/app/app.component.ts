import { Component, Renderer2, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewChecked{
  title = 'projects-app';

  constructor(private rend: Renderer2) { }

  ngAfterViewChecked() {
    if (document.getElementById('wrapper').offsetHeight + 80 <= window.innerHeight){
      this.rend.setStyle(document.getElementById('footer'), 'position', 'absolute');
      this.rend.setStyle(document.getElementById('footer'), 'bottom', '0');
    }
    else {
      this.rend.setStyle(document.getElementById('footer'), 'position', '');
      this.rend.setStyle(document.getElementById('footer'), 'bottom', '');
    }
  }

}
