import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { 
    //hosting (this belongs in readme)
    //https://medium.com/@P_Lessing/single-page-apps-on-aws-part-1-hosting-a-website-on-s3-3c9871f126
    //https://dash.cloudflare.com/711301f979a9b7880a7e2b1ade4b2557/brianhadley.dev/caching/configuration
  }

  ngOnInit() {
  }

}
