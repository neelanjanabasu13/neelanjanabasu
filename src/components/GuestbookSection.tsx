import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { resumeData } from "@/data/resumeData";
import { TreeOfLife, VineTendril } from "@/assets/motifs/Motifs";
import { PanelLabel } from "./PanelLabel";
import { MotifBand, type BandVariant } from "./MotifBand";
import { MotifReveal } from "./MotifReveal";

const BAND_ROTATION: BandVariant[] = [
  "lotus",
  "wave",
  "fish",
  "peacock",
  "zigzag",
  "dotline",
];

const STORAGE_KEY = "guestbook.notes.v1";

type Note = { text: string; at: number };

const loadNotes = (): Note[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.slice(0, 60) : [];
  } catch {
    return [];
  }
};

export const GuestbookSection = () => {
  const [message, setMessage] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes(loadNotes());
  }, []);

  const pickBand = (i: number): BandVariant => {
    // deterministic rotation, avoids repeating within any run of three
    return BAND_ROTATION[i % BAND_ROTATION.length];
  };

  const handlePinItUp = () => {
    const text = message.trim();
    if (!text) return;
    const next: Note[] = [{ text, at: Date.now() }, ...notes].slice(0, 60);
    setNotes(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    setMessage("");
    const subject = encodeURIComponent("Hello from your guestbook");
    const body = encodeURIComponent(text);
    window.location.href = `mailto:${resumeData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="guestbook" className="py-12 bg-background relative">
      <div className="absolute top-8 right-4 sm:right-10 opacity-80">
        <MotifReveal><TreeOfLife size={48} /></MotifReveal>
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <PanelLabel panel="Six" name="Guestbook" />
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4">
            <span className="italic">Sign the wall</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No contact form, because everything you need to reach me is at the top of this page. This is for the other thing: tell me what you are building, what you disagreed with, or what this page reminded you of. I read all of it.
          </p>
          <div className="flex justify-center mt-4 opacity-80">
            <MotifReveal><VineTendril size={16} /></MotifReveal>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Drop a line to say hello!"
                  className="min-h-[160px] mb-4 resize-none bg-card border-border focus-visible:ring-foreground"
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Drop a line to say hello!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex justify-end">
            <Button
              onClick={handlePinItUp}
              disabled={!message.trim()}
              className="px-8 rounded-full bg-foreground text-background hover:bg-foreground/90"
            >
              Pin it up
            </Button>
          </div>
        </motion.div>

        {notes.length > 0 && (
          <div className="mt-12 max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((n, i) => (
              <motion.article
                key={`${n.at}-${i}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.03 }}
                className="bg-card border border-border rounded-md overflow-hidden shadow-sm"
              >
                <MotifBand variant={pickBand(i)} height={18} withRails={false} />
                <div className="p-4">
                  <p className="text-sm text-foreground whitespace-pre-wrap">
                    {n.text}
                  </p>
                  <p className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">
                    Pinned {new Date(n.at).toLocaleDateString()}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
