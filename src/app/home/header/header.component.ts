import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen: boolean = true;

  @Output() scrollToContactEvent = new EventEmitter<void>();

  constructor() {}

  scrollToContact() {
    this.scrollToContactEvent.emit();
  }

  public goToSection(section: string): void {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  onClose(){
    this.isOpen = !this.isOpen;
  }

}
