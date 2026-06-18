import { useEffect, useState } from "react";

/* ── Modal ── */
export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="vz-modal-backdrop" onClick={onClose}>
      <div className="vz-modal" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="vz-modal-header">
          <h3 className="vz-modal-title">{title}</h3>
          <button className="vz-modal-close" onClick={onClose} aria-label="Закрыть">✕</button>
        </div>
        <div className="vz-modal-body">{children}</div>
      </div>
    </div>
  );
}

/* ── Theme ── */
export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark");
  return { theme, toggle };
}

/* ── Scroll reveal + parallax ── */
export function useMotion(headerRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll(".reveal").forEach(el => el.classList.add("in-view"));
      return;
    }
    const reveals = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(el => io.observe(el));

    const parallaxNodes = document.querySelectorAll<HTMLElement>(".parallax");
    let ticking = false;
    const updateParallax = () => {
      const vh = window.innerHeight;
      parallaxNodes.forEach(node => {
        const rect = node.getBoundingClientRect();
        const speed = Number(node.dataset.parallax || 12);
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        node.style.setProperty("--parallax", `${progress * -speed}px`);
      });
      if (headerRef.current) headerRef.current.classList.toggle("scrolled", window.scrollY > 16);
    };
    const onScroll = () => { if (!ticking) { window.requestAnimationFrame(() => { updateParallax(); ticking = false; }); ticking = true; } };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateParallax);
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", updateParallax); };
  }, [headerRef]);
}

/* ── FAQ ── */
export const FAQ_ITEMS = [
  { q: "Это сложно внедрять?", a: "Нет. Мы собираем решение так, чтобы бизнесу не приходилось погружаться в технические детали. Важно не то, как устроен стек, а то, чтобы система работала на продажи." },
  { q: "Если нам нужен не AI, а клиенты?", a: "Именно поэтому мы не продаём AI как модную технологию. Мы собираем систему, которая помогает получать заявки, быстрее отвечать и меньше терять лиды." },
  { q: "Можно начать с малого?", a: "Да. Обычно старт — это бесплатный разбор, аудит упаковки или один понятный пакет под конкретную задачу." },
  { q: "Вы работаете только разово?", a: "Нет. После запуска можем вести проект дальше: обновлять, усиливать и поддерживать систему на подписке." },
];

export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="vz-details">
      <button className="vz-summary" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span style={{ fontSize: "1.5rem", lineHeight: 1, color: "var(--color-primary)", transition: "transform .45s var(--ease-premium)", transform: open ? "rotate(45deg)" : "none", display: "inline-block" }}>+</span>
      </button>
      {open && <p className="vz-faq-answer">{a}</p>}
    </div>
  );
}

/* ── Icons ── */
export const SunIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>;
export const MoonIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>;
export const MenuIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>;
export const ViziLogo = () => <svg viewBox="0 0 48 48" fill="none" width="24" height="24"><path d="M9 12L24 36L39 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 12H32" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>;
