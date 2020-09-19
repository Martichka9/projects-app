import { Component, OnInit, Renderer2, AfterViewChecked, OnDestroy} from '@angular/core';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.sass']
})
export class JobsListComponent implements OnInit, AfterViewChecked, OnDestroy {
  private currPage = 1;
  private prjToLoad = 8;
  private prjList: Array<IProject> = [];
  private prjListSubscription: Subscription;

  constructor(private route: ActivatedRoute, private rend: Renderer2) {
    this.prjListSubscription = this.route.data.subscribe(
      data => {
        this.prjList = data.pResolver.projects;
      });
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (document.getElementById('listContainer').offsetHeight + 80 <= window.innerHeight){
      this.rend.setStyle(document.getElementById('footer'), 'position', 'absolute');
      this.rend.setStyle(document.getElementById('footer'), 'bottom', '0');
    }
  }

  ngOnDestroy(){
    this.prjListSubscription.unsubscribe();
    this.rend.setStyle(document.getElementById('footer'), 'position', '');
    this.rend.setStyle(document.getElementById('footer'), 'bottom', '');
  }

}
