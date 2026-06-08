const navItems = [
  { href: '#que-es-mde', label: 'Qué es MDE' },
  { href: '#workflow', label: 'Workflow' },
  { href: '#herramientas', label: 'Herramientas' },
  { href: '#demos', label: 'Demos' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#comparativa', label: 'Comparativa' },
]

const workflowSteps = [
  {
    title: 'Capturar el dominio',
    description:
      'Se identifican conceptos, relaciones y restricciones del negocio para construir un metamodelo compartido.',
  },
  {
    title: 'Modelar con abstracciones',
    description:
      'Los equipos crean modelos conformes al metamodelo, evitando detalles accidentales de plataformas concretas.',
  },
  {
    title: 'Validar reglas',
    description:
      'Restricciones OCL o validadores equivalentes comprueban consistencia antes de generar artefactos.',
  },
  {
    title: 'Transformar y generar',
    description:
      'Transformaciones modelo a modelo y modelo a texto producen código, configuración y documentación trazable.',
  },
]

const tools = [
  {
    name: 'EMF / Ecore',
    purpose: 'Metamodelado',
    usage:
      'Define el lenguaje del dominio, sus clases, atributos y relaciones para que los modelos tengan una estructura verificable.',
  },
  {
    name: 'Sirius',
    purpose: 'Editores visuales',
    usage:
      'Construye diagramas y vistas adaptadas a usuarios de negocio sobre modelos EMF sin programar un editor desde cero.',
  },
  {
    name: 'Papyrus',
    purpose: 'UML y SysML',
    usage:
      'Modela arquitecturas, componentes y sistemas embebidos con perfiles estándar y trazabilidad entre diagramas.',
  },
  {
    name: 'ATL / QVT',
    purpose: 'Transformación de modelos',
    usage:
      'Convierte modelos entre lenguajes o niveles de abstracción, por ejemplo de un modelo de dominio a un modelo de persistencia.',
  },
  {
    name: 'Acceleo / Xtend',
    purpose: 'Generación de código',
    usage:
      'Genera código fuente, plantillas de API, documentación o scripts de despliegue a partir de modelos validados.',
  },
  {
    name: 'OCL',
    purpose: 'Restricciones y consultas',
    usage:
      'Expresa invariantes, precondiciones y consultas sobre modelos para automatizar validaciones tempranas.',
  },
]

const demos = [
  {
    title: 'Modelo visual de dominio',
    label: 'Diagrama simplificado',
    explanation:
      'Un modelo visual permite razonar sobre entidades del negocio antes de elegir framework, base de datos o arquitectura física.',
    content: 'Cliente ── realiza ──> Pedido ── contiene ──> LíneaPedido ── referencia ──> Producto',
  },
  {
    title: 'Transformación modelo a código',
    label: 'Salida generada',
    explanation:
      'Las plantillas modelo a texto toman elementos del modelo y producen artefactos repetibles con convenciones uniformes.',
    code: `class Pedido {
  constructor(id, cliente, lineas = []) {
    this.id = id
    this.cliente = cliente
    this.lineas = lineas
  }
}`,
  },
  {
    title: 'Validación de reglas',
    label: 'Restricción',
    explanation:
      'Las reglas detectan errores de diseño en el modelo, reduciendo defectos que normalmente aparecerían en implementación o pruebas.',
    checks: [
      'Pedido.total debe ser mayor o igual que 0',
      'Cada LíneaPedido debe referenciar un Producto existente',
      'Cliente.email debe cumplir formato corporativo',
    ],
  },
]

const benefits = [
  {
    title: 'Menos trabajo repetitivo',
    description: 'La generación automatiza código estructural, documentación y configuración derivada del modelo.',
  },
  {
    title: 'Mejor alineación negocio-tecnología',
    description: 'Los modelos actúan como lenguaje común entre especialistas de dominio, arquitectura y desarrollo.',
  },
  {
    title: 'Trazabilidad y evolución',
    description: 'Los cambios se gestionan desde abstracciones de alto nivel y se propagan a artefactos dependientes.',
  },
  {
    title: 'Casos de uso frecuentes',
    description: 'APIs CRUD, DSLs internas, sistemas embebidos, integración de datos y modernización de legado.',
  },
]


const comparisonApproaches = [
  {
    name: 'Model Driven Engineering',
    tag: 'Modelos como artefacto central',
    summary:
      'Parte de metamodelos y modelos validados para generar código, documentación o configuraciones con trazabilidad.',
    strengths: [
      'Reduce trabajo repetitivo mediante generación automatizada.',
      'Facilita alinear lenguaje de negocio, arquitectura e implementación.',
      'Detecta inconsistencias temprano con reglas sobre modelos.',
    ],
    limitations: [
      'Requiere inversión inicial en metamodelos, transformaciones y gobierno.',
      'Puede resultar excesivo para productos pequeños o de vida muy corta.',
    ],
    bestFor:
      'Dominios estables o regulados donde la trazabilidad, variabilidad y generación consistente aportan valor sostenido.',
  },
  {
    name: 'Code-first / tradicional',
    tag: 'El código guía el diseño',
    summary:
      'Prioriza implementar directamente en el lenguaje y framework elegidos, usando documentación y diagramas como apoyo.',
    strengths: [
      'Permite avanzar rápido cuando el equipo domina la tecnología.',
      'Aprovecha herramientas maduras de desarrollo, pruebas y despliegue.',
      'Reduce la curva de entrada si no se necesitan abstracciones específicas.',
    ],
    limitations: [
      'La intención de dominio puede quedar dispersa entre código, tickets y documentación.',
      'Las convenciones repetitivas dependen más de revisiones manuales.',
    ],
    bestFor:
      'Aplicaciones con alcance acotado, requisitos técnicos claros y poca necesidad de generación o trazabilidad formal.',
  },
  {
    name: 'Agile / iterativo',
    tag: 'Aprendizaje por incrementos',
    summary:
      'Organiza el trabajo en ciclos cortos para validar hipótesis, entregar valor frecuente y adaptar prioridades.',
    strengths: [
      'Mejora la respuesta ante cambios de negocio o mercado.',
      'Favorece feedback continuo de usuarios y stakeholders.',
      'Hace visible el progreso mediante entregas pequeñas.',
    ],
    limitations: [
      'Sin disciplina técnica puede acumular deuda y decisiones inconsistentes.',
      'No define por sí mismo cómo capturar modelos, reglas o trazabilidad.',
    ],
    bestFor:
      'Productos con incertidumbre funcional donde conviene aprender rápido y ajustar el rumbo con entregas frecuentes.',
  },
  {
    name: 'Low-code / no-code',
    tag: 'Construcción visual acelerada',
    summary:
      'Usa plataformas visuales y componentes predefinidos para crear aplicaciones con menos programación manual.',
    strengths: [
      'Acelera prototipos, formularios y flujos internos.',
      'Permite participar a perfiles no desarrolladores en soluciones simples.',
      'Incluye conectores y despliegues gestionados en muchas plataformas.',
    ],
    limitations: [
      'Puede limitar personalización, portabilidad y control arquitectónico.',
      'La evolución avanzada depende de las capacidades y costes de la plataforma.',
    ],
    bestFor:
      'Automatización departamental, prototipos y procesos internos con complejidad moderada y tiempos ajustados.',
  },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido principal</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Volver al inicio">
          MDE Lab
        </a>
        <nav className="site-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="contenido" className="landing-shell" tabIndex="-1">
        <span id="top" aria-hidden="true"></span>
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Model Driven Engineering</p>
          <h1 id="hero-title">Diseña software desde modelos ejecutables</h1>
          <p className="hero-copy">
            Una guía visual en español para entender cómo MDE usa metamodelos, validaciones y transformaciones para pasar de conocimiento de dominio a código mantenible.
          </p>
          <div className="hero-actions" aria-label="Acciones destacadas">
            <a className="button primary" href="#demos">Ver demos estáticas</a>
            <a className="button secondary" href="#workflow">Explorar workflow</a>
          </div>
        </section>

        <section id="que-es-mde" className="content-section split" aria-labelledby="mde-title">
          <div>
            <p className="eyebrow">Fundamentos</p>
            <h2 id="mde-title">¿Qué es Model Driven Engineering?</h2>
          </div>
          <p>
            MDE es un enfoque de ingeniería donde los modelos son artefactos centrales del ciclo de vida. En lugar de tratar los diagramas como documentación aislada, los modelos se validan, transforman y usan para generar software, manteniendo trazabilidad entre intención de negocio e implementación.
          </p>
        </section>

        <section id="workflow" className="content-section" aria-labelledby="workflow-title">
          <p className="eyebrow">Proceso</p>
          <h2 id="workflow-title">Workflow típico de MDE</h2>
          <div className="card-grid steps-grid">
            {workflowSteps.map((step) => (
              <article className="card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="herramientas" className="content-section" aria-labelledby="tools-title">
          <p className="eyebrow">Ecosistema</p>
          <h2 id="tools-title">Herramientas MDE esenciales</h2>
          <div className="card-grid tools-grid">
            {tools.map((tool) => (
              <article className="card tool-card" key={tool.name}>
                <span>{tool.purpose}</span>
                <h3>{tool.name}</h3>
                <p>{tool.usage}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="demos" className="content-section" aria-labelledby="demos-title">
          <p className="eyebrow">Simulaciones estáticas</p>
          <h2 id="demos-title">Demos de modelo, generación y validación</h2>
          <div className="demo-grid">
            {demos.map((demo) => (
              <article className="demo-card" key={demo.title}>
                <p className="demo-label">{demo.label}</p>
                <h3>{demo.title}</h3>
                {demo.content && <div className="model-box" aria-label="Modelo visual textual">{demo.content}</div>}
                {demo.code && <pre><code>{demo.code}</code></pre>}
                {demo.checks && (
                  <ul className="check-list">
                    {demo.checks.map((check) => <li key={check}>{check}</li>)}
                  </ul>
                )}
                <p>{demo.explanation}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="beneficios" className="content-section" aria-labelledby="benefits-title">
          <p className="eyebrow">Impacto</p>
          <h2 id="benefits-title">Beneficios y casos de uso</h2>
          <div className="card-grid benefits-grid">
            {benefits.map((benefit) => (
              <article className="card" key={benefit.title}>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>


        <section id="comparativa" className="content-section" aria-labelledby="comparison-title">
          <p className="eyebrow">Comparativa</p>
          <h2 id="comparison-title">MDE frente a otros enfoques de desarrollo</h2>
          <p className="section-intro">
            No existe un enfoque universal: la elección depende de la estabilidad del dominio, la necesidad de trazabilidad, el ritmo de aprendizaje y el nivel de control técnico. Esta comparación resume cuándo MDE aporta más valor y cuándo otros enfoques pueden ser suficientes.
          </p>
          <div className="comparison-grid" aria-label="Comparativa de enfoques de desarrollo">
            {comparisonApproaches.map((approach) => (
              <article className="comparison-card" key={approach.name}>
                <span className="comparison-tag">{approach.tag}</span>
                <h3>{approach.name}</h3>
                <p>{approach.summary}</p>

                <div className="comparison-block">
                  <h4>Ventajas</h4>
                  <ul className="check-list compact-list">
                    {approach.strengths.map((strength) => <li key={strength}>{strength}</li>)}
                  </ul>
                </div>

                <div className="comparison-block">
                  <h4>Limitaciones</h4>
                  <ul className="risk-list compact-list">
                    {approach.limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
                  </ul>
                </div>

                <div className="comparison-best">
                  <h4>Uso recomendado</h4>
                  <p>{approach.bestFor}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Landing educativa sobre Model Driven Engineering con contenido estático y navegación por anclas.</p>
        <a href="#top">Volver arriba</a>
      </footer>
    </>
  )
}

export default App