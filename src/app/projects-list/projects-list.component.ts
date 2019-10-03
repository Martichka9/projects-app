import { Component, OnInit, ElementRef, ViewChild, Renderer2, HostListener } from '@angular/core';
import { LoadProjectsService } from '../services/load-projects.service';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';

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
  constructor(private prjService : LoadProjectsService, private elem: ElementRef,private renderer : Renderer2) { }

  @ViewChild('getWidth',{static:false}) containerWidth : ElementRef;

  ngOnInit() {
    this.prjListSubscription = this.prjService.getAllProjects().subscribe(
      data => {
        this.prjList=data['projects'];
        console.log(data);
        console.log(this.prjList);
      });
  }
  
  ngAfterViewInit(){
    this.prjToLoad = this.prjService.prjToShow(this.containerWidth.nativeElement.offsetWidth);
  }

  @HostListener('window:resize') onResize(){
    this.prjToLoad = this.prjService.prjToShow(this.containerWidth.nativeElement.offsetWidth);
  }

  ngOnDestroy(){
    this.prjListSubscription.unsubscribe();
    console.log('cleared');
  }

}
