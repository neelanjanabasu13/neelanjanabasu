import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { LeafTrio } from "@/assets/motifs/Motifs";

const actualNavItems = [
  { id: "ai-products", label: "AI builds" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = actualNavItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(actualNavItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      >
        <div className={`max-w-6xl mx-auto px-6 py-4 transition-all duration-300 ${isScrolled ? "pt-3" : "pt-4"}`}>
          <div className={`flex items-center justify-between rounded-full px-6 py-3 border border-border transition-all duration-300 ${isScrolled ? "bg-background/95 shadow-md backdrop-blur-sm" : "bg-background/80"}`}>
            {/* Logo/Brand */}
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 text-foreground font-medium"
            >
              <LeafTrio size={22} />
              <span className="font-medium">Portfolio</span>
            </button>

            {/* Nav Links */}
            <div className="flex items-center gap-2">
              {actualNavItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        className="fixed top-4 right-4 z-50 md:hidden w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-soft"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-foreground" />
        ) : (
          <Menu className="w-5 h-5 text-foreground" />
        )}
      </motion.button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 z-50 md:hidden bg-background rounded-2xl shadow-medium border border-border overflow-hidden"
          >
            <div className="p-2">
              {actualNavItems.map((item, index) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left transition-colors font-medium ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
