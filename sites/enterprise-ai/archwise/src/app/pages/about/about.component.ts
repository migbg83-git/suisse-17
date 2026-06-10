import { Component } from '@angular/core';

@Component({
  selector: 'aw-about',
  standalone: true,
  imports: [],
  template: `
    <div class="about-page">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="container-reading">
          <div class="hero-flex">
            <div class="hero-image">
              <img src="assets/images/about/miguel-benito-garcia.jpg" alt="Miguel Benito García">
            </div>
            <div class="hero-content">
              <h1>Miguel Benito García</h1>
              <p class="hero-lead">
                Enterprise Software Architect<br>
                <span class="author-tag">Author of the Archwise Framework</span>
              </p>
              <p class="hero-tagline">Architecture, governance and organizational memory for Enterprise AI.</p>
              <div class="hero-trajectory-block">
                <p class="hero-trajectory">20 años diseñando, evolucionando y gobernando sistemas enterprise.</p>
                <p class="hero-focus">Arquitectura, gobierno técnico y transformación tecnológica para organizaciones complejas.</p>
              </div>
              <div class="hero-actions">
                <a [href]="linkedInUrl" target="_blank" class="btn btn-primary">Ver perfil en LinkedIn</a>
              </div>
              <div class="hero-context">
                <!--<span class="location-tag">Madrid · Lausanne</span>-->
                <span class="topic-tag">20 años de experiencia en sistemas enterprise.</span>
                <span class="topic-tag">Universidades · Fintech · Seguros · Plataformas digitales</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 1: Quién soy -->
      <section class="content-section">
        <div class="container-reading">
          <h2 class="section-label">Quién soy</h2>
          <p class="body-text">
            Durante casi dos décadas he trabajado en sistemas que gestionan procesos críticos, conocimiento organizativo y operaciones a gran escala. He participado en la definición de arquitectura y gobierno técnico para universidades, fintech, seguros y plataformas globales.
          </p>
          <p class="body-text">
            Esa experiencia es la base sobre la que se construye Archwise.
          </p>
          <p class="body-text mt-5">
            Archwise nace de la observación práctica en organizaciones complejas. El framework surge de identificar patrones repetidos donde el éxito o el fracaso no dependen de la capacidad técnica, sino de la integridad de la arquitectura y la preservación del contexto.
          </p>
          <p class="body-text">
            Es el resultado de años analizando por qué sistemas robustos se vuelven frágiles al escalar y cómo el diseño organizativo condiciona la viabilidad real de la tecnología.
          </p>
        </div>
      </section>

      <!-- Section 2: Por qué existe Archwise -->
      <section class="content-section gray-bg">
        <div class="container-reading">
          <h2 class="section-label">Por qué existe Archwise</h2>
          <p class="body-text mb-4">
            La mayoría de iniciativas de IA no fracasan por los modelos. Fracasan porque las organizaciones no están preparadas para operar con ellos.
          </p>
          <div class="failure-grid">
            <div class="failure-item"><span>Falta contexto</span></div>
            <div class="failure-item"><span>Falta memoria organizativa</span></div>
            <div class="failure-item"><span>Falta arquitectura</span></div>
          </div>
          <p class="body-text mt-4">
            Archwise nace para explorar ese problema.
          </p>
        </div>
      </section>

      <!-- Section 3: Qué es Archwise -->
      <section class="content-section white-bg">
        <div class="container-reading">
          <div class="definition-card">
            <h2 class="def-main-title">Qué es Archwise</h2>
            <p class="def-description">
              Archwise no es una herramienta ni una plataforma. Es un framework arquitectónico para ayudar a las organizaciones a construir capacidades de IA respetando dependencias técnicas, organizativas y operativas.
            </p>
            <div class="def-highlights">
              <div class="def-highlight-item">
                <span class="dot"></span> Framework arquitectónico
              </div>
              <div class="def-highlight-item">
                <span class="dot"></span> Sistema de decisiones
              </div>
              <div class="def-highlight-item">
                <span class="dot"></span> Capacidades AI-Native
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section 4: Áreas de trabajo -->
      <section class="content-section gray-bg">
        <div class="container-reading">
          <h2 class="section-label">Áreas de trabajo</h2>
          <div class="areas-grid">
            <div class="area-card">
              <strong>Enterprise Architecture</strong>
              <p>Diseño de sistemas complejos y toma de decisiones técnicas.</p>
            </div>
            <div class="area-card">
              <strong>Context Engineering</strong>
              <p>Contexto explícito para humanos y agentes de IA.</p>
            </div>
            <div class="area-card">
              <strong>Governance</strong>
              <p>Mecanismos para escalar decisiones con coherencia.</p>
            </div>
            <div class="area-card">
              <strong>Organizational Memory</strong>
              <p>Conocimiento reutilizable más allá de las personas.</p>
            </div>
            <div class="area-card">
              <strong>Enterprise AI</strong>
              <p>Capacidad organizativa para operar IA a escala.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="content-section cta-section white-bg">
      <div class="container-reading">
          <p class="body-text text-center mb-4">
            Si trabajas diseñando sistemas, equipos o capacidades de IA, probablemente encontrarás aquí problemas que ya has vivido y modelos para abordarlos con más criterio.
          </p>
          <div class="text-center mt-5">
            <button class="btn btn-primary">Suscribirme a la newsletter</button>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-page {
      color: var(--aw-gray-700);
      background-color: var(--aw-white);
    }

    .about-hero {
      padding: 4rem 0 2rem;
      background: linear-gradient(180deg, rgba(37, 99, 235, 0.02) 0%, rgba(255, 255, 255, 1) 100%);
    }

    .hero-flex {
      display: flex;
      align-items: flex-start;
      gap: 2.5rem;
      @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        gap: 2rem;
      }
    }

    .hero-image img {
      width: 180px;
      height: 180px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid white;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.08);
    }

    .hero-content h1 {
      font-size: 2.75rem;
      font-weight: 700;
      color: var(--aw-gray-900);
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
    }

    .hero-lead {
      font-size: 1.375rem;
      line-height: 1.4;
      color: var(--aw-gray-600);
      margin-bottom: 1.25rem;
    }

    .hero-tagline {
      font-size: 1.125rem;
      color: var(--aw-gray-500);
      margin: -0.75rem 0 1.25rem;
    }

    .author-tag {
      color: var(--aw-accent);
      font-weight: 600;
    }

    .hero-trajectory-block {
      margin-bottom: 1.5rem;
      border-left: 1px solid var(--aw-gray-200);
      padding-left: 1.25rem;
    }

    .hero-trajectory, .hero-focus {
      margin: 0;
      font-size: 1rem;
      color: var(--aw-gray-500);
      line-height: 1.6;
    }

    .hero-context {
      margin-top: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .location-tag {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--aw-gray-500);
    }

    .topic-tag {
      font-size: 0.8125rem;
      color: var(--aw-gray-400);
      letter-spacing: 0.02em;
    }

    .content-section {
      padding: 4rem 0;
    }

    .gray-bg {
      background-color: var(--aw-gray-50);
    }

    .white-bg {
      background-color: var(--aw-white);
    }

    .section-label {
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--aw-gray-400);
      font-weight: 700;
      margin-bottom: 1.5rem;
    }

    .body-text {
      font-size: 1.125rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
      max-width: 100%;
    }

    .failure-grid {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .failure-item {
      padding: 1rem 1.25rem;
      background: white;
      border-left: 3px solid var(--aw-gray-200);
      border-radius: 4px;
      font-weight: 600;
      color: var(--aw-gray-800);
    }

    .definition-card {
      background: var(--aw-gray-900);
      color: white;
      padding: 3.5rem;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      @media (max-width: 768px) {
        padding: 2rem;
      }
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
      position: relative;
      overflow: hidden;
    }

    .def-main-title {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--aw-accent);
      font-weight: 700;
      margin: 0;
    }

    .def-description {
      font-size: 1.375rem;
      line-height: 1.5;
      font-weight: 400;
      color: var(--aw-white);
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        font-size: 1.125rem;
      }
    }

    .def-highlights {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .def-highlight-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 1rem;
      font-weight: 600;
      color: var(--aw-gray-300);
      
      .dot {
        width: 6px;
        height: 6px;
        background-color: var(--aw-accent);
        border-radius: 50%;
      }
    }

    .areas-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.25rem;
      @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 600px) { grid-template-columns: 1fr; }
    }

    .area-card {
      padding: 1.5rem;
      background-color: var(--aw-white);
      border: 1px solid var(--aw-gray-100);
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
      position: relative;
      min-height: 120px;
      justify-content: center;
      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: var(--aw-accent);
        opacity: 0.15;
      }

      strong {
        font-weight: 700;
        color: var(--aw-gray-900);
        font-size: 1.0625rem;
      }

      p {
        margin: 0;
        font-size: 0.875rem;
        color: var(--aw-gray-500);
        line-height: 1.5;
      }

      &:hover {
        border-color: rgba(37, 99, 235, 0.2);
        transform: translateY(-3px);
        box-shadow: 0 12px 24px rgba(15, 23, 42, 0.06);
      }
    }

    .btn {
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: background-color 150ms ease;
      text-decoration: none;
      display: inline-block;
    }

    .btn-primary {
      background-color: var(--aw-accent);
      color: #FFFFFF;
    }

    .btn-primary:hover {
      background-color: var(--aw-accent-hover);
    }

    .border-start-md {
      @media (min-width: 769px) {
        border-left: 1px solid rgba(255,255,255,0.1);
        padding-left: 3rem;
      }
    }
  `]
})
export class AboutComponent {
  linkedInUrl = 'https://www.linkedin.com/in/miguelbg83';
}
