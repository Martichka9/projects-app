import { Component, OnInit } from '@angular/core';
import { LoadProjectsService } from '../services/load-projects.service';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  private prjId: string = '';
  private project = IProject;
  private subscription : Subscription;
  constructor(private prjService: LoadProjectsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.prjId = this.route.snapshot.params['id'];
    this.subscription = this.prjService.getAllProjects().subscribe(
      data => {
        this.project = data['projects'].find(prj => prj.id === this.prjId);
      });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
