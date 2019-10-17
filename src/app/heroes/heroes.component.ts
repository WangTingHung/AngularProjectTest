import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  @Input() myVar : Number;
  
  constructor() { }

  ngOnInit() {
    
  }

}
