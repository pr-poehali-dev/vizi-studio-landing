import { FAQ_ITEMS, FaqItem } from "./IndexShared";

interface FormData { messenger: string; contact: string; task: string; }

interface IndexSectionsProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  sending: boolean;
  setSending: React.Dispatch<React.SetStateAction<boolean>>;
  sendError: string;
  setSendError: React.Dispatch<React.SetStateAction<string>>;
  agreed: boolean;
  setAgreed: React.Dispatch<React.SetStateAction<boolean>>;
  setModal: React.Dispatch<React.SetStateAction<"consent" | "privacy" | null>>;
}

export default function IndexSections({
  formData, setFormData, submitted, setSubmitted, sending, setSending,
  sendError, setSendError, agreed, setAgreed, setModal,
}: IndexSectionsProps) {
  return (
    <main id="content">

      {/* ── HERO ── */}
      <section className="vz-hero" id="hero">
        <div className="vz-container vz-hero-grid">
          <div className="hero-copy reveal" data-delay="1">
            <span className="vz-eyebrow">AI-упаковка и автоматизация продаж для бизнеса Дальнего Востока</span>
            <h1>
              <span style={{ display: "block" }}>Больше заявок.</span>
              <span style={{ display: "block" }}>Меньше хаоса.</span>
              <span style={{ display: "block", color: "var(--color-primary)" }}>За 14 дней.</span>
            </h1>
            <p className="vz-hero-lead">VIZI Studio — одна команда вместо сайтостроителя, smm-щика и автоматизатора по отдельности. Сайт, контент, Telegram-воронка и автоответы — собираем под ключ за 7–14 дней.</p>
            <div className="vz-hero-actions">
              <a className="vz-btn vz-btn-primary" href="#cta">Получить бесплатный разбор</a>
              <a className="vz-btn vz-btn-secondary" href="#offers">Посмотреть продуктовые пакеты</a>
            </div>
            <p className="vz-microcopy">Разберём упаковку, сайт, контент и воронку. Покажем, где вы теряете заявки и с чего лучше начать.</p>
            <div className="vz-proof-grid">
              <div className="vz-proof reveal" data-delay="1"><strong>7–14 дней</strong><span>на запуск первого решения</span></div>
              <div className="vz-proof reveal" data-delay="2"><strong>1 подрядчик</strong><span>вместо сайта, контента и автоматизации по отдельности</span></div>
              <div className="vz-proof reveal" data-delay="3"><strong>24 часа</strong><span>на первичный разбор упаковки</span></div>
              <div className="vz-proof reveal" data-delay="4"><strong>Без перегруза</strong><span>решения под реальность МСБ</span></div>
            </div>
          </div>

          <div className="vz-hero-card-wrap reveal parallax" data-delay="2" data-parallax="18">
            <div className="vz-hero-card">
              <div className="vz-panel">
                <div className="vz-panel-top">
                  <div>
                    <div className="vz-tag">Система роста VIZI</div>
                    <p className="vz-panel-text">Оффер, посадочная страница, контент и автоответы — собраны в одну рабочую систему.</p>
                  </div>
                  <span className="vz-pill">Telegram + сайт + CRM</span>
                </div>

                <div className="vz-metric-grid">
                  <div className="vz-metric"><span>Ответ клиенту</span><strong>до 1 мин</strong></div>
                  <div className="vz-metric"><span>Потерянные лиды</span><strong>меньше</strong></div>
                </div>

                <div className="vz-panel-line"><span>Посадочная страница под оффер</span><strong>готова за 7 дней</strong></div>
                <div className="vz-panel-line"><span>Контент на месяц</span><strong>20+ единиц</strong></div>
                <div className="vz-panel-line"><span>Заявки и уведомления</span><strong>в одном окне</strong></div>

                <div className="vz-hero-stack">
                  {/* Subpanel: flow */}
                  <div className="vz-subpanel reveal" data-delay="3">
                    <div className="vz-subpanel-head">
                      <span className="vz-subpanel-title">Как работает система</span>
                      <span className="vz-status-dot" aria-hidden="true" />
                    </div>
                    <div className="vz-flow-list">
                      {[
                        { n:"01", h:"Новая заявка", s:"Сайт / Telegram / форма", st:"Получено" },
                        { n:"02", h:"Автоответ клиенту", s:"Мгновенный первый контакт", st:"Отправлен" },
                        { n:"03", h:"Уведомление менеджеру", s:"Заявка не теряется в хаосе", st:"В работе" },
                      ].map(({ n, h, s, st }) => (
                        <div key={n} className="vz-flow-item">
                          <div className="vz-flow-icon">{n}</div>
                          <div className="vz-flow-text"><strong>{h}</strong><span>{s}</span></div>
                          <div className="vz-flow-state">{st}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subpanel: tags */}
                  <div className="vz-subpanel reveal" data-delay="4">
                    <div className="vz-subpanel-head">
                      <span className="vz-subpanel-title">Для кого подходит</span>
                      <span className="vz-pill">Бизнес и услуги</span>
                    </div>
                    <div className="vz-stack-tags">
                      {["Стройка","Beauty","Локальные услуги","Франшизы"].map(t => (
                        <span key={t} className="vz-pill">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Trust grid */}
                  <div className="vz-trust-grid reveal" data-delay="4">
                    <div className="vz-trust-mini"><strong>1 окно</strong><span>для входящих и уведомлений</span></div>
                    <div className="vz-trust-mini"><strong>7–14 дней</strong><span>на первый запуск</span></div>
                    <div className="vz-trust-mini"><strong>AI без шума</strong><span>только под бизнес-задачу</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <div style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", background: "var(--color-surface)", paddingBlock: "1.5rem" }}>
        <div className="vz-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem" }}>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", whiteSpace: "nowrap" }}>Работаем с бизнесом из:</span>
          {["Стройка и ремонт","Beauty и косметология","Стоматологии и клиники","Локальные услуги","Франшизы и сети","Логистика и доставка","Недвижимость","Кафе и бары","Туризм и экскурсии","Гостиницы и отели"].map(tag => (
            <span key={tag} className="vz-pill">{tag}</span>
          ))}
        </div>
      </div>

      {/* ── SEO TEXT ── */}
      <div className="vz-container" style={{ paddingBlock: "2rem" }}>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-faint)", lineHeight: 1.7, maxWidth: "72ch" }}>
          VIZI Studio помогает бизнесу Владивостока и Дальнего Востока получать больше заявок за счёт сильного сайта, понятного оффера, контента и автоматизации коммуникаций. Мы внедряем Telegram-воронки, автоответы, CRM-логику и AI-решения для малого и среднего бизнеса: от стройки и салонов красоты в Приморском крае до гостиниц, кафе, туризма и локальных сервисов Хабаровска и Южно-Сахалинска.
        </p>
      </div>

      {/* ── PROBLEMS ── */}
      <section className="vz-section" id="problems">
        <div className="vz-container">
          <div className="vz-section-head reveal">
            <span className="vz-eyebrow">Почему продажи буксуют</span>
            <h2>Почему бизнес теряет деньги даже с нормальным продуктом</h2>
            <p>Чаще всего проблема не в качестве услуги. Проблема в том, что упаковка не вызывает доверия, заявки приходят вразнобой, а маркетинг и продажи не связаны между собой.</p>
          </div>
          <div className="vz-grid-4">
            {[
              { n:"01", h:"Заявки приходят из разных мест и теряются", p:"Сайт, Telegram, мессенджеры, формы и звонки живут отдельно. Владелец не видит полной картины, а клиент получает ответ слишком поздно." },
              { n:"02", h:"Сайт есть, но он не помогает продавать", p:"Нет понятного оффера, кейсов, доверительных блоков и сильного первого касания. Визуально всё нормально, но заявок это не прибавляет." },
              { n:"03", h:"Контент нужен постоянно, но делать его некому", p:"Нужны сторис, рилсы, баннеры, тексты, акции и промо-страницы. Но держать это внутри бизнеса дорого и нестабильно." },
              { n:"04", h:"AI кажется интересным, но непонятным", p:"Большинству компаний не нужны нейросети ради нейросетей. Им нужен быстрый ответ клиенту, меньше рутины и понятный результат." },
            ].map(({ n, h, p }, i) => (
              <article key={n} className="vz-card reveal" data-delay={String(i + 1)}>
                <span className="vz-label">Проблема {n}</span>
                <h3>{h}</h3><p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="vz-section" id="solution">
        <div className="vz-container vz-grid-2" style={{ alignItems: "start" }}>
          <div className="reveal">
            <div className="vz-section-head" style={{ marginBottom: 0 }}>
              <span className="vz-eyebrow">Что делает VIZI Studio</span>
              <h2>Превращаем разрозненные инструменты в систему продаж</h2>
              <p>Мы собираем для бизнеса рабочую связку: оффер, landing page, визуальную упаковку, контент, автоответы и сценарии обработки заявок. В результате компания не просто выглядит лучше — она становится понятнее, убедительнее и быстрее в продаже.</p>
            </div>
          </div>
          <div className="vz-card reveal parallax" data-parallax="14">
            <span className="vz-label">Что получает бизнес</span>
            <ul className="vz-list">
              <li>Оффер объясняет, почему выбрать именно вас.</li>
              <li>Сайт ведёт к заявке, а не просто представляет компанию.</li>
              <li>Контент поддерживает доверие и прогревает спрос.</li>
              <li>Автоматизация сокращает ручную рутину.</li>
              <li>Владелец понимает, что происходит с входящими и где теряются лиды.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="vz-section" id="about">
        <div className="vz-container">
          <div className="vz-section-head reveal">
            <span className="vz-eyebrow">О студии</span>
            <h2>Команда из Дальнего Востока — для бизнеса Дальнего Востока</h2>
            <p>VIZI Studio собирает системы роста для МСБ: сайт, контент, автоответы и автоматизация заявок — в одних руках, без хаоса между подрядчиками.</p>
          </div>

          <div className="vz-about-grid">
            {/* 3 карточки принципов */}
            {[
              {
                label: "Подход",
                title: "Результат, а не технология",
                items: [
                  "Не продаём AI ради хайпа — только под конкретную задачу",
                  "Важен не стек, а то, что система работает на продажи",
                  "Понятный результат: больше заявок, меньше потерь",
                ],
              },
              {
                label: "Формат работы",
                title: "Один подрядчик вместо четырёх",
                items: [
                  "Стратегия, сайт, контент и автоматизация — в одних руках",
                  "Запускаем первое решение за 7–14 дней",
                  "Ведём проект дальше: обновляем, усиливаем, поддерживаем",
                ],
              },
              {
                label: "Для кого",
                title: "Под реальность МСБ",
                items: [
                  "Стройка, ремонт, салоны, клиники, франшизы, локальные услуги",
                  "Работаем по всему Дальнему Востоку удалённо",
                  "Понимаем специфику местного рынка и аудитории",
                ],
              },
            ].map(({ label, title, items }, i) => (
              <article key={label} className="vz-card reveal" data-delay={String(i + 1)}>
                <span className="vz-label">{label}</span>
                <h3>{title}</h3>
                <ul className="vz-list">
                  {items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>

          {/* Нижняя полоса — регионы + факты */}
          <div className="vz-about-bottom reveal" data-delay="2">
            <div className="vz-about-bottom-left">
              <span className="vz-label">Работаем в регионах</span>
              <div className="vz-stack-tags" style={{ marginTop: ".6rem" }}>
                {["Владивосток","Хабаровск","Южно-Сахалинск","Находка","Уссурийск","Весь ДВ"].map(r => (
                  <span key={r} className="vz-pill">{r}</span>
                ))}
              </div>
            </div>
            <div className="vz-about-bottom-stats">
              {[
                { num: "7–14 дней", label: "на первый запуск" },
                { num: "24 часа", label: "на первичный разбор" },
                { num: "1 окно", label: "для всех входящих" },
              ].map(({ num, label }) => (
                <div key={num} className="vz-about-stat">
                  <strong>{num}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section className="vz-section" id="offers">
        <div className="vz-container">
          <div className="vz-section-head reveal">
            <span className="vz-eyebrow">Пакеты результата</span>
            <h2>Что можно запустить первым</h2>
            <p>Мы не предлагаем всё и сразу. Начинаем с того решения, которое быстрее всего даст понятный бизнес-результат.</p>
          </div>
          <div className="vz-grid-2">
            {[
              { l:"VIZI Start", h:"Сайт, который собирает заявки", p:"Для стройки, ремонта, локальных услуг, мебели, франшиз и сервисного бизнеса. Оффер, структура страницы, landing page, форма захвата, Telegram-уведомления и базовая логика обработки заявок.", pills:["Результат: рост конверсии","Запуск: 7 дней","от 35 000 ₽"] },
              { l:"VIZI Beauty", h:"Запись, напоминания и возврат клиентов", p:"Для барбершопов, салонов, косметологии, стоматологии и частных клиник. Запись, напоминания, реактивация базы, автоответы и мини-страница под запись.", pills:["Результат: больше записей","Запуск: 10 дней","от 20 000 ₽"] },
              { l:"VIZI Sales", h:"Автоответы и квалификация заявок", p:"Для недвижимости, стройки, логистики, сложных услуг и B2B. Автоответы, квалификация входящих, уведомления, сценарии прогрева и контроль потерянных обращений.", pills:["Результат: тёплые лиды","Запуск: 14 дней","от 25 000 ₽"] },
              { l:"VIZI Media", h:"Контент-подписка без штатного маркетолога", p:"Для бизнеса, которому нужен постоянный поток визуалов, текстов, видео и промо. Контент-план, рекламные креативы, тексты, reels/shorts, визуалы под акции.", pills:["Результат: живой digital","Подписка","от 25 000 ₽ / мес"] },
            ].map(({ l, h, p, pills }, i) => (
              <article key={l} className="vz-card vz-offer-card reveal" data-delay={String(i + 1)}>
                <div>
                  <span className="vz-label">{l}</span>
                  <h3>{h}</h3><p>{p}</p>
                </div>
                <div className="vz-offer-meta">{pills.map(pill => <span key={pill} className="vz-pill">{pill}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE BAND ── */}
      <section className="vz-section">
        <div className="vz-container">
          <div className="vz-quote-band reveal parallax" data-parallax="10">
            <span className="vz-eyebrow">Почему это работает</span>
            <h2>Не делим проект на дизайн отдельно и заявки отдельно</h2>
            <p style={{ maxWidth: "52ch", color: "var(--color-text-muted)" }}>VIZI Studio соединяет упаковку, контент и продажу в одну логику. Поэтому клиент получает не просто красивый сайт или разрозненные автоматизации, а систему, которая помогает продавать.</p>
          </div>
        </div>
      </section>

      {/* ── CASES ── */}
      <section className="vz-section" id="cases">
        <div className="vz-container">
          <div className="vz-section-head reveal">
            <span className="vz-eyebrow">Кейсовый блок</span>
            <h2>Результаты, которые можно быстро считать</h2>
            <p>На финальной версии сайта сюда лучше поставить реальные цифры, скриншоты и короткие разборы.</p>
          </div>
          <div className="vz-grid-3">
            {[
              { l:"Барбершоп / система записи", h:"Автозапись и реактивация базы", p:"Собрали сценарий записи, напоминания и возврата старых клиентов.", items:["Больше записей.","Меньше ручной переписки.","Выше повторные визиты."] },
              { l:"Стройка / landing + логика заявки", h:"Пересобрали первое касание с клиентом", p:"Обновили оффер, структуру страницы и логику обработки обращения.", items:["Выше конверсия в заявку.","Быстрее обработка входящих.","Меньше потерь на первом контакте."] },
              { l:"Локальный сервис / упаковка + контент", h:"Сделали бизнес понятнее и сильнее визуально", p:"Усилили подачу, офферы и контент-поток под акции и продажи.", items:["Бизнес выглядит увереннее.","Клиент быстрее понимает ценность.","Контент работает как поддержка продаж."] },
            ].map(({ l, h, p, items }, i) => (
              <article key={l} className="vz-card reveal" data-delay={String(i + 1)}>
                <span className="vz-label">{l}</span>
                <h3>{h}</h3><p>{p}</p>
                <ul className="vz-list">{items.map(item => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="vz-section">
        <div className="vz-container">
          <div className="vz-section-head reveal">
            <span className="vz-eyebrow">Как запускается работа</span>
            <h2>Три шага вместо длинной презентации</h2>
            <p>От первого контакта до работающей системы — без длинных брифов и бесконечных согласований.</p>
          </div>
          <div className="vz-grid-3">
            {[
              { n:"Шаг 01", h:"Разбор", p:"Смотрим сайт, оффер, каналы заявок, контент и точки потерь." },
              { n:"Шаг 02", h:"Сборка решения", p:"Делаем нужную связку: страницу, контент, автоответы и сценарий обработки обращений." },
              { n:"Шаг 03", h:"Поддержка и рост", p:"Дорабатываем, улучшаем конверсию, усиливаем контент и развиваем систему дальше." },
            ].map(({ n, h, p }, i) => (
              <article key={n} className="vz-card reveal" data-delay={String(i + 1)}>
                <span className="vz-label">{n}</span>
                <h3>{h}</h3><p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="vz-section" id="faq">
        <div className="vz-container">
          <div className="vz-section-head reveal">
            <span className="vz-eyebrow">FAQ</span>
            <h2>Что обычно спрашивают перед стартом</h2>
            <p>Хороший FAQ снимает часть тревоги у клиента и помогает дойти до действия без лишнего созвона.</p>
          </div>
          <div className="reveal" data-delay="1">
            {FAQ_ITEMS.map(item => <FaqItem key={item.q} q={item.q} a={item.a} />)}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vz-section" id="cta" style={{ paddingTop: 0 }}>
        <div className="vz-container">
          <div className="vz-cta-card reveal parallax" data-parallax="8">
            <div>
              <span className="vz-eyebrow">Главное действие</span>
              <h2>Получите бесплатный разбор упаковки и воронки за 24 часа</h2>
              <p style={{ marginTop: "1rem", color: "var(--color-text-muted)", maxWidth: "42ch", position: "relative", zIndex: 1 }}>
                Покажем, где вы теряете заявки, что мешает сайту продавать и какую систему стоит собрать под ваш бизнес.
              </p>
              <p className="vz-microcopy">Достаточно сайта, Telegram-ссылки или короткого описания бизнеса.</p>
            </div>

            {submitted ? (
              <div style={{ padding: "2rem", background: "var(--color-surface)", borderRadius: "var(--radius-xl)", border: "1px solid var(--color-border)", textAlign: "center", position: "relative", zIndex: 1 }}>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 700, marginBottom: ".75rem" }}>Заявка получена</p>
                <p style={{ color: "var(--color-text-muted)" }}>Свяжемся с вами в течение 24 часов.</p>
              </div>
            ) : (
              <form className="vz-form-grid" onSubmit={async e => {
                e.preventDefault();
                if (!formData.messenger.trim()) {
                  setSendError("Укажите Telegram или телефон, чтобы мы могли с вами связаться.");
                  return;
                }
                if (!agreed) {
                  setSendError("Поставьте галочку согласия на обработку данных.");
                  return;
                }
                setSending(true);
                setSendError("");
                try {
                  const res = await fetch("https://functions.poehali.dev/a9a50ff3-4026-4b30-825d-c177d3127a66", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formData),
                  });
                  if (!res.ok) throw new Error("server");
                  setSubmitted(true);
                } catch {
                  setSendError("Не удалось отправить заявку. Попробуйте ещё раз или напишите нам напрямую.");
                } finally {
                  setSending(false);
                }
              }}>
                <div>
                  <label htmlFor="messenger">Ваш Telegram или телефон *</label>
                  <input id="messenger" className="vz-input" type="text" required placeholder="@username или +7 xxx xxx xx xx"
                    value={formData.messenger} onChange={e => setFormData(f => ({ ...f, messenger: e.target.value }))} />
                </div>
                <div>
                  <label htmlFor="contact">Ссылка на сайт / соцсети (необязательно)</label>
                  <input id="contact" className="vz-input" type="text" placeholder="Например: vizistudio.ru или t.me/yourbrand"
                    value={formData.contact} onChange={e => setFormData(f => ({ ...f, contact: e.target.value }))} />
                </div>
                <div>
                  <label htmlFor="task">Кратко: чем занимаетесь и что хотите улучшить (необязательно)</label>
                  <textarea id="task" className="vz-textarea" placeholder="Например: Строительная компания. Хотим усилить сайт и перестать терять входящие заявки."
                    value={formData.task} onChange={e => setFormData(f => ({ ...f, task: e.target.value }))} />
                </div>
                <label className="vz-consent-row">
                  <input
                    type="checkbox"
                    className="vz-consent-check"
                    checked={agreed}
                    onChange={e => setAgreed(e.target.checked)}
                  />
                  <span className="vz-consent-text">
                    Я согласен(а) на{" "}
                    <button type="button" className="vz-consent-link" onClick={() => setModal("consent")}>
                      обработку персональных данных
                    </button>{" "}
                    и ознакомлен(а) с{" "}
                    <button type="button" className="vz-consent-link" onClick={() => setModal("privacy")}>
                      политикой конфиденциальности
                    </button>
                  </span>
                </label>
                {sendError && <p style={{ color: "var(--color-danger, #f55)", fontSize: "var(--text-sm)" }}>{sendError}</p>}
                <button className="vz-btn vz-btn-primary" type="submit" disabled={sending}>
                  {sending ? "Отправляем..." : "Получить разбор за 24 часа"}
                </button>
                <p style={{ textAlign: "center", color: "var(--color-text-faint)", fontSize: "var(--text-sm)", margin: "0.25rem 0" }}>или</p>
                <a className="vz-btn vz-btn-secondary" href="https://t.me/Keranos_AI" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.617l-2.95-.924c-.64-.203-.658-.64.136-.954l11.57-4.461c.537-.194 1.006.131.968.943z"/></svg>
                  Написать в Telegram
                </a>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
