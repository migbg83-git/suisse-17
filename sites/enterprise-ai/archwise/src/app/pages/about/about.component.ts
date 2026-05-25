import { Component } from '@angular/core';

@Component({
  selector: 'aw-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about-page">
      <div class="container-reading">
        <h1>About</h1>
        
        <div class="about-content">
          <p class="lead">
            Arquitecto software. Consultor enterprise. Angular, .NET, Azure DevOps.
          </p>
          
          <p>
            Trabajo en proyectos enterprise construyendo sistemas complejos. Especializado 
            en Angular, .NET, Azure DevOps, APIM, microfrontends y arquitectura distribuida.
          </p>
          
          <p>
            Archwise nace de observaciones reales en proyectos enterprise: cómo la IA está 
            cambiando dónde está el valor, qué documentación importa, y por qué la arquitectura 
            vuelve a ser estratégica.
          </p>
          
          <p>
            Sin hype. Sin marketing. Solo criterio y experiencia.
          </p>
          
          <h2>Stack</h2>
          <p>Angular, .NET, Azure DevOps, APIM, Nginx, Microfrontends</p>
          
          <h2>Contexto</h2>
          <p>Consultoría enterprise, equipos distribuidos, proyectos multi-año</p>
          
          <div class="cta-section">
            <p><strong>Si trabajas en enterprise y esto resuena:</strong></p>
            <button class="btn btn-primary">Suscribirme a la newsletter</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-page {
      padding: 6rem 0;
    }
    
    h1 {
      margin-bottom: 2rem;
    }
    
    h2 {
      margin-top: 3rem;
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    
    .lead {
      font-size: 1.25rem;
      font-weight: 500;
      color: #111827;
      margin-bottom: 2rem;
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
    }
    
    .cta-section {
      margin-top: 4rem;
      padding: 2rem;
      background-color: #F9FAFB;
      border-radius: 8px;
    }
    
    .cta-section p {
      margin-bottom: 1.5rem;
    }
    
    .btn {
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: background-color 150ms ease;
    }
    
    .btn-primary {
      background-color: #2563EB;
      color: #FFFFFF;
    }
    
    .btn-primary:hover {
      background-color: #1D4ED8;
    }
    
    @media (max-width: 768px) {
      .about-page {
        padding: 4rem 0;
      }
    }
  `]
})
export class AboutComponent {}
