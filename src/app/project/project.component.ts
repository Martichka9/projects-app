import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass']
})
export class ProjectComponent implements OnInit {
  project = new IProject();
  private subscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.subscription = this.route.data.subscribe(
      data => {
        console.log(route);
        this.project = data.pResolver.projects.find(elem => elem.id === route.params['_value']['id']);
      });
  }

  ngOnInit() {
  }
}
