import { useState } from "react";
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

export const GuestbookSection = () => {
  const [message, setMessage] = useState("");

  const handlePinItUp = () => {
    const subject = encodeURIComponent("Hello from your guestbook");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${resumeData.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="guestbook" className="py-12 bg-background relative">
      {/* Corner cluster */}
      <div className="absolute top-8 right-4 sm:right-10 opacity-80">
        <TreeOfLife size={48} />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-medium text-foreground mb-4">
            <span className="italic">Sign the wall</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            No contact form, because everything you need to reach me is at the top of this page. This is for the other thing: tell me what you are building, what you disagreed with, or what this page reminded you of. I read all of it.
          </p>
          <div className="flex justify-center mt-4 opacity-80">
            <VineTendril size={16} />
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
      </div>
    </section>
  );
};
