import { Component } from '@angular/core';
import { LoadingService } from './shared/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myMusicApp';
  jsonLdObject = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "juanitafy",
    "url": "https://juanita95.github.io/juanitafy/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://juanita95.github.io/juanitafy/{search_term_string}atenea",
      "query-input": "required name=search_term_string"
    }
  };

  constructor(
    public loadingService: LoadingService) {
  }

  get jsonLdString(): string {
    return JSON.stringify(this.jsonLdObject);
  }
}
