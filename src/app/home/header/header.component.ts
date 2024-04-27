import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen: boolean = true;

  constructor(private elementRef: ElementRef) {}

  scrollToSection() {
    const modelosSection = this.elementRef.nativeElement.querySelector('#modelos');
    modelosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  onClose(){
    this.isOpen = !this.isOpen;
  }

}
