import { Component, Input, OnInit, OnChanges, ViewChild, SimpleChanges, Renderer2 } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mycarousel',
  templateUrl: './mycarousel.component.html',
  styleUrls: ['./mycarousel.component.css']
})
export class MyCarouselComponent {
  isZoomed: Boolean;
  photos = [
    { url: "https://lh6.googleusercontent.com/NdegQ5l4Ik_Y8FjTDPWhHGhJq0Mh10YzlDnWolIp_d8OcMnLs99m0WXWQD-fCB1eSL0=w2400", details: "3 musketeers", zoomed: false }, //3 musketeers
    { url: "https://lh6.googleusercontent.com/yCiuTS0uNxMla-pJrcUpCcWK7Sed-bIUeA_MRku0CPOZnCDB6iyQXyIS4ZdNNO_Sm9U=w2400", details: "swag", zoomed: false }, //swag
    { url: "https://lh6.googleusercontent.com/fYV1Vg2ncR82YBp6uGVMbahqcR8EyGVfWCwUvWZYbg88vW1H4FSnhi-75EWjNd122Is=w2400", details: "looking up", zoomed: false } //looking up
  ]
  @Input() input: String;
  showOverlay: Boolean;
  @Input() overlayText: String;
  @ViewChild(NgbCarousel) carousel: NgbCarousel;

  constructor(private renderer: Renderer2) {
    this.isZoomed = false;
    this.showOverlay = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.input) {
      const currentValue = changes.input.currentValue;

      if (currentValue == ("Open Hand")) {
        this.nextSlide();
      } //next slide
      else if (currentValue == ("Closed Hand")) {
        this.prevSlide();
      } //prev slide
      else if (currentValue.includes("Hand Pointing")) {
        
        console.log("Zooming")
        this.zoom()
      } //open photo
      else if (currentValue.includes("Hand Pinching")) {
        console.log(this.carousel.activeId);
        const thisA = parseInt(this.carousel.activeId[this.carousel.activeId.length - 1])
        window.open(this.photos[thisA].url)
      } //zoom
      else if (currentValue.includes("Two Hands Pointing")) {
        window.open("https://www.ics.uci.edu/~dylanlv/index.html")
      } //open portfolio
      else if (currentValue.includes("Open Hand 1 Overhead")) {
        console.log("OVERLAY")
        this.showOverlay = true;
      } //show details (overlay)
      else if (currentValue.includes("Two Open Hands 2 Overhead")) {
        console.log("HIDING OVERLAY")
        this.showOverlay = false;
      } //hide details (overlay)
    }
  }
  nextSlide() {
    this.carousel.next();
  }
  prevSlide() {
    this.carousel.prev();
  }
  zoom() {
    const thisA = parseInt(this.carousel.activeId[this.carousel.activeId.length - 1])
    this.photos[thisA].zoomed = !this.photos[thisA].zoomed;
  }

}
