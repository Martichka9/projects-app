import { Component, OnInit } from '@angular/core';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.sass']
})
export class JobComponent implements OnInit {
  job = new IProject();
  private subscription: Subscription;

  constructor(private route: ActivatedRoute) { 
    this.subscription = this.route.data.subscribe(
      data => {
        this.job = data.pResolver.projects.find(elem => elem.id === route.params['_value']['id']);
      });
  }
  ngOnInit() {

  }
}

