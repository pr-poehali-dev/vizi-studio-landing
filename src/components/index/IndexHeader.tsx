import { SunIcon, MoonIcon, MenuIcon, ViziLogo } from "./IndexShared";

interface IndexHeaderProps {
  headerRef: React.RefObject<HTMLElement | null>;
  theme: "dark" | "light";
  toggle: () => void;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function IndexHeader({ headerRef, theme, toggle, menuOpen, setMenuOpen }: IndexHeaderProps) {
  return (
    <header className="vz-header" ref={headerRef}>
      <div className="vz-container vz-nav">
        <a className="vz-brand" href="#hero" aria-label="VIZI Studio">
          <span className="vz-brand-mark"><ViziLogo /></span>
          <span>VIZI Studio</span>
        </a>

        <nav className="vz-nav-links" aria-label="Основная навигация">
          {[["#problems","Проблемы"],["#solution","Решение"],["#offers","Пакеты"],["#cases","Кейсы"],["#about","О студии"],["#faq","FAQ"]].map(([href,label]) =>
            <a key={href} href={href}>{label}</a>
          )}

        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
          <button className="vz-icon-btn" onClick={toggle} aria-label="Сменить тему">
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="vz-btn vz-btn-primary vz-nav-cta" href="#cta" style={{ display: "none" }}>Получить разбор</a>
          <button className="vz-icon-btn vz-menu-toggle" onClick={() => setMenuOpen(o => !o)} aria-label="Меню" aria-expanded={menuOpen}>
            <MenuIcon />
          </button>
        </div>
      </div>
      <div className={`vz-container vz-mobile-panel${menuOpen ? " open" : ""}`}>
        {[["#problems","Проблемы"],["#solution","Решение"],["#offers","Пакеты"],["#cases","Кейсы"],["#about","О студии"],["#faq","FAQ"],["#cta","Получить разбор"]].map(([href,label]) =>
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
        )}
      </div>
    </header>
  );
}
