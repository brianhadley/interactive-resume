import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Recommendation } from 'src/app/model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  recommendation$: Observable<Recommendation[]>;

  constructor(private _recommendationService: RecommendationService) { 
    this.recommendation$ = _recommendationService.getRecommendations();
  }

  ngOnInit() {
  }

}
