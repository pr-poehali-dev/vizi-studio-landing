import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

/* ─── Scroll reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── FAQ Item ─── */
const faqData = [
  {
    q: "Это сложно внедрять?",
    a: "Нет. Мы берём на себя всё — от аудита до запуска. Вам нужно только ответить на несколько вопросов на старте и принять результат.",
  },
  {
    q: "Если нам нужен не AI, а клиенты?",
    a: "Именно за этим мы и работаем. AI — инструмент, а не цель. Цель — больше заявок, выше конверсия, стабильный поток клиентов.",
  },
  {
    q: "Можно начать с малого?",
    a: "Да. Пакет VIZI Start — минимальный вход с максимальным фокусом на результат. Расширяем по мере роста.",
  },
  {
    q: "Вы работаете только разово?",
    a: "Есть как проектный формат, так и ежемесячное сопровождение. VIZI Media — постоянный цифровой поток для вашего бизнеса.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="card-glow rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: "var(--surface-card)" }}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <span className="font-golos font-medium text-[15px]" style={{ color: "var(--text-primary)" }}>
          {q}
        </span>
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{
            background: "var(--vizi-purple-dim)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <Icon name="Plus" size={14} style={{ color: "var(--vizi-purple)" }} />
        </span>
      </div>
      {open && (
        <div className="px-6 pb-5">
          <p className="font-golos text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Main ─── */
export default function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ link: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "var(--bg-dark)", color: "var(--text-primary)", minHeight: "100vh" }}>

      {/* ── HEADER ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? {} : { background: "transparent" }}
      >
        <div className={scrolled ? "header-blur" : ""}>
          <div className="mx-auto px-6 h-16 flex items-center justify-between" style={{ maxWidth: 1180 }}>
            <a href="#" className="font-montserrat text-[18px] tracking-tight" style={{ color: "var(--text-primary)", fontWeight: 800 }}>
              VIZI<span style={{ color: "var(--vizi-purple)" }}>.</span>
            </a>
            <nav className="hidden md:flex items-center gap-7">
              {[["#problems", "Проблемы"], ["#solution", "Решение"], ["#offers", "Пакеты"], ["#cases", "Кейсы"], ["#faq", "FAQ"]].map(([href, label]) => (
                <a key={href} href={href} className="font-golos text-[13px] transition-colors duration-200" style={{ color: "var(--text-muted)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  {label}
                </a>
              ))}
            </nav>
            <a
              href="#cta"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full font-golos font-medium text-[13px] transition-all duration-200"
              style={{ background: "var(--vizi-purple)", color: "#fff" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Получить разбор
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        <div className="halo halo-purple" style={{ width: 600, height: 600, top: -100, left: "50%", transform: "translateX(-60%)" }} />
        <div className="halo halo-accent" style={{ width: 300, height: 300, bottom: 0, right: "10%" }} />

        <div className="relative z-10 mx-auto text-center" style={{ maxWidth: 780 }}>
          <div className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 font-golos text-[12px] font-medium"
            style={{ background: "var(--vizi-purple-dim)", border: "1px solid rgba(139,75,255,0.25)", color: "var(--vizi-purple)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--vizi-purple)" }} />
            AI-упаковка и автоматизация продаж · Дальний Восток
          </div>

          <h1 className="reveal reveal-delay-1 font-montserrat font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 68px)" }}>
            Собираем систему&nbsp;роста<br />
            <span className="shimmer-text">для вашего бизнеса</span>
          </h1>

          <p className="reveal reveal-delay-2 font-golos leading-relaxed mb-10 mx-auto" style={{ fontSize: 18, color: "var(--text-muted)", maxWidth: 560 }}>
            VIZI Studio соединяет стратегию, сайт, контент и автоматизацию в одну понятную систему — чтобы вы получали больше заявок и выглядели сильнее.
          </p>

          <div className="reveal reveal-delay-3 flex flex-wrap items-center justify-center gap-3 mb-14">
            <a href="#cta"
              className="px-7 py-3.5 rounded-full font-golos font-semibold text-[15px] transition-all duration-200 hover-lift"
              style={{ background: "var(--vizi-purple)", color: "#fff" }}>
              Получить бесплатный разбор
            </a>
            <a href="#offers"
              className="px-7 py-3.5 rounded-full font-golos font-medium text-[15px] transition-all duration-200"
              style={{ border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(139,75,255,0.4)"; (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-subtle)"; (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
            >
              Посмотреть пакеты
            </a>
          </div>

          <div className="reveal reveal-delay-4 flex flex-wrap justify-center gap-3">
            {["7–14 дней на запуск", "1 подрядчик вместо нескольких", "24 ч на первичный разбор", "Без перегруза для МСБ"].map((item) => (
              <span key={item} className="flex items-center gap-2 px-4 py-2 rounded-full font-golos text-[13px]"
                style={{ background: "var(--surface-dark)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
                <Icon name="Check" size={12} style={{ color: "var(--vizi-accent)" }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="mx-auto px-6" style={{ maxWidth: 1180 }}>
        <div style={{ height: 1, background: "var(--border-subtle)" }} />
      </div>

      {/* ── PROBLEMS ── */}
      <section id="problems" className="py-24 px-6">
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div className="reveal mb-4">
            <span className="font-golos text-[12px] uppercase tracking-widest font-medium" style={{ color: "var(--vizi-purple)" }}>Проблемы</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-montserrat font-bold mb-14" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
            Почему бизнес<br />теряет деньги
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: "AlertCircle", text: "Заявки теряются между каналами", sub: "Клиенты пишут везде, а ответы — нигде" },
              { icon: "Layout", text: "Сайт не помогает продавать", sub: "Красиво, но не работает на конверсию" },
              { icon: "FileText", text: "Контент нужен постоянно, но делать некому", sub: "Силы уходят на операционку, а не на рост" },
              { icon: "Cpu", text: "AI звучит сложно и не привязан к прибыли", sub: "Инструменты есть, но непонятно как применять" },
            ].map(({ icon, text, sub }, i) => (
              <div key={text} className={`reveal reveal-delay-${i + 1} card-glow hover-lift rounded-2xl p-6 flex gap-5`}
                style={{ background: "var(--surface-card)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "rgba(255,80,80,0.08)", border: "1px solid rgba(255,80,80,0.12)" }}>
                  <Icon name={icon} size={18} style={{ color: "#ff6b6b" }} fallback="AlertCircle" />
                </div>
                <div>
                  <p className="font-golos font-semibold mb-1" style={{ fontSize: 15 }}>{text}</p>
                  <p className="font-golos text-[13px]" style={{ color: "var(--text-muted)" }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section id="solution" className="py-24 px-6 relative overflow-hidden">
        <div className="halo halo-purple" style={{ width: 500, height: 500, top: "50%", left: "-100px", transform: "translateY(-50%)" }} />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 1180 }}>
          <div className="reveal mb-4">
            <span className="font-golos text-[12px] uppercase tracking-widest font-medium" style={{ color: "var(--vizi-purple)" }}>Решение</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-montserrat font-bold mb-5" style={{ fontSize: "clamp(28px, 4vw, 42px)", maxWidth: 560 }}>
            Превращаем инструменты<br />в систему продаж
          </h2>
          <p className="reveal reveal-delay-2 font-golos mb-14" style={{ fontSize: 16, color: "var(--text-muted)", maxWidth: 480 }}>
            Шесть элементов, которые работают вместе — и дают результат, который виден в цифрах.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "Target", label: "Оффер", desc: "Чёткое позиционирование, от которого сложно отказаться" },
              { icon: "Monitor", label: "Landing page", desc: "Конверсионный сайт с понятной структурой" },
              { icon: "Palette", label: "Визуальная упаковка", desc: "Стиль, который транслирует ценность бренда" },
              { icon: "FileText", label: "Контент", desc: "Регулярные материалы для всех каналов" },
              { icon: "MessageSquare", label: "Автоответы", desc: "Скорость реакции = больше закрытых сделок" },
              { icon: "GitBranch", label: "Сценарии заявок", desc: "Логика обработки от первого касания до оплаты" },
            ].map(({ icon, label, desc }, i) => (
              <div key={label} className={`reveal reveal-delay-${(i % 3) + 1} card-glow hover-lift rounded-2xl p-5`}
                style={{ background: "var(--surface-card)" }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "var(--vizi-purple-dim)", border: "1px solid rgba(139,75,255,0.2)" }}>
                  <Icon name={icon} size={16} style={{ color: "var(--vizi-purple)" }} fallback="Star" />
                </div>
                <p className="font-montserrat font-semibold text-[14px] mb-1.5">{label}</p>
                <p className="font-golos text-[13px] leading-snug" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section id="offers" className="py-24 px-6">
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div className="reveal mb-4">
            <span className="font-golos text-[12px] uppercase tracking-widest font-medium" style={{ color: "var(--vizi-purple)" }}>Пакеты</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-montserrat font-bold mb-14" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
            Пакеты результата
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "VIZI Start", result: "Рост конверсии", price: "от 35 000 ₽", icon: "Rocket", items: ["Аудит оффера", "Конверсионный лендинг", "Базовая упаковка"] },
              { name: "VIZI Beauty", result: "Больше записей", price: "от 45 000 ₽", icon: "Star", items: ["Упаковка для beauty-бизнеса", "Онлайн-запись", "Реактивация базы"], highlight: true },
              { name: "VIZI Sales", result: "Тёплые лиды", price: "от 60 000 ₽", icon: "TrendingUp", items: ["Полная воронка продаж", "Автоответы и сценарии", "Аналитика заявок"] },
              { name: "VIZI Media", result: "Живой digital", price: "от 25 000 ₽ / мес", icon: "Radio", items: ["Ежемесячный контент", "Посты + сторис + рилс", "Единый стиль бренда"] },
            ].map(({ name, result, price, icon, items, highlight }, i) => (
              <div key={name}
                className={`reveal reveal-delay-${i + 1} hover-lift rounded-2xl p-6 flex flex-col relative overflow-hidden`}
                style={{
                  background: highlight ? "linear-gradient(135deg, rgba(139,75,255,0.18) 0%, rgba(139,75,255,0.06) 100%)" : "var(--surface-card)",
                  border: highlight ? "1px solid rgba(139,75,255,0.4)" : "1px solid var(--border-card)",
                  boxShadow: highlight ? "0 0 40px rgba(139,75,255,0.1)" : undefined,
                }}>
                {highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="font-golos text-[11px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: "var(--vizi-accent)", color: "#090a0f" }}>
                      Хит
                    </span>
                  </div>
                )}
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: highlight ? "rgba(139,75,255,0.25)" : "var(--vizi-purple-dim)", border: "1px solid rgba(139,75,255,0.25)" }}>
                  <Icon name={icon} size={18} style={{ color: "var(--vizi-purple)" }} fallback="Package" />
                </div>
                <p className="font-montserrat font-bold text-[15px] mb-1">{name}</p>
                <p className="font-golos text-[13px] mb-4" style={{ color: "var(--vizi-accent)" }}>{result}</p>
                <ul className="flex flex-col gap-2 mb-6 flex-1">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2 font-golos text-[13px]" style={{ color: "var(--text-muted)" }}>
                      <Icon name="Check" size={12} style={{ color: "var(--vizi-purple)", marginTop: 3, flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                  <p className="font-montserrat font-bold text-[17px]">{price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-5 text-center mt-10">
            <a href="#cta"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-golos font-semibold text-[15px] transition-all duration-200 hover-lift"
              style={{ background: "var(--vizi-purple)", color: "#fff" }}>
              Подобрать пакет под задачу
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      <section id="cases" className="py-24 px-6">
        <div className="mx-auto" style={{ maxWidth: 1180 }}>
          <div className="reveal mb-4">
            <span className="font-golos text-[12px] uppercase tracking-widest font-medium" style={{ color: "var(--vizi-purple)" }}>Кейсы</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-montserrat font-bold mb-14" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
            Реальные результаты
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { emoji: "✂️", title: "Барбершоп", sub: "Запись и реактивация базы", result: "+38% повторных записей", text: "Настроили автоответы в мессенджерах, запустили цепочку реактивации по базе клиентов. Запись выросла без рекламного бюджета." },
              { emoji: "🏗️", title: "Строительная компания", sub: "Landing и логика заявки", result: "+2.4× конверсия лендинга", text: "Переработали оффер, создали новый лендинг с правильной структурой и настроили сценарий обработки каждой заявки." },
              { emoji: "📍", title: "Локальный сервис", sub: "Упаковка и контент", result: "С 0 до 1200 подписчиков", text: "Разработали визуальный стиль, настроили регулярный контент-план. За 2 месяца сформировали живую аудиторию." },
            ].map(({ emoji, title, sub, result, text }, i) => (
              <div key={title} className={`reveal reveal-delay-${i + 1} card-glow hover-lift rounded-2xl p-6`}
                style={{ background: "var(--surface-card)" }}>
                <div className="text-3xl mb-4">{emoji}</div>
                <p className="font-montserrat font-bold text-[15px] mb-1">{title}</p>
                <p className="font-golos text-[12px] mb-4" style={{ color: "var(--text-muted)" }}>{sub}</p>
                <div className="mb-4 px-3 py-2 rounded-xl inline-block"
                  style={{ background: "var(--vizi-accent-dim)", border: "1px solid rgba(216,255,69,0.2)" }}>
                  <span className="font-montserrat font-bold text-[13px]" style={{ color: "var(--vizi-accent)" }}>{result}</span>
                </div>
                <p className="font-golos text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 px-6 relative overflow-hidden">
        <div className="halo halo-purple" style={{ width: 400, height: 400, bottom: 0, right: 0 }} />
        <div className="relative z-10 mx-auto" style={{ maxWidth: 1180 }}>
          <div className="reveal mb-4">
            <span className="font-golos text-[12px] uppercase tracking-widest font-medium" style={{ color: "var(--vizi-purple)" }}>Процесс</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-montserrat font-bold mb-14" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
            Как запускается работа
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Разбор", desc: "За 24 часа анализируем вашу упаковку, воронку и конкурентов. Даём чёткую картину: что работает, что теряет деньги." },
              { n: "02", title: "Сборка решения", desc: "Выбираем пакет под вашу задачу и собираем систему. Сайт, контент, автоматизация — в одном потоке, за 7–14 дней." },
              { n: "03", title: "Поддержка и рост", desc: "После запуска остаёмся рядом. Анализируем, докручиваем, масштабируем — по мере того, как растёт бизнес." },
            ].map(({ n, title, desc }, i) => (
              <div key={n} className={`reveal reveal-delay-${i + 1} card-glow rounded-2xl p-7 relative`}
                style={{ background: "var(--surface-card)" }}>
                <div className="font-montserrat font-black text-[52px] leading-none mb-4 select-none"
                  style={{ color: "transparent", WebkitTextStroke: "1px rgba(139,75,255,0.25)" }}>
                  {n}
                </div>
                <p className="font-montserrat font-bold text-[17px] mb-3">{title}</p>
                <p className="font-golos text-[14px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 px-6">
        <div className="mx-auto" style={{ maxWidth: 720 }}>
          <div className="reveal mb-4 text-center">
            <span className="font-golos text-[12px] uppercase tracking-widest font-medium" style={{ color: "var(--vizi-purple)" }}>FAQ</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-montserrat font-bold mb-12 text-center" style={{ fontSize: "clamp(28px, 4vw, 42px)" }}>
            Частые вопросы
          </h2>
          <div className="flex flex-col gap-3">
            {faqData.map((item, i) => (
              <div key={item.q} className={`reveal reveal-delay-${i + 1}`}>
                <FaqItem q={item.q} a={item.a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" className="py-24 px-6 relative overflow-hidden">
        <div className="halo halo-purple" style={{ width: 700, height: 700, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
        <div className="relative z-10 mx-auto text-center" style={{ maxWidth: 620 }}>
          <div className="reveal mb-4">
            <span className="font-golos text-[12px] uppercase tracking-widest font-medium" style={{ color: "var(--vizi-purple)" }}>Старт</span>
          </div>
          <h2 className="reveal reveal-delay-1 font-montserrat font-black leading-tight mb-5" style={{ fontSize: "clamp(28px, 4vw, 44px)" }}>
            Получите бесплатный разбор упаковки и воронки за 24 часа
          </h2>
          <p className="reveal reveal-delay-2 font-golos mb-10" style={{ fontSize: 16, color: "var(--text-muted)" }}>
            Покажем, где бизнес теряет заявки прямо сейчас. Без лишних слов и обязательств.
          </p>

          {submitted ? (
            <div className="reveal card-glow rounded-2xl px-8 py-10" style={{ background: "var(--surface-card)" }}>
              <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "var(--vizi-accent-dim)", border: "1px solid rgba(216,255,69,0.3)" }}>
                <Icon name="Check" size={24} style={{ color: "var(--vizi-accent)" }} />
              </div>
              <p className="font-montserrat font-bold text-[18px] mb-2">Заявка получена</p>
              <p className="font-golos text-[14px]" style={{ color: "var(--text-muted)" }}>
                Свяжемся с вами в течение 24 часов с подробным разбором.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal reveal-delay-3 rounded-2xl p-6 md:p-8 text-left"
              style={{ background: "var(--surface-card)", border: "1px solid var(--border-card)" }}>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-golos text-[13px] mb-2 block" style={{ color: "var(--text-muted)" }}>
                    Ссылка на сайт / Telegram / соцсети
                  </label>
                  <input
                    type="text"
                    value={formData.link}
                    onChange={e => setFormData(f => ({ ...f, link: e.target.value }))}
                    placeholder="https://..."
                    className="w-full px-4 py-3 rounded-xl font-golos text-[14px] outline-none transition-all duration-200"
                    style={{
                      background: "var(--bg-dark)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={e => (e.target.style.borderColor = "rgba(139,75,255,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>
                <div>
                  <label className="font-golos text-[13px] mb-2 block" style={{ color: "var(--text-muted)" }}>
                    Кратко: чем занимаетесь и что хотите улучшить
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                    rows={4}
                    placeholder="Например: занимаемся ремонтом квартир, хотим больше заявок с сайта..."
                    className="w-full px-4 py-3 rounded-xl font-golos text-[14px] outline-none resize-none transition-all duration-200"
                    style={{
                      background: "var(--bg-dark)",
                      border: "1px solid var(--border-subtle)",
                      color: "var(--text-primary)",
                    }}
                    onFocus={e => (e.target.style.borderColor = "rgba(139,75,255,0.5)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border-subtle)")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-golos font-semibold text-[15px] transition-all duration-200 hover-lift"
                  style={{ background: "var(--vizi-purple)", color: "#fff" }}>
                  Получить разбор за 24 часа
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6" style={{ borderTop: "1px solid var(--border-subtle)" }}>
        <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4" style={{ maxWidth: 1180 }}>
          <span className="font-montserrat text-[16px]" style={{ fontWeight: 800 }}>
            VIZI<span style={{ color: "var(--vizi-purple)" }}>.</span>
          </span>
          <p className="font-golos text-[13px] text-center" style={{ color: "var(--text-muted)" }}>
            AI-упаковка, сайты, контент и автоматизация продаж
          </p>
          <p className="font-golos text-[12px]" style={{ color: "var(--text-dim)" }}>
            © {new Date().getFullYear()} VIZI Studio
          </p>
        </div>
      </footer>
    </div>
  );
}
