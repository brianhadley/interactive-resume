import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/services/skill.service';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/model/skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skill$ : Observable<Skill[]>;

  constructor(private _skillService: SkillService) { 
    this.skill$ = _skillService.getSkills();
  }

  ngOnInit() {
  }

}
