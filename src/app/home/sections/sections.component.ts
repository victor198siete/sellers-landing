import { Component } from '@angular/core';
import { ProductsModelsComponent } from '../products-models/products-models.component';
import { AddValuesComponent } from '../add-values/add-values.component';
import { AmenitiesComponent } from '../amenities/amenities.component';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [ProductsModelsComponent, AddValuesComponent, AmenitiesComponent],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {
  public sectionSelected = 1;
  public sectionTextList: string[] = ['Propiedades en Preventa', 'Propiedades en Rentas', 'Ventas de Terreno', 'Inversiones'];

  constructor(){}

  sectionSelecting(sectionNo: number){
    this.sectionSelected = sectionNo;
    console.log({Selection: this.sectionSelected})
  }



}
