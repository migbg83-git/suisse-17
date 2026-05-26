import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'aw-manifesto',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './manifesto.component.html',
  styleUrls: ['./manifesto.component.scss']
})
export class ManifestoComponent implements OnInit {
  constructor(private seo: SeoService) {}
  ngOnInit(): void {
    this.seo.update({
      title: 'Manifiesto | La arquitectura vuelve a ser estratégica | Archwise',
      description: 'Por qué la IA está cambiando qué es abundante y qué es escaso en la industria del software y por qué la arquitectura vuelve a ser una ventaja competitiva.',
      url: SeoService.getBaseUrl() + '/manifesto',
      type: 'article'
    });
  }
}
