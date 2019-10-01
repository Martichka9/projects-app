import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadProjectsService } from '../services/load-projects.service';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';
import {take, delay} from 'rxjs/operators';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent implements OnInit {
  private prjList: Array<IProject> = [];
  private prjListSubscription : Subscription;
  constructor(private prjService : LoadProjectsService) { }

  ngOnInit() {
    this.prjListSubscription = this.prjService.getAllProjects().subscribe(
      data => {
        this.prjList=data['projects'];
        console.log(data);
        console.log(this.prjList);
      });
  }
  ngOnDestroy(){
    this.prjListSubscription.unsubscribe();
    console.log('cleared');
  }
}
