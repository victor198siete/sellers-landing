import { Component } from '@angular/core';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-amenities',
  standalone: true,
  imports: [],
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AmenitiesComponent {
  public spaceBetween = 10;

  constructor(){}

  onProgress = (e: any) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  };
}
