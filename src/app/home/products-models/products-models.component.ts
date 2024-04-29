import { Component, HostListener } from '@angular/core';

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
  esVisible: boolean = false;

  @HostListener('window:scroll', ['$event'])
  verificarScroll(event: Event) {
    const scrollPosition = window.scrollY;
    const contactoSection = document.getElementById('modelos');

    if (contactoSection && scrollPosition >= contactoSection.offsetTop - window.innerHeight / 2) {
      this.esVisible = true;
    } else {
      this.esVisible = false;
    }
  }


  openModal(modelo: string) {
    this.isModalOpen = true;
    this.propertyModel = modelo;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
