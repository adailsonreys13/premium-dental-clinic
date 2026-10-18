import { useState } from "react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3,
  HeartHandshake, MapPin, Menu, MessageCircle, ShieldCheck, Sparkles,
  Smile, Star, X, type LucideIcon
} from "lucide-react";

const WHATSAPP = "https://wa.me/557999914909";
const ADDRESS = "Avenida Coronel Loiola, 88, Simão Dias – SE";

const treatments: { number: string; title: string; description: string; Icon: LucideIcon }[] = [
  { number: "01", title: "Clareamento dental", description: "Mais luminosidade para o sorriso com avaliação e planejamento individualizados.", Icon: Sparkles },
  { number: "02", title: "Facetas dentárias", description: "Harmonia entre forma, proporção e naturalidade, respeitando cada sorriso.", Icon: Smile },
  { number: "03", title: "Implantes dentários", description: "Soluções para recuperar função, conforto e confiança ao sorrir.", Icon: ShieldCheck },
  { number: "04", title: "Estética odontológica", description: "Cuidados planejados para valorizar a saúde e a estética do seu sorriso.", Icon: Star },
];

const faqs = [
  { q: "Como faço para agendar uma avaliação?", a: "Clique em um dos botões de WhatsApp desta página e envie uma mensagem para nossa equipe. Vamos orientar você sobre os próximos passos." },
  { q: "Quais tratamentos a clínica oferece?", a: "Atendemos áreas como clareamento, facetas, implantes e estética odontológica. O tratamento indicado é definido após avaliação clínica." },
  { q: "Onde fica a Premium Dental Clinic?", a: "Estamos na Avenida Coronel Loiola, 88, em Simão Dias, Sergipe. Entre em contato antes de vir para confirmar os horários." },
];

function Brand({ light = false }: { light?: boolean }) {
  return <a className={"brand" + (light ? " brand-light" : "")} href="#inicio" aria-label="Premium Dental Clinic — início">
    <span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 48 56" fill="none">
      <path d="M24 10C19 2.8 7 5.8 7.3 17.7c.2 8.9 5.1 17.9 8.1 25.2 1 2.4 3.6 2.1 4.2-.1L22 31c.4-1.6 1.3-2.4 2-2.4s1.6.8 2 2.4l2.4 11.8c.6 2.2 3.2 2.5 4.2.1 3-7.3 7.9-16.3 8.1-25.2C41 5.8 29 2.8 24 10Z" stroke="currentColor" strokeWidth="1.7"/>
      <path d="M14 15c5.2 4.8 13.8 6.9 22 1.6M15 8l2.5 3.4M34 7l-2 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="m32 1 1.2 3.4L36.5 6l-3.3 1.3L32 11l-1.3-3.7L27.5 6l3.2-1.6L32 1Z" fill="currentColor"/>
    </svg></span>
    <span className="brand-name"><strong>PREMIUM</strong><small>DENTAL CLINIC</small></span>
  </a>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="topline"><span className="gold-dot" /> Seu melhor sorriso começa com cuidado.
      <a href={WHATSAPP} target="_blank" rel="noreferrer">Fale com a nossa equipe <ArrowUpRight size={13}/></a>
    </div>
    <header className="header">
      <div className="container header-content">
        <Brand />
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          <a href="#inicio" onClick={closeMenu}>Início</a><a href="#sobre" onClick={closeMenu}>A clínica</a><a href="#tratamentos" onClick={closeMenu}>Tratamentos</a><a href="#duvidas" onClick={closeMenu}>Dúvidas</a>
          <a className="nav-button" href={WHATSAPP} target="_blank" rel="noreferrer" onClick={closeMenu}>Agendar avaliação <ArrowUpRight size={15}/></a>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-orb" />
        <div className="container hero-layout">
          <div className="hero-text">
            <div className="eyebrow"><span /> ODONTOLOGIA COM PROPÓSITO</div>
            <h1>O seu sorriso é único.<br/><em>O cuidado também.</em></h1>
            <p className="hero-lead">Cuidar do seu sorriso é a nossa essência. Encontre atendimento acolhedor e um planejamento feito para você, do primeiro contato ao acompanhamento.</p>
            <div className="hero-buttons"><a className="button button-gold" href={WHATSAPP} target="_blank" rel="noreferrer">Agende sua avaliação <ArrowUpRight size={17}/></a><a className="text-button" href="#tratamentos">Conheça os tratamentos <ArrowDownRight size={16}/></a></div>
            <div className="hero-meta"><span className="meta-icon"><ShieldCheck size={19}/></span><span><b>Cuidado em cada detalhe</b><small>Atendimento individualizado</small></span><i/><span><b>Responsável técnico</b><small>Dr. Geraldo Martins · CRO-SE 3149</small></span></div>
          </div>
          <div className="hero-art">
            <div className="hero-photo"><img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=85" alt="Ambiente de atendimento odontológico" fetchPriority="high"/><div className="photo-overlay"/>
              <div className="photo-caption"><span className="caption-icon"><Sparkles size={19}/></span><span><b>Seu sorriso, nossa essência.</b><small>Premium Dental Clinic · Simão Dias, SE</small></span></div>
            </div>
            <div className="floating-note"><span><Star size={17} fill="currentColor"/></span><div><b>Seu sorriso merece</b><small>atenção especial</small></div></div>
            <span className="art-spark art-spark-one">✳</span><span className="art-spark art-spark-two">✦</span>
          </div>
        </div>
        <div className="container hero-footer"><span>SIMÃO DIAS · SERGIPE</span><i/><span>SAÚDE · ESTÉTICA · CONFIANÇA</span></div>
      </section>

      <section className="about section-cream" id="sobre">
        <div className="container about-intro">
          <div><div className="eyebrow eyebrow-dark"><span/> MAIS DO QUE UM SORRISO</div><h2>Confiança começa<br/>com <em>um bom cuidado.</em></h2></div>
          <div className="about-copy"><p>Acreditamos que cada sorriso conta uma história. Por isso, nossa proposta é unir atenção, informação e planejamento para que você se sinta seguro em cada etapa do seu tratamento.</p><a className="underlined-link" href={WHATSAPP} target="_blank" rel="noreferrer">Vamos conversar sobre seu sorriso <ArrowRight size={16}/></a></div>
        </div>
        <div className="container values">
          <div><span>01</span><section><b>Escuta atenta</b><p>Entendemos suas expectativas antes de propor caminhos.</p></section></div>
          <div><span>02</span><section><b>Plano individual</b><p>Cada caso merece avaliação e orientação próprias.</p></section></div>
          <div><span>03</span><section><b>Transparência</b><p>Informação clara para decisões conscientes.</p></section></div>
        </div>
      </section>

      <section className="treatments" id="tratamentos">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow"><span/> CUIDADO ESPECIALIZADO</div><h2>Tratamentos para<br/><em>você sorrir à vontade.</em></h2></div><p>Conheça algumas das áreas de atendimento da clínica. A indicação de cada procedimento é feita após avaliação profissional.</p></div>
          <div className="treatment-grid">{treatments.map(({number,title,description,Icon}) => <article className="treatment-card" key={number}>
            <div className="treatment-card-top"><span className="treatment-icon"><Icon size={23} strokeWidth={1.6}/></span><small>{number}</small></div>
            <h3>{title}</h3><p>{description}</p><a href={WHATSAPP} target="_blank" rel="noreferrer">Saiba mais <ArrowUpRight size={16}/></a>
          </article>)}</div>
          <p className="treatment-note"><ShieldCheck size={17}/> Os tratamentos são definidos após avaliação individual por profissional habilitado.</p>
        </div>
      </section>

      <section className="commitment">
        <div className="commitment-image"><img src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1100&q=85" alt="Ambiente de cuidado odontológico" loading="lazy"/><div className="commitment-image-caption"><small>PREMIUM STANDARD</small><b>Excelência nos detalhes.</b></div></div>
        <div className="commitment-copy"><div className="eyebrow"><span/> NOSSO COMPROMISSO</div><h2>Um atendimento pensado <em>em você.</em></h2><p>Sua tranquilidade importa. Queremos que você compreenda suas opções e tenha clareza sobre cada etapa do cuidado.</p>
          <ul><li><span><Check size={15}/></span>Atendimento com atenção individual</li><li><span><Check size={15}/></span>Planejamento de acordo com suas necessidades</li><li><span><Check size={15}/></span>Orientação clara em cada etapa</li></ul>
          <a className="button button-outline" href={WHATSAPP} target="_blank" rel="noreferrer">Converse com a clínica <ArrowUpRight size={16}/></a>
        </div>
      </section>

      <section className="cta-band"><div className="cta-decoration">✳</div><div className="container cta-content"><div><div className="eyebrow eyebrow-dark"><span/> SEU PRÓXIMO PASSO</div><h2>Vamos cuidar do seu <em>sorriso?</em></h2><p>Entre em contato e agende sua avaliação com a nossa equipe.</p></div><a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Agendar pelo WhatsApp <ArrowUpRight size={16}/></a></div></section>

      <section className="faq section-cream" id="duvidas"><div className="container faq-layout">
        <div><div className="eyebrow eyebrow-dark"><span/> PERGUNTAS FREQUENTES</div><h2>Vamos esclarecer<br/><em>suas dúvidas.</em></h2><p>Não encontrou sua pergunta? Nossa equipe está à disposição para conversar.</p><a className="underlined-link" href={WHATSAPP} target="_blank" rel="noreferrer">Fale com a gente <ArrowRight size={16}/></a></div>
        <div className="faq-list">{faqs.map(({q,a},i) => <div className={"faq-item" + (openFaq === i ? " faq-item-open" : "")} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq === i && <p>{a}</p>}</div>)}</div>
      </div></section>

      <section className="location"><div className="container location-layout"><div><div className="eyebrow"><span/> ESTAMOS POR AQUI</div><h2>Seu cuidado<br/>mais <em>perto de você.</em></h2><p>Estamos prontos para receber você em Simão Dias, Sergipe.</p><a className="button button-gold" href="https://www.google.com/maps/search/?api=1&query=Avenida+Coronel+Loiola%2C+88%2C+Sim%C3%A3o+Dias%2C+SE" target="_blank" rel="noreferrer"><MapPin size={17}/> Ver rota no mapa <ArrowUpRight size={15}/></a></div>
        <div className="address-card"><div className="address-label"><MapPin size={18}/> ENDEREÇO DA CLÍNICA</div><h3>Premium Dental Clinic</h3><p>{ADDRESS}</p><div className="address-time"><Clock3 size={16}/> Consulte os horários pelo WhatsApp</div><a href={WHATSAPP} target="_blank" rel="noreferrer">Confirmar disponibilidade <ArrowRight size={15}/></a></div>
      </div></section>
    </main>

    <footer className="footer"><div className="container footer-grid"><div><Brand light/><p>Seu sorriso é a nossa essência.</p></div><div><small>FALE COM A CLÍNICA</small><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle size={16}/> WhatsApp para agendamentos</a><p>{ADDRESS}</p></div><div><small>NAVEGUE</small><a href="#sobre">A clínica</a><a href="#tratamentos">Tratamentos</a><a href="#duvidas">Dúvidas frequentes</a></div></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Premium Dental Clinic. Todos os direitos reservados.</span><span>Responsável técnico informado: Dr. Geraldo Martins · CRO-SE 3149 · EPAO 538</span></div>
    </footer>
    <a className="whatsapp-float" href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Fale com a clínica pelo WhatsApp"><MessageCircle size={23}/></a>
  </div>;
}
