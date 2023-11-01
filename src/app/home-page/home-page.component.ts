import { Component, OnInit, ViewChild } from '@angular/core';
import { PredictionEvent } from '../prediction-event';
import { MyCarouselComponent } from '../mycarousel/mycarousel.component';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  gesture: String = "";
  uploadPageOpen = true;
  constructor() {
  }

  ngOnInit(): void {
    const welcomePage = document.querySelector('.welcome-page');
    if (welcomePage) {
      welcomePage.classList.add('show');
      //wait 2 seconds and hide
      setTimeout(() => {
        welcomePage.classList.remove('show');
        welcomePage.classList.add('hide');
        //welcomePage.classList.remove('')
      }, 600);
    }
    //show welcome
    document.body.style.overflow = 'hidden'
    const mainContent = document.querySelector('.main');
    if (mainContent) {
      mainContent.classList.add('fade-in')
    }
  }

  prediction(event: PredictionEvent) {
    this.gesture = event.getPrediction();
  }
  toggleUploadPage() {
    this.uploadPageOpen = !this.uploadPageOpen;
  }
}
