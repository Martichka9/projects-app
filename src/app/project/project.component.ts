import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  private project = IProject;
  private subscription : Subscription;
  
  constructor(private route: ActivatedRoute, private rend: Renderer2) { 
    this.subscription = this.route.data.subscribe(
      data => {
        this.project = data.pResolver.projects.find(elem => elem.id === route.params['_value']['id']);
      });
  }

  ngOnInit() {
  }

  ngAfterViewChecked(){
    if(document.getElementById('projectContainer').clientHeight+80 <= window.innerHeight){
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
