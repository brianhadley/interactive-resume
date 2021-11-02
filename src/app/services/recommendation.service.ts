import { Injectable } from '@angular/core';
import { Recommendation } from '../model/recommendation';
import { Observable, of } from 'rxjs';

const recommendations: Recommendation[] = [{recommenderName: "Cool Guy", recommenderRelationship: "Former Boss", recommendationText: "You need this guy on your team!", contactInfo: "555-555-1212"}];

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

constructor() { }

getRecommendations(): Observable<Recommendation[]> {
  return of(recommendations);
}

}
