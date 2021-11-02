import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience.service';
import { Observable } from 'rxjs';
import { Experience } from 'src/app/model/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences$: Observable<Experience[]>;

  constructor(private _experienceService: ExperienceService) { 
    this.experiences$ = _experienceService.getExperience();
  }

  ngOnInit() {
  }

}
