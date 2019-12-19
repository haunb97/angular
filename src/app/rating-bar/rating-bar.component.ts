import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

interface IRatingUnit {
  value:number;
  active:boolean;
}

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {
  @Input()
  max = 5;
  @Input()
  ratingValue = 5;
  @Input()
  showRatingValue = true ;
  @Output()
  rateChange = new EventEmitter<number>();



  constructor() { }

  ngOnInit() {
  }

}
