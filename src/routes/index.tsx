import { createFileRoute, Link } from '@tanstack/react-router'
import { allPosts } from 'content-collections'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const films = [
  {
    title: 'The Devil Wears Prada',
    year: '2006',
    director: 'David Frankel',
    image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&q=80&fit=crop',
    description: 'Andy Sachs entra no implacável mundo das revistas de moda e aprende que elegância tem um preço — e que o poder veste muito bem.',
    relevance: 'Um retrato sem filtros da indústria editorial de moda: hierarquias, criatividade sob pressão e a tensão entre identidade e ambição.',
  },
  {
    title: 'Dior and I',
    year: '2014',
    director: 'Frédéric Tcheng',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80&fit=crop',
    description: 'Raf Simons assume a direção criativa da Christian Dior e tem 8 semanas para criar sua primeira haute couture. Um documentário sobre genius e angústia.',
    relevance: 'O processo criativo em sua forma mais pura e brutal — a câmera captura o que acontece quando arte e indústria colidem.',
  },
  {
    title: 'Phantom Thread',
    year: '2017',
    director: 'Paul Thomas Anderson',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80&fit=crop',
    description: 'Reynolds Woodcock, couturier obsessivo na Londres dos anos 50, encontra na jovem Alma uma força que desafia seu controle absoluto sobre tudo.',
    relevance: 'A moda como expressão de poder, possessividade e amor — Daniel Day-Lewis entrega uma das performances mais extraordinárias do cinema contemporâneo.',
  },
  {
    title: 'Yves Saint Laurent',
    year: '2014',
    director: 'Jalil Lespert',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80&fit=crop',
    description: 'A biografia do gênio que libertou as mulheres da alta costura e criou uma linguagem de poder que ressoa até hoje nas passarelas.',
    relevance: 'Entender YSL é entender o século XX — sua vida e obra são inseparáveis da história cultural e política da moda moderna.',
  },
  {
    title: 'House of Gucci',
    year: '2021',
    director: 'Ridley Scott',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&q=80&fit=crop',
    description: 'A história real da família que construiu um dos impérios da moda mais icônicos do mundo — amor, traição, assassinato e muito couro italiano.',
    relevance: 'Uma janela fascinante para os bastidores de uma maison histórica e os dilemas entre herança familiar e visão criativa contemporânea.',
  },
  {
    title: 'McQueen',
    year: '2018',
    director: 'Ian Bonhôte & Peter Ettedgui',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&fit=crop',
    description: 'O documentário definitivo sobre Alexander McQueen — o menino de Stratford que se tornou o enfant terrible mais brilhante da moda britânica.',
    relevance: 'McQueen transformou o desfile em performance artística. Este filme não é sobre moda — é sobre o que a moda pode ser quando se recusa a ter limites.',
  },
]

function NavBar() {
  return (
    <header className="sticky top-0 z-50" style={{ backgroundColor: 'var(--color-paper)' }}>
      <div className="border-b" style={{ borderColor: 'var(--color-sand)' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <span className="category-label">Edição Maio 2025</span>
          <div className="flex gap-6">
            {['Tendências', 'Editoriais', 'Filmes', 'Newsletter'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="link-underline category-label hover:text-[var(--color-ink)] transition-colors cursor-pointer">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <span className="font-display text-sm italic" style={{ color: 'var(--color-smoke)' }}>
          Fashion &amp; Culture
        </span>
        <a href="/" className="font-display text-4xl font-light tracking-[0.3em] text-center" style={{ color: 'var(--color-ink)', letterSpacing: '0.35em' }}>
          MAISON
        </a>
        <span className="category-label text-right hidden md:block" style={{ maxWidth: 120 }}>
          Moda · Cinema · Cultura
        </span>
      </div>
    </header>
  )
}

function Hero() {
  const heroPost = allPosts.find(p => p.categories.includes('Desfiles')) || allPosts[0]

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image - right side */}
      <div
        className="absolute inset-0 md:left-[42%] left-0 img-hover-zoom"
        style={{ zIndex: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=85&fit=crop"
          alt="Editorial de moda"
          className="w-full h-full object-cover animate-fade-in"
          style={{ objectPosition: 'center top' }}
        />
        <div
          className="absolute inset-0 hero-gradient"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-xl">
          <div className="animate-fade-up animate-delay-1 mb-6 flex items-center gap-4">
            <span className="category-label">Destaque Editorial</span>
            <span className="rule-animate w-12 inline-block" style={{ display: 'inline-block', width: 48 }} />
          </div>

          <h1
            className="font-display animate-fade-up animate-delay-2"
            style={{
              fontSize: 'clamp(3.2rem, 6vw, 5.5rem)',
              lineHeight: 1.05,
              fontWeight: 300,
              color: 'var(--color-ink)',
              letterSpacing: '-0.01em',
            }}
          >
            Fashion Now:
            <br />
            <em style={{ fontStyle: 'italic', fontWeight: 300 }}>
              As tendências que
            </em>
            <br />
            estão definindo
            <br />
            <em style={{ color: 'var(--color-taupe)', fontStyle: 'italic' }}>
              a temporada
            </em>
          </h1>

          <p
            className="animate-fade-up animate-delay-3 mt-6"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              lineHeight: 1.8,
              color: 'var(--color-smoke)',
              maxWidth: 380,
              fontWeight: 300,
            }}
          >
            Da alfaiataria estruturada ao street style asiático, uma análise profunda
            das forças criativas que moldam o universo da moda contemporânea.
          </p>

          <div className="animate-fade-up animate-delay-4 mt-10 flex items-center gap-8">
            <a
              href="#tendências"
              className="link-underline"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-ink)',
                fontWeight: 500,
              }}
            >
              Explorar edição
            </a>
            <span style={{ color: 'var(--color-sand)', fontSize: '20px' }}>—</span>
            <span
              className="issue-number"
              style={{ fontSize: '13px' }}
            >
              Vol. XII, Maio 2025
            </span>
          </div>
        </div>
      </div>

      {/* Vertical label */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-3"
        style={{ zIndex: 10 }}
      >
        <span
          className="vertical-text category-label"
          style={{ color: 'var(--color-paper)' }}
        >
          Primavera — Verão 2025
        </span>
      </div>
    </section>
  )
}

function MarqueeBanner() {
  const items = [
    'Minimalismo Estruturado',
    'Street Style Global',
    'Acessórios Escultóricos',
    'Paleta Terracota',
    'Couture Contemporânea',
    'Moda & Cinema',
    'Editoriais Exclusivos',
    'Tendências de Passarela',
  ]
  const doubled = [...items, ...items]

  return (
    <div
      className="border-y overflow-hidden py-3"
      style={{ borderColor: 'var(--color-sand)', backgroundColor: 'var(--color-ink)' }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-sand)',
              fontWeight: 300,
            }}
          >
            {item}
            <span style={{ color: 'var(--color-taupe)', fontSize: '6px' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function TrendingSection() {
  const posts = allPosts
    .filter(p => !p.categories.includes('Desfiles'))
    .slice(0, 5)

  if (posts.length === 0) return null

  const [featured, ...rest] = posts

  return (
    <section id="tendências" className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="category-label block mb-3">Últimas Tendências</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            O que está
            <br />
            <em style={{ color: 'var(--color-taupe)' }}>em alta agora</em>
          </h2>
        </div>
        <a
          href="#"
          className="link-underline hidden md:block"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-smoke)',
          }}
        >
          Ver todas as matérias
        </a>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured large card */}
        <div className="lg:col-span-7 editorial-card group cursor-pointer">
          <div className="img-hover-zoom aspect-[4/3] mb-5 overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="category-label">{featured.categories[0]}</span>
            <span style={{ color: 'var(--color-sand)', fontSize: 12 }}>—</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--color-smoke)' }}>
              {new Date(featured.date).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long' })}
            </span>
          </div>
          <h3
            className="font-display group-hover:text-[var(--color-taupe)] transition-colors duration-300"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: 12 }}
          >
            {featured.title}
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-smoke)', lineHeight: 1.7, marginBottom: 16 }}>
            {featured.summary}
          </p>
          <a
            className="link-underline"
            style={{ fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-taupe)' }}
            href="#"
          >
            Ler matéria
          </a>
        </div>

        {/* Right column - stacked small cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {rest.slice(0, 3).map((post) => (
            <div
              key={post._meta.filePath}
              className="editorial-card group cursor-pointer flex gap-5 items-start"
              style={{ borderBottom: '1px solid var(--color-sand)', paddingBottom: 24 }}
            >
              <div className="img-hover-zoom flex-shrink-0 w-28 h-24 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="category-label block mb-2">{post.categories[0]}</span>
                <h4
                  className="font-display group-hover:text-[var(--color-taupe)] transition-colors duration-300"
                  style={{ fontSize: '1.1rem', fontWeight: 400, lineHeight: 1.25, marginBottom: 8 }}
                >
                  {post.title}
                </h4>
                <p
                  style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-smoke)', lineHeight: 1.6 }}
                  className="line-clamp-2"
                >
                  {post.summary}
                </p>
                <a
                  className="link-underline mt-3 inline-block"
                  style={{ fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-taupe)' }}
                  href="#"
                >
                  Ler matéria
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row - horizontal smaller cards */}
      {rest.length > 3 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 pt-10 border-t" style={{ borderColor: 'var(--color-sand)' }}>
          {rest.slice(3, 5).map((post) => (
            <div key={post._meta.filePath} className="editorial-card group cursor-pointer flex gap-5">
              <div className="img-hover-zoom flex-shrink-0 w-32 h-28 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="category-label block mb-2">{post.categories[0]}</span>
                <h4
                  className="font-display group-hover:text-[var(--color-taupe)] transition-colors duration-300"
                  style={{ fontSize: '1.05rem', fontWeight: 400, lineHeight: 1.25, marginBottom: 6 }}
                >
                  {post.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-smoke)', lineHeight: 1.6 }} className="line-clamp-2">
                  {post.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

function EditorialFeature() {
  return (
    <section className="my-4" style={{ backgroundColor: 'var(--color-ink)' }}>
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image */}
        <div className="img-hover-zoom aspect-[3/4] lg:aspect-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85&fit=crop"
            alt="Destaque da semana"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center top' }}
          />
        </div>

        {/* Text */}
        <div
          className="flex flex-col justify-center lg:pl-16 pt-12 lg:pt-0"
          style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span className="category-label block mb-6" style={{ color: 'var(--color-taupe)' }}>
            Destaque da Semana
          </span>

          <span
            className="font-display italic block mb-4"
            style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}
          >
            "A moda é a armadura para sobreviver à realidade cotidiana"
            <br />
            <span style={{ fontSize: '0.75rem', marginTop: 8, display: 'block' }}>— Bill Cunningham</span>
          </span>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'var(--color-paper)',
              marginBottom: 20,
            }}
          >
            O Renascimento da
            <br />
            <em style={{ color: 'var(--color-taupe)' }}>Alta Costura Artesanal</em>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'rgba(250,249,246,0.65)',
              lineHeight: 1.85,
              maxWidth: 460,
              marginBottom: 12,
              fontWeight: 300,
            }}
          >
            Em um mundo dominado pela velocidade e pelo algoritmo, as grandes maisons
            apostam no lento, no manual e no irreplicável. Bordados que levam seis meses.
            Tecidos que existem em apenas três rolos no mundo. Artesãos cujos nomes
            nunca aparecem na etiqueta.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              color: 'rgba(250,249,246,0.65)',
              lineHeight: 1.85,
              maxWidth: 460,
              marginBottom: 32,
              fontWeight: 300,
            }}
          >
            A haute couture não vende roupas — vende tempo. O tempo que alguém dedicou
            a criar algo singular para você. E nesse contexto, cada peça se torna um
            arquivo vivo, uma memória costurada em seda.
          </p>

          <a
            className="link-underline inline-block"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--color-paper)',
              fontWeight: 500,
            }}
            href="#"
          >
            Ler matéria completa
          </a>
        </div>
      </div>
    </section>
  )
}

function FilmsSection() {
  return (
    <section id="filmes" className="py-20 max-w-7xl mx-auto px-6">
      <div className="flex items-end justify-between mb-14">
        <div>
          <span className="category-label block mb-3">Curadoria Cultural</span>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 300, lineHeight: 1.1 }}
          >
            Cinema &
            <br />
            <em style={{ color: 'var(--color-taupe)' }}>Universo Fashion</em>
          </h2>
        </div>
        <p
          className="hidden md:block"
          style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-smoke)', maxWidth: 280, lineHeight: 1.6, textAlign: 'right' }}
        >
          Seis filmes essenciais para entender a moda como linguagem, poder e arte.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {films.map((film, i) => (
          <article
            key={film.title}
            className="film-card group cursor-pointer"
            style={{
              backgroundColor: i % 3 === 1 ? 'var(--color-mist)' : 'var(--color-paper)',
              border: '1px solid var(--color-sand)',
            }}
          >
            <div className="img-hover-zoom aspect-[3/2] overflow-hidden">
              <img
                src={film.image}
                alt={film.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="category-label">{film.year}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--color-smoke)' }}>
                  {film.director}
                </span>
              </div>
              <h3
                className="font-display group-hover:text-[var(--color-taupe)] transition-colors duration-300"
                style={{ fontSize: '1.3rem', fontWeight: 400, lineHeight: 1.2, marginBottom: 10 }}
              >
                {film.title}
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--color-smoke)', lineHeight: 1.7, marginBottom: 14 }}>
                {film.description}
              </p>
              <div
                style={{
                  borderTop: '1px solid var(--color-sand)',
                  paddingTop: 14,
                  marginTop: 'auto',
                }}
              >
                <span className="category-label block mb-2" style={{ color: 'var(--color-smoke)' }}>
                  Por que assistir
                </span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-taupe)', lineHeight: 1.65, fontStyle: 'italic' }}>
                  {film.relevance}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section
      id="newsletter"
      className="py-24"
      style={{ backgroundColor: 'var(--color-sand)' }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <span className="category-label block mb-5">Newsletter</span>
        <h2
          className="font-display mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.15 }}
        >
          Receba tendências,
          <br />
          <em style={{ color: 'var(--color-taupe)' }}>editoriais e cinema</em>
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--color-smoke)', lineHeight: 1.7, marginBottom: 40 }}>
          Curadoria semanal das tendências mais relevantes, análises de desfiles
          e recomendações do universo fashion no cinema.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Seu e-mail"
            className="newsletter-input flex-1"
            aria-label="Endereço de e-mail"
          />
          <button
            type="submit"
            style={{
              backgroundColor: 'var(--color-ink)',
              color: 'var(--color-paper)',
              fontFamily: 'var(--font-body)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '14px 28px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              flexShrink: 0,
              fontWeight: 500,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-taupe)')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-ink)')}
          >
            Assinar
          </button>
        </form>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--color-smoke)', marginTop: 20, letterSpacing: '0.05em' }}>
          Sem spam. Apenas o que realmente importa no mundo da moda.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  const links = {
    'Editorial': ['Tendências', 'Passarelas', 'Street Style', 'Acessórios'],
    'Curadoria': ['Filmes', 'Livros', 'Exposições', 'Música'],
    'Maison': ['Sobre', 'Contato', 'Newsletter', 'Arquivo'],
  }

  return (
    <footer style={{ backgroundColor: 'var(--color-ink)', color: 'var(--color-paper)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <span
              className="font-display block mb-4"
              style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '0.35em', color: 'var(--color-paper)' }}
            >
              MAISON
            </span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(250,249,246,0.45)', lineHeight: 1.8, maxWidth: 200 }}>
              Portal editorial de moda. Tendências, análises e curadoria cultural desde 2019.
            </p>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <span className="category-label block mb-5" style={{ color: 'var(--color-taupe)' }}>
                {section}
              </span>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="link-underline"
                      style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(250,249,246,0.55)', fontWeight: 300 }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'rgba(250,249,246,0.3)', letterSpacing: '0.05em' }}>
            © 2025 MAISON — Portal Editorial de Moda
          </span>
          <div className="flex gap-6">
            {['Privacidade', 'Termos', 'Cookies'].map((item) => (
              <a
                key={item}
                href="#"
                className="link-underline"
                style={{ fontFamily: 'var(--font-body)', fontSize: 10, color: 'rgba(250,249,246,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <MarqueeBanner />
      <TrendingSection />
      <EditorialFeature />
      <FilmsSection />
      <Newsletter />
      <Footer />
    </>
  )
}
