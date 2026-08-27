interface LegalSection {
  id: string;
  heading: string;
  body: string[];
}

interface LegalLayoutProps {
  title: string;
  updated: string;
  sections: LegalSection[];
}

export default function LegalLayout({ title, updated, sections }: LegalLayoutProps) {
  return (
    <div className="bg-base-white text-neutral-900">
      <div className="container-page py-14 sm:py-20">
        <h1 className="text-h1-mobile sm:text-h1 font-semibold text-balance">{title}</h1>
        <p className="mt-3 text-body1 text-neutral-900/60">Last updated {updated}</p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1">
              <p className="text-body2 font-semibold uppercase tracking-wide text-neutral-900/50 mb-3">
                On this page
              </p>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block py-1.5 text-body1 text-neutral-900/70 hover:text-primary-light transition-colors"
                >
                  {s.heading}
                </a>
              ))}
            </nav>
          </aside>

          <div className="max-w-2xl space-y-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-24">
                <h2 className="text-h3 font-semibold mb-4">{s.heading}</h2>
                <div className="space-y-4">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-body1 text-neutral-900/70">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
