import { Component, OnInit } from '@angular/core';
import { LoadProjectsService } from '../services/load-projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  private prjId: string = '';
  constructor(private prjService: LoadProjectsService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.prjId = this.route.snapshot.params['id'];
    console.log(this.prjId)
  }

}
