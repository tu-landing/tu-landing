"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Layers, CheckCircle2 } from "lucide-react"
import { Button } from "./components/ui/button"

export default function Home() {
  const [isSubHeaderVisible, setIsSubHeaderVisible] = useState(false)

  // References for sections
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
    setIsSubHeaderVisible(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full border-b border-border bg-background z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Layers className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">Tu Landing</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection(processRef)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Planes
            </button>
          </nav>
          <button
            className="block md:hidden p-2"
            onClick={() => setIsSubHeaderVisible(!isSubHeaderVisible)}
          >
            <span className="sr-only">Abrir submenú</span>
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-foreground transition-transform ${
                  isSubHeaderVisible ? "translate-y-1.5 rotate-45" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-foreground transition-opacity ${
                  isSubHeaderVisible ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-foreground transition-transform ${
                  isSubHeaderVisible ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
        <div
          className={`md:hidden bg-background border-t border-border transition-all duration-300 ${
            isSubHeaderVisible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-4 py-4">
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection(processRef)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              Planes
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-16 mt-16 sm:mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <Sparkles className="h-4 w-4 text-secondary-foreground" />
            <span className="text-sm font-medium text-secondary-foreground">
              Tu landing page en 1 día
            </span>
          </div>

          <h1 className="mb-6 text-balance text-6xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl lg:mt-16">
            Tu Landing
          </h1>

          <p className="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Desarrollamos landing pages modernas y optimizadas que impulsan tu negocio.
          </p>

          <div className="hero-buttons flex flex-col items-center justify-center gap-6 sm:flex-row mt-24 lg:mt-20">
            <Button size="xl" className="rounded-full px-10">
              Ver ejemplos
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button asChild size="xl" variant="outline" className="rounded-full px-10 bg-transparent">
              <Link href="#cta">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-muted/30 mt-12 sm:mt-16">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">48h</div>
              <div className="mt-2 text-sm text-muted-foreground">Entrega promedio</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">15+</div>
              <div className="mt-2 text-sm text-muted-foreground">Landings entregadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Servicios
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Desarrollamos landing pages modernas y optimizadas que te ayudarán a destacar y conseguir más clientes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">Diseño</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Diseñamos landing pages atractivas y adaptadas a tu marca para captar la atención de tus clientes.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-semibold text-card-foreground">Optimización</h3>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Nuestras landing pages están optimizadas para cualquier tipo de dispositivo.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Proceso
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Nuestro proceso es claro y confiable, asegurando una landing page de calidad.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Contacto</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Hablamos sobre tu negocio y tus objetivos para definir el diseño ideal de tu landing.
              </p>
            </div>

            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Diseño</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Creamos la landing y recibimos un anticipo del 50%. Podrás ver avances y sugerir cambios.
              </p>
            </div>

            <div className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">Entrega</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Tras tu feedback final y correcciones, recibimos el 50% restante y te entregamos la landing lista.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section ref={pricingRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Planes
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades y comienza a impulsar tu negocio.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Plan Básico */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">Básico</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">$100</span>
              <span className="text-muted-foreground"> / pago único</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Entrega en 2 días</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Revisiones hasta la entrega</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Alojamiento gratuito</span>
              </li>
            </ul>
          </div>

          {/* Plan Avanzado */}
          <div className="relative rounded-2xl border-2 border-primary bg-card p-8 shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
              Más popular
            </div>
            <h3 className="mb-2 text-xl font-semibold text-card-foreground">Avanzado</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">$200</span>
              <span className="text-muted-foreground"> / pago único</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Entrega en 1 día</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Revisiones hasta 7 días post-entrega</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">Alojamiento y dominio gratuito</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="border-y border-border bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
          <h2 className="mb-6 text-balance text-3xl font-bold text-primary-foreground sm:text-4xl">
            ¿Listo para tu landing page?
          </h2>
          <p className="mb-10 text-pretty text-lg text-primary-foreground/90">
            Escríbenos por Instagram y comencemos a trabajar juntos
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full px-8"
          >
            <Link href="https://instagram.com/tu_landing" target="_blank" rel="noopener noreferrer">
              Contactar en Instagram
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Layers className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">Tu Landing</span>
            </Link>
            <p className="text-sm text-muted-foreground">© 2025 Tu Landing. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
