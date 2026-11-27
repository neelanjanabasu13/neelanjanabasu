import { useEffect, useState } from "react";
import { Github } from "lucide-react";

type Day = { date: string; count: number; level: number };
const USER = "neelanjanabasu13";
const LEVELS = ["bg-muted", "bg-primary/25", "bg-primary/50", "bg-primary/75", "bg-primary"];

export const GitHubActivity = () => {
  const [days, setDays] = useState<Day[]>([]);
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { setDays(d.contributions ?? []); setTotal(d.total?.lastYear ?? null); })
      .catch(() => {});
  }, []);

  if (!days.length) return null;
  const pad = new Date(days[0].date).getDay();
  const cells: (Day | null)[] = [...Array(pad).fill(null), ...days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-3 text-sm text-muted-foreground">
        <span>{total} public contributions on GitHub in the last year</span>
        <a href={`https://github.com/${USER}`} target="_blank" rel="noopener noreferrer" aria-label="Open my GitHub profile" className="hover:text-foreground">
          <Github className="w-4 h-4" />
        </a>
      </div>
      <div className="overflow-x-auto">
        <div className="flex gap-[3px] w-max mx-auto" role="img" aria-label={`GitHub contribution graph, ${total} public contributions in the last year`}>
          {weeks.map((w, i) => (
            <div key={i} className="flex flex-col gap-[3px]">
              {w.map((d, j) => (
                <div key={j} title={d ? `${d.count} on ${d.date}` : ""} className={`w-[10px] h-[10px] rounded-[2px] ${d ? LEVELS[d.level] : "bg-transparent"}`} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
