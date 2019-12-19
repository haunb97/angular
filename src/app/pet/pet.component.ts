import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  petName = 'puppie';
  petImage = 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260';
  constructor() { }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit() {
  }

}
