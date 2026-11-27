import { ArrowDown } from "lucide-react";

export const WorkWithMeCta = () => (
  <div className="flex justify-center py-4">
    <a
      href="#hire"
      className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      Work with me
      <ArrowDown className="h-4 w-4" aria-hidden="true" />
    </a>
  </div>
);
