import { Component, OnInit, ElementRef, Renderer2, ViewChild, HostListener } from '@angular/core';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';
import { LoadProjectsService } from '../services/load-projects.service';
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
  constructor(private route : ActivatedRoute, private prjService : LoadProjectsService, private elem: ElementRef,private renderer : Renderer2) { 
    this.prjListSubscription = this.route.data.subscribe(
      data => {
        this.prjList=data.pResolver.projects;
      });
  }

  @ViewChild('getWidth',{static:false}) containerWidth : ElementRef;
  @HostListener('window:resize') onResize(){
    this.prjToLoad = this.prjService.jobsToShow(this.containerWidth.nativeElement.offsetWidth);
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
