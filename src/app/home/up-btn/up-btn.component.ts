import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-up-btn',
  standalone: true,
  imports: [],
  templateUrl: './up-btn.component.html',
  styleUrl: './up-btn.component.css'
})
export class UpBtnComponent {
  @Output() scrollToContactEvent = new EventEmitter<void>();

  constructor() {}

  scrollToContact() {
    this.scrollToContactEvent.emit();
  }

  public goToSection(section: string): void {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  }

}
