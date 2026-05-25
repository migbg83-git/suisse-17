import { Component } from '@angular/core';

@Component({
  selector: 'aw-newsletter',
  standalone: true,
  imports: [],
  template: `
    <div class="newsletter-page">
      <div class="container-reading">
        <h1>Newsletter</h1>
        <p class="subtitle">Arquitectura enterprise + IA. Cada semana. Sin hype.</p>
        
        <ul class="benefits">
          <li>Observaciones de proyectos reales</li>
          <li>Decisiones arquitectónicas explicadas</li>
          <li>Cómo la IA cambia los incentivos de la industria</li>
        </ul>
        
        <form class="newsletter-form">
          <input 
            type="email" 
            placeholder="tu@email.com" 
            class="newsletter-input"
            required>
          <button type="submit" class="btn btn-primary">Suscribirme</button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .newsletter-page {
      padding: 6rem 0;
      text-align: center;
    }
    
    h1 {
      margin-bottom: 1rem;
    }
    
    .subtitle {
      font-size: 1.125rem;
      color: #6B7280;
      margin-bottom: 2rem;
    }
    
    .benefits {
      list-style: none;
      padding: 0;
      margin: 2rem 0 3rem;
      text-align: left;
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .benefits li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
    }
    
    .benefits li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: #2563EB;
    }
    
    .newsletter-form {
      display: flex;
      gap: 1rem;
      max-width: 500px;
      margin: 0 auto;
    }
    
    .newsletter-input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid #E5E7EB;
      border-radius: 6px;
      font-size: 1rem;
    }
    
    .newsletter-input:focus {
      outline: none;
      border-color: #2563EB;
      box-shadow: 0 0 0 3px #EFF6FF;
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
      .newsletter-page {
        padding: 4rem 0;
        text-align: left;
      }
      
      .newsletter-form {
        flex-direction: column;
      }
      
      .benefits {
        margin-left: 0;
      }
    }
  `]
})
export class NewsletterComponent {}
