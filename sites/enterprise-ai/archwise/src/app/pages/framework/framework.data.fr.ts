import { FrameworkPageData } from './framework.types';

export const FRAMEWORK_PAGE_DATA: FrameworkPageData = {
  title: 'Framework Archwise',
  subtitle: 'Archwise est un framework architectural en 6 couches pour construire des capacités IA dans le bon ordre. Il connecte les décisions, les dépendances et la gouvernance pour passer à l’échelle sans dette structurelle.',
  layers: [
    {
      id: 'layer-1',
      order: 1,
      name: 'Diagnostic AI-Ready',
      shortDescription: 'Évalue la préparation réelle avant d’activer de nouvelles capacités.',
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
      name: 'Contexte explicite et Knowledge Debt',
      shortDescription: 'Établit le contexte opérationnel et réduit le Knowledge Debt.',
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
      name: 'Gouvernance',
      shortDescription: 'Aligne les critères, la traçabilité et les règles de décision.',
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
      shortDescription: 'Définit la structure opérationnelle pour mettre à l’échelle l’exécution avec l’IA.',
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
      shortDescription: 'Convertit le savoir organisationnel en capacité réutilisable.',
      articleSlugs: [
        'organizational-memory-activo-ai-native',
        'memory-architecture-contexto-reutilizable-enterprise'
      ]
    },
    {
      id: 'layer-6',
      order: 6,
      name: 'Context Systems et capacité agentique',
      shortDescription: 'Relie l’opération contextuelle, l’intégration et l’évaluation de la maturité.',
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
      description: 'Priorise la séquence des capacités selon des contraintes métier réelles.'
    },
    {
      id: 'enterprise-architect',
      label: 'Architecte d’entreprise',
      description: 'Recherche la traçabilité et la cohérence entre les décisions inter-couches.'
    },
    {
      id: 'head-of-engineering',
      label: 'Responsable de l’ingénierie',
      description: 'Traduit le framework en exécution d’équipes et en flux opérationnel.'
    },
    {
      id: 'transformation-leader',
      label: 'Responsable de la transformation',
      description: 'Relie la stratégie, l’architecture et les opérations dans une transformation multi-domaines.'
    },
    {
      id: 'consultor',
      label: 'Consultant',
      description: 'Applique le cadre dans des contextes clients avec un langage commun et un transfert de compétences.'
    }
  ],
  intents: [
    {
      id: 'diagnosticar',
      label: 'Diagnostiquer',
      description: 'Identifier les lacunes de préparation et la maturité opérationnelle.'
    },
    {
      id: 'disenar',
      label: 'Designer',
      description: 'Définir l’architecture et la séquence des capacités.'
    },
    {
      id: 'operar',
      label: 'Opérer',
      description: 'Ancrer le cadre dans l’exécution des équipes et les processus.'
    },
    {
      id: 'medir',
      label: 'Mesurer',
      description: 'Évaluer l’intégrité, la cohérence et les preuves du système.'
    },
    {
      id: 'corregir',
      label: 'Corriger',
      description: 'Ajuster la trajectoire pour réduire la dette structurelle.'
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
      definition: 'Cohérence causale de l’ordre réel d’activation et de décision entre les couches.',
      articleSlug: 'integridad-secuencia-evaluar-madurez-operativa-evidencia-narrativas'
    },
    {
      id: 'evidence-integrity',
      term: 'Evidence Integrity',
      definition: 'Qualité des preuves pour soutenir des décisions traçables et comparables.',
      articleSlug: 'measurement-system-integracion-madurez-operativa'
    },
    {
      id: 'coherence-signals',
      term: 'Coherence Signals',
      definition: 'Signaux d’alignement, de tension ou de rupture entre des décisions équivalentes.',
      articleSlug: 'measurement-system-integracion-madurez-operativa'
    },
    {
      id: 'context-debt',
      term: 'Context Debt',
      definition: 'Coût accumulé par le défaut de fourniture d’un contexte utile dans la fenêtre de décision.',
      articleSlug: 'context-systems-entregar-contexto-correcto-enterprise'
    },
    {
      id: 'activation-debt',
      term: 'Activation Debt',
      definition: 'Coût accumulé par l’activation de capacités en dehors des dépendances satisfaites.',
      articleSlug: 'arquitectura-adopcion-framework-archwise-orden-activacion'
    },
    {
      id: 'system-coherence',
      term: 'System Coherence',
      definition: 'Principe directeur définissant l’état d’alignement global que le système doit maintenir entre décisions, contexte, preuves et exécution.',
      articleSlug: 'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
    },
    {
      id: 'interface-integrity',
      term: 'Interface Integrity',
      definition: 'Propriété architecturale préservant la sémantique, la causalité, la traçabilité et la temporalité lorsque contexte, décisions et preuves traversent les interfaces entre couches, systèmes et acteurs.',
      articleSlug: 'integracion-coherencia-principio-rector-mecanismo-arquitectonico'
    }
  ],
  continuityCtas: [
    {
      id: 'go-articles',
      label: 'Je découvre Archwise',
      linkLabel: 'Étape suivante recommandée : comprendre le cadre de base →',
      route: '/articulos',
      description: 'Commencez ici si c’est votre première visite : contexte du problème, termes de base et lecture d’Archwise sans friction.'
    },
    {
      id: 'go-manifesto',
      label: 'Je suis CTO / Architecte d’entreprise / Responsable de l’ingénierie',
      linkLabel: 'Étape suivante recommandée : prioriser les décisions exécutives →',
      route: '/manifesto',
      description: 'Accédez ici si vous devez déjà décider des priorités : guide pour séquencer les décisions avec contrôle des risques et traçabilité.'
    },
    {
      id: 'newsletter-soon',
      label: 'Je connais déjà le framework',
      linkLabel: 'Aller directement aux décisions avancées',
      description: 'Approfondissez les termes avancés, les signaux de cohérence et la validation systémique.',
      disabled: true
    }
  ]
};
