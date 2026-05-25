import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'aw-manifesto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.scss']
})
export class ManifestoComponent {}
