import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*===/ Métodos para hacer direccionamiento al presionar una opción de la navegación /===*/
  toHome(){
    document.getElementById('home')?.scrollIntoView({behavior:"smooth"})
  }

  toAbout(){
    document.getElementById('about')?.scrollIntoView({behavior:"smooth"})
  }

  toExperience(){
    document.getElementById('experience')?.scrollIntoView({behavior:"smooth"})
  }

  toStudies(){
    document.getElementById('studies')?.scrollIntoView({behavior:"smooth"})
  }

  toDemos(){
    document.getElementById('demos')?.scrollIntoView({behavior:"smooth"})
  }

  toSkills(){
    document.getElementById('skills')?.scrollIntoView({behavior:"smooth"})
  }

  toContact(){
    document.getElementById('contact')?.scrollIntoView({behavior:"smooth"})
  }
}
