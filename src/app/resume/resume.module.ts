import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { MatListModule } from '@angular/material/list'
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    FlexLayoutModule
  ],
  declarations: [ResumeComponent, ExperienceComponent, HeaderComponent, SkillsComponent, RecommendationComponent]
})
export class ResumeModule { }
