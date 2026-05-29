import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/otai-logo.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Facebook, Users, HeartHandshake, Shield, Award, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OTAI MAIDANI PENANG — Persatuan Veteran & Alumni" },
      { name: "description", content: "Persatuan OTAI Maidani Penang — memupuk semangat kekitaan, perpaduan dan khidmat masyarakat dalam kalangan warga veteran dan alumni di Pulau Pinang." },
      { property: "og:title", content: "OTAI MAIDANI PENANG" },
      { property: "og:description", content: "Persatuan veteran & alumni yang memupuk perpaduan, ketabahan dan khidmat masyarakat di Pulau Pinang." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Nav() {
  const links = [
    { href: "#tentang", label: "Tentang" },
    { href: "#nilai", label: "Nilai" },
    { href: "#program", label: "Program" },
    { href: "#hubungi", label: "Hubungi" },
  ];
  return (
    <header className="fixed top-4 left-4 right-4 z-50 glass rounded-2xl border border-white/40 shadow-lg max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="OTAI Maidani Penang" className="h-10 w-10 object-contain" />
          <div className="leading-tight">
            <div className="font-display font-bold text-sm text-primary">OTAI MAIDANI</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground">PENANG</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
          <a href="#hubungi">Sertai Kami</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-gold)" }} />
      <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] rounded-full blur-3xl opacity-10" style={{ background: "var(--gradient-gold)" }} />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-gold mb-6">
            <Star className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-medium tracking-wider uppercase">Bersatu • Berbakti • Berjasa</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            OTAI Maidani<br />
            <span className="bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent">Penang</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-10">
            Sebuah persatuan warga veteran dan alumni di Pulau Pinang yang memupuk semangat kekitaan,
            perpaduan dan khidmat bakti kepada masyarakat dan negara.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 shadow-[var(--shadow-gold)]">
              <a href="#tentang">Kenali Kami <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass-dark text-white hover:bg-white/10 hover:text-white border-white/20">
              <a href="#hubungi">Hubungi Kami</a>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { v: "500+", l: "Ahli Aktif" },
              { v: "20+", l: "Tahun Khidmat" },
              { v: "50+", l: "Program" },
            ].map((s) => (
              <div key={s.l} className="glass-dark rounded-xl p-4 text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-gold">{s.v}</div>
                <div className="text-[10px] text-white/60 uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full blur-3xl opacity-50" style={{ background: "var(--gradient-gold)" }} />
          <img src={logo} alt="Logo rasmi OTAI Maidani Penang" className="relative w-full max-w-md drop-shadow-2xl" style={{ filter: "drop-shadow(0 0 40px rgba(201,168,76,0.45)) drop-shadow(0 0 80px rgba(201,168,76,0.25))" }} />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      {/* soft orbs behind */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-30" style={{ background: "var(--gradient-gold)" }} />
      <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.3em] text-accent uppercase mb-3">Tentang Persatuan</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Warisan Kekitaan & Khidmat</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-gold)" }} />
        </div>

        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
          OTAI Maidani Penang ditubuhkan untuk menghimpunkan warga veteran dan alumni di Pulau Pinang dalam satu
          ikatan persaudaraan yang utuh — meneruskan semangat kekitaan dan khidmat masyarakat yang dipupuk sejak
          zaman latihan dan perkhidmatan.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "Visi", text: "Menjadi persatuan veteran unggul yang berperanan aktif dalam pembangunan masyarakat dan negara." },
            { icon: Shield, title: "Misi", text: "Memupuk perpaduan, kebajikan dan kesejahteraan ahli serta menyumbang khidmat bakti kepada komuniti." },
            { icon: Users, title: "Objektif", text: "Mengeratkan silaturahim, melestarikan nilai murni dan menggerakkan inisiatif kemasyarakatan." },
          ].map((c) => (
            <Card key={c.title} className="glass p-8 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-hero)" }}>
                <c.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const items = [
    { color: "Biru Tua", meaning: "Keteguhan, kesetiaan dan kewibawaan dalam berkhidmat." },
    { color: "Emas", meaning: "Kemuliaan, kegemilangan dan ketinggian nilai murni." },
    { color: "Merah & Putih", meaning: "Keberanian dan ketulusan dalam menegakkan keadilan." },
    { color: "Bintang & Pokok", meaning: "Identiti Pulau Pinang dan kesetiaan kepada negara." },
  ];
  return (
    <section id="nilai" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-gold)" }} />
      <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] rounded-full blur-3xl opacity-10" style={{ background: "var(--gradient-gold)" }} />
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-gold)" }} />
            <img src={logo} alt="Maksud lambang logo" className="relative w-full max-w-sm" style={{ filter: "drop-shadow(0 0 40px rgba(201,168,76,0.45)) drop-shadow(0 0 80px rgba(201,168,76,0.25))" }} />
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-3">Maksud Lambang</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Setiap Warna<br />Membawa Erti</h2>
          <div className="space-y-4">
            {items.map((i) => (
              <div key={i.color} className="glass-dark rounded-xl p-4 flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg text-gold mb-1">{i.color}</div>
                  <p className="text-white/75 leading-relaxed">{i.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    { icon: HeartHandshake, title: "Khidmat Masyarakat", desc: "Program bantuan kebajikan kepada keluarga memerlukan di sekitar Pulau Pinang." },
    { icon: Users, title: "Silaturahim Veteran", desc: "Perjumpaan tahunan, majlis ramah mesra dan aktiviti pengukuhan ukhuwah ahli." },
    { icon: Shield, title: "Bakti Negara", desc: "Sumbangan kepada warga emas, anak yatim dan mangsa bencana sebagai khidmat negara." },
    { icon: Award, title: "Pembangunan Insan", desc: "Bengkel kepimpinan, motivasi dan latihan kemahiran untuk generasi muda." },
  ];
  return (
    <section id="program" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-20" style={{ background: "var(--gradient-gold)" }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-semibold tracking-[0.3em] text-accent uppercase mb-3">Program & Aktiviti</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Berbakti Tanpa Henti</h2>
          <div className="w-20 h-1 mx-auto rounded-full" style={{ background: "var(--gradient-gold)" }} />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <Card key={p.title} className="glass p-7 hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: "var(--gradient-gold)" }}>
                <p.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: MapPin, label: "Alamat", value: "Pulau Pinang, Malaysia" },
    { icon: Mail, label: "Emel", value: "otaimaidanipenang@gmail.com" },
    { icon: Phone, label: "Telefon", value: "+60 12-345 6789" },
    { icon: Facebook, label: "Facebook", value: "facebook.com/otaimaidanipenang" },
  ];
  return (
    <section id="hubungi" className="py-24 relative overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-25" style={{ background: "var(--gradient-gold)" }} />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-semibold tracking-[0.3em] text-accent uppercase mb-3">Hubungi Kami</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">Mari Bersama Kami</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sertailah kami dalam meneruskan warisan khidmat bakti dan perpaduan untuk masyarakat Pulau Pinang.
          </p>
        </div>

        <Card className="overflow-hidden glass-strong border-white/40 shadow-[var(--shadow-elegant)]">
          <div className="grid md:grid-cols-2">
            <div className="p-10 text-primary-foreground relative">
              <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
              <div className="relative">
                <h3 className="font-display text-2xl font-bold mb-8">Maklumat Perhubungan</h3>
                <div className="space-y-6">
                  {items.map((i) => (
                    <div key={i.label} className="flex gap-4">
                      <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center glass-dark" style={{ background: "var(--gradient-gold)" }}>
                        <i.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gold mb-1">{i.label}</div>
                        <div className="text-white/90">{i.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <h3 className="font-display text-2xl font-bold text-primary mb-3">Sertai Pertubuhan</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Daftar sebagai ahli untuk menyertai aktiviti, program kebajikan dan jaringan veteran kami.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 w-full">
                <a href="#">Daftar Menjadi Ahli <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="mt-3 w-full border-primary/20 text-primary hover:bg-primary/5">
                <a href="mailto:otaimaidanipenang@gmail.com">Hantar Mesej</a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "24px 24px",
      }} />
      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="" className="h-12 w-12 object-contain" />
          <div>
            <div className="font-display font-bold text-primary-foreground">OTAI MAIDANI PENANG</div>
            <div className="text-xs text-white/60 tracking-wider">Bersatu • Berbakti • Berjasa</div>
          </div>
        </div>
        <div className="text-sm text-white/60">© {new Date().getFullYear()} OTAI Maidani Penang. Hak cipta terpelihara.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Values />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
