import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter-cta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter-cta.component.html',
  styleUrls: ['./newsletter-cta.component.scss']
})
export class NewsletterCtaComponent {
  email = '';
  submitted = false;

  submit() {
    this.submitted = true;
  }
}
