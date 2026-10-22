/**
 * Calendario Interactivo Colombia 2026
 * Datos oficiales de días festivos según la legislación colombiana:
 * - Ley 51 de 1983 (Ley Emiliani)
 * - Festivos Fijos Nacionales
 * - Ley 2578 de 2026 (Festivo Virgen de Chiquinquirá)
 */

// Base de datos de festivos de Colombia 2026
const COLOMBIA_HOLIDAYS_2026 = [
  {
    id: "h-01-01",
    date: "2026-01-01",
    name: "Año Nuevo",
    dayOfWeek: "Jueves",
    type: "Fijo",
    category: "Civil",
    law: "Ley 51 de 1983 / Código Sustantivo del Trabajo",
    originalDate: "1 de Enero",
    description: "Celebración del inicio del año nuevo a nivel mundial. Día de descanso obligatorio no sujeto a traslado.",
    bridge: false,
    bridgeTip: "Si tomas libre el viernes 2 de enero, puedes disfrutar de 4 días seguidos de descanso."
  },
  {
    id: "h-01-12",
    date: "2026-01-12",
    name: "Día de los Reyes Magos",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani",
    category: "Religioso",
    law: "Ley 51 de 1983 (Traslado del 6 de enero)",
    originalDate: "6 de Enero",
    description: "Conmemoración de la Epifanía y la adoración de los tres Reyes Magos al Niño Jesús. Se traslada al lunes siguiente.",
    bridge: true,
    bridgeDays: ["2026-01-10", "2026-01-11", "2026-01-12"],
    bridgeTip: "Primer puente del año (3 días). Ideal para el remate de vacaciones y festividades de inicio de año."
  },
  {
    id: "h-03-23",
    date: "2026-03-23",
    name: "Día de San José",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani",
    category: "Religioso",
    law: "Ley 51 de 1983 (Traslado del 19 de marzo)",
    originalDate: "19 de Marzo",
    description: "Homenaje a San José, esposo de la Virgen María y padre adoptivo de Jesús. Tradicionalmente asociado en Colombia al Día del Hombre.",
    bridge: true,
    bridgeDays: ["2026-03-21", "2026-03-22", "2026-03-23"],
    bridgeTip: "Puente festivo de 3 días previo a la llegada de la Semana Santa."
  },
  {
    id: "h-04-02",
    date: "2026-04-02",
    name: "Jueves Santo",
    dayOfWeek: "Jueves",
    type: "Semana Santa",
    category: "Religioso",
    law: "Ley 51 de 1983 (Cálculo pascual eclesiástico)",
    originalDate: "Semana Santa (Pascua: 5 de Abril)",
    description: "Conmemoración cristiana de la Última Cena de Jesús con sus apóstoles y el lavatorio de los pies.",
    bridge: true,
    bridgeDays: ["2026-04-02", "2026-04-03", "2026-04-04", "2026-04-05"],
    bridgeTip: "Forma parte del super puente de Semana Santa de 4 días continuos (Jueves 2 a Domingo 5 de Abril)."
  },
  {
    id: "h-04-03",
    date: "2026-04-03",
    name: "Viernes Santo",
    dayOfWeek: "Viernes",
    type: "Semana Santa",
    category: "Religioso",
    law: "Ley 51 de 1983 (Cálculo pascual eclesiástico)",
    originalDate: "Semana Santa (Pascua: 5 de Abril)",
    description: "Día de penitencia y recogimiento cristiano que conmemora la pasión y crucifixión de Jesucristo.",
    bridge: true,
    bridgeDays: ["2026-04-02", "2026-04-03", "2026-04-04", "2026-04-05"],
    bridgeTip: "Viernes Santo completa el descanso religioso nacional más importante del primer semestre."
  },
  {
    id: "h-05-01",
    date: "2026-05-01",
    name: "Día Internacional del Trabajo",
    dayOfWeek: "Viernes",
    type: "Fijo",
    category: "Civil",
    law: "Ley 51 de 1983 / Día Internacional del Trabajo",
    originalDate: "1 de Mayo",
    description: "Conmemoración de las reivindicaciones laborales y sociales de los trabajadores en todo el mundo. Festivo inamovible.",
    bridge: true,
    bridgeDays: ["2026-05-01", "2026-05-02", "2026-05-03"],
    bridgeTip: "Cae en viernes natural formando un excelente puente de 3 días para iniciar el mes de mayo."
  },
  {
    id: "h-05-18",
    date: "2026-05-18",
    name: "Ascensión del Señor",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani (Móvil)",
    category: "Religioso",
    law: "Ley 51 de 1983 (Traslado del 40° día tras la Pascua)",
    originalDate: "40 días tras Domingo de Resurrección",
    description: "Solemnidad católica que conmemora la elevación al cielo de Jesús en presencia de sus discípulos.",
    bridge: true,
    bridgeDays: ["2026-05-16", "2026-05-17", "2026-05-18"],
    bridgeTip: "Puente festivo de 3 días en la segunda mitad de mayo."
  },
  {
    id: "h-06-08",
    date: "2026-06-08",
    name: "Corpus Christi",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani (Móvil)",
    category: "Religioso",
    law: "Ley 51 de 1983 (Traslado del 60° día tras la Pascua)",
    originalDate: "60 días tras Domingo de Resurrección",
    description: "Fiesta católica destinada a celebrar la Eucaristía y la presencia de Jesucristo en el Santísimo Sacramento.",
    bridge: true,
    bridgeDays: ["2026-06-06", "2026-06-07", "2026-06-08"],
    bridgeTip: "Primer puente del mes de junio, que este año 2026 cuenta con 3 puentes festivos consecutivos."
  },
  {
    id: "h-06-15",
    date: "2026-06-15",
    name: "Sagrado Corazón de Jesús",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani (Móvil)",
    category: "Religioso",
    law: "Ley 51 de 1983 (Traslado del 68° día tras la Pascua)",
    originalDate: "68 días tras Domingo de Resurrección",
    description: "Festividad religiosa dedicada a la veneración del corazón de Jesucristo como símbolo de amor divino y consagración de Colombia.",
    bridge: true,
    bridgeDays: ["2026-06-13", "2026-06-14", "2026-06-15"],
    bridgeTip: "Segundo puente festivo de junio. Solo 7 días después del Corpus Christi."
  },
  {
    id: "h-06-29",
    date: "2026-06-29",
    name: "San Pedro y San Pablo",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani",
    category: "Religioso",
    law: "Ley 51 de 1983 (29 de junio coincide en lunes)",
    originalDate: "29 de Junio",
    description: "Conmemoración solemne del martirio en Roma de los apóstoles Simón Pedro y San Pablo. Celebrado con tradicionales festivales en el Huila y Tolima.",
    bridge: true,
    bridgeDays: ["2026-06-27", "2026-06-28", "2026-06-29"],
    bridgeTip: "Tercer puente festivo de junio. Coincide con las famosas Fiestas de San Pedro y el Festival Folclórico Nacional."
  },
  {
    id: "h-07-13",
    date: "2026-07-13",
    name: "Nuestra Señora del Rosario de Chiquinquirá",
    dayOfWeek: "Lunes",
    type: "Ley 2578 / Emiliani",
    category: "Religioso / Cultural",
    law: "Ley 2578 de 2026 (Día oficial trasladado del 9 de julio)",
    originalDate: "9 de Julio",
    description: "Homenaje oficial a la Virgen de Chiquinquirá, patrona y reina de Colombia, y reconocimiento histórico y cultural al departamento de Boyacá.",
    bridge: true,
    bridgeDays: ["2026-07-11", "2026-07-12", "2026-07-13"],
    bridgeTip: "¡Nuevo festivo nacional! Inicia la racha de dos puentes seguidos en el mes de julio."
  },
  {
    id: "h-07-20",
    date: "2026-07-20",
    name: "Día de la Independencia Nacional",
    dayOfWeek: "Lunes",
    type: "Fijo",
    category: "Patrio",
    law: "Ley 51 de 1983 / Fecha patria inamovible (en 2026 cae en lunes)",
    originalDate: "20 de Julio",
    description: "Conmemoración del Grito de Independencia de 1810 frente al dominio español. Fiesta magna patria celebrada con desfiles militares en todo el país.",
    bridge: true,
    bridgeDays: ["2026-07-18", "2026-07-19", "2026-07-20"],
    bridgeTip: "La fiesta patria cae naturalmente en lunes en 2026, formando un gran puente cívico de 3 días."
  },
  {
    id: "h-08-07",
    date: "2026-08-07",
    name: "Batalla de Boyacá",
    dayOfWeek: "Viernes",
    type: "Fijo",
    category: "Patrio",
    law: "Ley 51 de 1983 / Fiesta patria inamovible",
    originalDate: "7 de Agosto",
    description: "Celebración de la victoria decisiva de 1819 que selló la independencia definitiva de la Nueva Granada. Día del Ejército Nacional.",
    bridge: true,
    bridgeDays: ["2026-08-07", "2026-08-08", "2026-08-09"],
    bridgeTip: "Cae en viernes natural, perfecto para un viaje a Boyacá o un descanso de fin de semana largo."
  },
  {
    id: "h-08-17",
    date: "2026-08-17",
    name: "La Asunción de la Virgen",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani",
    category: "Religioso",
    law: "Ley 51 de 1983 (Traslado del 15 de agosto)",
    originalDate: "15 de Agosto",
    description: "Dogma católico que conmemora la asunción del cuerpo y alma de la Virgen María a los cielos.",
    bridge: true,
    bridgeDays: ["2026-08-15", "2026-08-16", "2026-08-17"],
    bridgeTip: "Segundo puente de agosto. Ideal para el tradicional vuelo de cometas en Villa de Leyva y vientos veraniegos."
  },
  {
    id: "h-10-12",
    date: "2026-10-12",
    name: "Día de la Diversidad Étnica y Cultural",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani",
    category: "Civil",
    law: "Ley 51 de 1983 / Ministerio de Cultura (Día de la Raza)",
    originalDate: "12 de Octubre",
    description: "Homenaje a la pluriculturalidad, las raíces indígenas, afrodescendientes y el encuentro de culturas que conforman la identidad colombiana.",
    bridge: true,
    bridgeDays: ["2026-10-10", "2026-10-11", "2026-10-12"],
    bridgeTip: "Coincide tradicionalmente con la semana de receso escolar de octubre en Colombia."
  },
  {
    id: "h-11-02",
    date: "2026-11-02",
    name: "Día de Todos los Santos",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani",
    category: "Religioso",
    law: "Ley 51 de 1983 (Traslado del 1 de noviembre)",
    originalDate: "1 de Noviembre",
    description: "Celebración cristiana en memoria de todos los difuntos y bienaventurados que han alcanzado la presencia divina.",
    bridge: true,
    bridgeDays: ["2026-10-31", "2026-11-01", "2026-11-02"],
    bridgeTip: "Primer puente de noviembre, empalmando el fin de semana de Halloween con el festivo."
  },
  {
    id: "h-11-16",
    date: "2026-11-16",
    name: "Independencia de Cartagena",
    dayOfWeek: "Lunes",
    type: "Ley Emiliani",
    category: "Patrio",
    law: "Ley 51 de 1983 (Traslado del 11 de noviembre)",
    originalDate: "11 de Noviembre",
    description: "Conmemoración de la rebelión y declaración de independencia absoluta de Cartagena de Indias en 1811. Época de fiestas novembrinas.",
    bridge: true,
    bridgeDays: ["2026-11-14", "2026-11-15", "2026-11-16"],
    bridgeTip: "Famoso puente novembrino, tradicionalmente muy concurrido por turismo hacia la Costa Caribe."
  },
  {
    id: "h-12-08",
    date: "2026-12-08",
    name: "Día de la Inmaculada Concepción",
    dayOfWeek: "Martes",
    type: "Fijo",
    category: "Religioso",
    law: "Ley 51 de 1983 / Festivo inamovible",
    originalDate: "8 de Diciembre",
    description: "Día sagrado católico precedido por la tradicional Noche de las Velitas (7 de diciembre), apertura oficial de la época navideña colombiana.",
    bridge: false,
    bridgeTip: "Cae en martes. Si pides el lunes 7 libre (Noche de Velitas), disfrutas de un super puente decembrino de 4 días."
  },
  {
    id: "h-12-25",
    date: "2026-12-25",
    name: "Navidad",
    dayOfWeek: "Viernes",
    type: "Fijo",
    category: "Religioso",
    law: "Ley 51 de 1983 / Festivo mundial inamovible",
    originalDate: "25 de Diciembre",
    description: "Celebración del nacimiento de Jesucristo en Belén. Día central de reunión familiar, regalos y alegría navideña.",
    bridge: true,
    bridgeDays: ["2026-12-25", "2026-12-26", "2026-12-27"],
    bridgeTip: "¡Navidad en viernes! Un fin de semana festivo ideal para celebrar y viajar en familia."
  }
];

// Nombres de meses y días en español
const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const DAY_NAMES = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
const DAY_NAMES_FULL = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Estado reactivo de la aplicación
const AppState = {
  currentView: "annual", // 'annual' | 'monthly' | 'bridges' | 'list'
  selectedMonth: 0, // 0-11
  selectedCategory: "all", // 'all' | 'bridge' | 'religious' | 'patriot' | 'civil'
  searchQuery: "",
  selectedDate: null,
  theme: localStorage.getItem("colombia_cal_theme") || "system",
  notes: JSON.parse(localStorage.getItem("colombia_cal_notes") || "{}")
};

// Utilidades de Fechas
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function getDaysInMonth(year, month) {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function formatDateString(year, month, day) {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function getHolidayForDate(dateStr) {
  return COLOMBIA_HOLIDAYS_2026.find(h => h.date === dateStr) || null;
}

function isPartOfBridge(dateStr) {
  return COLOMBIA_HOLIDAYS_2026.some(h => h.bridgeDays && h.bridgeDays.includes(dateStr));
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupEventListeners();
  renderCountdown();
  renderStats();
  renderCurrentView();
  setInterval(renderCountdown, 60000);
});

// Manejo del Tema Oscuro / Claro
function initTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = AppState.theme === "dark" || (AppState.theme === "system" && prefersDark);
  document.documentElement.classList.toggle("dark", isDark);
  updateThemeIcon(isDark);
}

function toggleTheme() {
  const isCurrentlyDark = document.documentElement.classList.contains("dark");
  const newTheme = isCurrentlyDark ? "light" : "dark";
  AppState.theme = newTheme;
  localStorage.setItem("colombia_cal_theme", newTheme);
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  updateThemeIcon(newTheme === "dark");
}

function updateThemeIcon(isDark) {
  const iconContainer = document.getElementById("theme-icon-container");
  if (!iconContainer) return;
  iconContainer.innerHTML = isDark
    ? `<svg class="w-5 h-5 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`
    : `<svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
}

// Configuración de Event Listeners
function setupEventListeners() {
  // Cambio de Vista
  document.querySelectorAll("[data-view-btn]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const view = e.currentTarget.getAttribute("data-view-btn");
      switchView(view);
    });
  });

  // Tema
  document.getElementById("btn-theme-toggle")?.addEventListener("click", toggleTheme);

  // Navegación mensual
  document.getElementById("btn-prev-month")?.addEventListener("click", () => {
    AppState.selectedMonth = (AppState.selectedMonth - 1 + 12) % 12;
    renderMonthlyView();
  });
  document.getElementById("btn-next-month")?.addEventListener("click", () => {
    AppState.selectedMonth = (AppState.selectedMonth + 1) % 12;
    renderMonthlyView();
  });
  document.getElementById("month-select")?.addEventListener("change", (e) => {
    AppState.selectedMonth = parseInt(e.target.value, 10);
    renderMonthlyView();
  });

  // Filtros de categoría en vista lista
  document.querySelectorAll("[data-filter-cat]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll("[data-filter-cat]").forEach(b => b.classList.remove("active", "bg-primary-600", "text-white"));
      e.currentTarget.classList.add("active", "bg-primary-600", "text-white");
      AppState.selectedCategory = e.currentTarget.getAttribute("data-filter-cat");
      renderHolidayListView();
    });
  });

  // Buscador
  const searchInput = document.getElementById("search-input");
  searchInput?.addEventListener("input", (e) => {
    AppState.searchQuery = e.target.value.toLowerCase().trim();
    if (AppState.currentView === "list") {
      renderHolidayListView();
    } else {
      highlightSearchResults();
    }
  });

  // Exportar iCal
  document.getElementById("btn-export-ical")?.addEventListener("click", exportCalendarToICS);

  // Imprimir
  document.getElementById("btn-print")?.addEventListener("click", () => window.print());

  // Modal de detalles
  document.getElementById("modal-backdrop")?.addEventListener("click", closeModal);
  document.getElementById("btn-close-modal")?.addEventListener("click", closeModal);

  // Guardar nota
  document.getElementById("btn-save-note")?.addEventListener("click", saveDateNote);
  document.getElementById("btn-delete-note")?.addEventListener("click", deleteDateNote);

  // Cerrar con Escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

// Estadísticas del año 2026
function renderStats() {
  const totalHolidays = COLOMBIA_HOLIDAYS_2026.length;
  const bridgeCount = COLOMBIA_HOLIDAYS_2026.filter(h => h.bridge).length;
  const mondayCount = COLOMBIA_HOLIDAYS_2026.filter(h => h.dayOfWeek === "Lunes").length;
  const fridayCount = COLOMBIA_HOLIDAYS_2026.filter(h => h.dayOfWeek === "Viernes").length;

  const statTotal = document.getElementById("stat-total-holidays");
  if (statTotal) statTotal.textContent = totalHolidays;

  const statBridges = document.getElementById("stat-puentes");
  if (statBridges) statBridges.textContent = bridgeCount;

  const statMondays = document.getElementById("stat-mondays");
  if (statMondays) statMondays.textContent = `${mondayCount} lunes + ${fridayCount} viernes`;
}

// Contador al próximo festivo
function renderCountdown() {
  const banner = document.getElementById("next-holiday-banner");
  if (!banner) return;

  const now = new Date();
  const currentYear = now.getFullYear();

  // Buscar el próximo festivo respecto al momento actual
  let targetHoliday = null;
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  for (const h of COLOMBIA_HOLIDAYS_2026) {
    if (h.date >= todayStr) {
      targetHoliday = h;
      break;
    }
  }

  // Si estamos fuera del rango o ya pasaron todos los de 2026, mostrar el primero
  if (!targetHoliday) {
    targetHoliday = COLOMBIA_HOLIDAYS_2026[0];
  }

  const [tYear, tMonth, tDay] = targetHoliday.date.split("-").map(Number);
  const targetDate = new Date(tYear, tMonth - 1, tDay);
  const diffTime = targetDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  let timeMsg = "";
  if (diffDays <= 0) {
    timeMsg = "¡Hoy es festivo! 🎉";
  } else if (diffDays === 1) {
    timeMsg = "¡Mañana es festivo! 🎈";
  } else {
    timeMsg = `Faltan <strong>${diffDays} días</strong>`;
  }

  banner.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3 text-sm">
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-800 dark:text-emerald-300">
          🇨🇴 Próximo Festivo
        </span>
        <span class="font-bold text-slate-800 dark:text-white">${targetHoliday.name}</span>
        <span class="text-slate-500 dark:text-slate-400">(${targetHoliday.dayOfWeek}, ${tDay} de ${MONTH_NAMES[tMonth - 1]})</span>
      </div>
      <div class="flex items-center gap-3">
        <span class="text-slate-700 dark:text-slate-300">${timeMsg}</span>
        <button onclick="openDayModal('${targetHoliday.date}')" class="px-3 py-1 text-xs font-medium bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-lg shadow-sm transition">
          Ver detalles
        </button>
      </div>
    </div>
  `;
}

// Conmutar Vistas
function switchView(viewName) {
  AppState.currentView = viewName;
  document.querySelectorAll("[data-view-btn]").forEach(btn => {
    const isCurrent = btn.getAttribute("data-view-btn") === viewName;
    btn.classList.toggle("bg-white", isCurrent);
    btn.classList.toggle("dark:bg-slate-700", isCurrent);
    btn.classList.toggle("shadow-sm", isCurrent);
    btn.classList.toggle("text-primary-700", isCurrent);
    btn.classList.toggle("dark:text-white", isCurrent);
    btn.classList.toggle("text-slate-600", !isCurrent);
    btn.classList.toggle("dark:text-slate-400", !isCurrent);
  });

  renderCurrentView();
}

function renderCurrentView() {
  const containerAnnual = document.getElementById("view-annual");
  const containerMonthly = document.getElementById("view-monthly");
  const containerBridges = document.getElementById("view-bridges");
  const containerList = document.getElementById("view-list");

  if (containerAnnual) containerAnnual.style.display = AppState.currentView === "annual" ? "block" : "none";
  if (containerMonthly) containerMonthly.style.display = AppState.currentView === "monthly" ? "block" : "none";
  if (containerBridges) containerBridges.style.display = AppState.currentView === "bridges" ? "block" : "none";
  if (containerList) containerList.style.display = AppState.currentView === "list" ? "block" : "none";

  if (AppState.currentView === "annual") renderAnnualView();
  if (AppState.currentView === "monthly") renderMonthlyView();
  if (AppState.currentView === "bridges") renderBridgesView();
  if (AppState.currentView === "list") renderHolidayListView();
}

// -----------------------------------------
// 1. VISTA ANUAL (12 Meses en Cuadrícula)
// -----------------------------------------
function renderAnnualView() {
  const grid = document.getElementById("annual-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const year = 2026;

  for (let month = 0; month < 12; month++) {
    const monthCard = document.createElement("div");
    monthCard.className = "bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-md transition flex flex-col";

    // Header del mes
    const monthHolidays = COLOMBIA_HOLIDAYS_2026.filter(h => {
      const m = parseInt(h.date.split("-")[1], 10) - 1;
      return m === month;
    });

    const holidayBadge = monthHolidays.length > 0 
      ? `<span class="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 cursor-pointer" title="${monthHolidays.map(h => h.name).join(', ')}">${monthHolidays.length} ${monthHolidays.length === 1 ? 'festivo' : 'festivos'}</span>`
      : `<span class="text-[11px] text-slate-400">Sin festivos</span>`;

    monthCard.innerHTML = `
      <div class="flex items-center justify-between mb-3 border-b border-slate-100 dark:border-slate-700/50 pb-2">
        <h3 class="font-bold text-slate-800 dark:text-white text-base hover:text-primary-600 cursor-pointer" onclick="goToMonth(${month})">
          ${MONTH_NAMES[month]}
        </h3>
        ${holidayBadge}
      </div>
      <div class="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-slate-400 dark:text-slate-500 mb-1">
        <span>D</span><span>L</span><span>M</span><span>M</span><span>J</span><span>V</span><span>S</span>
      </div>
      <div class="grid grid-cols-7 gap-1 text-center text-xs flex-1" id="annual-month-days-${month}"></div>
    `;

    grid.appendChild(monthCard);

    // Días del mes
    const daysContainer = monthCard.querySelector(`#annual-month-days-${month}`);
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Domingo
    const totalDays = getDaysInMonth(year, month);

    // Espacios vacíos antes del primer día
    for (let i = 0; i < firstDayIndex; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "h-8";
      daysContainer.appendChild(emptyCell);
    }

    // Días del mes
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = formatDateString(year, month, day);
      const holiday = getHolidayForDate(dateStr);
      const inBridge = isPartOfBridge(dateStr);
      const hasNote = Boolean(AppState.notes[dateStr]);
      const dayOfWeek = new Date(year, month, day).getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

      const dayCell = document.createElement("button");
      dayCell.type = "button";
      dayCell.setAttribute("data-date", dateStr);
      dayCell.onclick = () => openDayModal(dateStr);

      let classes = "h-8 rounded-lg flex flex-col items-center justify-center relative font-medium transition text-xs ";

      if (holiday) {
        classes += "bg-gradient-to-br from-red-500 to-rose-600 text-white font-bold shadow-sm shadow-red-500/30 hover:scale-105 z-10 ";
      } else if (inBridge && !isWeekend) {
        classes += "bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-300 font-semibold hover:bg-amber-200 ";
      } else if (isWeekend) {
        classes += "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 ";
      } else {
        classes += "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/50 ";
      }

      dayCell.className = classes;
      dayCell.title = holiday ? `${holiday.name} (${holiday.type})` : `${day} de ${MONTH_NAMES[month]}`;

      // Indicador de notas
      const noteDot = hasNote ? `<span class="absolute bottom-0.5 w-1.5 h-1.5 rounded-full ${holiday ? 'bg-yellow-300' : 'bg-primary-500'}"></span>` : "";

      dayCell.innerHTML = `<span>${day}</span>${noteDot}`;
      daysContainer.appendChild(dayCell);
    }
  }
}

function goToMonth(monthIndex) {
  AppState.selectedMonth = monthIndex;
  switchView("monthly");
}

// -----------------------------------------
// 2. VISTA MENSUAL DETALLADA
// -----------------------------------------
function renderMonthlyView() {
  const month = AppState.selectedMonth;
  const year = 2026;

  // Actualizar selector y título
  const monthTitle = document.getElementById("monthly-view-title");
  if (monthTitle) {
    monthTitle.textContent = `${MONTH_NAMES[month]} ${year}`;
  }

  const monthSelect = document.getElementById("month-select");
  if (monthSelect) {
    monthSelect.value = String(month);
  }

  // Resumen del mes en panel lateral
  renderMonthSidebar(month);

  // Cuadrícula del mes
  const grid = document.getElementById("monthly-calendar-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const firstDayIndex = new Date(year, month, 1).getDay(); // 0 = Dom
  const totalDays = getDaysInMonth(year, month);
  const prevMonthTotalDays = getDaysInMonth(year, (month - 1 + 12) % 12);

  // Días previos de relleno
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const prevDayNum = prevMonthTotalDays - i;
    const prevCell = document.createElement("div");
    prevCell.className = "min-h-[90px] p-2 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/60 rounded-xl text-slate-300 dark:text-slate-600 text-xs select-none";
    prevCell.innerHTML = `<span class="font-medium">${prevDayNum}</span>`;
    grid.appendChild(prevCell);
  }

  // Días del mes
  for (let day = 1; day <= totalDays; day++) {
    const dateStr = formatDateString(year, month, day);
    const holiday = getHolidayForDate(dateStr);
    const inBridge = isPartOfBridge(dateStr);
    const note = AppState.notes[dateStr];
    const dayOfWeek = new Date(year, month, day).getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    const cell = document.createElement("div");
    cell.setAttribute("data-date", dateStr);
    cell.onclick = () => openDayModal(dateStr);

    let cellClasses = "min-h-[90px] p-2 rounded-xl border transition cursor-pointer flex flex-col justify-between relative group ";

    if (holiday) {
      cellClasses += "bg-gradient-to-br from-red-50 to-rose-100/70 dark:from-red-950/40 dark:to-rose-900/30 border-red-300 dark:border-red-700/60 shadow-sm ";
    } else if (inBridge && !isWeekend) {
      cellClasses += "bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/40 hover:bg-amber-100/60 ";
    } else if (isWeekend) {
      cellClasses += "bg-slate-50/70 dark:bg-slate-800/30 border-slate-200/70 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 ";
    } else {
      cellClasses += "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/60 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-sm ";
    }

    cell.className = cellClasses;

    // Header del día (número y tags)
    let headerHTML = `
      <div class="flex items-center justify-between">
        <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg text-sm font-bold ${
          holiday 
            ? 'bg-red-600 text-white shadow-sm' 
            : isWeekend 
              ? 'text-slate-600 dark:text-slate-400' 
              : 'text-slate-800 dark:text-white group-hover:bg-primary-50 dark:group-hover:bg-primary-950/40 group-hover:text-primary-600'
        }">${day}</span>
        ${holiday ? `<span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-200/80 dark:bg-red-900/70 text-red-800 dark:text-red-200">Festivo</span>` : ''}
      </div>
    `;

    // Contenido del día (Nombre del festivo o notas)
    let contentHTML = `<div class="mt-1 space-y-1">`;

    if (holiday) {
      contentHTML += `
        <div class="text-xs font-bold text-red-900 dark:text-red-200 leading-snug line-clamp-2">
          ${holiday.name}
        </div>
        <div class="text-[10px] text-red-700 dark:text-red-300 font-medium truncate">
          ${holiday.category} • ${holiday.type}
        </div>
      `;
    }

    if (note) {
      contentHTML += `
        <div class="text-[11px] bg-primary-100 dark:bg-primary-950/60 text-primary-900 dark:text-primary-200 px-1.5 py-0.5 rounded font-medium flex items-center gap-1 truncate mt-1">
          <svg class="w-2.5 h-2.5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/></svg>
          <span class="truncate">${note.title || note.text}</span>
        </div>
      `;
    }

    contentHTML += `</div>`;

    cell.innerHTML = headerHTML + contentHTML;
    grid.appendChild(cell);
  }

  // Días siguientes de relleno para completar cuadrícula (máx 42 celdas)
  const cellsRendered = firstDayIndex + totalDays;
  const remainingCells = (7 - (cellsRendered % 7)) % 7;
  for (let i = 1; i <= remainingCells; i++) {
    const nextCell = document.createElement("div");
    nextCell.className = "min-h-[90px] p-2 bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/60 rounded-xl text-slate-300 dark:text-slate-600 text-xs select-none";
    nextCell.innerHTML = `<span class="font-medium">${i}</span>`;
    grid.appendChild(nextCell);
  }
}

function renderMonthSidebar(month) {
  const container = document.getElementById("monthly-sidebar-holidays");
  if (!container) return;

  const holidays = COLOMBIA_HOLIDAYS_2026.filter(h => {
    return parseInt(h.date.split("-")[1], 10) - 1 === month;
  });

  if (holidays.length === 0) {
    container.innerHTML = `
      <div class="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl text-center text-slate-500 text-sm">
        <p>No hay días festivos en ${MONTH_NAMES[month]} de 2026.</p>
        <p class="text-xs text-slate-400 mt-1">Mes regular de 100% actividad laboral.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = holidays.map(h => {
    const day = parseInt(h.date.split("-")[2], 10);
    return `
      <div onclick="openDayModal('${h.date}')" class="p-3 bg-white dark:bg-slate-800 border border-red-200/80 dark:border-red-900/40 rounded-xl hover:shadow-sm cursor-pointer transition">
        <div class="flex items-start justify-between gap-2">
          <span class="text-xs font-bold px-2 py-0.5 rounded-md bg-red-600 text-white shrink-0">
            ${day} ${MONTH_NAMES[month].slice(0, 3)}
          </span>
          <span class="text-xs font-medium text-slate-500 dark:text-slate-400">${h.dayOfWeek}</span>
        </div>
        <h4 class="font-bold text-slate-800 dark:text-white text-sm mt-2">${h.name}</h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">${h.description}</p>
        <div class="mt-2 flex items-center justify-between text-[11px] text-red-600 dark:text-red-400 font-medium">
          <span>${h.category}</span>
          ${h.bridge ? `<span class="text-amber-600 dark:text-amber-400 font-semibold">★ Puente de descanso</span>` : ''}
        </div>
      </div>
    `;
  }).join("");
}

// -----------------------------------------
// 3. VISTA DE PUENTES Y PLANIFICADOR DE VACACIONES
// -----------------------------------------
function renderBridgesView() {
  const container = document.getElementById("bridges-list-container");
  if (!container) return;

  const bridges = COLOMBIA_HOLIDAYS_2026.filter(h => h.bridge);

  container.innerHTML = `
    <div class="mb-6 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-primary-500/10 to-rose-500/10 border border-amber-200 dark:border-amber-800/40">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Planificador Oficial de Puentes Festivos 2026</h3>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">
            Colombia tendrá <strong>16 fines de semana largos (puentes)</strong> en 2026 gracias a la Ley Emiliani y las fechas festivas que coinciden con lunes o viernes. Aprovecha estos puentes para planear escapadas o vacaciones optimizando tus días libres.
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      ${bridges.map((b, idx) => {
        const [y, m, d] = b.date.split("-").map(Number);
        const monthName = MONTH_NAMES[m - 1];
        const isSemanaSanta = b.name.includes("Santo");
        const daysCount = isSemanaSanta ? 4 : 3;

        return `
          <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-5 hover:shadow-lg transition flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-3">
                <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                  Puente #${idx + 1} • ${daysCount} Días
                </span>
                <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  ${monthName} 2026
                </span>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white text-base group-hover:text-primary-600 transition">
                ${b.name}
              </h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                Fecha festiva: ${b.dayOfWeek} ${d} de ${monthName}
              </p>
              <div class="mt-3 p-3 bg-slate-50 dark:bg-slate-700/30 rounded-xl text-xs text-slate-600 dark:text-slate-300">
                <p class="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                  💡 Tip de viaje / descanso:
                </p>
                <p>${b.bridgeTip || 'Fin de semana extendido de descanso remunerado.'}</p>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/40 flex items-center justify-between">
              <span class="text-[11px] font-medium text-primary-600 dark:text-primary-400">${b.category}</span>
              <button onclick="openDayModal('${b.date}')" class="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">
                Ver calendario →
              </button>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// -----------------------------------------
// 4. VISTA LISTA CRONOLÓGICA DE FESTIVOS
// -----------------------------------------
function renderHolidayListView() {
  const container = document.getElementById("holiday-list-container");
  if (!container) return;

  let holidays = [...COLOMBIA_HOLIDAYS_2026];

  // Filtro de categoría
  if (AppState.selectedCategory === "bridge") {
    holidays = holidays.filter(h => h.bridge);
  } else if (AppState.selectedCategory === "religious") {
    holidays = holidays.filter(h => h.category.toLowerCase().includes("religioso"));
  } else if (AppState.selectedCategory === "patriot") {
    holidays = holidays.filter(h => h.category.toLowerCase().includes("patrio"));
  } else if (AppState.selectedCategory === "civil") {
    holidays = holidays.filter(h => h.category.toLowerCase().includes("civil"));
  } else if (AppState.selectedCategory === "emiliani") {
    holidays = holidays.filter(h => h.type.toLowerCase().includes("emiliani"));
  }

  // Filtro de búsqueda
  if (AppState.searchQuery) {
    const q = AppState.searchQuery;
    holidays = holidays.filter(h => 
      h.name.toLowerCase().includes(q) ||
      h.description.toLowerCase().includes(q) ||
      h.category.toLowerCase().includes(q) ||
      h.dayOfWeek.toLowerCase().includes(q) ||
      h.law.toLowerCase().includes(q)
    );
  }

  if (holidays.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
        <svg class="w-12 h-12 text-slate-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <h4 class="text-slate-800 dark:text-white font-semibold">No se encontraron festivos</h4>
        <p class="text-xs text-slate-500 mt-1">Intenta con otro término o limpia los filtros.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = holidays.map((h, i) => {
    const [y, m, d] = h.date.split("-").map(Number);
    const monthName = MONTH_NAMES[m - 1];
    const isNew = h.id === "h-07-13";

    return `
      <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-2xl p-4 md:p-5 hover:shadow-md transition flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-600 text-white flex flex-col items-center justify-center font-bold shrink-0 shadow-md shadow-red-500/20">
            <span class="text-lg leading-none">${d}</span>
            <span class="text-[10px] uppercase font-semibold tracking-wider mt-0.5">${monthName.slice(0, 3)}</span>
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <h4 class="font-bold text-slate-900 dark:text-white text-base md:text-lg">
                ${h.name}
              </h4>
              ${isNew ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500 text-slate-900 animate-pulse">¡Nuevo Festivo Ley 2578!</span>` : ''}
              ${h.bridge ? `<span class="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">Puente</span>` : ''}
            </div>
            <p class="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-2xl leading-relaxed">
              ${h.description}
            </p>
            <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
              <span><strong>Día:</strong> ${h.dayOfWeek}</span>
              <span>•</span>
              <span><strong>Tipo:</strong> ${h.type}</span>
              <span>•</span>
              <span><strong>Norma:</strong> ${h.law}</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2 self-end md:self-center shrink-0">
          <button onclick="addToGoogleCalendar('${h.id}')" class="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition" title="Agregar a Google Calendar">
            Google Cal
          </button>
          <button onclick="openDayModal('${h.date}')" class="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition shadow-sm">
            Detalles
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Búsqueda interactiva con resaltado
function highlightSearchResults() {
  const q = AppState.searchQuery;
  document.querySelectorAll("[data-date]").forEach(el => {
    const dateStr = el.getAttribute("data-date");
    const holiday = getHolidayForDate(dateStr);
    if (!holiday) return;

    if (q && holiday.name.toLowerCase().includes(q)) {
      el.classList.add("ring-4", "ring-yellow-400", "scale-110", "z-20");
    } else {
      el.classList.remove("ring-4", "ring-yellow-400", "scale-110", "z-20");
    }
  });
}

// -----------------------------------------
// 5. MODAL DE DÍA, NOTAS Y EXPORTACIÓN
// -----------------------------------------
function openDayModal(dateStr) {
  AppState.selectedDate = dateStr;
  const holiday = getHolidayForDate(dateStr);
  const note = AppState.notes[dateStr] || { text: "", tag: "personal" };

  const [y, m, d] = dateStr.split("-").map(Number);
  const dateObj = new Date(y, m - 1, d);
  const dayOfWeek = DAY_NAMES_FULL[dateObj.getDay()];

  // Título de la fecha
  document.getElementById("modal-date-title").textContent = `${dayOfWeek}, ${d} de ${MONTH_NAMES[m - 1]} de ${y}`;

  // Información del festivo
  const holidayInfoContainer = document.getElementById("modal-holiday-info");
  if (holiday) {
    holidayInfoContainer.style.display = "block";
    holidayInfoContainer.innerHTML = `
      <div class="p-4 rounded-2xl bg-gradient-to-br from-red-500/10 via-rose-500/10 to-amber-500/10 border border-red-200 dark:border-red-900/60">
        <div class="flex items-center justify-between mb-2">
          <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-600 text-white shadow-sm">
            ${holiday.category}
          </span>
          <span class="text-xs font-semibold text-slate-500 dark:text-slate-400">
            ${holiday.type}
          </span>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">
          ${holiday.name}
        </h3>
        <p class="text-xs text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
          ${holiday.description}
        </p>
        <div class="mt-3 pt-3 border-t border-red-200/60 dark:border-red-900/40 text-xs space-y-1">
          <p class="text-slate-600 dark:text-slate-400"><strong>Fundamento Jurídico:</strong> ${holiday.law}</p>
          <p class="text-slate-600 dark:text-slate-400"><strong>Fecha original / motivo:</strong> ${holiday.originalDate}</p>
          ${holiday.bridgeTip ? `<p class="text-amber-800 dark:text-amber-300 font-medium">💡 ${holiday.bridgeTip}</p>` : ''}
        </div>
      </div>
    `;
  } else {
    holidayInfoContainer.style.display = "block";
    holidayInfoContainer.innerHTML = `
      <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-500">
        <p class="font-medium text-slate-700 dark:text-slate-300">Día regular de calendario</p>
        <p class="mt-0.5">No es festivo oficial en Colombia. Puedes agregar tus actividades o compromisos personales abajo.</p>
      </div>
    `;
  }

  // Rellenar nota existente
  const noteInput = document.getElementById("modal-note-text");
  if (noteInput) {
    noteInput.value = note.text || "";
  }

  const deleteBtn = document.getElementById("btn-delete-note");
  if (deleteBtn) {
    deleteBtn.style.display = note.text ? "inline-flex" : "none";
  }

  // Mostrar modal
  const modal = document.getElementById("day-modal");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeModal() {
  const modal = document.getElementById("day-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function saveDateNote() {
  const dateStr = AppState.selectedDate;
  if (!dateStr) return;

  const noteInput = document.getElementById("modal-note-text");
  const text = noteInput ? noteInput.value.trim() : "";

  if (text) {
    AppState.notes[dateStr] = {
      text: text,
      updatedAt: new Date().toISOString()
    };
  } else {
    delete AppState.notes[dateStr];
  }

  localStorage.setItem("colombia_cal_notes", JSON.stringify(AppState.notes));
  closeModal();
  renderCurrentView();
}

function deleteDateNote() {
  const dateStr = AppState.selectedDate;
  if (!dateStr) return;

  delete AppState.notes[dateStr];
  localStorage.setItem("colombia_cal_notes", JSON.stringify(AppState.notes));
  closeModal();
  renderCurrentView();
}

// -----------------------------------------
// 6. GENERADOR DE ICALENDAR (.ICS)
// -----------------------------------------
function exportCalendarToICS() {
  let icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Calendario Interactivo Colombia 2026//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Festivos Colombia 2026",
    "X-WR-TIMEZONE:America/Bogota"
  ];

  COLOMBIA_HOLIDAYS_2026.forEach(h => {
    const cleanDate = h.date.replace(/-/g, "");
    // El evento de día completo dura hasta el día siguiente
    const [y, m, d] = h.date.split("-").map(Number);
    const nextDay = new Date(y, m - 1, d + 1);
    const cleanNextDate = `${nextDay.getFullYear()}${String(nextDay.getMonth() + 1).padStart(2, "0")}${String(nextDay.getDate()).padStart(2, "0")}`;

    icsContent.push(
      "BEGIN:VEVENT",
      `UID:${h.id}-2026@colombiacalendar.com`,
      `DTSTAMP:${cleanDate}T000000Z`,
      `DTSTART;VALUE=DATE:${cleanDate}`,
      `DTEND;VALUE=DATE:${cleanNextDate}`,
      `SUMMARY:Festivo: ${h.name} (Colombia)`,
      `DESCRIPTION:${h.description} \\nCategoría: ${h.category} \\nFundamento: ${h.law}`,
      "LOCATION:Colombia",
      "STATUS:CONFIRMED",
      "TRANSP:TRANSPARENT",
      "END:VEVENT"
    );
  });

  icsContent.push("END:VCALENDAR");

  const blob = new Blob([icsContent.join("\r\n")], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Festivos_Colombia_2026.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function addToGoogleCalendar(holidayId) {
  const h = COLOMBIA_HOLIDAYS_2026.find(x => x.id === holidayId);
  if (!h) return;

  const [y, m, d] = h.date.split("-").map(Number);
  const startDate = `${y}${String(m).padStart(2, "0")}${String(d).padStart(2, "0")}`;
  const nextDateObj = new Date(y, m - 1, d + 1);
  const endDate = `${nextDateObj.getFullYear()}${String(nextDateObj.getMonth() + 1).padStart(2, "0")}${String(nextDateObj.getDate()).padStart(2, "0")}`;

  const title = encodeURIComponent(`Festivo: ${h.name} (Colombia)`);
  const details = encodeURIComponent(`${h.description}\nTipo: ${h.type}\nLey: ${h.law}`);
  const location = encodeURIComponent("Colombia");

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  window.open(googleUrl, "_blank");
}
