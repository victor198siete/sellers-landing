import { Component } from '@angular/core';

@Component({
  selector: 'app-products-models',
  standalone: true,
  imports: [],
  templateUrl: './products-models.component.html',
  styleUrl: './products-models.component.css'
})
export class ProductsModelsComponent {
  isModalOpen: boolean = false;
  propertyModel: string = '';


  openModal(modelo: string) {
    this.isModalOpen = true;
    this.propertyModel = modelo;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
