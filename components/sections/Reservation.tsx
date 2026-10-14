"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const inputClass =
  "w-full rounded-xl border border-brand/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30";

export function Reservation() {
  const { t } = useLanguage();
  const f = t.reserve.form;
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Demo only: connect this to your backend, WhatsApp link, or email service.
    setSent(true);
  }

  return (
    <section id="reserve" className="section-pad">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.reserve.eyebrow}
            title={t.reserve.title}
            subtitle={t.reserve.subtitle}
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 rounded-3xl bg-white p-6 shadow-card sm:p-10">
            {sent ? (
              <div className="py-10 text-center">
                <p className="font-display text-4xl font-bold text-brand">{f.successTitle}</p>
                <p className="mx-auto mt-3 max-w-sm text-ink/65">{f.successText}</p>
                <Button variant="outline" className="mt-8" onClick={() => setSent(false)}>
                  {f.another}
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-brand">
                  {f.name}
                  <input required name="name" type="text" autoComplete="name" className={`${inputClass} mt-2`} />
                </label>
                <label className="block text-sm font-medium text-brand">
                  {f.phone}
                  <input
                    required
                    name="phone"
                    type="tel"
                    dir="ltr"
                    autoComplete="tel"
                    className={`${inputClass} mt-2 text-start`}
                  />
                </label>
                <label className="block text-sm font-medium text-brand">
                  {f.date}
                  <input required name="date" type="date" className={`${inputClass} mt-2`} />
                </label>
                <label className="block text-sm font-medium text-brand">
                  {f.time}
                  <input required name="time" type="time" className={`${inputClass} mt-2`} />
                </label>
                <label className="block text-sm font-medium text-brand sm:col-span-2">
                  {f.guests}
                  <select name="guests" defaultValue="2" className={`${inputClass} mt-2`}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <option key={i} value={i + 1}>
                        {i + 1} {f.guestsUnit}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block text-sm font-medium text-brand sm:col-span-2">
                  {f.notes}
                  <textarea name="notes" rows={3} className={`${inputClass} mt-2 resize-none`} />
                </label>
                <Button type="submit" className="w-full sm:col-span-2">
                  {f.submit}
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
