import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from '../model/skill';

const skills: Skill[] = [{skillDescription: "C#", proficiency: 8},
                          {skillDescription: "Typescript", proficiency: 8},
                          {skillDescription: "SQL", proficiency: 9},
                          {skillDescription: "Angular", proficiency: 9},
                          {skillDescription: "Python", proficiency: 7},
                          {skillDescription: "Devops/CI/CD", proficiency: 6},
                          {skillDescription: "Azure", proficiency: 6},
                          {skillDescription: "AWS", proficiency: 4}];

@Injectable({
  providedIn: 'root'
})
export class SkillService {

constructor() { }

getSkills(): Observable<Skill[]> {
  return of(skills);
}

}
