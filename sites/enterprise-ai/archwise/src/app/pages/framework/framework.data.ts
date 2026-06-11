﻿import { FrameworkPageData } from './framework.types';

export const FRAMEWORK_PAGE_DATA: FrameworkPageData = {
  title: 'Framework Archwise',
  subtitle: 'Archwise es un framework arquitectónico de 6 capas para construir capacidades IA en el orden correcto. Conecta decisiones, dependencias y gobernanza para escalar sin deuda estructural.',
  layers: [
    {
      id: 'layer-1',
      order: 1,
      name: 'Diagnóstico AI-Ready',
      shortDescription: 'Evalúa preparación real antes de activar nuevas capacidades.',
      articleSlugs: [
        'por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia',
        'las-7-caracteristicas-arquitectura-ai-ready',
        'ai-ready-systems-vs-legacy-systems',
        'por-que-fracasan-iniciativas-ia'
      ]
    },
    {
      id: 'layer-2',
      order: 2,
      name: 'Contexto explícito y Knowledge Debt',
      shortDescription: 'Establece contexto operativo y reduce deuda de conocimiento.',
      articleSlugs: [
        'architecture-md-vale-mas-que-prompts',
        'documentacion-necesita-llm',
        'context-engineering-legacy-ia-falla',
        'por-que-el-prompt-engineering-no-es-suficiente-para-construir-sistemas-con-ia',
        'context-engineering-vs-prompt-engineering',
        'deuda-tecnica-ia-revela',
        'technical-debt-vs-knowledge-debt-ia',
        'framework-context-engineering-enterprise',
        'plantillas-ejemplos-architecture-md-enterprise'
      ]
    },
    {
      id: 'layer-3',
      order: 3,
      name: 'Governance',
      shortDescription: 'Alínea criterio, trazabilidad y reglas de decisión.',
      articleSlugs: [
        'architecture-review-efectiva-ia',
        'architecture-governance-contexto-compartido',
        'ai-governance-framework',
        'arquitectura-vuelve-ser-estrategica'
      ]
    },
    {
      id: 'layer-4',
      order: 4,
      name: 'AI Operating Model',
      shortDescription: 'Define estructura operativa para escalar ejecución con IA.',
      articleSlugs: [
        'ai-augmented-development-teams',
        'ai-native-organizations',
        'ai-operating-model-enterprise',
        'arquitectura-equipos-virtuales-ia-enterprise',
        'enterprise-ai-transformation-roadmap'
      ]
    },
    {
      id: 'layer-5',
      order: 5,
      name: 'Organizational Memory',
      shortDescription: 'Convierte conocimiento organizativo en capacidad reutilizable.',
      articleSlugs: [
        'organizational-memory-activo-ai-native',
        'memory-architecture-contexto-reutilizable-enterprise'
      ]
    },
    {
      id: 'layer-6',
      order: 6,
      name: 'Context Systems y capacidad agéntica',
      shortDescription: 'Conecta operación contextual, integración y evaluación de madurez.',
      articleSlugs: [
        'context-systems-entregar-contexto-correcto-enterprise',
        'agentic-ai-enterprise-governance-memoria-arquitectura',
        'framework-archwise-integracion-capacidades-escalar-ia',
        'arquitectura-adopcion-framework-archwise-orden-activacion',
        'measurement-system-integracion-madurez-operativa',
        'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas',
        'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
      ]
    }
  ],
  profiles: [
    {
      id: 'cto',
      label: 'CTO',
      description: 'Prioriza secuencia de capacidades bajo restricciones reales de negocio.'
    },
    {
      id: 'enterprise-architect',
      label: 'Enterprise Architect',
      description: 'Busca trazabilidad y coherencia entre decisiones intercapas.'
    },
    {
      id: 'head-of-engineering',
      label: 'Head of Engineering',
      description: 'Traduce el framework a ejecución de equipos y flujo operativo.'
    },
    {
      id: 'transformation-leader',
      label: 'Transformation Leader',
      description: 'Conecta estrategia, arquitectura y operación en transformación multiarea.'
    },
    {
      id: 'consultor',
      label: 'Consultor',
      description: 'Aplica el marco en contextos cliente con lenguaje común y transferencia.'
    }
  ],
  intents: [
    {
      id: 'diagnosticar',
      label: 'Diagnosticar',
      description: 'Identificar brechas de preparación y madurez operativa.'
    },
    {
      id: 'disenar',
      label: 'Diseñar',
      description: 'Definir arquitectura y secuencia de capacidades.'
    },
    {
      id: 'operar',
      label: 'Operar',
      description: 'Aterrizar el marco en ejecución de equipos y procesos.'
    },
    {
      id: 'medir',
      label: 'Medir',
      description: 'Evaluar integridad, coherencia y evidencia del sistema.'
    },
    {
      id: 'corregir',
      label: 'Corregir',
      description: 'Ajustar trayectoria para reducir deuda estructural.'
    }
  ],
  pathMappings: [
    {
      profileId: 'cto',
      intentId: 'diagnosticar',
      articleSlugs: [
        'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas',
        'por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia',
        'arquitectura-adopcion-framework-archwise-orden-activacion',
        'ai-governance-framework',
        'framework-archwise-integracion-capacidades-escalar-ia',
        'integracion-coherencia-principio-rector-mecanismo-arquitectonico',
        'arquitectura-equipos-virtuales-ia-enterprise'
      ]
    },
    {
      profileId: 'enterprise-architect',
      intentId: 'disenar',
      articleSlugs: [
        'framework-archwise-integracion-capacidades-escalar-ia',
        'measurement-system-integracion-madurez-operativa',
        'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas',
        'ai-governance-framework',
        'memory-architecture-contexto-reutilizable-enterprise',
        'integracion-coherencia-principio-rector-mecanismo-arquitectonico',
        'arquitectura-equipos-virtuales-ia-enterprise'
      ]
    },
    {
      profileId: 'head-of-engineering',
      intentId: 'operar',
      articleSlugs: [
        'ai-operating-model-enterprise',
        'organizational-memory-activo-ai-native',
        'memory-architecture-contexto-reutilizable-enterprise',
        'context-systems-entregar-contexto-correcto-enterprise',
        'arquitectura-adopcion-framework-archwise-orden-activacion',
        'arquitectura-equipos-virtuales-ia-enterprise'
      ]
    },
    {
      profileId: 'transformation-leader',
      intentId: 'medir',
      articleSlugs: [
        'framework-archwise-integracion-capacidades-escalar-ia',
        'arquitectura-adopcion-framework-archwise-orden-activacion',
        'measurement-system-integracion-madurez-operativa',
        'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas',
        'por-que-fracasan-iniciativas-ia',
        'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
      ]
    },
    {
      profileId: 'consultor',
      intentId: 'corregir',
      articleSlugs: [
        'arquitectura-vuelve-ser-estrategica',
        'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas',
        'ai-governance-framework',
        'framework-archwise-integracion-capacidades-escalar-ia',
        'measurement-system-integracion-madurez-operativa',
        'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
      ]
    }
  ],
  terms: [
    {
      id: 'sequence-integrity',
      term: 'Sequence Integrity',
      definition: 'Coherencia causal del orden real de activación y decisión entre capas.',
      articleSlug: 'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas'
    },
    {
      id: 'evidence-integrity',
      term: 'Evidence Integrity',
      definition: 'Calidad de la evidencia para sostener decisiones trazables y comparables.',
      articleSlug: 'measurement-system-integracion-madurez-operativa'
    },
    {
      id: 'coherence-signals',
      term: 'Coherence Signals',
      definition: 'Señales de alineación, tensión o ruptura entre decisiones equivalentes.',
      articleSlug: 'measurement-system-integracion-madurez-operativa'
    },
    {
      id: 'context-debt',
      term: 'Context Debt',
      definition: 'Costo acumulado por no entregar contexto útil en la ventana de decisión.',
      articleSlug: 'context-systems-entregar-contexto-correcto-enterprise'
    },
    {
      id: 'activation-debt',
      term: 'Activation Debt',
      definition: 'Costo acumulado por activar capacidades fuera de dependencias satisfechas.',
      articleSlug: 'arquitectura-adopcion-framework-archwise-orden-activacion'
    },
    {
      id: 'system-coherence',
      term: 'System Coherence',
      definition: 'Principio rector que define el estado de alineación global que el sistema debe sostener entre decisiones, contexto, evidencia y ejecución.',
      articleSlug: 'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
    },
    {
      id: 'interface-integrity',
      term: 'Interface Integrity',
      definition: 'Propiedad arquitectónica que preserva semántica, causalidad, trazabilidad y temporalidad cuando contexto, decisiones y evidencia cruzan interfaces entre capas, sistemas y actores.',
      articleSlug: 'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
    }
  ],
  continuityCtas: [
    {
      id: 'go-articles',
      label: 'Soy nuevo en Archwise',
      linkLabel: 'Siguiente paso recomendado: entender el marco base →',
      route: '/articulos',
      description: 'Empieza aquí si es tu primera visita. Obtendrás contexto del problema, términos base y cómo leer Archwise sin fricción.'
    },
    {
      id: 'go-manifesto',
      label: 'Soy CTO / Enterprise Architect / Head of Engineering',
      linkLabel: 'Siguiente paso recomendado: priorizar decisiones ejecutivas →',
      route: '/manifesto',
      description: 'Entra aquí si ya necesitas decidir prioridades. Obtendrás una guía para secuenciar decisiones con control de riesgo y trazabilidad.'
    },
    {
      id: 'newsletter-soon',
      label: 'Ya conozco el framework',
      linkLabel: 'Ir directo a decisiones avanzadas',
      description: 'Profundiza en términos avanzados, señales de coherencia y validación sistémica.',
      disabled: true
    }
  ]
};
