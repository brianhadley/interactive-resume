import { Injectable } from '@angular/core';

import { Experience } from '../model/experience';
import { Observable, of } from 'rxjs';
import { Employer } from '../model/employer';

const qualfon: Employer = {name: "Qualfon", imageUrl:"assets/images/qualfon.png"};
const giantSource: Employer = {name: "GiantSource", imageUrl:"assets/images/giantSource.png"};
const ssb: Employer = {name: "GiantSource", imageUrl:"assets/images/giantSource.png"};
const experienceStatic: Experience[] = 
[
  {employer: qualfon, positionTitle: "Director, BI and Workforce (final)", order:4, start: "Jun 2004", end: "Apr 2014", achievements: ["Oversaw the activities of reporting and workforce management teams", "Mentored report developers and functional managers in SSRS and SQL server query authoring"]},
  {employer: ssb, positionTitle: "Sr BI Developer", order:3, start: "Apr 2014", end: "Jan 2016", achievements: ["Architected a heatmap BI technology using Javascript and Logi Analytics reporting platform.", "Design reporting for NFL, NHL, NBA, MLB", "Author and maintain ETL processes to extract critical data from major ticket system vendors - Tickets.com, Ticketmaster, Stubhub"]},
  {employer: qualfon, positionTitle: "Sr Software Development Manager", order:2, start: "Jan 2016", end: "Jan 2020", achievements: ["Design and improved line of business support applications for a global BPO servicing Fortune 500 companies", "Led the effort to expand the in house development team internationally, expanded to 10+ FTE developers in Dehli, India", "Consult with users, management, vendors, and technicians to assess computing needs and system requirements.", "Meet with department heads, managers, supervisors, clients and vendors to coordinate on technical implementations", "Migrate primary CRM application from legacy MVC.NET to Angular", "Recruit, hire, train and supervise staff, or participate in staffing decisions.", "Implemented time tracking application", "Architected a real time escalation management system for a major wireless service provider"]},
  {employer: giantSource, positionTitle: "Sr Software Engineer", order: 1, start: "Jan 2020", end: "Present", achievements: ["Add localization support to backend services to allow expansion into multiple Latin American markets (PT and ES language support)","Contributing Member of Payments Technology Migration team - extract payments functionality into AWS serverless functions", "Provided support for customer account migrations between payment providers and data stores", "Modify and support legacy Django/AngularJS application for feature augmentation, bug resolution and to improve performance", "Modify video content indexing schema to expand support for language and subtitle video/ hls content"]}
];


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

constructor() { }

getExperience(): Observable<Experience[]> {
  return of(experienceStatic);
}

}
