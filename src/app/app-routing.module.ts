import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobComponent } from './job/job.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { PResolver } from './services/p-resolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects-list', component: ProjectsListComponent, resolve: {pResolver: PResolver}},
  {path: 'projects-list/:id', component: ProjectComponent, resolve: {pResolver: PResolver}},
  {path: 'jobs-list', component: JobsListComponent, resolve: {pResolver: PResolver}},
  {path: 'jobs-list/:id', component: JobComponent, resolve: {pResolver: PResolver}},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectComponent,
    ProjectsListComponent,
    JobsListComponent,
    JobComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    PResolver
  ]
})
export class AppRoutingModule { }
