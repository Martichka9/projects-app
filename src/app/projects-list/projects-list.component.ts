import { Component, OnInit, HostListener } from '@angular/core';
import { LoadProjectsService } from '../services/load-projects.service';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent implements OnInit {
  currPage = 1;
  prjToLoad = 9;
  prjList: Array<IProject> = [];
  prjListSubscription: Subscription;

  public clicks = false;

  constructor(private route: ActivatedRoute, private prjService: LoadProjectsService) {
    this.prjListSubscription = this.route.data.subscribe(
      data => {
        this.prjList = data.pResolver.projects;
      });
  }

  @HostListener('window:resize') onResize(){
    this.prjToLoad = this.prjService.prjToShow(window.innerWidth);
  }

  ngOnInit() {
    this.onResize();
  }
}
