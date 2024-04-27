import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmenitiesComponent } from './amenities/amenities.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [NgModule],
  exports: [
    AmenitiesComponent
  ],
  imports: [
    CommonModule,
    AmenitiesComponent,
    PartnersComponent
  ],
})
export class HomeModule { }
