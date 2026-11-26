import { useState } from "react";
import { z } from "zod";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const types = ["Workflow Audit", "1:1 Advisory", "Custom Build"] as const;
const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(100),
  email: z.string().trim().email("Please add a valid email").max(255),
  engagement: z.enum(types),
  details: z.string().trim().min(1, "Please add a few details").max(2000),
});

export const WorkInquiry = () => {
  const [f, setF] = useState({ name: "", email: "", engagement: types[0] as string, details: "" });
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [err, setErr] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(f);
    if (!r.success) return setErr(r.error.issues[0].message);
    setErr(""); setState("sending");
    const { error } = await supabase.from("work_inquiries").insert(r.data as any);
    if (error) { setState("idle"); return setErr("That did not send, please try again."); }
    setState("done");
  };

  const input = "w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary";

  return (
    <div id="hire" className="folk-card mt-10 p-6 sm:p-8 max-w-3xl mx-auto">
      <h3 className="text-2xl font-medium text-foreground mb-2">Advisory and builds</h3>
      <p className="text-muted-foreground text-sm mb-5 text-justify">
        A £99 Workflow Audit that finds where AI and automation can improve day-to-day work, plus 1:1 advisory sessions and custom builds through Quietcrew to help put those changes into practice.
      </p>
      {state === "done" ? (
        <p className="text-foreground font-medium" role="status">Thank you, your note has reached me and I will reply by email.</p>
      ) : (
        <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
          <input aria-label="Name" placeholder="Name" maxLength={100} className={input} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input aria-label="Email" type="email" placeholder="Email" maxLength={255} className={input} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          <div className="sm:col-span-2 flex flex-wrap gap-2" role="radiogroup" aria-label="Engagement type">
            {types.map((t) => (
              <button type="button" key={t} role="radio" aria-checked={f.engagement === t} onClick={() => setF({ ...f, engagement: t })}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${f.engagement === t ? "border-primary bg-primary text-primary-foreground" : "border-border text-foreground hover:bg-accent"}`}>
                {t}
              </button>
            ))}
          </div>
          <textarea aria-label="Project details" placeholder="What are you hoping to improve or build?" rows={3} maxLength={2000} className={`${input} sm:col-span-2`} value={f.details} onChange={(e) => setF({ ...f, details: e.target.value })} />
          <div className="sm:col-span-2 flex items-center justify-between gap-3">
            <span className="text-sm text-destructive" role="alert">{err}</span>
            <button type="submit" disabled={state === "sending"} aria-label="Send inquiry" title="Send inquiry"
              className="rounded-full bg-primary p-3 text-primary-foreground hover:opacity-90 disabled:opacity-50">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
