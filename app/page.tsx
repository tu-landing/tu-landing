"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Layers, Instagram, Mail, CheckCircle2 } from "lucide-react"
import { Button } from "./components/ui/button"
import Card from "./components/ui/card"
import AnimatedBackground from "./components/animated_background"

export default function Home() {
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("top");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: topRef, name: "top" },
        { ref: servicesRef, name: "services" },
        { ref: processRef, name: "process" },
        { ref: plansRef, name: "plans" },
        { ref: examplesRef, name: "examples" },
        { ref: ctaRef, name: "cta" },
      ];

      const scrollPosition = window.scrollY + (headerRef.current?.offsetHeight || 0) + 10; // margen pequeño

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i].ref.current;
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicializa al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // References for sections
  const headerRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const plansRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current && headerRef.current) {
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      
      const extraOffset = 20; // espacio extra entre el header y la sección
      const offsetPosition = elementPosition - headerHeight + extraOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsSubHeaderVisible(false);
    }
  };
  
  return (
    <div ref={topRef} className="min-h-screen bg-background/99 relative">
      <AnimatedBackground />
      <header ref={headerRef} className="fixed top-0 left-0 w-full border-b border-border/40 bg-background z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8 lg:py-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection(topRef)}
            className="flex items-center gap-2 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-4 transition-transform duration-300 group-hover:scale-110">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:shadow-[0_0_12px_4px_var(--tw-shadow-color)] group-hover:shadow-primary/50"
              >
                <Layers className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tu Landing
              </span> 
            </div>
          </button>

          {/* Contenedor de todo a la derecha */}
          <div className="flex items-center gap-6">
            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {[
                { name: "Servicios", ref: servicesRef, key: "services" },
                { name: "Proceso", ref: processRef, key: "process" },
                { name: "Planes", ref: plansRef, key: "plans" },
                { name: "Ejemplos", ref: examplesRef, key: "examples" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.ref)}
                  className={`text-sm transition-all duration-300 ease-in-out cursor-pointer hover:scale-110 ${
                    activeSection === item.key
                      ? "text-primary" // color activo igual que hover
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Menu mobile toggle */}
            <button
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent cursor-pointer transition-all hover:shadow-[0_0_12px_4px_var(--tw-shadow-color)] hover:shadow-primary/50 hover:opacity-70 md:hidden"
              onClick={() => setIsSubHeaderVisible(!isSubHeaderVisible)}
              aria-label="Abrir submenú"
            >
              <div className="space-y-1">
                <span
                  className={`block h-0.5 w-5 bg-primary-foreground transition-transform ${isSubHeaderVisible ? "translate-y-1.5 rotate-45" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-primary-foreground transition-opacity ${isSubHeaderVisible ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-5 bg-primary-foreground transition-transform ${isSubHeaderVisible ? "-translate-y-1.5 -rotate-45" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden bg-background/95 backdrop-blur-md border-t border-border/40 transition-all duration-300 ${
            isSubHeaderVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-4 py-4">
            {[
              { name: "Servicios", ref: servicesRef, key: "services" },
              { name: "Proceso", ref: processRef, key: "process" },
              { name: "Planes", ref: plansRef, key: "plans" },
              { name: "Ejemplos", ref: examplesRef, key: "examples" },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.ref)}
                className={`text-sm transition-colors cursor-pointer ${
                  activeSection === item.key
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <section className="hero-section mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-16 mt-16 sm:mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 border border-primary/30 transition-all duration-300 hover:shadow-[0_0_10px_2px_var(--tw-shadow-color)] hover:shadow-primary/50 hover:scale-105">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground">Tu landing page en 2 días</span>
          </div>
          
          <h1 className="mb-6 text-balance text-6xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mt-24 sm:mt-16 lg:mt-10 leading-[1.3] pb-4">
            <span className="inline-block bg-gradient-to-b from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent transition-transform duration-300 hover:scale-110">
              Tu Landing
            </span>
          </h1>

          <p className="mb-12 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl mt-16 sm:mt-0 max-w-2xl mx-auto">
            Desarrollamos landing pages modernas y optimizadas que impulsan tu negocio.
          </p>

          <div className="hero-buttons flex flex-col items-center justify-center gap-6 sm:flex-row mt-24 lg:mt-20">
            <Button
              size="xl"
              className="rounded-full font-bold px-8 py-3 bg-gradient-to-r from-primary to-secondary  transition-all duration-300 cursor-pointer hover:shadow-[0_0_10px_2px_var(--tw-shadow-color)] hover:shadow-primary/50 hover:scale-105"
              onClick={() => scrollToSection(ctaRef)}
            >
              Contactar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="rounded-full px-6 transition-all duration-300 cursor-pointer hover:border-primary hover:shadow-[0_0_10px_2px_var(--tw-shadow-color)] hover:shadow-primary/50 hover:scale-105"
              onClick={() => scrollToSection(examplesRef)}
            >
              Ver ejemplos
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border/30 mx-auto max-w-7xl mt-12 sm:mt-16">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 justify-items-center">
            <Card variant="secondary" className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                48h
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Entrega promedio</div>
            </Card>
            <Card variant="secondary" className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                15+
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">Landings entregadas</div>
            </Card>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-balance text-3xl font-black text-foreground sm:text-4xl">
          <span className="inline-block transition-transform duration-300 hover:scale-110">
            Servicios
          </span>
        </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Desarrollamos landing pages modernas y optimizadas que te ayudarán a destacar y conseguir más clientes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card variant="primary" className="mx-auto flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Diseño</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Diseñamos landing pages atractivas y adaptadas a tu marca para captar la atención de tus clientes.
            </p>
          </Card>

          <Card variant="primary" className="mx-auto flex flex-col items-center text-center">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 group-hover:from-accent/40 group-hover:to-secondary/40 transition-all">
              <Layers className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">Optimización</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Nuestras landing pages están optimizadas para cualquier tipo de dispositivo.
            </p>
          </Card>
        </div>

      </section>

    <section className="border-y border-border/30 mx-auto max-w-7xl">        
  <div ref={processRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="mb-4 text-balance text-3xl font-black text-foreground sm:text-4xl">
        <span className="inline-block transition-transform duration-300 hover:scale-110">
          Proceso
        </span>
      </h2>            
      <p className="text-pretty text-lg text-muted-foreground">
        Nuestro proceso es claro y confiable, asegurando una landing page de calidad en poco tiempo.
      </p>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
      {/* Paso 1 */}
      <div className="relative text-center group transition-transform duration-300 hover:scale-105">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-black text-primary-foreground hover:shadow-[0_0_12px_4px_var(--tw-shadow-color)] hover:shadow-primary/50 transition-all duration-300">
          1
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">Contacto</h3>
        <p className="text-pretty leading-relaxed text-muted-foreground group-hover:scale-110 transition-transform duration-300">
          Hablamos sobre tu negocio, el plan que elegiste y cómo sería el diseño ideal de tu landing.    
        </p>
      </div>

      {/* Paso 2 */}
      <div className="relative text-center group transition-transform duration-300 hover:scale-105">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-accent text-lg font-black text-primary-foreground hover:shadow-[0_0_12px_4px_var(--tw-shadow-color)] hover:shadow-primary/50 transition-all duration-300">
          2
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">Desarrollo</h3>
        <p className="text-pretty leading-relaxed text-muted-foreground group-hover:scale-110 transition-transform duration-300">
          Recibimos un anticipo del 50% y empezamos a desarrollar la landing. Podras ver avances y sugerir cambios.
        </p>
      </div>

      {/* Paso 3 */}
      <div className="relative text-center group transition-transform duration-300 hover:scale-105">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-lg font-black text-primary-foreground hover:shadow-[0_0_12px_4px_var(--tw-shadow-color)] hover:shadow-primary/50 transition-all duration-300">
          3
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground group-hover:scale-110 transition-transform duration-300">Entrega</h3>
        <p className="text-pretty leading-relaxed text-muted-foreground group-hover:scale-110 transition-transform duration-300">
          Luego de las ultimas revisiones, recibimos el 50% restante y te entregamos la landing lista.
        </p>
      </div>
    </div>
  </div>
</section>


      <section ref={plansRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-black text-foreground sm:text-4xl">
            <span className="inline-block transition-transform duration-300 hover:scale-110">
              Planes
            </span>
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades y comienza a impulsar tu negocio.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 place-items-center">
          {/* Plan Básico */}
          <Card variant="primary">
            <h3 className="mb-2 text-xl font-bold text-card-foreground">Básico</h3>

            <div className="mb-6">
              <span className="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                $100
              </span>
              <span className="text-muted-foreground ml-2 text-sm font-medium">/ pago único</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Entrega en 4 días</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Revisiones hasta la entrega</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Alojamiento gratuito</span>
              </li>
            </ul>
          </Card>

          {/* Plan Avanzado */}
          <Card variant="primary">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1.5 text-sm font-bold text-primary-foreground">
              Más popular
            </div>

            <h3 className="mb-2 text-xl font-bold text-card-foreground">Avanzado</h3>

            <div className="mb-6">
              <span className="text-5xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                $200
              </span>
              <span className="text-muted-foreground ml-2 text-sm font-medium">/ pago único</span>
            </div>

            <ul className="mb-8 space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Entrega en 2 días</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Revisiones hasta 3 días post-entrega</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">Alojamiento y dominio gratuito</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section ref={examplesRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8 border-y border-border/30">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-black text-foreground sm:text-4xl">
            <span className="inline-block transition-transform duration-300 hover:scale-110">
              Ejemplos
            </span>
          </h2>          
          <p className="text-pretty text-lg text-muted-foreground">
            Algunos de los proyectos destacados que hemos realizado para nuestros clientes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 justify-items-center">
          <Card className="max-w-sm">
            <img src="/ejemplo1.jpg" alt="Ejemplo 1" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-foreground">Portfolio</h3>
              <p className="text-sm text-muted-foreground">Descripción.</p>
            </div>
          </Card>

          <Card className="max-w-sm">
            <img src="/ejemplo1.jpg" alt="Ejemplo 1" className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-foreground">Proyecto</h3>
              <p className="text-sm text-muted-foreground">Descripción.</p>
            </div>
          </Card>
        </div>
      </section>

      <section
        ref={ctaRef}
        id="cta"
        className="border-y border-border/30 bg-gradient-to-r from-primary via-secondary to-accent overflow-hidden"
      >       
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8 relative">
          <h2 className="mb-6 text-balance text-3xl font-black text-white sm:text-4xl drop-shadow-lg">
            ¿Listo para tu landing page?
          </h2>
          <p className="mb-10 text-pretty text-lg text-white/90 drop-shadow">
            Escríbenos por Instagram y comencemos a trabajar juntos
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-white text-primary hover:bg-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_2px_var(--tw-shadow-color)] hover:shadow-white/60"
          >
            <Link href="https://instagram.com/tu_landing" target="_blank" rel="noopener noreferrer">
              Contactar en Instagram
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/30 bg-background/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <button
              onClick={() => scrollToSection(topRef)}
              className="flex items-center gap-2 text-foreground transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4 transition-transform duration-300 group-hover:scale-110">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent transition-all duration-300 group-hover:shadow-[0_0_12px_4px_var(--tw-shadow-color)] group-hover:shadow-primary/50"
                >
                  <Layers className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Tu Landing
                </span>
              </div>
            </button>

            {/* Redes sociales */}
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com/tu_landing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">Instagram</span>
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&to=tulanding932@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">Gmail</span>
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2025 Tu Landing. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
