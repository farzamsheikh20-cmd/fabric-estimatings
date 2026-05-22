export default function FabricEstimatingHomepage() {
  const services = [
    {
      title: 'Quantity Takeoffs',
      desc: 'Precision material quantification engineered for accurate procurement and bid preparation.',
    },
    {
      title: 'Bid Estimating',
      desc: 'Detailed construction cost estimating built to strengthen contractor confidence and win rates.',
    },
    {
      title: 'Value Engineering',
      desc: 'Strategic cost optimization balancing constructability, performance, and profitability.',
    },
    {
      title: 'Subcontractor Support',
      desc: 'Professional estimating support tailored for fabricators, suppliers, and specialty trades.',
    },
  ]

  const divisions = [
    'Division 03 — Concrete',
    'Division 04 — Masonry',
    'Division 05 — Metals',
    'Division 06 — Wood & Plastics',
    'Division 07 — Thermal & Moisture Protection',
    'Division 08 — Openings',
    'Division 09 — Finishes',
    'Division 10 — Specialties',
  ]

  const process = [
    {
      step: '01',
      title: 'Upload Plans',
      desc: 'Securely submit project drawings, specifications, and scope details.',
    },
    {
      step: '02',
      title: 'Scope Analysis',
      desc: 'Our estimators review trade requirements and project complexity.',
    },
    {
      step: '03',
      title: 'Estimate Development',
      desc: 'Comprehensive quantity takeoffs and pricing analysis are prepared.',
    },
    {
      step: '04',
      title: 'Delivery & Support',
      desc: 'Receive polished estimate packages with strategic bid support.',
    },
  ]

  const testimonials = [
    {
      quote:
        'Fabric Estimating LLC consistently delivers highly accurate estimates that improve our bid confidence on complex commercial projects.',
      author: 'Senior Project Manager',
      company: 'Commercial General Contractor',
    },
    {
      quote:
        'Their turnaround time, precision, and professionalism have become an essential part of our preconstruction workflow.',
      author: 'Director of Estimating',
      company: 'Regional Subcontractor',
    },
    {
      quote:
        'The level of detail in their estimate packages reflects enterprise-level estimating standards.',
      author: 'Operations Executive',
      company: 'Industrial Construction Firm',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(37,99,235,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.3)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black tracking-[0.2em] uppercase">
              Fabric Estimating LLC
            </h1>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-blue-400 transition-colors">
              Process
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>

          <a
            href="mailto:fabricestimating@gmail.com"
            className="rounded-full border border-blue-500/40 bg-blue-600/20 px-5 py-2 text-sm font-semibold text-blue-300 transition-all hover:scale-105 hover:bg-blue-500/30"
          >
            Request Quote
          </a>
        </div>
      </header>

      <section className="relative px-6 py-28 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-yellow-300">
              Construction Estimating Since 1998
            </div>

            <h2 className="mt-8 text-6xl md:text-8xl font-black leading-[0.9] tracking-tight uppercase">
              Accurate Estimates.
              <span className="block text-blue-500">Stronger Bids.</span>
              <span className="block text-slate-300">Greater Confidence.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-slate-300">
              Fabric Estimating LLC has supported contractors and construction professionals with estimating services since 1998, with a dedicated online presence established in 2016. Built around practical field experience and disciplined estimating workflows, our team helps contractors bid with greater clarity, speed, and confidence.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_45px_rgba(37,99,235,0.8)] hover:shadow-[0_0_50px_rgba(37,99,235,0.75)]"
              >
                Upload Plans
              </a>

              <a
                href="tel:6466934910"
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(255,215,0,0.25)] hover:shadow-[0_0_35px_rgba(255,215,0,0.25)]"
              >
                Schedule Consultation
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-black text-blue-500">1000+</div>
                <div className="mt-2 text-slate-400">Projects Estimated</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-black text-yellow-300">99%</div>
                <div className="mt-2 text-slate-400">Estimate Accuracy</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm col-span-2 md:col-span-1">
                <div className="text-3xl font-black text-blue-400">24-48h</div>
                <div className="mt-2 text-slate-400">Fast Turnaround</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-blue-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-8 shadow-[0_0_80px_rgba(37,99,235,0.15)]">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(37,99,235,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.3)_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_6s_ease-in-out_infinite]" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-blue-400">
                      Online Presence Since 2016
                    </div>
                    <div className="mt-2 text-2xl font-bold">
                      Contractor Estimating Dashboard
                    </div>
                  </div>

                  <div className="h-16 w-16 rounded-2xl border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-blue-400 text-2xl">
                    ⬢
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    'Live Quantity Takeoffs',
                    'Real-Time Cost Analysis',
                    'Bid Comparison Tracking',
                    'Contractor Estimate Packages',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:translate-x-2 hover:border-blue-500/40"
                    >
                      <div className="flex items-center gap-4">
                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                        <div className="font-medium text-slate-200">{item}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-yellow-300">
                    Houston, Texas
                  </div>
                  <div className="mt-3 text-lg text-slate-300 leading-relaxed">
                    Built to support contractors, fabricators, suppliers, and estimating departments with reliable construction estimating solutions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-y border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            ['Field-Tested Estimating', 'Detailed reporting & bid-ready documentation'],
            ['Contractor-Focused Workflow', 'Advanced estimating for complex projects'],
            ['Rapid Turnaround', 'Fast, dependable estimate delivery'],
            ['Contractor-Focused', 'Built for real-world bidding strategy'],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
            >
              <div className="text-lg font-bold">{title}</div>
              <div className="mt-3 text-sm leading-relaxed text-slate-400">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Core Services
            </div>
            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
              Built for Contractors Who Need Accurate Numbers Fast
            </h3>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[28px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-3 hover:border-blue-500/40 hover:shadow-[0_0_60px_rgba(37,99,235,0.25)]"
              >
                <div className="h-14 w-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-2xl transition-all duration-300 group-hover:rotate-6">
                  ◇
                </div>

                <h4 className="mt-8 text-2xl font-bold">{service.title}</h4>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 bg-gradient-to-b from-slate-900 to-slate-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm uppercase tracking-[0.3em] text-yellow-300">
              CSI Trade Divisions
            </div>
            <h3 className="mt-5 text-4xl md:text-5xl font-black">
              Core CSI Trade Divisions
            </h3>
          </div>

          <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {divisions.map((division) => (
              <div
                key={division}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition-all duration-300 hover:border-yellow-400/40 hover:bg-yellow-500/[0.05]"
              >
                <div className="text-lg font-semibold text-slate-200">
                  {division}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="px-6 py-28">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Estimating Process
            </div>
            <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
              Simple Process. Reliable Estimating.
            </h3>
          </div>

          <div className="mt-20 grid lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div
                key={item.step}
                className="relative rounded-[30px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40"
              >
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5">
                  {item.step}
                </div>

                <div className="relative z-10">
                  <div className="text-blue-400 text-sm tracking-[0.25em] uppercase">
                    Step {item.step}
                  </div>

                  <h4 className="mt-5 text-2xl font-bold">{item.title}</h4>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28 bg-black/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm uppercase tracking-[0.3em] text-yellow-300">
              Client Confidence
            </div>
            <h3 className="mt-5 text-4xl md:text-5xl font-black">
              Built Around Contractor Confidence
            </h3>
          </div>

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.quote}
                className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 transition-all duration-300 hover:border-yellow-400/40"
              >
                <div className="text-5xl text-blue-500">“</div>
                <p className="mt-6 text-lg leading-relaxed text-slate-300">
                  {item.quote}
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <div className="font-semibold">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="max-w-5xl mx-auto rounded-[40px] border border-blue-500/20 bg-gradient-to-br from-blue-950/40 to-slate-900 p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(37,99,235,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative z-10 text-center">
            <div className="text-sm uppercase tracking-[0.3em] text-blue-400">
              Sample Estimate Request
            </div>

            <h3 className="mt-5 text-4xl md:text-5xl font-black leading-tight">
              Request a Sample Estimate Package
            </h3>

            <p className="mt-8 text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto">
              Please call <span className="font-semibold text-white">646-693-4910</span> or email{' '}
              <span className="font-semibold text-white">
                fabricestimating@gmail.com
              </span>{' '}
              to request a sample estimate deliverable package.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <a
                href="tel:6466934910"
                className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500"
              >
                Call Now
              </a>

              <a
                href="mailto:fabricestimating@gmail.com"
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(255,215,0,0.25)]"
              >
                Email Request
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-28">
        <div className="max-w-7xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-r from-slate-950 to-slate-900 p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.5),transparent_40%)]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.3em] text-yellow-300">
                Final CTA
              </div>

              <h3 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
                Build Stronger Bids With Reliable Estimating Support
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Connect with Fabric Estimating LLC for premium construction estimating support engineered for contractors, fabricators, and competitive preconstruction teams.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-auto">
              <a
                href="mailto:fabricestimating@gmail.com"
                className="rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-center transition-all duration-300 hover:scale-105 hover:bg-blue-500"
              >
                Upload Plans
              </a>

              <a
                href="tel:6466934910"
                className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-lg font-semibold text-center transition-all duration-300 hover:border-blue-500/40 hover:bg-white/10"
              >
                Schedule Consultation
              </a>

              <a
                href="mailto:fabricestimating@gmail.com"
                className="rounded-2xl border border-yellow-400/30 bg-yellow-500/10 px-8 py-4 text-lg font-semibold text-center text-yellow-200 transition-all duration-300 hover:bg-yellow-500/20"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/30 px-6 py-14">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-black tracking-[0.2em] uppercase">
              Fabric Estimating LLC
            </div>

            <p className="mt-5 text-slate-400 leading-relaxed max-w-md">
              Professional construction estimating support focused on helping contractors bid accurately, stay competitive, and manage project costs with confidence.
            </p>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-blue-400">
              Contact
            </div>

            <div className="mt-5 space-y-3 text-slate-300">
              <div>Phone: 646-693-4910</div>
              <div>Email: fabricestimating@gmail.com</div>
              <div>Location: Houston, Texas</div>
              <div>Website: fabricestimating.us</div>
            </div>
          </div>

          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-yellow-300">
              Strategic Positioning
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-slate-300 leading-relaxed">
              Accurate Estimates. Stronger Bids. Greater Confidence.
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500 flex flex-col md:flex-row justify-between gap-4">
          <div>© 2026 Fabric Estimating LLC. All rights reserved.</div>
          <div>Construction Estimating & Bid Support Services</div>
        </div>
      </footer>
    </div>
  )
}
