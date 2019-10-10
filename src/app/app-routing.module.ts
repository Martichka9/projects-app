import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobComponent } from './job/job.component';
import { PResolver } from './services/p-resolver.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'projects-list', component: ProjectsListComponent, resolve: {pResolver: PResolver}},
  {path: 'projects-list/:id', component: ProjectComponent, resolve: {pResolver: PResolver}},
  {path: 'jobs-list', component: JobsListComponent, resolve: {pResolver: PResolver}},
  {path: 'jobs-list/:id', component: JobComponent, resolve: {pResolver: PResolver}},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    ProjectsListComponent,
    JobsListComponent,
    JobComponent
  ],
  imports: [
    CommonModule, 
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    PResolver
  ]
})
export class AppRoutingModule { }
