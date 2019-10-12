import { Component, OnInit} from '@angular/core';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.sass']
})
export class JobsListComponent implements OnInit {
  private currPage: number = 1;
  private prjToLoad: number = 8;
  private prjList: Array<IProject> = [];
  private prjListSubscription : Subscription;

  constructor(private route : ActivatedRoute) { 
    this.prjListSubscription = this.route.data.subscribe(
      data => {
        this.prjList=data.pResolver.projects;
      });
  }

  ngOnInit() {    
  }
  
  ngOnDestroy(){
    this.prjListSubscription.unsubscribe();
  }

}
