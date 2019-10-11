import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
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
  @ViewChild('getWidth',{static:false}) containerWidth : ElementRef;
  private currPage: number = 1;
  private prjToLoad: number = 9;
  private prjList: Array<IProject> = [];
  private prjListSubscription : Subscription;

  public clicks: boolean = false;

  private width:number;
private height:number;

  constructor(private route : ActivatedRoute, private prjService : LoadProjectsService, private elem: ElementRef,private renderer : Renderer2) { 
    this.prjListSubscription = this.route.data.subscribe(
      data => {
        this.prjList=data.pResolver.projects;
      });
  }

  @HostListener('window:resize') onResize(){
    this.prjToLoad = this.prjService.prjToShow(window.innerWidth);
  }

  ngOnInit() {
    this.onResize();
  }

  ngOnDestroy(){
    this.prjListSubscription.unsubscribe();
  }

}
