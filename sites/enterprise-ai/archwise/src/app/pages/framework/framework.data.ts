import { FrameworkPageData } from './framework.types';

export const FRAMEWORK_PAGE_DATA: FrameworkPageData = {
  title: 'Framework Archwise',
  subtitle: 'Orientación causal del corpus para entender capacidades, dependencias y rutas de lectura.',
  layers: [
    {
      id: 'layer-1',
      order: 1,
      name: 'Diagnóstico AI-Ready',
      shortDescription: 'Evalua preparacion real antes de activar nuevas capacidades.',
      articleSlugs: [
        'por-que-la-mayoria-de-los-sistemas-no-estan-preparados-para-ia',
        'las-7-caracteristicas-arquitectura-ai-ready',
        'ai-ready-systems-vs-legacy-systems'
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
        'context-engineering-vs-prompt-engineering'
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
        'ai-governance-framework'
      ]
    },
    {
      id: 'layer-4',
      order: 4,
      name: 'AI Operating Model',
      shortDescription: 'Define estructura operativa para escalar ejecucion con IA.',
      articleSlugs: [
        'ai-augmented-development-teams',
        'ai-native-organizations',
        'ai-operating-model-enterprise'
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
        'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas'
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
      description: 'Busca trazabilidad y coherencia entre decisiónes intercapas.'
    },
    {
      id: 'head-of-engineering',
      label: 'Head of Engineering',
      description: 'Traduce el framework a ejecucion de equipos y flujo operativo.'
    },
    {
      id: 'transformation-leader',
      label: 'Transformation Leader',
      description: 'Conecta estrategia, arquitectura y operación en transformacion multiarea.'
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
      description: 'Identificar brechas de preparacion y madurez operativa.'
    },
    {
      id: 'disenar',
      label: 'Disenar',
      description: 'Definir arquitectura y secuencia de capacidades.'
    },
    {
      id: 'operar',
      label: 'Operar',
      description: 'Aterrizar el marco en ejecucion de equipos y procesos.'
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
        'framework-archwise-integracion-capacidades-escalar-ia'
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
        'memory-architecture-contexto-reutilizable-enterprise'
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
        'arquitectura-adopcion-framework-archwise-orden-activacion'
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
        'por-que-fracasan-iniciativas-ia'
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
        'measurement-system-integracion-madurez-operativa'
      ]
    }
  ],
  terms: [
    {
      id: 'sequence-integrity',
      term: 'Sequence Integrity',
      definition: 'Coherencia causal del orden real de activacion y decisión entre capas.',
      articleSlug: 'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas'
    },
    {
      id: 'evidence-integrity',
      term: 'Evidence Integrity',
      definition: 'Calidad de la evidencia para sostener decisiónes trazables y comparables.',
      articleSlug: 'measurement-system-integracion-madurez-operativa'
    },
    {
      id: 'coherence-signals',
      term: 'Coherence Signals',
      definition: 'Señales de alíneacion, tension o ruptura entre decisiónes equivalentes.',
      articleSlug: 'measurement-system-integracion-madurez-operativa'
    },
    {
      id: 'context-debt',
      term: 'Context Debt',
      definition: 'Costo acumulado por no entregar contexto util en la ventana de decisión.',
      articleSlug: 'context-systems-entregar-contexto-correcto-enterprise'
    },
    {
      id: 'activation-debt',
      term: 'Activation Debt',
      definition: 'Costo acumulado por activar capacidades fuera de dependencias satisfechas.',
      articleSlug: 'arquitectura-adopcion-framework-archwise-orden-activacion'
    }
  ],
  continuityCtas: [
    {
      id: 'go-articles',
      label: 'Ir a Artículos',
      route: '/articulos',
      description: 'Explora el corpus completo en orden editorial.'
    },
    {
      id: 'go-manifesto',
      label: 'Leer Manifesto',
      route: '/manifesto',
      description: 'Contexto de tesis y principios de Archwise.'
    },
    {
      id: 'newsletter-soon',
      label: 'Newsletter (proximamente)',
      description: 'Continuidad semanal del framework y del corpus.',
      disabled: true
    }
  ]
};

