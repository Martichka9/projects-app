import { Component, OnInit, Renderer2 } from '@angular/core';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.sass']
})
export class JobComponent implements OnInit {
  private job = IProject;
  private subscription : Subscription;

  constructor(private route: ActivatedRoute, private rend: Renderer2) { 
    this.subscription = this.route.data.subscribe(
      data => {
        this.job = data.pResolver.projects.find(elem => elem.id === route.params['_value']['id']);
      });
  }
  ngOnInit() {
    
  }

  ngAfterViewChecked(){
    if(document.getElementById('outer').clientHeight+80 <= window.innerHeight){
      this.rend.setStyle(document.getElementById('footer'),'position','absolute');
      this.rend.setStyle(document.getElementById('footer'),'bottom','0');
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
      this.rend.setStyle(document.getElementById('footer'),'position','');
      this.rend.setStyle(document.getElementById('footer'),'bottom','');
    }
}

