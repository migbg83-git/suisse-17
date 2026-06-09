import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../shared/seo/seo.service';
import { RouterLink } from '@angular/router';
import { ArticleCardComponent } from '../../layout/article-card/article-card.component';
import { ContentService } from '../../core/services/content.service';
import { Article } from '../../core/models/article.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

interface FrameworkLayerPreview {
  order: number;
  name: string;
  shortDescription: string;
}

@Component({
  selector: 'aw-home',
  standalone: true,
  imports: [RouterLink, ArticleCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foundationalArticles$!: Observable<Article[]>;

  // Framework layers preview - static data for Home display
  frameworkLayers: FrameworkLayerPreview[] = [
    {
      order: 1,
      name: 'Diagnóstico AI-Ready',
      shortDescription: 'Evalúa preparación real antes de activar nuevas capacidades.'
    },
    {
      order: 2,
      name: 'Contexto explícito',
      shortDescription: 'Establece contexto operativo y reduce deuda de conocimiento.'
    },
    {
      order: 3,
      name: 'Governance',
      shortDescription: 'Alínea criterio, trazabilidad y reglas de decisión.'
    },
    {
      order: 4,
      name: 'AI Operating Model',
      shortDescription: 'Define estructura operativa para escalar ejecución con IA.'
    },
    {
      order: 5,
      name: 'Organizational Memory',
      shortDescription: 'Convierte conocimiento organizativo en capacidad reutilizable.'
    },
    {
      order: 6,
      name: 'Context Systems',
      shortDescription: 'Conecta operación contextual, integración y evaluación de madurez.'
    }
  ];

  constructor(private contentService: ContentService, private seo: SeoService) {}

  ngOnInit(): void {
    this.foundationalArticles$ = this.contentService.getFeaturedArticles();
    this.seo.update({
      title: 'Framework arquitectónico para IA empresarial | Archwise',
      description: 'Archwise es un framework de 6 capas para construir capacidades IA en el orden correcto. Conecta decisiones, dependencias y gobernanza para escalar sin deuda estructural.',
      url: SeoService.getBaseUrl() + '/',
      type: 'website',
      image: SeoService.getBaseUrl() + '/assets/images/og-image.png'
    });
  }
}
