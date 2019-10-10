import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
import { LoadProjectsService } from '../services/load-projects.service';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PResolver } from '../services/p-resolver.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.sass']
})
export class ProjectsListComponent implements OnInit {
  private currPage: number = 1;
  private prjToLoad: number = 8;
  private prjList: Array<IProject> = [];
  private prjListSubscription : Subscription;
  constructor(private route : ActivatedRoute, private prjService : LoadProjectsService, private elem: ElementRef,private renderer : Renderer2) { 
    this.prjListSubscription = this.route.data.subscribe(
      data => {
        this.prjList=data.pResolver.projects;
      });
  }

  @ViewChild('getWidth',{static:false}) containerWidth : ElementRef;
  @HostListener('window:resize') onResize(){
    this.prjToLoad = this.prjService.prjToShow(this.containerWidth.nativeElement.offsetWidth);
  }
  @HostListener('document:ready') onLoadDone(){
    this.prjToLoad = this.prjService.jobsToShow(this.containerWidth.nativeElement.offsetWidth);
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.prjListSubscription.unsubscribe();
  }

}
