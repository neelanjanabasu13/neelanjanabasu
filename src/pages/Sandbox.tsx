import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import {
  LotusLeaves,
  VineTendril,
  Fish,
  Peacock,
  LeafTrio,
  Sun,
  TreeOfLife,
} from "@/assets/motifs/Motifs";

// Sandbox is fully self-scoped. Nothing here should leak into the live site.
// Ground: #FAF9F6 paper. Type: Fraunces (headings) + Lora (body), loaded below.

const paperStyle: React.CSSProperties = {
  backgroundColor: "#FAF9F6",
  color: "#1A1A18",
  fontFamily: "'Lora', Georgia, serif",
  fontSize: 17,
  lineHeight: 1.72,
};

const headingStyle: React.CSSProperties = {
  fontFamily: "'Fraunces', Georgia, serif",
  fontVariationSettings: "'SOFT' 40, 'WONK' 1",
  color: "#1A1A18",
  fontWeight: 500,
};

const captionStyle: React.CSSProperties = {
  ...headingStyle,
  fontSize: 12,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#1E3A5F",
};

const HEADLINE = "I build AI products end to end.";
const BODY =
  "Ten years in product before that, most of it at Amazon, most recently Senior Product Manager on Add to Cart in Search. I like problems where nobody has agreed on the question yet. Open to AI product roles. Permanently curious, reliably specific.";

const SocialRow = () => (
  <div className="flex justify-center items-center gap-6">
    {[
      { label: "GitHub", href: "https://github.com/neelanjanabasu13", icon: <Github className="w-5 h-5" strokeWidth={1.4} /> },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/neelanjana-basu", icon: <Linkedin className="w-5 h-5" strokeWidth={1.4} /> },
      {
        label: "Substack",
        href: "https://neelanjana.substack.com",
        icon: (
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden>
            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
          </svg>
        ),
      },
      { label: "Email", href: "mailto:neelanjana.basu@gmail.com", icon: <Mail className="w-5 h-5" strokeWidth={1.4} /> },
      { label: "Resume", href: "#", icon: <Download className="w-5 h-5" strokeWidth={1.4} /> },
    ].map((s) => (
      <Tooltip key={s.label}>
        <TooltipTrigger asChild>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{ color: "#1A1A18" }}
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            {s.icon}
          </a>
        </TooltipTrigger>
        <TooltipContent>{s.label}</TooltipContent>
      </Tooltip>
    ))}
  </div>
);

const TreatmentLabel = ({ letter, name }: { letter: string; name: string }) => (
  <div className="flex items-center gap-3 mb-10">
    <span style={{ ...captionStyle, color: "#C1272D" }}>{letter}</span>
    <span style={captionStyle}>{name}</span>
  </div>
);

// Treatment A: margin punctuation
const TreatmentA = () => (
  <section className="py-24">
    <TreatmentLabel letter="A" name="Margin punctuation" />
    <div className="max-w-3xl mx-auto text-center relative">
      <div className="absolute -left-4 -top-2 sm:-left-10">
        <LotusLeaves size={32} />
      </div>
      <h1 style={{ ...headingStyle, fontSize: 44, lineHeight: 1.15 }}>{HEADLINE}</h1>
      <div className="flex justify-center my-6 opacity-90">
        <VineTendril size={18} />
      </div>
      <p className="text-left sm:text-center max-w-2xl mx-auto" style={{ color: "#463726" }}>
        {BODY}
        <span className="inline-block align-middle ml-2">
          <Fish size={20} />
        </span>
      </p>
      <div className="mt-10">
        <SocialRow />
      </div>
    </div>
  </section>
);

// Treatment B: divider as motif
const TreatmentB = () => (
  <section className="py-24">
    <TreatmentLabel letter="B" name="Divider as motif" />
    <div className="max-w-3xl mx-auto text-center">
      <h1 style={{ ...headingStyle, fontSize: 44, lineHeight: 1.15 }}>{HEADLINE}</h1>
      <p className="mt-6 max-w-2xl mx-auto" style={{ color: "#463726" }}>
        {BODY}
      </p>
      <div className="mt-10">
        <SocialRow />
      </div>
    </div>
    <div className="max-w-4xl mx-auto mt-24 flex items-center gap-4 pl-8 sm:pl-24">
      <Peacock size={36} />
      <div className="flex-1 max-w-xs">
        <VineTendril size={20} />
      </div>
      <LeafTrio size={26} />
    </div>
  </section>
);

// Treatment C: corner cluster
const TreatmentC = () => (
  <section className="py-24">
    <TreatmentLabel letter="C" name="Corner cluster" />
    <div className="max-w-3xl mx-auto relative">
      <div className="absolute -top-6 right-0 sm:-right-6">
        <TreeOfLife size={56} />
      </div>
      <div className="text-center">
        <h1 style={{ ...headingStyle, fontSize: 44, lineHeight: 1.15 }}>{HEADLINE}</h1>
        <p className="mt-6 max-w-2xl mx-auto" style={{ color: "#463726" }}>
          {BODY}
          <span className="inline-block align-middle ml-2">
            <Sun size={18} />
          </span>
        </p>
        <div className="mt-10">
          <SocialRow />
        </div>
      </div>
    </div>
  </section>
);

const Sandbox = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Lora:wght@400;500;600&display=swap');
        .sandbox-root { background-color: #FAF9F6; }
      `}</style>
      <main className="sandbox-root min-h-screen" style={paperStyle}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <header className="mb-16">
            <div className="flex items-center gap-3">
              <LeafTrio size={22} />
              <span style={captionStyle}>Sandbox / motif treatments</span>
            </div>
            <p className="mt-4 max-w-2xl" style={{ color: "#463726" }}>
              Three ways to hold the same hero content on a paper ground. Pick one, or a mix,
              and I will plan the real rollout section by section.
            </p>
          </header>
          <TreatmentA />
          <hr style={{ border: 0, borderTop: "1px solid #EBE6DA" }} />
          <TreatmentB />
          <hr style={{ border: 0, borderTop: "1px solid #EBE6DA" }} />
          <TreatmentC />
          <footer className="pt-16 pb-24 text-center">
            <div className="flex justify-center opacity-80">
              <VineTendril size={16} />
            </div>
            <p className="mt-4" style={{ ...captionStyle, color: "#463726" }}>
              Ground #FAF9F6 · Fraunces + Lora · motifs 16–40 px, contour #1A1A18
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Sandbox;
