"use client";

import { Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-28 overflow-hidden py-lg"
    >
      <div className="relative mx-auto grid max-w-[1200px] gap-2xl px-sm md:grid-cols-2 md:items-start md:px-lg">
        {/* Coluna esquerda */}
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-brand-graphite/50 dark:text-brand-ice/50">
            ENTRE EM CONTATO
          </p>
          <h2 className="mt-sm text-2xl font-bold leading-tight text-brand-graphite dark:text-brand-ice md:text-4xl">
            Receba o contato de nossos especialistas
          </h2>
          <p className="mt-md max-w-md text-base text-brand-graphite/70 dark:text-brand-ice/70 md:text-lg">
            Não espere o próximo incidente. Preencha o formulário e nossa
            engenharia entrará em contato para estruturar a segurança e
            continuidade da sua operação.
          </p>
        </div>

        {/* Coluna direita — formulário */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-card-lg border border-white/60 bg-white/50 p-lg backdrop-blur-glass dark:border-white/10 dark:bg-white/5"
        >
          <div className="flex flex-col gap-md">
            <Field label="Nome completo" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome"
                className={inputClasses}
              />
            </Field>

            <div className="grid gap-md sm:grid-cols-2">
              <Field label="E-mail" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  className={inputClasses}
                />
              </Field>
              <Field label="Telefone" htmlFor="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className={inputClasses}
                />
              </Field>
            </div>

            <Field label="Empresa" htmlFor="company">
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Nome da empresa"
                className={inputClasses}
              />
            </Field>

            <Field label="Mensagem" htmlFor="message">
              <textarea
                id="message"
                name="message"
                placeholder="Como podemos ajudar?"
                rows={5}
                className={`${inputClasses} resize-none`}
              />
            </Field>

            <button
              type="submit"
              className="mt-sm flex items-center justify-center gap-xs rounded-button bg-brand-primary px-lg py-sm text-sm font-semibold text-white shadow-level-1 transition-colors ease-brand hover:bg-brand-primary-dark"
            >
              Enviar mensagem
              <Send size={16} />
            </button>

            <p className="text-center text-xs text-brand-graphite/50 dark:text-brand-ice/50">
              Ao enviar, você concorda com nossa{" "}
              <a
                href="/politica-de-privacidade"
                className="underline decoration-brand-graphite/30 underline-offset-4 transition-colors ease-brand hover:text-brand-primary dark:decoration-brand-ice/30"
              >
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

const inputClasses =
  "w-full rounded-input border border-brand-graphite/15 bg-white/80 px-md py-sm text-sm text-brand-graphite placeholder:text-brand-graphite/40 outline-none transition-colors ease-brand focus:border-brand-primary dark:border-white/10 dark:bg-black/30 dark:text-brand-ice dark:placeholder:text-brand-ice/30";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-xs">
      <label
        htmlFor={htmlFor}
        className="text-xs font-medium text-brand-graphite/60 dark:text-brand-ice/60"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
