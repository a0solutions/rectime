import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { NavbarsComponent } from './navbars/navbars.component';
import { MainDataShowComponent } from './main-data-show/main-data-show.component';
import { ProjectsComponent } from './main-data-show/projects/projects.component';
import { TopBarComponent } from './navbars/topBar/topBar.component';
import { SideBarComponent } from './navbars/sideBar/sideBar.component';
import { RectimeComponent } from './main-data-show/rectime/rectime.component';
import { TeamsComponent } from './main-data-show/teams/teams.component';
import { ProjectComponent } from './main-data-show/projects/project/project.component';
import { InOutTimeComponent } from './main-data-show/projects/project/in-out-time/in-out-time.component';
import { FormsModule } from '@angular/forms';
import { ProjectNameComponent } from './main-data-show/projects/project/project-name/project-name.component';
import { ProjectTagsComponent } from './main-data-show/projects/project/project-tags/project-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    NavbarsComponent,
    MainDataShowComponent,
    ProjectsComponent,
    TopBarComponent,
    SideBarComponent,
    RectimeComponent,
    TeamsComponent,
    ProjectComponent,
    InOutTimeComponent,
    ProjectNameComponent,
    ProjectTagsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
