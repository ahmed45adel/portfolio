import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  name: string = "ahmed";
  imgSRC: string = "../assets/hero.webp"
  constructor() { }

  ngOnInit(): void {
    console.log("works")
  }

}
