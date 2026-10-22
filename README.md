# 🇨🇴 Calendario Interactivo Colombia 2026 (Festivos & Puentes)

Una aplicación web moderna, interactiva y responsiva diseñada para visualizar, planificar y aprovechar los **19 días festivos oficiales de Colombia en el año 2026**, incluyendo la totalidad de puentes festivos reglamentados por la **Ley Emiliani (Ley 51 de 1983)** y el nuevo festivo nacional establecido por la **Ley 2578 de 2026**.

---

## 🌟 Características Principales

1. **Vistas Interactivas**:
   - **Vista Anual (12 Meses)**: Vista panorámica completa del año 2026 en cuadrícula responsiva, resaltando festivos, fines de semana y días de puente.
   - **Vista Mes a Mes**: Cuadrícula detallada por mes con panel lateral explicativo, días hábiles, festivos y notas.
   - **Planificador de Puentes Festivos (16 Puentes)**: Desglose de cada fin de semana largo (3 o 4 días continuos de descanso) con sugerencias y tips para maximizar vacaciones solicitando días puente estratégicos.
   - **Lista Cronológica de Festivos**: Búsqueda en tiempo real y filtros por categoría (*Puentes*, *Ley Emiliani*, *Patrios y Cívicos*, *Religiosos*).

2. **Día a Día y Notas Personales**:
   - Haz clic en cualquier día del año para abrir la ficha de información.
   - Consulta la norma legal exacta, origen de la celebración y si aplica traslado bajo la Ley Emiliani.
   - Agrega notas, agendas o planes personales que se guardan automáticamente en tu navegador (`localStorage`).

3. **Exportación e Integración**:
   - **Descargar Calendario (.ICS)**: Agrega los 19 festivos oficiales con un solo clic a **Google Calendar**, **Apple Calendar**, **Microsoft Outlook** o tu cliente de calendario preferido.
   - **Botón individual para Google Calendar**: Añade festivos específicos a tu cuenta de Google.
   - **Modo Impresión / Guardar PDF (`Ctrl + P`)**: Hoja de estilos optimizada para imprimir o generar un documento PDF limpio y profesional del calendario 2026.

4. **Diseño y Experiencia de Usuario**:
   - **Modo Claro / Modo Oscuro** con persistencia y detección de preferencia del sistema operativo.
   - **Contador en vivo**: Notificación y cuenta regresiva hacia el próximo festivo en Colombia.
   - Paleta con identidad visual colombiana sutil y tipografía limpia.
   - Cero dependencias pesadas: funciona abriendo directamente el archivo `index.html` en cualquier navegador web moderno.

---

## 📋 Lista Oficial de Festivos Colombia 2026 (19 Días)

| # | Fecha Oficial en 2026 | Día | Nombre de la Festividad | Categoría | Tipo de Festivo / Norma |
|---|------------------------|-----|-------------------------|-----------|-------------------------|
| 1 | **1 de Enero** | Jueves | Año Nuevo | Civil | Fijo Inamovible |
| 2 | **12 de Enero** | Lunes | Día de los Reyes Magos | Religioso | Ley Emiliani (Orig. 6 Ene) |
| 3 | **23 de Marzo** | Lunes | Día de San José | Religioso | Ley Emiliani (Orig. 19 Mar) |
| 4 | **2 de Abril** | Jueves | Jueves Santo | Religioso | Semana Santa (Pascua: 5 Abr) |
| 5 | **3 de Abril** | Viernes | Viernes Santo | Religioso | Semana Santa (Pascua: 5 Abr) |
| 6 | **1 de Mayo** | Viernes | Día Internacional del Trabajo | Civil | Fijo Inamovible |
| 7 | **18 de Mayo** | Lunes | Ascensión del Señor | Religioso | Ley Emiliani (Pascua + 43 días) |
| 8 | **8 de Junio** | Lunes | Corpus Christi | Religioso | Ley Emiliani (Pascua + 64 días) |
| 9 | **15 de Junio** | Lunes | Sagrado Corazón de Jesús | Religioso | Ley Emiliani (Pascua + 71 días) |
| 10 | **29 de Junio** | Lunes | San Pedro y San Pablo | Religioso | Ley Emiliani (Orig. 29 Jun) |
| 11 | **13 de Julio** | Lunes | Virgen del Rosario de Chiquinquirá | Religioso / Cultural | Ley 2578 de 2026 (Orig. 9 Jul) |
| 12 | **20 de Julio** | Lunes | Día de la Independencia Nacional | Patrio | Fijo (Cae naturalmente en lunes) |
| 13 | **7 de Agosto** | Viernes | Batalla de Boyacá | Patrio | Fijo Inamovible |
| 14 | **17 de Agosto** | Lunes | La Asunción de la Virgen | Religioso | Ley Emiliani (Orig. 15 Ago) |
| 15 | **12 de Octubre** | Lunes | Día de la Diversidad Étnica y Cultural | Civil | Ley Emiliani (Orig. 12 Oct) |
| 16 | **2 de Noviembre** | Lunes | Día de Todos los Santos | Religioso | Ley Emiliani (Orig. 1 Nov) |
| 17 | **16 de Noviembre** | Lunes | Independencia de Cartagena | Patrio | Ley Emiliani (Orig. 11 Nov) |
| 18 | **8 de Diciembre** | Martes | Día de la Inmaculada Concepción | Religioso | Fijo Inamovible |
| 19 | **25 de Diciembre** | Viernes | Navidad | Religioso | Fijo Inamovible |

---

## 🚀 Cómo Usar y Ejecutar

1. Abre el archivo `index.html` con cualquier navegador web (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, etc.).
2. ¡Listo! No requiere instalación previa ni servidores backend.

---

## 🛠️ Tecnologías Empleadas

- **HTML5 Semántico**: Estructura accesible con soporte para lectores de pantalla.
- **Tailwind CSS + CSS3 Moderno**: Diseño adaptativo, variables CSS y soporte completo para modo oscuro y medios de impresión.
- **JavaScript Moderno (ES6+)**: Cálculo pascual, manipulación reactiva del DOM, almacenamiento local (`localStorage`), y generación de archivos `.ics` RFC 5545 compatibles.
