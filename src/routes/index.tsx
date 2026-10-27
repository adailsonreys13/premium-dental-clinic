import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, Heart, ShieldCheck, Sparkles, Smile, Menu, X, Check, MessageCircle, Plus, MapPin, Instagram, Phone, Clock3, ChevronRight, Stethoscope, HeartHandshake, ScanLine, Quote, ArrowUp, Play } from "lucide-react";
import { Button } from "@/components/ui/button";


export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Felicitá | Clínica Odontológica " },
    { name: "description", content: "Conheça a Felicitá Odontologia Integrada em Simão Dias, SE. Informações sobre tratamentos odontológicos, equipe, localização, horários e agendamento pelo WhatsApp." },
    { property: "og:title", content: "Felicitá | Clínica Odontológica " },
    { property: "og:description", content: "Felicitá : conheça a clínica, os profissionais, os tratamentos e como agendar sua avaliação." },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "robots", content: "index,follow" },
  ] }),
  component: Index,
});

function Tooth({ className = "" }: { className?: string }) {
  return <svg className={className} width="32" height="36" viewBox="0 0 40 44" fill="none" aria-hidden="true"><path d="M12 5C2 6 5 20 8 29c3 10 6 12 8 1 1-7 6-7 7 0 2 11 6 9 9-1 3-9 6-23-4-24-4-1-5 2-9 2-3 0-4-3-7-2Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round"/><path d="M15 10c3 2 6 2 9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}

function ImplantTooth({ className = "" }: { className?: string }) {
  return <svg className={className} width="32" height="36" viewBox="0 0 40 48" fill="none" aria-hidden="true">
    <path d="M10 4C4 4 3 10 5 18c1.2 5 3.4 9 6.8 13H28c3.4-4 5.6-8 6.8-13C37 10 36 4 30 4c-4.4 0-6.6 2.4-10 2.4S14.4 4 10 4Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M14 11c4 2.2 8 2.2 12 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
    <path d="M16.5 31v10l3.5 4 3.5-4V31" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M16.5 34h7M16.5 38h7M17.8 42h4.4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/>
  </svg>;
}

function DentalIcon({ kind, className = "" }: { kind: "veneer"|"whitening"|"ortho"|"prosthesis"|"smile"; className?: string }) {
  const base = {fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round" as const,strokeLinejoin:"round" as const};
  return <svg className={className} width="32" height="32" viewBox="0 0 40 40" aria-hidden="true" {...base}>
    {kind==="veneer" && <><path d="M10 7c-5 0-6 5-4 12 1.5 5 4 12 7 12 2.5 0 2-8 7-8s4.5 8 7 8c3 0 5.5-7 7-12 2-7 1-12-4-12-4 0-7 2-10 2s-6-2-10-2Z"/><path d="M22 10c6-2 11 0 11 4v4l-7 4c-3-2-4-7-4-12Z" fill="currentColor" fillOpacity=".18"/><path d="M24 12l6 1-1 4-4 2"/></>}
    {kind==="whitening" && <><path d="M10 8C5 8 5 13 7 20s4 12 7 12c2 0 2-8 6-8s4 8 6 8c3 0 5-6 7-12s2-12-3-12c-4 0-7 2-10 2s-6-2-10-2Z"/><path d="m29 3 1.7 4.3L35 9l-4.3 1.7L29 15l-1.7-4.3L23 9l4.3-1.7L29 3ZM9 2l.9 2.1L12 5l-2.1.9L9 8l-.9-2.1L6 5l2.1-.9L9 2Z"/></>}
    {kind==="ortho" && <><path d="M10 5C4 5 4 12 6 19c2 8 4 13 7 13 3 0 2-9 7-9s4 9 7 9c3 0 5-5 7-13 2-7 2-14-4-14-4 0-6 2-10 2S14 5 10 5Z"/><path d="M7 16h26M14 13v6h5v-6h-5Zm10 0v6h5v-6h-5Z"/></>}
    {kind==="prosthesis" && <><path d="M5 9c-2 3-2 9 0 13h9V9H5Zm11-2c-2 3-2 11 0 15h9V7h-9Zm11 2v13h9c2-4 2-10 0-13h-9Z"/><path d="M9 22v5h3v-5M19 22v8h3v-8M29 22v5h3v-5M4 22h33"/></>}
    {kind==="smile" && <><path d="M5 17c4 12 11 17 15 17s11-5 15-17c-8 5-22 5-30 0Z"/><path d="M8 19c6 3 18 3 24 0M10 23c5 4 15 5 20 0"/><path d="m29 4 1.4 4.6L35 10l-4.6 1.4L29 16l-1.4-4.6L23 10l4.6-1.4L29 4Z"/></>}
  </svg>;
}
const VeneerIcon = ({className}:{className?:string}) => <DentalIcon kind="veneer" className={className}/>;
const WhiteningIcon = ({className}:{className?:string}) => <DentalIcon kind="whitening" className={className}/>;
const OrthoIcon = ({className}:{className?:string}) => <DentalIcon kind="ortho" className={className}/>;
const ProsthesisIcon = ({className}:{className?:string}) => <DentalIcon kind="prosthesis" className={className}/>;
const SmileAestheticIcon = ({className}:{className?:string}) => <DentalIcon kind="smile" className={className}/>;

const treatments = [
  { title: "Implantes dentários", description: "Possibilidades de reabilitação oral com avaliação individualizada.", icon: ImplantTooth, tag: "REABILITAÇÃO" },
  { title: "Facetas dentárias", description: "Estética e harmonia do sorriso com planejamento personalizado.", icon: VeneerIcon, tag: "ESTÉTICA" },
  { title: "Clareamento dental", description: "Alternativas para cuidar da tonalidade dos dentes.", icon: WhiteningIcon, tag: "SORRISO" },
  { title: "Ortodontia", description: "Planejamento para alinhamento e função dos dentes.", icon: OrthoIcon, tag: "HARMONIA" },
  { title: "Próteses dentárias", description: "Possibilidades de reabilitação funcional e estética.", icon: ProsthesisIcon, tag: "FUNÇÃO" },
  { title: "Estética do sorriso", description: "Cuidados planejados para valorizar o sorriso natural.", icon: SmileAestheticIcon, tag: "CUIDADO" },
];

const treatmentImages = ["/webp/Implantes%20dent%C3%A1rios.webp", "/webp/Facetas%20dent%C3%A1rias.webp", "/webp/Clareamento%20dental.webp", "/webp/Ortodontia.webp", "/webp/Pr%C3%B3teses%20dent%C3%A1rias.webp", "/webp/Est%C3%A9tica%20do%20sorriso.webp"];
const treatmentSubtitles = ["Reabilitação oral","Harmonia estética","Estética dental","Alinhamento do sorriso","Função e conforto","Cuidado personalizado"];

const WHATSAPP_URL = "https://wa.me/5579998512405?text=" + encodeURIComponent("Olá! Gostaria de agendar uma avaliação na Felicitá.");

function ClickToPlayVideo({ file, index }: { file: string; index: number }) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (started) void videoRef.current?.play().catch(() => {});
  }, [started]);
  return <article className="video-testimonial-card premium-reveal">
    <div className="video-testimonial-frame">
      {started ? (
        <video ref={videoRef} controls playsInline preload="auto" aria-label={`Vídeo ${index + 1} da Felicitá`}>
          <source src={`/${encodeURIComponent(file)}`} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      ) : (
        <button type="button" className="video-testimonial-start" style={{backgroundImage:`linear-gradient(180deg, rgba(4,21,37,.03) 28%, rgba(4,21,37,.76) 100%), url("/video-covers/video-${index + 1}.webp")`}} onClick={() => setStarted(true)} aria-label={`Reproduzir vídeo ${index + 1} da Felicitá`}>
          <Quote size={28} />
          <span>Vídeo {String(index + 1).padStart(2, "0")}</span>
          <small>Felicitá Odontologia Integrada</small>
          <span className="video-start-control"><Play size={19} fill="currentColor" /> Assistir vídeo</span>
        </button>
      )}
    </div>
  </article>;
}

function Index() {
  const validSections = ["inicio", "sobre", "tratamentos", "resultados", "equipe", "localizacao", ...treatments.map((_, index) => `tratamento-${index + 1}`)];
  const readSection = () => {
    if (typeof window === "undefined") return "inicio";
    const hash = window.location.hash.replace("#", "");
    return validSections.includes(hash as (typeof validSections)[number]) ? hash : "inicio";
  };
  const [activeSection, setActiveSection] = useState(readSection);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const update = () => setShowBackToTop(window.scrollY > 300);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const abrirWhatsApp = () => window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  const activeTreatmentIndex = activeSection.startsWith("tratamento-") ? Number(activeSection.split("-")[1]) - 1 : -1;
  const activeTreatment = treatments[activeTreatmentIndex];
  useEffect(() => {
    const changeSection = () => { setActiveSection(readSection()); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "auto" }); };
    window.addEventListener("hashchange", changeSection);
    return () => window.removeEventListener("hashchange", changeSection);
  }, []);
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main || !("IntersectionObserver" in window)) return;
    const targets = main.querySelectorAll(".premium-reveal, main section h2, main section > h2, main section img:not(.hero-premium-photo), .treatment-card, .care-strip > div, .section-heading, .implant-feature-content, .implant-visual, .location-section > div, .contact-section > div, .editorial-strip, .editorial-smile, .care-feature-reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        } else {
          entry.target.classList.remove("is-revealed");
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -28px 0px" });
    targets.forEach((target) => { target.classList.add("premium-reveal"); observer.observe(target); });
    return () => observer.disconnect();
  }, [activeSection]);
  return <main>
    <div className="top-note"><Heart size={13} /> Felicitá: detalhes que acolhem, cuidado que transforma.</div>
    <header className="site-header">
      <a href="#inicio" className="brand brand-official" aria-label="Felicitá Clínica Especializada — início"><img className="felicita-official-logo" src="/logo%20Felicit%C3%A1.png" alt="Felicitá Odontologia Integrada" decoding="async" /></a>
      <nav className={menuOpen ? "navigation is-open" : "navigation"} aria-label="Navegação principal">
        <a href="#inicio" aria-current={activeSection === "inicio" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Início</a>
        <a href="#sobre" aria-current={activeSection === "sobre" ? "page" : undefined} onClick={() => setMenuOpen(false)}>A clínica</a>
        <a href="#tratamentos" aria-current={activeSection === "tratamentos" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Tratamentos</a>
        <a href="#resultados" aria-current={activeSection === "resultados" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Resultados</a>
        <a href="#equipe" aria-current={activeSection === "equipe" ? "page" : undefined} onClick={() => setMenuOpen(false)}>Equipe</a>
        <a href="#localizacao" aria-current={activeSection === "localizacao" ? "page" : undefined} onClick={() => setMenuOpen(false)}><MapPin size={15} aria-hidden="true" /> Localização</a>
      </nav>   <Button className="header-appointment" onClick={abrirWhatsApp}>Agendar avaliação <ArrowUpRight /></Button>
      <Button className="mobile-menu" variant="ghost" size="icon" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
    </header>
    {activeSection === "inicio" && <section className="clinic-hero hero-premium" id="inicio">
      <div className="hero-premium-copy">
        <span className="eyebrow premium-reveal"><span className="little-line" /> FELICITÁ · ODONTOLOGIA INTEGRADA</span>
        <h1 className="premium-reveal">Um novo jeito de <span>cuidar do seu sorriso.</span></h1>
        <p className="premium-reveal">Na Felicitá, cada detalhe do ambiente e do atendimento foi pensado para oferecer uma experiência acolhedora, elegante e personalizada.</p>
        <div className="hero-actions premium-reveal"><Button size="lg" onClick={abrirWhatsApp}>Agendar avaliação <ArrowUpRight /></Button></div>
      </div>
      <div className="hero-premium-visual" aria-label="Foto oficial da Felicitá: atendimento odontológico">
        <img className="hero-premium-photo" src="/felicita-consultorio.webp" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"; }} alt="Foto oficial da Felicitá: consulta odontológica humanizada" width={1024} height={1024} loading="eager" decoding="async" fetchPriority="high" />

      </div>
    </section>}
    {(activeSection === "inicio" || activeSection === "sobre") && <>
    <section className="care-features" aria-label="Diferenciais da Felicitá">
      <div className="care-features-inner">
        {[
          { image:"/profissonais%20especializados.webp", title:"Profissionais especializados", caption:"Experiência e dedicação" },
          { image:"/atendimento%20humanizado.webp", title:"Atendimento humanizado", caption:"Cuidado em cada detalhe" },
          { image:"/equipamentos%20de%20ponta.webp", title:"Equipamentos de ponta", caption:"Tecnologia para seu sorriso" }
        ].map(({image,title,caption})=>(
          <div key={title} className="care-feature care-feature-reveal">
            <span className="care-feature-icon"><img src={image} alt="" loading="lazy" decoding="async" /></span>
            <span className="care-feature-copy">
              <strong>{title}</strong>
              <small>{caption}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
    </>}
    {activeSection === "tratamentos" && <>
    <section className="treatments section-wrap" id="tratamentos">
      <div className="section-heading premium-reveal"><div><span className="eyebrow">CUIDADO QUE FAZ A DIFERENÇA</span>{activeSection === "tratamentos" ? <h1>Soluções para cada fase <span>do seu sorriso.</span></h1> : <h2>Soluções para cada fase <span>do seu sorriso.</span></h2>}</div><p>Conheça nossos tratamentos e descubra o cuidado ideal para o seu sorriso.</p></div>
      <div className="editorial-strip premium-reveal"><img src="/felicita-consultorio.webp" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"; }} alt="Foto oficial da Felicitá: exame odontológico" loading="lazy" decoding="async" fetchPriority="low"/><div><span className="eyebrow">PRECISÃO E DELICADEZA</span><h2>Estrutura que acolhe. Cuidado que inspira.</h2><p>Conheça espaços preparados para receber você e converse com a equipe sobre as possibilidades de tratamentos.</p></div><img src="/felicita-atendimento.webp" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"; }} alt="Foto oficial da Felicitá: atendimento clínico" loading="lazy" decoding="async" fetchPriority="low"/></div><div className="treatment-grid treatment-photo-grid">{treatments.map(({ title, description, icon: Icon }, index) => <a href={`#tratamento-${index + 1}`} aria-label={`Conhecer ${title}`} className="treatment-card treatment-photo-card premium-reveal" key={title}><div className="treatment-photo-cover"><img src={treatmentImages[index]} alt={`Imagem do tratamento: ${title.toLowerCase()}`} loading="lazy" decoding="async" /></div><div className="treatment-photo-content"><div className="treatment-photo-heading"><span className="treatment-photo-icon"><Icon size={29} strokeWidth={1.6}/></span><div><h3>{title}</h3><small>{treatmentSubtitles[index]}</small></div></div><div className="treatment-photo-divider"/><p>{description}</p><span className="treatment-photo-button">Saiba mais <ArrowUpRight size={17}/></span></div></a>)}</div>
    </section>
    </>}
    {(activeSection === "inicio" || activeSection === "sobre") && <>
    <section className="clinic-story section-wrap" id="historia" aria-labelledby="clinic-story-title">
      <div className="clinic-story-visual premium-reveal">
        <img src="/felicita-recepcao.webp" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"; }} alt="Recepção oficial da Felicitá" loading="lazy" decoding="async" />
        <span className="clinic-story-label">Felicitá · Odontologia Integrada</span>
        <img className="clinic-story-tooth-3d" src="/Dente-3D-com-escudo-azul.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
      </div>
      <div className="clinic-story-content premium-reveal">
        <span className="eyebrow">NOSSA HISTÓRIA</span>
        <h2 id="clinic-story-title">Felicitá.</h2>
        <p>A Felicitá une uma identidade elegante a espaços cuidadosamente planejados. Dos detalhes dourados à estrutura dos consultórios, nosso propósito é proporcionar conforto e tranquilidade em cada visita.</p>
        <p>Consulte nossa equipe para confirmar os horários e a localização.</p>
        <a href="#localizacao" className="clinic-story-link">Conheça nossa localização <ArrowUpRight size={17}/></a>
      </div>
    </section>
    {activeSection === "sobre" && <>
    <section className="premium-clinic-feature section-wrap" aria-label="Acolhimento em cada detalhe">
      <div className="premium-clinic-feature-image premium-reveal"><img src="/felicita-cafe.webp" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"; }} alt="Foto oficial da Felicitá: clínica odontológica com ambiente acolhedor" loading="lazy" decoding="async" fetchPriority="low" /></div>
      <div className="premium-clinic-feature-copy premium-reveal"><span className="eyebrow">O AMBIENTE TAMBÉM ACOLHE</span><h2>Um ambiente criado para <em>você se sentir bem.</em></h2><p>Ambientes iluminados, acabamentos sofisticados e espaços organizados para tornar cada visita mais agradável.</p><a href="#contato" className="premium-clinic-feature-link">Entre em contato <ArrowUpRight size={18}/></a></div>
    </section>
    </>}
    <section id="sobre" className="implant-showcase implant-showcase-about section-wrap" aria-labelledby="implant-showcase-about-title">
      <div className="implant-showcase-intro"><span className="implant-kicker">ODONTOLOGIA INTEGRADA · REABILITAÇÃO ORAL</span><h2 id="implant-showcase-about-title">Implantes para <span>diferentes necessidades.</span></h2><p>Conheça algumas técnicas que podem ser consideradas após avaliação individualizada.</p></div>
      <div className="implant-showcase-grid">
        <div className="implant-showcase-points">
          <article className="implant-point"><span className="implant-dot"/><h3>All-on-4®</h3><p>Possibilidade de reabilitação de uma arcada com quatro implantes, quando houver indicação profissional.</p><button type="button" onClick={() => { window.location.hash = "tratamento-1"; }}>Saiba mais <ArrowUpRight size={14}/></button></article>
          <article className="implant-point"><span className="implant-dot"/><h3>Implante convencional</h3><p>Procedimento planejado conforme a condição óssea e as necessidades do paciente.</p><button type="button" onClick={() => { window.location.hash = "tratamento-1"; }}>Saiba mais <ArrowUpRight size={14}/></button></article>
        </div>
        <div className="implant-showcase-art" aria-label="Ilustração esquemática de arcada dentária e implante">
          <div className="implant-orbit implant-orbit-outer"/><div className="implant-orbit implant-orbit-inner"/>
          <img className="implant-anatomy implant-3d-image" src="/implante-3d.webp" alt="Modelo tridimensional de implante dentário" loading="lazy" />
        </div>
        <div className="implant-showcase-points">
          <article className="implant-point"><span className="implant-dot"/><h3>Implante imediato</h3><p>Em casos selecionados, a instalação do implante pode acontecer em uma etapa próxima à extração.</p><button type="button" onClick={() => { window.location.hash = "tratamento-1"; }}>Saiba mais <ArrowUpRight size={14}/></button></article>
          <article className="implant-point"><span className="implant-dot"/><h3>Cirurgia guiada</h3><p>O planejamento digital pode contribuir para definir previamente a posição dos implantes.</p><button type="button" onClick={() => { window.location.hash = "tratamento-1"; }}>Saiba mais <ArrowUpRight size={14}/></button></article>
        </div>
      </div>
      <p className="implant-showcase-disclaimer">As técnicas apresentadas são informativas e não significam disponibilidade confirmada na clínica. A indicação depende de avaliação odontológica.</p>
    </section>
    </>}
    {activeSection === "tratamentos" && <>
    <section className="fel-rehab-card section-wrap" id="reabilitacao-card" aria-labelledby="fel-rehab-title">
      <div className="fel-rehab-text">
        <span className="eyebrow">REABILITAÇÃO ORAL</span>
        <h2 id="fel-rehab-title">Confiança para <span>voltar a sorrir.</span></h2>
        <p>Conheça possibilidades de reabilitação oral desenvolvidas a partir de avaliação individualizada e planejamento de cada caso. A disponibilidade dos tratamentos deve ser confirmada pela clínica.</p>
        <button type="button" className="premium-link" onClick={() => { window.location.hash = "tratamento-1"; }}>Quero saber mais <ArrowUpRight size={18}/></button>
      </div>
      <div className="fel-rehab-visual">
        <div className="fel-rehab-ring"/><div className="fel-rehab-ring fel-rehab-ring-inner"/>
        <img src="/Dente-3D-com-escudo-azul.webp" alt="Dente 3D com escudo azul simbolizando proteção e cuidado odontológico" loading="lazy"/>
      </div>
    </section>
    <section id="implantes" className="implant-showcase section-wrap" aria-labelledby="implant-showcase-title">
      <div className="implant-showcase-intro"><span className="implant-kicker">ODONTOLOGIA INTEGRADA · REABILITAÇÃO ORAL</span><h2 id="implant-showcase-title">Implantes para <span>diferentes necessidades.</span></h2><p>Conheça algumas técnicas que podem ser consideradas após avaliação individualizada.</p></div>
      <div className="implant-showcase-grid">
        <div className="implant-showcase-points">
          <article className="implant-point"><span className="implant-dot"/><h3>All-on-4®</h3><p>Possibilidade de reabilitação de uma arcada com quatro implantes, quando houver indicação profissional.</p><button type="button" onClick={() => { window.location.hash = "tratamento-1"; }}>Saiba mais <ArrowUpRight size={14}/></button></article>
          <article className="implant-point"><span className="implant-dot"/><h3>Implante convencional</h3><p>Procedimento planejado conforme a condição óssea e as necessidades do paciente.</p><button type="button" onClick={() => { window.location.hash = "tratamento-1"; }}>Saiba mais <ArrowUpRight size={14}/></button></article>
        </div>
        <div className="implant-showcase-art" aria-label="Ilustração esquemática de arcada dentária e implante">
          <div className="implant-orbit implant-orbit-outer"/><div className="implant-orbit implant-orbit-inner"/>
          <img className="implant-anatomy implant-3d-image" src="/implante-3d.webp" alt="Modelo tridimensional de implante dentário" loading="lazy" />
        </div>
        <div className="implant-showcase-points">
          <article className="implant-point"><span className="implant-dot"/><h3>Implante imediato</h3><p>Em casos selecionados, a instalação do implante pode acontecer em uma etapa próxima à extração.</p><button type="button" onClick={() => { window.location.hash = "tratamento-1"; }}>Saiba mais <ArrowUpRight size={14}/></button></article>
          <article className="implant-point"><span className="implant-dot"/><h3>Cirurgia guiada</h3><p>O planejamento digital pode contribuir para definir previamente a posição dos implantes.</p><button type="button" onClick={() => { window.location.hash = "tratamento-1"; }}>Saiba mais <ArrowUpRight size={14}/></button></article>
        </div>
      </div>
      <p className="implant-showcase-disclaimer">As técnicas apresentadas são informativas e não significam disponibilidade confirmada na clínica. A indicação depende de avaliação odontológica.</p>
    </section>
    </>}
    {activeSection === "resultados" && <>
    <section id="resultados" className="results-section section-wrap">
      <span className="eyebrow">RESULTADOS E TRANSFORMAÇÕES</span>{activeSection === "resultados" ? <h1>A evolução de um sorriso <span>merece ser valorizada.</span></h1> : <h2>A evolução de um sorriso <span>merece ser valorizada.</span></h2>}
      <div className="editorial-smile premium-reveal"><img src="/felicita-cadeira.webp" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"; }} loading="lazy" decoding="async" fetchPriority="low" alt="Sorriso natural"/><div><span className="eyebrow">A BELEZA DO NATURAL</span><h2>Cada sorriso merece uma atenção única.</h2><p>Informações sobre nossos tratamentos. Agende sua avaliação e comece a sua.</p><Button onClick={abrirWhatsApp}>Agendar avaliação <ArrowUpRight size={17}/></Button></div></div>
      <div className="felicita-pending">Resultados reais em preparação.</div>
      <p className="implant-comparison-note">Espaço reservado para casos reais da Felicitá. Não há resultados de pacientes publicados nesta prévia.</p>
    </section>
    </>}
    {activeSection === "equipe" && <>
    <section id="equipe" className="team-section section-wrap team-directory">
      <span className="eyebrow">PESSOAS QUE FAZEM A FELICITÁ</span>
      {activeSection === "equipe" ? <h1>Conheça nossa <span>equipe.</span></h1> : <h2>Conheça nossa <span>equipe.</span></h2>}
      <p className="team-directory-intro">Conheça o atendimento humanizado da Felicitá. A clínica informa mais de 13 anos de experiência.</p>
      <div className="team-directory-group"><h2>Profissionais de odontologia</h2>
        <div className="team-directory-grid">
          <article className="felicita-professional">
            <img className="team-professional-photo" width={400} height={500} src="/dr_toni_clai.webp" alt="Fotografia do Dr. Toni Clai" loading="lazy" decoding="async" />
            <div className="team-professional-info"><span className="eyebrow">PROFISSIONAL DA CLÍNICA</span><h3>Dr. Toni Clai</h3><p>CRO-SE 2193</p></div>
          </article>
          <article className="felicita-professional">
            <img className="team-professional-photo" width={400} height={500} src="/dr_joao_pedro.webp" alt="Fotografia do Dr. João Pedro" loading="lazy" decoding="async" />
            <div className="team-professional-info"><span className="eyebrow">PROFISSIONAL DA CLÍNICA</span><h3>Dr. João Pedro</h3><p>Odontologia</p></div>
          </article>
          <article className="felicita-professional">
            <img className="team-professional-photo" width={400} height={500} src="/profissional_03.webp" alt="Retrato de profissional da clínica" loading="lazy" decoding="async" />
            <div className="team-professional-info"><span className="eyebrow">PROFISSIONAL DA CLÍNICA</span><h3>Profissional da equipe</h3><p>Nome a confirmar</p></div>
          </article>
        </div>
      </div>
      <div className="team-directory-group team-collaborators">
        <h2>Nossa equipe de colaboradores</h2>
        <div className="team-directory-grid">
          <article className="felicita-professional">
            <img className="team-professional-photo" width={400} height={500} src="/livia.webp" alt="Fotografia de Lívia, colaboradora da Felicitá" loading="lazy" decoding="async" />
            <div className="team-professional-info"><span className="eyebrow">COLABORADORA DA CLÍNICA</span><h3>Lívia</h3><p>Função a confirmar</p></div>
          </article>
          <article className="felicita-professional">
            <img className="team-professional-photo" width={400} height={500} src="/colaboradora_01.webp" alt="Fotografia de colaboradora da Felicitá" loading="lazy" decoding="async" />
            <div className="team-professional-info"><span className="eyebrow">COLABORADORA DA CLÍNICA</span><h3>Colaboradora</h3><p>Nome e função a confirmar</p></div>
          </article>
          <article className="felicita-professional">
            <img className="team-professional-photo" width={400} height={500} src="/colaboradora_02.webp" alt="Fotografia de colaboradora da Felicitá" loading="lazy" decoding="async" />
            <div className="team-professional-info"><span className="eyebrow">COLABORADORA DA CLÍNICA</span><h3>Colaboradora</h3><p>Nome e função a confirmar</p></div>
          </article>
        </div>
      </div>
    </section>
    <section className="editorial-portrait section-wrap"><img src="/felicita-atendimento.webp" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"; }} loading="lazy" decoding="async" fetchPriority="low" alt="Profissional de odontologia"/><div><span className="eyebrow">ATENÇÃO E ACOLHIMENTO</span><h2>Uma experiência pensada para você.</h2><p>Da primeira conversa ao acompanhamento, o cuidado está em ouvir, orientar e respeitar suas necessidades.</p></div></section></>}
    {(activeSection === "inicio" || activeSection === "sobre") && <>
    <section id="depoimentos" className="testimonials-section video-testimonials"><div className="section-wrap">
      <span className="eyebrow">DEPOIMENTOS</span>
      <h2>Experiências que merecem <span>ser compartilhadas.</span></h2>
      <p className="video-testimonials-intro">Conheça a Felicitá por meio dos nossos vídeos.</p>
      <div className="video-testimonials-grid">
        {["video 1.mp4", "video 2.mp4", "video 3.mp4"].map((file, index) => (
          <ClickToPlayVideo key={file} file={file} index={index} />
        ))}
      </div>
    </div></section>
    </>}
    {(activeSection === "inicio" || activeSection === "localizacao") && <>
    <section id="localizacao" className="location-section location-premium section-wrap">
      <div className="location-premium-info premium-reveal">
        <span className="eyebrow">LOCALIZAÇÃO</span>
        {activeSection === "localizacao" ? <h1>Conheça de perto a <span>Felicitá.</span></h1> : <h2>Conheça de perto a <span>Felicitá.</span></h2>}
        <div className="location-contact-list">
          <a className="location-contact-item" href="https://www.google.com/maps/dir/?api=1&destination=R.%20Pres.%20Vargas%2C%20166%2C%20Sim%C3%A3o%20Dias%2C%20SE%2C%2049480-000" target="_blank" rel="noopener noreferrer"><span className="location-contact-icon"><MapPin size={21}/></span><span><small>ENDEREÇO</small><strong>R. Pres. Vargas, 166 — Simão Dias, SE — 49480-000</strong></span><ArrowUpRight size={18}/></a>
          <a className="location-contact-item" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><span className="location-contact-icon"><Phone size={21}/></span><span><small>TELEFONE / WHATSAPP</small><strong>(79) 99851-2405</strong></span><ArrowUpRight size={18}/></a>
          <div className="location-contact-item location-hours"><span className="location-contact-icon"><Clock3 size={21}/></span><span><small>HORÁRIO DE FUNCIONAMENTO</small><strong>Segunda e terça: 08h–12h e 14h–18h</strong><strong>Quarta: 08h–12h e 14h–18h</strong><strong>Quinta: 08h–12h e 14h–21h</strong><strong>Sexta: 08h–18h</strong><strong>Sábado: 08h–12h · Domingo: fechado</strong></span></div>
          <a className="location-contact-item" href="https://www.instagram.com/felicita_odontologia/" target="_blank" rel="noopener noreferrer"><span className="location-contact-icon"><Instagram size={21}/></span><span><small>INSTAGRAM</small><strong>@felicita_odontologia</strong></span><ArrowUpRight size={18}/></a>
        </div>
        <div className="location-premium-actions"><a className="location-route-button" href="https://www.google.com/maps/dir/?api=1&destination=R.%20Pres.%20Vargas%2C%20166%2C%20Sim%C3%A3o%20Dias%2C%20SE%2C%2049480-000" target="_blank" rel="noopener noreferrer"><MapPin size={18}/> Traçar rota <ArrowUpRight size={17}/></a><Button variant="outline" onClick={abrirWhatsApp}>Agendar avaliação <ArrowUpRight size={17}/></Button></div>
      </div>
      <div className="location-premium-media premium-reveal">
        <figure className="location-facade-photo"><img src="/felicita-fachada.webp" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"; }} alt="Foto oficial da Felicitá: clínica odontológica" loading="lazy" decoding="async" fetchPriority="low" /><figcaption>Felicitá · Simão Dias, SE</figcaption></figure>
        <div className="location-map"><iframe title="Mapa da Felicitá — Rua Presidente Vargas, 166, Simão Dias" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=R.%20Pres.%20Vargas%2C%20166%2C%20Sim%C3%A3o%20Dias%2C%20SE%2C%2049480-000&output=embed" /></div>
      </div>
    </section>
    </>}
    {activeTreatment && <section className="treatment-detail-page section-wrap" id="detalhes-tratamento">
      <a href="#tratamentos" className="treatment-back"><ArrowRight size={17} style={{ transform: "rotate(180deg)" }}/> Voltar aos tratamentos</a>
      <div className="treatment-detail-head"><span className="eyebrow">FELICITÁ · TRATAMENTOS</span><h1>{activeTreatment.title}</h1><p>{activeTreatment.description} Conheça as possibilidades de cuidado e tire suas dúvidas com a equipe da clínica. A indicação e a disponibilidade dependem de avaliação profissional.</p><Button onClick={abrirWhatsApp}>Solicitar avaliação <ArrowUpRight size={17}/></Button></div>
      {activeTreatmentIndex === 0 && <div className="felicita-tooth-showcase"><div><span className="eyebrow">CUIDADOS COM SEU SORRISO</span><h2>Proteção e bem-estar em cada etapa.</h2><p>O planejamento começa com uma avaliação individualizada e atenção à saúde bucal.</p></div><img src="/Dente-3D-com-escudo-azul.webp" alt="Ilustração tridimensional de um dente com escudo azul" loading="lazy" /></div>}
      <div className="treatment-case-area"><span className="eyebrow">CASOS REAIS</span><h2>Resultados que contam histórias.</h2>{activeTreatmentIndex === 0 ? <><div className="felicita-pending">Galeria de resultados reais em preparação.</div><p className="implant-comparison-note">Espaço reservado para casos reais da Felicitá. Não há resultados de pacientes publicados nesta prévia.</p></> : <div className="treatment-case-placeholder"><Sparkles size={31}/><h3>Espaço para fotos de casos reais</h3><p>Adicionaremos aqui fotografias de antes e depois fornecidas pela clínica, com autorização do paciente e identificação adequada.</p></div>}</div>
    </section>}
    {(activeSection === "inicio" || activeSection === "sobre") && <section className="gold-signature" aria-label="Identidade Felicitá">
      <div className="gold-signature-inner premium-reveal">
        <span className="gold-signature-mark" aria-hidden="true">✦</span>
        <span className="gold-signature-eyebrow">FELICITÁ · ODONTOLOGIA INTEGRADA</span>
        <h2>A excelência está <em>em cada detalhe.</em></h2>
        <p>Uma experiência de cuidado com atenção, conforto e respeito a cada sorriso.</p>
        <Button onClick={abrirWhatsApp}>Agendar avaliação <ArrowUpRight size={17}/></Button>
      </div>
    </section>}
    <button type="button" className={`back-to-top ${showBackToTop ? "is-visible" : ""}`} aria-label="Voltar ao topo" title="Voltar ao topo" onClick={() => { if (activeSection !== "inicio") window.location.hash = "inicio"; else window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); }}><ArrowUp size={21} aria-hidden="true" /></button>
    <footer className="site-footer"><div className="footer-premium-inner">
      <div className="footer-premium-main">
        <a className="brand brand-official" href="#inicio" aria-label="Felicitá — voltar ao início"><img className="felicita-official-logo" src="/logo%20Felicit%C3%A1.png" alt="Felicitá Odontologia Integrada" decoding="async" /></a>
        <p>Cuidar. Acolher. Fazer sorrir.</p>
        <span>© {new Date().getFullYear()} Felicitá</span>
      </div>
    </div></footer>
    

  </main>;
}
