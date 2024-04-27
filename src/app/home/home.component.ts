import { Component } from '@angular/core';

import { AmenitiesComponent } from './amenities/amenities.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { PartnersComponent } from './partners/partners.component';
import { AddValuesComponent } from './add-values/add-values.component';
import { StatsComponent } from './stats/stats.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProductsModelsComponent } from './products-models/products-models.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    AmenitiesComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    WhatsappComponent,
    PartnersComponent,
    AddValuesComponent,
    StatsComponent,
    ContactFormComponent,
    ProductsModelsComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

}
