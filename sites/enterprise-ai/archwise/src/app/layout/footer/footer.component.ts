import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'aw-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
