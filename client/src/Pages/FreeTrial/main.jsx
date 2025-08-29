import React from "react";
import logoWhite from "../../assets/images/Og-Logo.png";
export default function FreeTrialLanding() {
  return (
    <div className="min-h-screen w-full bg-gray-950 text-white selection:bg-white/10">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 w-[150px]">


            <img src={logoWhite} alt="logo" className="w-full" />

          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#digital-reality" onClick={(e) => {
              e.preventDefault();
              document.querySelector("#digital-reality")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
              className="hover:text-white cursor-pointer">Digital Reality</a>
            <a href="#problem" onClick={(e) => {
              e.preventDefault();
              document.querySelector("#problem")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
              className="hover:text-white cursor-pointer">Problem</a>
            <a href="#solution" onClick={(e) => {
              e.preventDefault();
              document.querySelector("#solution")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
              className="hover:text-white cursor-pointer">Our Solution</a>
            <a href="#trial" onClick={(e) => {
              e.preventDefault();
              document.querySelector("#trial")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
              className="hover:text-white cursor-pointer">Free Trial</a>
            <a href="#deliverables" onClick={(e) => {
              e.preventDefault();
              document.querySelector("#deliverables")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
              className="hover:text-white cursor-pointer">30-Day Plan</a>
            <a href="#pricing" onClick={(e) => {
              e.preventDefault();
              document.querySelector("#pricing")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
              className="hover:text-white cursor-pointer">Pricing</a>
            <a href="#industries" onClick={(e) => {
              e.preventDefault();
              document.querySelector("#industries")?.scrollIntoView({
                behavior: "smooth"
              });
            }}
              className="hover:text-white cursor-pointer" >Industries</a>
          </nav>
          <a href="#cta" className="inline-flex items-center rounded-2xl bg-white/10 hover:bg-white/20 transition px-4 py-2 text-sm">Contact</a>
        </div>
      </header>




      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_10%,rgba(255,255,255,0.16),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-white/60">GO VIRAL</p>
              <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Your business growth starts here, <span className="text-white/70">risk‑free</span>.
              </h1>
              <p className="mt-5 text-white/70 max-w-2xl">
                From Zero to Trending — your first 30 days on us, results included.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#trial" className="rounded-2xl bg-white text-gray-900 font-semibold px-5 py-3">Start Free Trial</a>
                <a href="#deliverables" className="rounded-2xl border border-white/20 px-5 py-3 hover:bg-white/10">See What You’ll Get</a>
              </div>
              <div className="mt-6 text-sm text-white/60">Visit us at <span className="font-mono">www.landinglabs.in</span></div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 flex flex-col justify-between">
                <div className="text-right">
                  <span className="inline-block  rounded-full border border-white/20  mr-12 mb-4 sm:mr-0 sm:mb-0 px-3 py-1 text-xs text-white/70">TRY BEFORE YOU INVEST</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { k: "73%", v: "of buying decisions start online" },
                    { k: "100X", v: "Launch smarter, grow faster" },
                    { k: "24/7", v: "Always-on digital presence" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                      <div className="text-3xl font-black">{item.k}</div>
                      <div className="text-xs text-white/70 mt-1">{item.v}</div>
                    </div>
                  ))}
                </div>
                <div className="text-xs text-white/60   ml-10 mt-4 sm:ml-0 sm:mt-0">Your audience is online. Are you?</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL REALITY */}
      <section id="digital-reality" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-white/60">THE DIGITAL REALITY</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Your audience is online. Are you?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "73% of buying decisions start online",
                desc: "Establish trust with consistent content and social proof.",
              },
              {
                title: "Social media drives more trust than traditional ads",
                desc: "Engage natively with reels, stories, and community.",
              },
              {
                title: "Without presence you lose daily to competitors",
                desc: "Join the conversation or miss the market.",
              },
            ].map((c, i) => (
              <div key={i} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-white/60">WHAT’S HOLDING YOUR BRAND BACK?</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">The Problem</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Low engagement on social media",
              "Poor website traffic & SEO ranking",
              "No clear brand identity or voice",
              "Wasted ad spend with no measurable ROI",
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">{p}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section id="solution" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-white/60">LANDING LABS: ROI‑DRIVEN DIGITAL MARKETING</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Our Solution</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              { n: "01", t: "Social Media Studio", d: "Reels, creatives, captions, calendars" },
              { n: "02", t: "End‑to‑end Growth", d: "Social, ads, SEO, email under one roof" },
              { n: "03", t: "Data‑driven", d: "Campaigns measured for impact" },
              { n: "04", t: "For all industries", d: "From startups to enterprises" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-white/50 text-xs">{s.n}</div>
                <div className="font-semibold">{s.t}</div>
                <div className="text-white/70 mt-1">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FREE TRIAL */}
      <section id="trial" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] text-white/60">WHY A FREE TRIAL?</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">We believe results speak louder than promises</h2>
              <ul className="mt-6 space-y-3 text-sm text-white/80 list-disc pl-5">
                <li>No upfront cost for the first 30 days</li>
                <li>We build trust through action, not just words</li>
                <li>You see the real impact before committing</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-white/70">TRY BEFORE YOU INVEST</div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {[
                  "Risk‑free onboarding",
                  "Deliverables included",
                  "Live reporting",
                  "Insights call",
                ].map((x, i) => (
                  <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">{x}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET */}
      <section id="deliverables" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold">What you’ll get in 30 days</h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-full text-sm">
              <thead className="bg-white/5">
                <tr className="text-left text-white/70">
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Platforms</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { s: "Social Media Posts", q: "8–10", p: "Instagram, Facebook, LinkedIn (any 2)" },
                  { s: "Stories", q: "8–10", p: "Same as above" },
                  { s: "Reels/Short Videos", q: "2–3", p: "Same as above" },
                  { s: "Blog/SEO Copy", q: "3–5", p: "Website" },
                  { s: "Paid Ad Campaign Setup", q: "1", p: "Meta/Google" },
                  { s: "Reports", q: "1", p: "Final PDF + insights call" },
                ].map((r, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="px-4 py-3">{r.s}</td>
                    <td className="px-4 py-3">{r.q}</td>
                    <td className="px-4 py-3">{r.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-xs text-white/60">
            Trial limitations: Only 1–2 platforms managed for free. Ad spend not included. Client provides raw assets if needed. Max 15 working days execution within the month.
          </div>
        </div>
      </section>

      {/* PACKAGE STRUCTURE */}
      <section id="plan" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Free 1‑Month Trial — Package Structure</h2>
          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold">Week 1: Kick‑off & Strategy</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc pl-5">
                <li>Onboarding call, goals & audience</li>
                <li>Competitor analysis (3 direct)</li>
                <li>1–2 detailed buyer personas</li>
                <li>Social media audit (FB, IG, LI, YT)</li>
                <li>Brand voice & content direction</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
              <h3 className="font-semibold">Weeks 2–4: Execution</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 p-4">
                  <div className="font-medium">Social Media (any 2)</div>
                  <ul className="mt-2 list-disc pl-5 text-white/80 space-y-1">
                    <li>8–10 feed posts & 8–10 stories</li>
                    <li>2–3 short reels/videos</li>
                    <li>Captions, hashtags, scheduling</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <div className="font-medium">SEO & Website</div>
                  <p className="mt-2 text-white/80">Technical fixes and on‑page improvements.</p>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <div className="font-medium">Paid Ads (optional)</div>
                  <p className="mt-2 text-white/80">1 campaign (Meta/Google). Suggested spend ₹500–₹1000 (paid by client).</p>
                </div>
                <div className="rounded-2xl border border-white/10 p-4">
                  <div className="font-medium">Email (optional)</div>
                  <p className="mt-2 text-white/80">1 email to existing list — creative & copy included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs tracking-[0.3em] text-white/60">INDUSTRIES WE SERVE</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">From startups to enterprises</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              "E‑commerce & D2C", "Real Estate", "Education & EdTech", "Restaurants & Cafes", "Automobiles", "Healthcare & Wellness", "Corporate & IT Services", "Hospitality & Travel", "Influencers & Creators"
            ].map((x, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">{x}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Packages</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Starter", price: "₹8,999", platforms: "2", posts: "12 & 4",
                note: "Social media management: posting & scheduling, graphics, and more",
              },
              {
                name: "Growth", price: "₹14,500", platforms: "3", posts: "16/6",
                note: "SEO blogs, Meta ads, community management, UGC content",
              },
              {
                name: "Pro", price: "₹28,799", platforms: "4+", posts: "20+/8+",
                note: "Basic landing page, analytics & reporting, 1/Y maintenance",
              },
            ].map((p, i) => (
              <div key={i} className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
                {i === 1 && <span className="absolute -top-3 right-6 text-xs bg-white text-gray-900 px-3 py-1 rounded-full">Popular</span>}
                <div className="text-sm text-white/60">Package</div>
                <div className="mt-1 text-2xl font-bold">{p.name}</div>
                <div className="mt-4 text-4xl font-black">{p.price}<span className="text-base font-medium text-white/60">/mo</span></div>
                <ul className="mt-6 text-sm text-white/80 space-y-2">
                  <li><span className="text-white/60">Platforms:</span> {p.platforms}</li>
                  <li><span className="text-white/60">Posts/Reels:</span> {p.posts}</li>
                  <li>{p.note}</li>
                </ul>
                <a href="#cta" className="mt-6 inline-flex rounded-2xl border border-white/20 hover:bg-white/10 px-4 py-2 text-sm">Choose {p.name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section id="why" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold">Why choose Landing Labs</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              "Experienced cross‑industry team",
              "Creative + data‑driven approach",
              "Transparent reporting",
              "Scalable strategies (SMB to Enterprise)",
              "Commitment to client growth",
            ].map((x, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">{x}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">Let’s start your growth story</h2>
                <p className="mt-2 text-white/70">Visit us at www.landinglabs.in • +91 738 739 2708 • info@landinglabs.in</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="rounded-2xl bg-white text-gray-900 font-semibold px-5 py-3">Book a Call</a>
                <a href="#trial" className="rounded-2xl border border-white/20 px-5 py-3 hover:bg-white/10">Start Free Trial</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Landing Labs • @landinglabs_
      </footer>
    </div>
  );
}
