const weeks = [
  {
    id: 1,
    title: "الأسبوع ١",
    theme: "بداية بانضباط",
    dates: ["١٤٤٨/٠٣/١٠هـ", "١٤٤٨/٠٣/١٤هـ"],
    programs: [
      "برنامج التهيئة الإرشادية",
      "تفعيل إطار توثيق العلاقة بين الأسرة والمدرسة (مجالس أولياء الأمور)",
      "التوعية بقواعد السلوك والمواطنة"
    ],
    programIdeas: [
      "بوابة البداية: استقبال إرشادي وتعريف بخدمات التوجيه الطلابي.",
      "ميثاق مدرستي: صياغة قواعد السلوك والانضباط بمشاركة الطلاب.",
      "أسرتي شريك نجاحي: بطاقة أو رمز QR للأسرة يتضمن أهم الإرشادات وقناة للمشاركة.",
      "سلوك اليوم: رسالة صباحية قصيرة مرتبطة بالانضباط والمواطنة.",
      "قدوتي في الانضباط: تكريم نموذج طلابي متميز في الالتزام.",
      "موقف وقرار: بطاقات مواقف حول الحقوق والواجبات وقواعد السلوك."
    ],
    value: "الانضباط",
    valueIdeas: [
      "تحدي أسبوع بلا تأخر.",
      "بطاقة متابعة ذاتية للالتزام بالوقت والمهام.",
      "لوحة الفصل الأكثر انضباطًا.",
      "دقيقة تنظيم الوقت في بداية اليوم.",
      "مهمة يومية: حقيبتي ووقتي ومسؤوليتي.",
      "وسام قدوة الانضباط."
    ]
  },
  {
    id: 2,
    title: "الأسبوع ٢",
    theme: "إيجابي في واقعي ورقمي",
    dates: ["١٤٤٨/٠٣/١٧هـ", "١٤٤٨/٠٣/٢١هـ"],
    programs: [
      "برنامج تعزيز السلوك الإيجابي",
      "الاستخدام الآمن للإنترنت والألعاب الإلكترونية",
      "المجلس الطلابي"
    ],
    programIdeas: [
      "المحقق الرقمي: تحليل رسائل وروابط افتراضية وتمييز الآمن من الخطر.",
      "فكّر قبل أن تنقر: بطاقات قرارات رقمية سريعة.",
      "صيد السلوك الجميل: رصد سلوك إيجابي حقيقي وتكريم صاحبه.",
      "صوتك يصنع الفرق: استقبال فكرة تطويرية من كل فصل للمجلس الطلابي.",
      "ميثاق اللاعب الذكي: قواعد تنظيم الوقت والخصوصية داخل الألعاب.",
      "دقيقة مواطن رقمي: رسالة قصيرة عن أثر الكلمة والصورة في العالم الرقمي."
    ],
    value: "الانضباط + الإيجابية",
    valueIdeas: [
      "تحدي ٥ أيام بلا مخالفة سلوكية.",
      "كلمة إيجابية كل صباح.",
      "غيّر العبارة: تحويل جملة سلبية إلى صياغة إيجابية.",
      "رصيد السلوك الإيجابي داخل الفصل.",
      "امتنان اليوم: تسجيل موقف إيجابي واحد.",
      "وسام الإيجابية المنضبطة."
    ]
  },
  {
    id: 3,
    title: "الأسبوع ٣",
    theme: "نتسامح… فنرتقي",
    dates: ["١٤٤٨/٠٣/٢٤هـ", "١٤٤٨/٠٣/٢٨هـ"],
    programs: [
      "برنامج تعزيز السلوك الإيجابي",
      "الاستخدام الآمن للإنترنت والألعاب الإلكترونية",
      "المجلس الطلابي"
    ],
    programIdeas: [
      "نختلف ونبقى أصدقاء: مواقف حوارية حول تقبل الاختلاف.",
      "قبل أن ترسل: مواقف عن التنمر والإساءة في التواصل الرقمي.",
      "جسر التسامح: يكتب الطالب موقفًا يتجاوز فيه خلافًا بطريقة راقية.",
      "مجلس الحوار: جلسة طلابية قصيرة حول احترام الرأي الآخر.",
      "رسالة سلام: بطاقات مصالحة وشكر وتقدير.",
      "الكلمة التي تبني: جدارية لعبارات لطيفة يقترحها الطلاب."
    ],
    value: "التسامح + الإيجابية",
    valueIdeas: [
      "صندوق رسائل التسامح.",
      "موقف اليوم: كيف أرد باحترام؟",
      "تحدي الكلمة الطيبة لمدة أسبوع.",
      "أعتذر لأنني أقدّرك: تدريب على الاعتذار الإيجابي.",
      "اختلافنا لا يفسد صداقتنا: نشاط ثنائي.",
      "وسام صانع السلام."
    ]
  },
  {
    id: 4,
    title: "الأسبوع ٤",
    theme: "بادر برفق",
    dates: ["١٤٤٨/٠٤/٠٢هـ", "١٤٤٨/٠٤/٠٦هـ"],
    programs: [
      "برنامج تعزيز القيم والسلوك الإيجابي",
      "برنامج رفق لمناهضة العنف"
    ],
    programIdeas: [
      "فكرتي لها أثر: كل فصل يقترح مشكلة مدرسية وحلًا واقعيًا لها.",
      "يدي للبناء لا للإيذاء: تعهد سلوكي رمزي ضد العنف والتنمر.",
      "٣٠ دقيقة لصناعة فرق: تنفيذ مبادرة صغيرة داخل المدرسة.",
      "موقف ومبادرة: عرض موقف مدرسي وطلب حلول عملية من الطلاب.",
      "دقيقة رفق: رسالة صباحية يومية عن الرحمة وحسن التعامل.",
      "مبادر الأسبوع: تكريم فكرة طلابية تم تحويلها إلى عمل."
    ],
    value: "المبادرة + الانضباط",
    valueIdeas: [
      "مهمة بادر أولًا: سلوك إيجابي يبدأه الطالب دون طلب.",
      "بطاقة فكرة وحل.",
      "نقطة انطلاق: اختيار هدف أسبوعي بسيط والالتزام به.",
      "تحدي أنجزها اليوم.",
      "لوحة مبادرات الفصول.",
      "وسام المبادر المنضبط."
    ]
  },
  {
    id: 5,
    title: "الأسبوع ٥",
    theme: "مهنتي لوطني",
    dates: ["١٤٤٨/٠٤/٠٩هـ", "١٤٤٨/٠٤/١٣هـ"],
    programs: [
      "تفعيل إطار توثيق العلاقة بين الأسرة والمدرسة",
      "التوجيه المهني"
    ],
    programIdeas: [
      "مهنة في دقيقة: تعريف يومي بمهنة ودورها في خدمة المجتمع.",
      "أنا في المستقبل: بطاقة يصممها الطالب لمهنته المستقبلية.",
      "خبرة من أسرتي: ولي أمر يشارك بخبرة مهنية حضورياً أو بمقطع قصير.",
      "وظائف المستقبل: ركن مبسط لمجالات العمل المتنامية.",
      "مساري يبدأ بمهارة: ربط المهنة بمهارة يمكن البدء في تنميتها الآن.",
      "جدار مهن تبني الوطن: عرض مشاركات الطلاب والأسر."
    ],
    value: "حب الوطن",
    valueIdeas: [
      "وطني مسؤوليتي: ماذا أستطيع أن أقدم من مكاني؟",
      "مهنة تخدم الوطن: ربط المهنة المستقبلية بخدمة المجتمع.",
      "أحافظ على مدرستي لأنها جزء من وطني.",
      "رسالة فخر بإنجاز وطني.",
      "عمل تطوعي صغير داخل المدرسة.",
      "بطاقة: أنا جزء من مستقبل وطني."
    ]
  },
  {
    id: 6,
    title: "الأسبوع ٦",
    theme: "أنتمي… وأستطيع",
    dates: ["١٤٤٨/٠٤/١٦هـ", "١٤٤٨/٠٤/٢٠هـ"],
    programs: [
      "برنامج تعزيز المهارات النفسية والاجتماعية",
      "برنامج رفق لمناهضة العنف",
      "التهيئة الإرشادية للاختبارات"
    ],
    programIdeas: [
      "أنا أستطيع: رسائل وتمارين قصيرة لتعزيز الثقة بالنفس.",
      "حقيبتي للاختبار بثقة: النوم، تنظيم الوقت، المذاكرة والاستعداد.",
      "رفيق داعم: كيف أساند زميلي دون ضغط أو سخرية؟",
      "ماذا أفعل لو…؟ نشاط مواقف لتنمية مهارة حل المشكلات.",
      "لغة المشاعر: تدريب على تسمية المشاعر والتعبير عنها بأسلوب مناسب.",
      "دقيقة هدوء وتركيز قبل بداية اليوم أو الاختبار."
    ],
    value: "الانتماء الوطني",
    valueIdeas: [
      "أنا أنتمي: مواقف توضح الانتماء للمدرسة والوطن.",
      "أحافظ على الممتلكات العامة لأنها مسؤوليتي.",
      "قصة قصيرة عن شخص خدم مجتمعه بإتقان.",
      "مهمة تعاون لخدمة الفصل أو المدرسة.",
      "كلمة شكر لمن يخدم المجتمع المدرسي.",
      "وسام مواطن المدرسة المسؤول."
    ]
  },
  {
    id: 7,
    title: "الأسبوع ٧",
    theme: "أثرٌ يبقى",
    dates: ["١٤٤٨/٠٤/٢٣هـ", "١٤٤٨/٠٤/٢٧هـ"],
    programs: [
      "برنامج تعزيز السلوك الإيجابي",
      "الاستخدام الآمن للإنترنت والألعاب الإلكترونية",
      "المجلس الطلابي"
    ],
    programIdeas: [
      "أترك أثرًا طيبًا: يدوّن الطالب أفضل أثر إيجابي قدمه خلال الأسابيع.",
      "شكراً لأنك… بطاقات تقدير بين أفراد المجتمع المدرسي.",
      "مجلس الأثر: المجلس الطلابي يستعرض ما تحقق ويقترح تطويرًا للفترة القادمة.",
      "رقمي بأخلاقي: مراجعة ميثاق الاستخدام الأخلاقي للإنترنت.",
      "معرض أثري يبدأ مني: عرض أفضل المبادرات والمنتجات.",
      "صوت الطالب: استبانة قصيرة حول أكثر البرامج أثرًا وفائدة."
    ],
    value: "التسامح",
    valueIdeas: [
      "ختامها تسامح: مبادرة للمصالحة ونشر العلاقات الإيجابية.",
      "رسالة تقدير لشخص كان له أثر جميل.",
      "تحدي لا أحمل خلافًا معي للأسبوع القادم.",
      "موقف تعلمت منه معنى التسامح.",
      "شجرة الأثر: إضافة ورقة تحمل موقفًا طيبًا.",
      "وسام صانع الأثر."
    ]
  }
];

const storageKey = "interactive-guidance-plan-v1";
const exportSchema = "student-counselor-assistant";
const exportVersion = 9;
const evidenceCache = {};
const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_EVIDENCE_FILE_SIZE = 5 * 1024 * 1024;
const MAX_LOGO_FILE_SIZE = 2 * 1024 * 1024;
let deferredPrompt = null;

function blankState() {
  return {
    admin: "",
    school: "",
    checks: {},
    notes: {},
    custom: {},
    completed: {},
    indicators: {},
    noor: {},
    dayPlans: {},
    evidenceDocs: {},
    programReports: {},
    activeWeekId: 1,
    report: {
      userName: "",
      principalName: "",
      academicYear: "",
      logoDataUrl: "",
      logoName: ""
    },
    privacyAcknowledged: false
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return blankState();
    const parsed = JSON.parse(raw);
    const base = blankState();
    return {
      ...base,
      ...parsed,
      report: { ...base.report, ...(parsed?.report || {}) },
      checks: parsed?.checks && typeof parsed.checks === "object" ? parsed.checks : {},
      notes: parsed?.notes && typeof parsed.notes === "object" ? parsed.notes : {},
      custom: parsed?.custom && typeof parsed.custom === "object" ? parsed.custom : {},
      completed: parsed?.completed && typeof parsed.completed === "object" ? parsed.completed : {},
      indicators: parsed?.indicators && typeof parsed.indicators === "object" ? parsed.indicators : {},
      noor: parsed?.noor && typeof parsed.noor === "object" ? parsed.noor : {},
      dayPlans: parsed?.dayPlans && typeof parsed.dayPlans === "object" ? parsed.dayPlans : {},
      evidenceDocs: parsed?.evidenceDocs && typeof parsed.evidenceDocs === "object" ? parsed.evidenceDocs : {},
      programReports: parsed?.programReports && typeof parsed.programReports === "object" ? parsed.programReports : {},
      activeWeekId: weeks.some((week) => week.id === Number(parsed?.activeWeekId)) ? Number(parsed.activeWeekId) : 1
    };
  } catch {
    return blankState();
  }
}

const state = loadState();

function captureIdentity() {
  state.admin = state.admin || "";
  state.school = state.school || "";
}

function persistState(message = "") {
  captureIdentity();
  localStorage.setItem(storageKey, JSON.stringify(state));
  if (message) {
    setStatus(message);
    toast(message);
  }
}

function setStatus(text) {
  const el = document.querySelector("#saveStatus");
  if (!el) return;
  el.textContent = text;
  clearTimeout(setStatus.timer);
  setStatus.timer = setTimeout(() => {
    el.textContent = "محفوظ محليًا على هذا الجهاز";
  }, 1800);
}

function toast(text) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = text;
  requestAnimationFrame(() => el.classList.add("show"));
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 1900);
}

function arNum(value) {
  return String(value).replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeString(value, maxLength = 2000) {
  return String(value ?? "").replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").slice(0, maxLength);
}

function safeFileBase(value = "تقرير") {
  const cleaned = safeString(value, 80).replace(/[\\/:*?"<>|]+/g, "-").replace(/\s+/g, " ").trim();
  return cleaned || "تقرير";
}

const guidanceWeekdays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"];

function toWesternDigits(value = "") {
  return String(value)
    .replace(/[٠-٩]/g, (digit) => String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)))
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)));
}

function parseHijriLabel(value = "") {
  const match = toWesternDigits(value).match(/(\d{3,4})\/(\d{1,2})\/(\d{1,2})/);
  return match ? { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]) } : null;
}

function formatHijriLabel(year, month, day) {
  const western = `${String(year).padStart(4, "0")}/${String(month).padStart(2, "0")}/${String(day).padStart(2, "0")}هـ`;
  return arNum(western);
}

function getWeekDays(week) {
  const start = parseHijriLabel(week?.dates?.[0]);
  const end = parseHijriLabel(week?.dates?.[1]);
  if (!start || !end) {
    return guidanceWeekdays.map((name, index) => ({ name, date: index === 0 ? (week?.dates?.[0] || "—") : index === 4 ? (week?.dates?.[1] || "—") : "—" }));
  }
  if (start.year === end.year && start.month === end.month && end.day >= start.day) {
    return guidanceWeekdays.map((name, index) => ({ name, date: formatHijriLabel(start.year, start.month, start.day + index) }));
  }
  return guidanceWeekdays.map((name, index) => ({ name, date: index === 0 ? week.dates[0] : index === 4 ? week.dates[1] : "—" }));
}

function dayPlanKey(weekId, dayIndex) {
  return `w${Number(weekId)}-day-${Number(dayIndex)}`;
}

function getDayPlan(weekId, dayIndex) {
  const raw = state.dayPlans?.[dayPlanKey(weekId, dayIndex)] || {};
  return {
    activity: safeString(raw.activity, 240),
    objective: safeString(raw.objective, 320),
    details: safeString(raw.details, 1800),
    notes: safeString(raw.notes, 900),
    done: Boolean(raw.done)
  };
}

function setDayPlanField(weekId, dayIndex, field, value) {
  const key = dayPlanKey(weekId, dayIndex);
  state.dayPlans[key] ||= {};
  if (field === "done") state.dayPlans[key].done = Boolean(value);
  else {
    const limits = { activity: 240, objective: 320, details: 1800, notes: 900 };
    state.dayPlans[key][field] = safeString(value, limits[field] || 1000);
  }
  persistState();
}

function dayPlanHasContent(plan) {
  return Boolean(plan.done || plan.activity.trim() || plan.objective.trim() || plan.details.trim() || plan.notes.trim());
}

function getWeekDailyStats(weekId) {
  const plans = guidanceWeekdays.map((_, index) => getDayPlan(weekId, index));
  const planned = plans.filter(dayPlanHasContent).length;
  const done = plans.filter((plan) => plan.done).length;
  return { planned, done, total: guidanceWeekdays.length };
}

function getAllDailyPlanStats() {
  return weeks.reduce((acc, week) => {
    const stats = getWeekDailyStats(week.id);
    acc.planned += stats.planned;
    acc.done += stats.done;
    acc.total += stats.total;
    return acc;
  }, { planned: 0, done: 0, total: 0 });
}


function getWeekReadiness(week) {
  const daily = getWeekDailyStats(week.id);
  const record = getNoorRecord(week.id);
  const indicator = getIndicator(week.id);
  let score = (daily.planned / Math.max(1, daily.total)) * 40;
  if (selectedIdeasForWeek(week).length) score += 10;
  const reportFields = [record.program, record.targetGroup, record.beneficiaries, record.participants, record.procedure, record.evidenceText];
  score += reportFields.filter((value) => String(value || "").trim()).length * 5;
  const indicatorFields = [indicator.participation, indicator.achievement, indicator.satisfaction, indicator.impactNote];
  score += indicatorFields.filter((value) => String(value ?? "").trim() !== "").length * 5;
  return Math.max(0, Math.min(100, Math.round(score)));
}

function readinessLabel(score) {
  if (score >= 85) return "جاهز للتوثيق";
  if (score >= 60) return "قريب من الاكتمال";
  if (score >= 30) return "قيد الإعداد";
  return "بداية التخطيط";
}

function dailyPlansForWeek(week) {
  return getWeekDays(week).map((day, index) => ({ ...day, ...getDayPlan(week.id, index), index }));
}

function dailyPlanSummaryText(week) {
  return dailyPlansForWeek(week)
    .filter((day) => dayPlanHasContent(day))
    .map((day) => `${day.name} ${day.date}: ${day.activity || "خطة يومية"}${day.details ? ` — ${day.details}` : ""}${day.done ? " (تم التنفيذ)" : ""}`)
    .join(" • ");
}


function downloadBlob(content, mime, filename) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function keyFor(weekId, type, index) {
  return `w${weekId}-${type}-${index}`;
}

function customKey(weekId, type) {
  return `w${weekId}-${type}`;
}

function noteKey(weekId, type) {
  return `w${weekId}-${type}`;
}

function completionKey(weekId) {
  return `w${weekId}`;
}

function getIndicator(weekId) {
  const key = completionKey(weekId);
  state.indicators[key] ||= { participation: "", achievement: "", satisfaction: "", impactNote: "" };
  return state.indicators[key];
}

function getNoorRecord(weekId) {
  const key = completionKey(weekId);
  state.noor ||= {};
  state.noor[key] ||= {
    program: "",
    targetGroup: "",
    beneficiaries: "",
    participants: "",
    procedure: "",
    evidenceText: "",
    obstacles: "",
    notes: ""
  };
  return state.noor[key];
}

function selectedProgramIdeasForWeek(week) {
  return getAllIdeas(week, "program")
    .filter((idea) => Boolean(state.checks[idea.id]))
    .map((idea) => idea.text);
}

function syncNoorInputs(weekId, field, value, source) {
  document.querySelectorAll(`[data-noor-week="${weekId}"][data-noor-field="${field}"]`).forEach((el) => {
    if (el !== source) el.value = value;
  });
}

function setNoorField(weekId, field, value, source) {
  getNoorRecord(weekId)[field] = value;
  persistState();
  syncNoorInputs(weekId, field, value, source);
  renderProgramCenterV15();
}

function buildNoorSummaryText(week) {
  captureIdentity();
  const record = getNoorRecord(week.id);
  const indicator = getIndicator(week.id);
  const chosenProgram = record.program || week.programs.join("، ");
  const selectedIdeas = selectedProgramIdeasForWeek(week);
  const procedure = record.procedure || selectedIdeas.join(" • ") || "—";
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
  const pct = (value) => value === "" || value == null ? "—" : `${arNum(value)}٪`;
  return [
    `اسم مُعدّ التقرير: ${state.report?.userName || "—"}`,
    `إدارة التعليم: ${state.admin || "—"}`,
    `المدرسة: ${state.school || "—"}`,
    `مدير المدرسة: ${state.report?.principalName || "—"}`,
    `الأسبوع: ${week.title} — ${week.theme}`,
    `الفترة: ${week.dates[0]} إلى ${week.dates[1]}`,
    `الخطة اليومية: ${dailyPlanSummaryText(week) || "—"}`,
    `البرنامج: ${chosenProgram}`,
    `القيمة المستهدفة: ${week.value}`,
    `الفئة المستهدفة: ${record.targetGroup || "—"}`,
    `عدد المستفيدين: ${record.beneficiaries || "—"}`,
    `المشاركون في التنفيذ: ${record.participants || "—"}`,
    `حالة التنفيذ: ${status}`,
    `إجراء التنفيذ: ${procedure}`,
    `شواهد التنفيذ: ${record.evidenceText || "—"}`,
    `نسبة المشاركة: ${pct(indicator.participation)}`,
    `مؤشر تحقق الهدف: ${pct(indicator.achievement)}`,
    `رضا المستفيدين: ${pct(indicator.satisfaction)}`,
    `الأثر الملحوظ: ${indicator.impactNote || "—"}`,
    `العوائق: ${record.obstacles || "—"}`,
    `ملاحظات عامة: ${record.notes || "—"}`
  ].join("\n");
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

function renderNoorAssistantPanel(week) {
  const details = document.createElement("details");
  details.className = "followup-details noor-assistant";

  const summary = document.createElement("summary");
  summary.innerHTML = '🧾 مساعد التوثيق <span class="noor-chip">للنسخ اليدوي</span>';
  details.appendChild(summary);

  const content = document.createElement("div");
  content.className = "followup-content noor-content";

  const safeNote = document.createElement("div");
  safeNote.className = "noor-safe-note";
  safeNote.innerHTML = '<strong>تنبيه:</strong> هذه الحقول لتنظيم بيانات التوثيق فقط، ولا يوجد ربط مباشر أو إرسال تلقائي إلى نظام نور. لا تدخل بيانات شخصية للطلاب.';
  content.appendChild(safeNote);

  const record = getNoorRecord(week.id);
  const grid = document.createElement("div");
  grid.className = "noor-fields";

  const addField = (field, label, kind = "input", placeholder = "") => {
    const wrap = document.createElement("label");
    wrap.className = `indicator-field ${kind === "textarea" ? "noor-field--wide" : ""}`;
    const title = document.createElement("span");
    title.textContent = label;
    wrap.appendChild(title);
    let control;
    if (kind === "select") {
      control = document.createElement("select");
      const all = document.createElement("option");
      all.value = "";
      all.textContent = "جميع برامج الأسبوع";
      control.appendChild(all);
      week.programs.forEach((program) => {
        const option = document.createElement("option");
        option.value = program;
        option.textContent = program;
        control.appendChild(option);
      });
    } else if (kind === "textarea") {
      control = document.createElement("textarea");
      control.rows = 3;
    } else {
      control = document.createElement("input");
      control.type = "text";
      if (field === "beneficiaries") control.inputMode = "numeric";
    }
    control.placeholder = placeholder;
    control.maxLength = kind === "textarea" ? 1500 : (field === "beneficiaries" ? 40 : 240);
    control.value = record[field] || "";
    control.dataset.noorWeek = String(week.id);
    control.dataset.noorField = field;
    control.addEventListener("input", () => setNoorField(week.id, field, control.value, control));
    control.addEventListener("change", () => setNoorField(week.id, field, control.value, control));
    wrap.appendChild(control);
    grid.appendChild(wrap);
    return control;
  };

  addField("program", "البرنامج المراد تجهيز بياناته", "select");
  addField("targetGroup", "الفئة المستهدفة", "input", "مثال: جميع الطلاب / طلاب الصف…");
  addField("beneficiaries", "عدد المستفيدين", "input", "مثال: ١٢٠");
  addField("participants", "المشاركون في التنفيذ", "input", "مثال: الموجه الطلابي، المعلمون، الأسرة");
  const procedure = addField("procedure", "إجراء التنفيذ / وصف ما تم تنفيذه", "textarea", "اكتب وصفًا مختصرًا للإجراء المنفذ…");
  addField("evidenceText", "شواهد التنفيذ", "textarea", "مثال: صور عامة، بطاقة، استبانة، جدارية، سجل حضور…");
  addField("obstacles", "العوائق", "textarea", "إن وجدت، اكتب العائق بصورة عامة دون بيانات شخصية…");
  addField("notes", "ملاحظات عامة", "textarea", "ملاحظات عامة فقط دون أسماء أو حالات فردية…");
  content.appendChild(grid);

  const actions = document.createElement("div");
  actions.className = "noor-actions";

  const useIdeas = document.createElement("button");
  useIdeas.type = "button";
  useIdeas.className = "btn btn--soft";
  useIdeas.textContent = "✨ استخدام الأفكار المحددة كإجراء تنفيذ";
  useIdeas.addEventListener("click", () => {
    const ideas = selectedProgramIdeasForWeek(week);
    if (!ideas.length) {
      toast("حدد فكرة تنفيذ واحدة على الأقل أولًا");
      return;
    }
    const value = ideas.join(" • ");
    procedure.value = value;
    setNoorField(week.id, "procedure", value, procedure);
    toast("تم تجهيز وصف التنفيذ من الأفكار المحددة");
  });

  const copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.className = "btn btn--noor";
  copyBtn.textContent = "📋 نسخ ملخص التوثيق";
  copyBtn.addEventListener("click", async () => {
    const ok = await copyText(buildNoorSummaryText(week));
    toast(ok ? "تم نسخ ملخص التوثيق" : "تعذر النسخ التلقائي؛ استخدم تقرير الأسبوع");
  });

  actions.append(useIdeas, copyBtn);
  content.appendChild(actions);
  details.appendChild(content);
  return details;
}

function getAllIdeas(week, type) {
  const builtIn = type === "value" ? week.valueIdeas : week.programIdeas;
  const custom = state.custom[customKey(week.id, type)] || [];
  return [
    ...builtIn.map((text, index) => ({ text, id: keyFor(week.id, type, index), custom: false })),
    ...custom.map((text, index) => ({ text, id: keyFor(week.id, `${type}-custom`, index), custom: true, customIndex: index }))
  ];
}

function getWeekIdeaStats(week) {
  const all = [...getAllIdeas(week, "program"), ...getAllIdeas(week, "value")];
  const done = all.filter((idea) => Boolean(state.checks[idea.id])).length;
  return { done, total: all.length, percent: all.length ? Math.round((done / all.length) * 100) : 0 };
}

function createCell(classes, html = "") {
  const cell = document.createElement("div");
  cell.className = `table-cell ${classes}`;
  if (html) cell.innerHTML = html;
  return cell;
}

function renderIdeaDetails(week, type) {
  const isValue = type === "value";
  const wrapper = document.createElement("details");
  wrapper.className = `idea-details ${isValue ? "idea-details--value" : ""}`;
  wrapper.dataset.week = String(week.id);
  wrapper.dataset.type = type;

  const summary = document.createElement("summary");
  summary.textContent = isValue ? "💎 أفكار تفعيل القيمة" : "💡 أفكار تنفيذ البرامج";
  wrapper.appendChild(summary);

  const list = document.createElement("div");
  list.className = "idea-list";

  getAllIdeas(week, type).forEach((idea) => {
    const row = document.createElement("div");
    row.className = "idea-item";

    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = Boolean(state.checks[idea.id]);
    check.dataset.checkKey = idea.id;
    check.setAttribute("aria-label", `تحديد الفكرة: ${idea.text}`);
    check.addEventListener("change", () => {
      state.checks[idea.id] = check.checked;
      persistState();
      document.querySelectorAll(`[data-check-key="${CSS.escape(idea.id)}"]`).forEach((el) => {
        if (el !== check) el.checked = check.checked;
      });
      refreshDynamicUI();
    });

    const text = document.createElement("span");
    text.className = "idea-item__text";
    text.textContent = idea.text;
    row.append(check, text);

    if (idea.custom) {
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "idea-remove";
      remove.textContent = "×";
      remove.title = "حذف الفكرة المضافة";
      remove.addEventListener("click", () => {
        const arr = state.custom[customKey(week.id, type)] || [];
        arr.splice(idea.customIndex, 1);
        state.custom[customKey(week.id, type)] = arr;
        delete state.checks[idea.id];
        persistState("تم حذف الفكرة");
        renderAll();
      });
      row.appendChild(remove);
    }

    list.appendChild(row);
  });

  const custom = document.createElement("div");
  custom.className = "custom-idea";
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = 300;
  input.placeholder = isValue ? "أضف فكرة لتعزيز القيمة" : "أضف فكرة جديدة للتنفيذ";
  const add = document.createElement("button");
  add.type = "button";
  add.textContent = "إضافة";
  const addIdea = () => {
    const value = input.value.trim();
    if (!value) return;
    const key = customKey(week.id, type);
    state.custom[key] ||= [];
    state.custom[key].push(value);
    input.value = "";
    persistState("تمت إضافة الفكرة");
    renderAll();
  };
  add.addEventListener("click", addIdea);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addIdea();
    }
  });
  custom.append(input, add);
  list.appendChild(custom);

  const note = document.createElement("div");
  note.className = "note-area";
  const textarea = document.createElement("textarea");
  textarea.maxLength = 1500;
  textarea.placeholder = "ملاحظات عامة عن التنفيذ — دون أسماء أو بيانات شخصية…";
  textarea.value = state.notes[noteKey(week.id, type)] || "";
  textarea.dataset.noteKey = noteKey(week.id, type);
  textarea.addEventListener("input", () => {
    state.notes[noteKey(week.id, type)] = textarea.value;
    persistState();
  });
  note.appendChild(textarea);
  list.appendChild(note);

  const progress = document.createElement("div");
  progress.className = "progress-row";
  progress.dataset.progressWeek = String(week.id);
  progress.dataset.progressType = type;
  progress.innerHTML = '<span class="progress-label"></span><div class="progress-track"><div class="progress-bar"></div></div>';
  list.appendChild(progress);

  wrapper.appendChild(list);
  updateProgress(wrapper, week.id, type);
  return wrapper;
}

function updateProgress(wrapper, weekId, type) {
  const week = weeks.find((item) => item.id === Number(weekId));
  if (!week) return;
  const all = getAllIdeas(week, type);
  const done = all.filter((idea) => Boolean(state.checks[idea.id])).length;
  const percent = all.length ? Math.round((done / all.length) * 100) : 0;
  wrapper.querySelector(".progress-label")?.replaceChildren(document.createTextNode(`${arNum(done)} من ${arNum(all.length)}`));
  const bar = wrapper.querySelector(".progress-bar");
  if (bar) bar.style.width = `${percent}%`;
}

function renderFollowupPanel(week) {
  const panel = document.createElement("div");
  panel.className = "followup-panel";
  panel.dataset.followupWeek = String(week.id);

  const toggle = document.createElement("button");
  toggle.type = "button";
  toggle.className = "execution-toggle";
  toggle.dataset.completeWeek = String(week.id);
  toggle.addEventListener("click", () => {
    const key = completionKey(week.id);
    state.completed[key] = !state.completed[key];
    persistState(state.completed[key] ? "تم اعتماد تنفيذ الأسبوع" : "تم إلغاء علامة التنفيذ");
    refreshDynamicUI();
  });
  panel.appendChild(toggle);
  panel.appendChild(renderNoorAssistantPanel(week));

  const indicatorsDetails = document.createElement("details");
  indicatorsDetails.className = "followup-details";
  const indicatorSummary = document.createElement("summary");
  indicatorSummary.textContent = "📊 مؤشرات قياس الأثر";
  indicatorsDetails.appendChild(indicatorSummary);
  const indicatorContent = document.createElement("div");
  indicatorContent.className = "followup-content indicator-grid";
  const indicator = getIndicator(week.id);
  [
    ["participation", "نسبة المشاركة %", "مثال: ٨٥"],
    ["achievement", "نسبة تحقق الهدف %", "مثال: ٩٠"],
    ["satisfaction", "رضا المستفيدين %", "مثال: ٩٢"]
  ].forEach(([field, label, placeholder]) => {
    const wrap = document.createElement("label");
    wrap.className = "indicator-field";
    wrap.innerHTML = `<span>${label}</span>`;
    const input = document.createElement("input");
    input.type = "text";
    input.inputMode = "numeric";
    input.placeholder = placeholder;
    input.value = indicator[field] === "" || indicator[field] == null ? "" : arNum(indicator[field]);
    input.dataset.indicatorWeek = String(week.id);
    input.dataset.indicatorField = field;
    input.addEventListener("input", () => {
      const cleaned = normalizePercent(input.value);
      getIndicator(week.id)[field] = cleaned;
      persistState();
      syncIndicatorInputs(week.id, field, cleaned, input);
      refreshDynamicUI();
    });
    wrap.appendChild(input);
    indicatorContent.appendChild(wrap);
  });

  const noteWrap = document.createElement("label");
  noteWrap.className = "indicator-field";
  noteWrap.innerHTML = "<span>أبرز أثر أو نتيجة لوحظت</span>";
  const impactNote = document.createElement("textarea");
  impactNote.maxLength = 1000;
  impactNote.placeholder = "اكتب أثرًا مختصرًا عامًا دون أسماء أو بيانات شخصية…";
  impactNote.value = indicator.impactNote || "";
  impactNote.dataset.indicatorWeek = String(week.id);
  impactNote.dataset.indicatorField = "impactNote";
  impactNote.addEventListener("input", () => {
    getIndicator(week.id).impactNote = impactNote.value;
    persistState();
    syncIndicatorInputs(week.id, "impactNote", impactNote.value, impactNote);
  });
  noteWrap.appendChild(impactNote);
  indicatorContent.appendChild(noteWrap);
  indicatorsDetails.appendChild(indicatorContent);
  panel.appendChild(indicatorsDetails);

  const evidenceDetails = document.createElement("details");
  evidenceDetails.className = "followup-details";
  const evidenceSummary = document.createElement("summary");
  evidenceSummary.innerHTML = `📸 صور التوثيق <span data-evidence-count="${week.id}">٠</span>`;
  evidenceDetails.appendChild(evidenceSummary);
  const evidenceContent = document.createElement("div");
  evidenceContent.className = "followup-content";
  const upload = document.createElement("label");
  upload.className = "evidence-upload";
  upload.innerHTML = '<span>＋ إضافة صور التوثيق</span>';
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "image/png,image/jpeg,image/webp";
  fileInput.multiple = true;
  fileInput.addEventListener("change", async () => {
    if (!fileInput.files?.length) return;
    await handleEvidenceUpload(week.id, [...fileInput.files]);
    fileInput.value = "";
  });
  upload.appendChild(fileInput);
  const note = document.createElement("p");
  note.className = "evidence-note";
  note.textContent = "صور التوثيق مؤقتة لهذه الجلسة فقط ولا تُحفظ بعد تحديث الصفحة أو إغلاقها. PNG/JPEG/WebP بحد أقصى ٥ م.ب للصورة، ولا ترفع صورًا معرّفة بالأشخاص.";
  const grid = document.createElement("div");
  grid.className = "evidence-grid";
  grid.dataset.evidenceGrid = String(week.id);
  evidenceContent.append(upload, note, grid);
  evidenceDetails.appendChild(evidenceContent);
  panel.appendChild(evidenceDetails);

  const reportActions = document.createElement("div");
  reportActions.className = "report-export-actions";

  const reportMenu = document.createElement("details");
  reportMenu.className = "export-menu week-report-menu";

  const reportSummary = document.createElement("summary");
  reportSummary.className = "btn btn--soft report-btn";
  reportSummary.textContent = "🧾 تقرير الأسبوع المنظم";
  reportMenu.appendChild(reportSummary);

  const reportPanel = document.createElement("div");
  reportPanel.className = "export-menu__panel";

  const pdfBtn = document.createElement("button");
  pdfBtn.type = "button";
  pdfBtn.textContent = "🖨️ التقرير PDF";
  pdfBtn.addEventListener("click", () => {
    reportMenu.open = false;
    printWeekReport(week);
  });

  const excelBtn = document.createElement("button");
  excelBtn.type = "button";
  excelBtn.textContent = "📊 تقرير Excel احترافي";
  excelBtn.addEventListener("click", () => {
    reportMenu.open = false;
    exportExcel([week]);
  });

  const wordBtn = document.createElement("button");
  wordBtn.type = "button";
  wordBtn.textContent = "📝 التقرير Word";
  wordBtn.addEventListener("click", () => {
    reportMenu.open = false;
    exportWord([week]);
  });

  const jsonBtn = document.createElement("button");
  jsonBtn.type = "button";
  jsonBtn.textContent = "🗂️ التقرير JSON";
  jsonBtn.addEventListener("click", () => {
    reportMenu.open = false;
    exportJson([week]);
  });

  const hint = document.createElement("small");
  hint.textContent = "PDF وWord وExcel يضمّنون صور الشواهد الحالية. JSON يصدّر بيانات الأسبوع فقط ولا يتضمن الصور المؤقتة.";

  reportPanel.append(pdfBtn, excelBtn, wordBtn, jsonBtn, hint);
  reportMenu.appendChild(reportPanel);
  reportActions.appendChild(reportMenu);
  panel.appendChild(reportActions);

  updateCompleteButton(toggle, week.id);
  queueMicrotask(() => renderEvidenceGrids(week.id));
  return panel;
}

function syncIndicatorInputs(weekId, field, value, source) {
  document.querySelectorAll(`[data-indicator-week="${weekId}"][data-indicator-field="${field}"]`).forEach((el) => {
    if (el !== source) el.value = field === "impactNote" || value === "" ? value : arNum(value);
  });
}

function normalizePercent(value) {
  if (String(value).trim() === "") return "";
  const latin = String(value)
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .replace(/[^0-9.]/g, "");
  if (!latin) return "";
  const number = Number(latin);
  if (!Number.isFinite(number)) return "";
  return Math.max(0, Math.min(100, number));
}

function updateCompleteButton(button, weekId) {
  const complete = Boolean(state.completed[completionKey(weekId)]);
  button.classList.toggle("is-complete", complete);
  button.textContent = complete ? "✓ تم التنفيذ" : "○ تحديد: تم التنفيذ";
}

function renderPlanTable() {
  const table = document.querySelector("#planTable");
  table.innerHTML = "";

  table.appendChild(createCell("table-head row-label", "الأسبوع"));
  weeks.forEach((week) => {
    table.appendChild(createCell("table-head", `<div><strong>${week.title}</strong><br><span class="week-theme">${week.theme}</span></div>`));
  });

  table.appendChild(createCell("row-label", '<span class="icon">📅</span><span>التاريخ</span>'));
  weeks.forEach((week) => {
    table.appendChild(createCell("date-cell", `<div>${week.dates[0]}<br>${week.dates[1]}</div>`));
  });

  table.appendChild(createCell("row-label", '<span class="icon">🎯</span><span>برامج التوجيه الطلابي<br>(الفعاليات)</span>'));
  weeks.forEach((week) => {
    const cell = createCell("program-cell");
    const list = document.createElement("ul");
    list.className = "program-list";
    week.programs.forEach((program) => {
      const li = document.createElement("li");
      li.textContent = program;
      list.appendChild(li);
    });
    cell.append(list, renderIdeaDetails(week, "program"));
    table.appendChild(cell);
  });

  table.appendChild(createCell("row-label", '<span class="icon">💎</span><span>القيم</span>'));
  weeks.forEach((week) => {
    const cell = createCell("value-cell");
    const title = document.createElement("p");
    title.className = "value-title";
    title.textContent = week.value;
    cell.append(title, renderIdeaDetails(week, "value"));
    table.appendChild(cell);
  });

  table.appendChild(createCell("row-label followup-label", '<span class="icon">📊</span><span>متابعة الأسبوع</span>'));
  weeks.forEach((week) => {
    const cell = createCell("followup-cell");
    cell.appendChild(renderFollowupPanel(week));
    table.appendChild(cell);
  });
}

function renderWeekCards() {
  const container = document.querySelector("#weekCards");
  container.innerHTML = "";

  weeks.forEach((week) => {
    const card = document.createElement("article");
    card.className = "week-card";
    card.id = `week-card-${week.id}`;

    const head = document.createElement("div");
    head.className = "week-card__head";
    const stats = getWeekIdeaStats(week);
    head.innerHTML = `
      <h3>${week.title} — ${week.theme}</h3>
      <p>${week.dates[0]} إلى ${week.dates[1]}</p>
      <div class="week-card__status"><span>الأفكار المحددة: <b data-week-done="${week.id}">${arNum(stats.done)} / ${arNum(stats.total)}</b></span><span data-week-status="${week.id}">${state.completed[completionKey(week.id)] ? "✓ تم التنفيذ" : "قيد التنفيذ"}</span></div>
    `;

    const body = document.createElement("div");
    body.className = "week-card__body";

    const programs = document.createElement("section");
    programs.className = "week-card__section";
    programs.innerHTML = `<h4>🎯 برامج التوجيه الطلابي</h4><ul class="program-list">${week.programs.map((program) => `<li>${escapeHtml(program)}</li>`).join("")}</ul>`;
    programs.appendChild(renderIdeaDetails(week, "program"));

    const values = document.createElement("section");
    values.className = "week-card__section";
    values.innerHTML = `<h4>💎 القيمة المستهدفة</h4><p class="value-title">${escapeHtml(week.value)}</p>`;
    values.appendChild(renderIdeaDetails(week, "value"));

    const followup = document.createElement("section");
    followup.className = "week-card__section";
    followup.innerHTML = "<h4>📊 متابعة التنفيذ والتوثيق</h4>";
    followup.appendChild(renderFollowupPanel(week));

    body.append(programs, values, followup);
    card.append(head, body);
    container.appendChild(card);
  });
}


function updateDailyPlanProgress(weekId) {
  const stats = getWeekDailyStats(weekId);
  document.querySelectorAll(`[data-daily-progress-week="${weekId}"]`).forEach((el) => {
    el.textContent = `${arNum(stats.planned)} من ${arNum(stats.total)} أيام مخططة • ${arNum(stats.done)} منفذة`;
  });
  const week = weeks.find((item) => item.id === Number(weekId));
  if (week) {
    const readiness = getWeekReadiness(week);
    document.querySelectorAll(`[data-readiness-week="${weekId}"]`).forEach((el) => {
      el.textContent = `${arNum(readiness)}٪ — ${readinessLabel(readiness)}`;
    });
    document.querySelectorAll(`[data-readiness-bar="${weekId}"]`).forEach((el) => {
      el.style.width = `${readiness}%`;
    });
  }
  syncWeekNavigatorUI();
}

function createDailyField(labelText, value, placeholder, { wide = false, textarea = false, maxLength = 600, onInput } = {}) {
  const label = document.createElement("label");
  if (wide) label.classList.add("wide");
  const span = document.createElement("span");
  span.textContent = labelText;
  const field = document.createElement(textarea ? "textarea" : "input");
  if (!textarea) field.type = "text";
  field.maxLength = maxLength;
  field.placeholder = placeholder;
  field.value = value || "";
  field.addEventListener("input", () => onInput?.(field.value));
  label.append(span, field);
  return label;
}

function renderDailyPlanner(week) {
  const section = document.createElement("section");
  section.className = "daily-planner";

  const head = document.createElement("div");
  head.className = "daily-planner__head";
  const copy = document.createElement("div");
  copy.innerHTML = '<span class="eyebrow">التخطيط اليومي</span><h4>خطة أيام الأسبوع</h4>';
  const progress = document.createElement("span");
  progress.className = "daily-progress-pill";
  progress.dataset.dailyProgressWeek = String(week.id);
  head.append(copy, progress);

  const grid = document.createElement("div");
  grid.className = "day-plan-grid";
  dailyPlansForWeek(week).forEach((day) => {
    const card = document.createElement("article");
    card.className = `day-plan-card${day.done ? " is-done" : ""}`;

    const cardHead = document.createElement("div");
    cardHead.className = "day-plan-head";
    const title = document.createElement("div");
    title.className = "day-title";
    const badge = document.createElement("span");
    badge.className = "day-index";
    badge.textContent = arNum(day.index + 1);
    const titleText = document.createElement("div");
    const strong = document.createElement("strong");
    strong.textContent = day.name;
    const small = document.createElement("small");
    small.textContent = day.date;
    titleText.append(strong, small);
    title.append(badge, titleText);

    const dayActions = document.createElement("div");
    dayActions.className = "day-head-actions";
    if (day.index > 0) {
      const copyPrevious = document.createElement("button");
      copyPrevious.type = "button";
      copyPrevious.className = "day-copy-btn";
      copyPrevious.textContent = "↳ نسخ السابق";
      copyPrevious.title = "نسخ محتوى اليوم السابق إلى هذا اليوم";
      copyPrevious.addEventListener("click", () => {
        const previous = getDayPlan(week.id, day.index - 1);
        if (!dayPlanHasContent(previous)) {
          toast("اليوم السابق لا يحتوي خطة لنسخها");
          return;
        }
        state.dayPlans[dayPlanKey(week.id, day.index)] = {
          activity: previous.activity,
          objective: previous.objective,
          details: previous.details,
          notes: previous.notes,
          done: false
        };
        persistState("تم نسخ خطة اليوم السابق");
        renderWeekWorkspace();
        refreshDynamicUI();
      });
      dayActions.appendChild(copyPrevious);
    }

    const doneLabel = document.createElement("label");
    doneLabel.className = "day-done-toggle";
    const done = document.createElement("input");
    done.type = "checkbox";
    done.checked = day.done;
    const doneText = document.createElement("span");
    doneText.textContent = "تم تنفيذ خطة اليوم";
    done.addEventListener("change", () => {
      setDayPlanField(week.id, day.index, "done", done.checked);
      card.classList.toggle("is-done", done.checked);
      updateDailyPlanProgress(week.id);
      renderDashboard();
      renderProgramCenterV15();
    });
    doneLabel.append(done, doneText);
    dayActions.appendChild(doneLabel);
    cardHead.append(title, dayActions);

    const fields = document.createElement("div");
    fields.className = "day-plan-fields";
    const saveField = (fieldName) => (value) => {
      setDayPlanField(week.id, day.index, fieldName, value);
      updateDailyPlanProgress(week.id);
      renderDashboard();
      renderProgramCenterV15();
    };
    fields.append(
      createDailyField("البرنامج / النشاط", day.activity, "مثال: لقاء توعوي أو مبادرة أو متابعة…", { maxLength: 240, onInput: saveField("activity") }),
      createDailyField("الهدف اليومي", day.objective, "ما الهدف الذي تريد تحقيقه اليوم؟", { maxLength: 320, onInput: saveField("objective") }),
      createDailyField("خطة التنفيذ", day.details, "اكتب خطوات التنفيذ أو ما ستقوم به خلال هذا اليوم بصورة واضحة…", { wide: true, textarea: true, maxLength: 1800, onInput: saveField("details") }),
      createDailyField("ملاحظات اليوم", day.notes, "ملاحظة مختصرة أو متابعة مطلوبة…", { wide: true, textarea: true, maxLength: 900, onInput: saveField("notes") })
    );

    card.append(cardHead, fields);
    grid.appendChild(card);
  });

  section.append(head, grid);
  queueMicrotask(() => updateDailyPlanProgress(week.id));
  return section;
}

function syncWeekNavigatorUI() {
  const activeId = weeks.some((week) => week.id === Number(state.activeWeekId)) ? Number(state.activeWeekId) : weeks[0].id;
  const index = weeks.findIndex((week) => week.id === activeId);
  const selector = document.querySelector("#weekSelector");
  if (selector) selector.value = String(activeId);
  const prev = document.querySelector("#prevWeekBtn");
  const next = document.querySelector("#nextWeekBtn");
  if (prev) prev.disabled = index <= 0;
  if (next) next.disabled = index >= weeks.length - 1;
  const progress = document.querySelector("#weekNavProgress");
  if (progress) {
    const stats = getWeekDailyStats(activeId);
    const complete = Boolean(state.completed[completionKey(activeId)]);
    const week = weeks[index] || weeks[0];
    const readiness = getWeekReadiness(week);
    progress.innerHTML = `<span>${week?.title || "الأسبوع"} من ${arNum(weeks.length)}</span><strong>جاهزية التوثيق ${arNum(readiness)}٪</strong><span>${arNum(stats.planned)}/${arNum(stats.total)} أيام مخططة${complete ? " • ✓ تم التنفيذ" : ""}</span>`;
  }
}

function setActiveWeek(weekId) {
  const normalized = weeks.some((week) => week.id === Number(weekId)) ? Number(weekId) : weeks[0].id;
  if (state.activeWeekId === normalized) return;
  state.activeWeekId = normalized;
  persistState();
  renderWeekWorkspace();
  refreshDynamicUI();
  syncEvidenceStudio();
  syncProgramReportStudio();
  document.querySelector("#weekWorkspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function wireWeekNavigator() {
  const selector = document.querySelector("#weekSelector");
  if (selector) {
    selector.innerHTML = "";
    weeks.forEach((week) => {
      const option = document.createElement("option");
      option.value = String(week.id);
      option.textContent = `${week.title} — ${week.theme} — ${week.dates[0]} إلى ${week.dates[1]}`;
      selector.appendChild(option);
    });
    selector.addEventListener("change", () => setActiveWeek(Number(selector.value)));
  }
  document.querySelector("#prevWeekBtn")?.addEventListener("click", () => {
    const index = weeks.findIndex((week) => week.id === Number(state.activeWeekId));
    if (index > 0) setActiveWeek(weeks[index - 1].id);
  });
  document.querySelector("#nextWeekBtn")?.addEventListener("click", () => {
    const index = weeks.findIndex((week) => week.id === Number(state.activeWeekId));
    if (index >= 0 && index < weeks.length - 1) setActiveWeek(weeks[index + 1].id);
  });
  syncWeekNavigatorUI();
}

function renderWeekMiniDashboard(week) {
  const daily = getWeekDailyStats(week.id);
  const readiness = getWeekReadiness(week);
  const ideas = selectedIdeasForWeek(week).length;
  const evidence = (evidenceCache[week.id] || []).length;
  const wrap = document.createElement("div");
  wrap.className = "week-mini-dashboard";
  wrap.innerHTML = `
    <div class="week-mini-stat week-mini-stat--readiness"><span>جاهزية التوثيق</span><strong data-readiness-week="${week.id}">${arNum(readiness)}٪ — ${readinessLabel(readiness)}</strong><div class="mini-progress"><i data-readiness-bar="${week.id}" style="width:${readiness}%"></i></div></div>
    <div class="week-mini-stat"><span>أيام مخططة</span><strong>${arNum(daily.planned)} / ${arNum(daily.total)}</strong><small>${arNum(daily.done)} منفذة</small></div>
    <div class="week-mini-stat"><span>أفكار مختارة</span><strong>${arNum(ideas)}</strong><small>من بنك الأفكار</small></div>
    <div class="week-mini-stat"><span>شواهد مؤقتة</span><strong>${arNum(evidence)}</strong><small>صورة في الجلسة</small></div>`;
  return wrap;
}

function renderWeekWorkspace() {
  const container = document.querySelector("#weekWorkspace");
  if (!container) return;
  const week = weeks.find((item) => item.id === Number(state.activeWeekId)) || weeks[0];
  state.activeWeekId = week.id;
  container.innerHTML = "";

  const article = document.createElement("article");
  article.className = "week-focus-card";

  const head = document.createElement("header");
  head.className = "week-focus-head";
  const copy = document.createElement("div");
  copy.className = "week-focus-copy";
  copy.innerHTML = `<span class="week-focus-kicker">✦ مساحة أسبوعية مستقلة</span><h3>${escapeHtml(week.title)} — ${escapeHtml(week.theme)}</h3><p>${escapeHtml(week.dates[0])} إلى ${escapeHtml(week.dates[1])}</p><div class="week-focus-meta"><span>💎 ${escapeHtml(week.value)}</span><span data-week-status="${week.id}">${state.completed[completionKey(week.id)] ? "✓ تم التنفيذ" : "قيد التنفيذ"}</span><span data-daily-progress-week="${week.id}"></span><span class="readiness-chip">✦ <b data-readiness-week="${week.id}">${arNum(getWeekReadiness(week))}٪ — ${readinessLabel(getWeekReadiness(week))}</b></span></div>`;
  const orb = document.createElement("div");
  orb.className = "week-number-orb";
  orb.textContent = arNum(week.id);
  head.append(copy, orb);

  const body = document.createElement("div");
  body.className = "week-body";

  const summary = document.createElement("div");
  summary.className = "week-summary-strip";
  const programsBox = document.createElement("div");
  programsBox.className = "week-summary-box";
  const programsTitle = document.createElement("h4");
  programsTitle.textContent = "🎯 برامج هذا الأسبوع";
  const programs = document.createElement("ul");
  programs.className = "week-programs-inline";
  week.programs.forEach((program) => {
    const item = document.createElement("li");
    item.textContent = program;
    programs.appendChild(item);
  });
  programsBox.append(programsTitle, programs);
  const valueBox = document.createElement("div");
  valueBox.className = "week-summary-box";
  const valueTitle = document.createElement("h4");
  valueTitle.textContent = "💎 القيمة المستهدفة";
  const value = document.createElement("div");
  value.className = "week-value-badge";
  value.textContent = week.value;
  valueBox.append(valueTitle, value);
  summary.append(programsBox, valueBox);

  body.append(summary, renderWeekMiniDashboard(week), renderDailyPlanner(week));

  const tools = document.createElement("div");
  tools.className = "week-tools-grid";
  const programTool = document.createElement("section");
  programTool.className = "week-tool-card";
  const pHeading = document.createElement("h4");
  pHeading.textContent = "💡 أفكار تنفيذ البرامج";
  programTool.append(pHeading, renderIdeaDetails(week, "program"));

  const valueTool = document.createElement("section");
  valueTool.className = "week-tool-card";
  const vHeading = document.createElement("h4");
  vHeading.textContent = "💎 أفكار تفعيل القيمة";
  valueTool.append(vHeading, renderIdeaDetails(week, "value"));

  const followupTool = document.createElement("section");
  followupTool.className = "week-tool-card week-tool-card--followup";
  const fHeading = document.createElement("h4");
  fHeading.textContent = "📊 متابعة الأسبوع والتوثيق";
  followupTool.append(fHeading, renderFollowupPanel(week));
  tools.append(programTool, valueTool, followupTool);
  body.appendChild(tools);

  const actions = document.createElement("div");
  actions.className = "week-quick-actions";
  const save = document.createElement("button");
  save.className = "btn btn--primary";
  save.type = "button";
  save.textContent = "💾 حفظ هذا الأسبوع";
  save.addEventListener("click", () => persistState(`تم حفظ ${week.title}`));
  const excel = document.createElement("button");
  excel.className = "btn btn--soft";
  excel.type = "button";
  excel.textContent = "📊 Excel لهذا الأسبوع";
  excel.addEventListener("click", () => exportExcel([week]));
  const word = document.createElement("button");
  word.className = "btn btn--soft";
  word.type = "button";
  word.textContent = "📝 Word لهذا الأسبوع";
  word.addEventListener("click", () => exportWord([week]));
  const pdf = document.createElement("button");
  pdf.className = "btn";
  pdf.type = "button";
  pdf.textContent = "🖨️ تقرير PDF لهذا الأسبوع";
  pdf.addEventListener("click", () => printWeekReport(week));
  const reportFlow = document.createElement("button");
  reportFlow.className = "btn btn--report-form";
  reportFlow.type = "button";
  reportFlow.textContent = "🔗 إنشاء تقرير من خطة الأسبوع";
  reportFlow.addEventListener("click", () => openProgramReportFromWeekV15(week));
  const evidenceDoc = document.createElement("button");
  evidenceDoc.className = "btn btn--evidence";
  evidenceDoc.type = "button";
  evidenceDoc.textContent = "📷 نموذج شواهد البرنامج";
  evidenceDoc.addEventListener("click", () => openEvidenceWorkflowV15(week));
  const review = document.createElement("button");
  review.className = "btn btn--review";
  review.type = "button";
  review.textContent = "🔍 مراجعة جاهزية التقرير";
  review.addEventListener("click", () => showSmartReviewForWeekV15(week));
  actions.append(save, excel, word, pdf, reportFlow, evidenceDoc, review);
  body.appendChild(actions);

  article.append(head, body);
  container.appendChild(article);
  syncWeekNavigatorUI();
  renderEvidenceGrids(week.id);
}

function renderDashboard() {
  const dashboard = document.querySelector("#dashboard");
  const completedCount = weeks.filter((week) => Boolean(state.completed[completionKey(week.id)])).length;
  const selectedIdeas = weeks.reduce((sum, week) => sum + selectedIdeasForWeek(week).length, 0);
  const validAchievements = weeks
    .map((week) => getIndicator(week.id).achievement)
    .filter((value) => value !== "" && Number.isFinite(Number(value)))
    .map(Number);
  const avgAchievement = validAchievements.length
    ? Math.round(validAchievements.reduce((sum, value) => sum + value, 0) / validAchievements.length)
    : 0;
  const evidenceCount = weeks.reduce((sum, week) => sum + (evidenceCache[week.id]?.length || 0), 0);
  const dailyStats = getAllDailyPlanStats();

  dashboard.innerHTML = `
    <div class="metric-card"><span class="metric-card__icon">✅</span><span class="metric-card__value">${arNum(completedCount)} / ٧</span><span class="metric-card__label">أسابيع تم تنفيذها</span></div>
    <div class="metric-card"><span class="metric-card__icon">📅</span><span class="metric-card__value">${arNum(dailyStats.planned)} / ${arNum(dailyStats.total)}</span><span class="metric-card__label">أيام تمت كتابة خطتها</span></div>
    <div class="metric-card"><span class="metric-card__icon">💡</span><span class="metric-card__value">${arNum(selectedIdeas)}</span><span class="metric-card__label">أفكار تم اختيارها وتنفيذها</span></div>
    <div class="metric-card"><span class="metric-card__icon">📈</span><span class="metric-card__value">${arNum(avgAchievement)}٪</span><span class="metric-card__label">متوسط تحقق الهدف المدخل</span></div>
    <div class="metric-card"><span class="metric-card__icon">📸</span><span class="metric-card__value">${arNum(evidenceCount)}</span><span class="metric-card__label">صور توثيق مؤقتة</span></div>
  `;

  const passport = document.querySelector("#impactPassport");
  passport.innerHTML = "";
  weeks.forEach((week) => {
    const complete = Boolean(state.completed[completionKey(week.id)]);
    const stamp = document.createElement("div");
    stamp.className = `passport-stamp ${complete ? "is-complete" : ""}`;
    stamp.innerHTML = `<div><span class="passport-stamp__seal">${complete ? "🏅" : "○"}</span><strong>${week.title}</strong><small>${escapeHtml(week.value)}</small></div>`;
    passport.appendChild(stamp);
  });
  const status = document.querySelector("#passportStatus");
  if (status) status.textContent = `${arNum(completedCount)} من ٧`;
}

function refreshDynamicUI() {
  document.querySelectorAll(".idea-details").forEach((details) => {
    updateProgress(details, Number(details.dataset.week), details.dataset.type);
  });

  weeks.forEach((week) => {
    document.querySelectorAll(`[data-complete-week="${week.id}"]`).forEach((button) => updateCompleteButton(button, week.id));
    const stats = getWeekIdeaStats(week);
    document.querySelectorAll(`[data-week-done="${week.id}"]`).forEach((el) => {
      el.textContent = `${arNum(stats.done)} / ${arNum(stats.total)}`;
    });
    document.querySelectorAll(`[data-week-status="${week.id}"]`).forEach((el) => {
      el.textContent = state.completed[completionKey(week.id)] ? "✓ تم التنفيذ" : "قيد التنفيذ";
    });
    updateEvidenceCounts(week.id);
    updateDailyPlanProgress(week.id);
  });
  syncWeekNavigatorUI();
  renderDashboard();
  renderProgramCenterV15();
}

function renderAll() {
  renderWeekWorkspace();
  refreshDynamicUI();
}

function clearEvidenceCache() {
  weeks.forEach((week) => { evidenceCache[week.id] = []; });
}

async function purgeLegacyEvidenceDB() {
  if (!("indexedDB" in window)) return;
  await new Promise((resolve) => {
    try {
      const request = indexedDB.deleteDatabase("guidance-plan-evidence-db");
      request.onsuccess = request.onerror = request.onblocked = () => resolve();
    } catch {
      resolve();
    }
  });
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("تعذر قراءة الملف"));
    reader.readAsDataURL(file);
  });
}

async function processImage(file, { maxDimension = 1600, quality = 0.82, outputType = "image/jpeg" } = {}) {
  if (!allowedImageTypes.has(file.type)) throw new Error("نوع الصورة غير مدعوم");
  const original = await fileToDataUrl(file);
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      try {
        if (!img.width || !img.height) throw new Error("أبعاد الصورة غير صالحة");
        const ratio = Math.min(1, maxDimension / Math.max(img.width, img.height));
        const width = Math.max(1, Math.round(img.width * ratio));
        const height = Math.max(1, Math.round(img.height * ratio));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d", { alpha: false });
        if (!ctx) throw new Error("تعذر معالجة الصورة");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL(outputType, quality);
        if (!dataUrl.startsWith(`data:${outputType}`)) throw new Error("تعذر إعادة ترميز الصورة");
        resolve(dataUrl);
      } catch (error) {
        reject(error);
      }
    };
    img.onerror = () => reject(new Error("الصورة تالفة أو غير قابلة للمعالجة"));
    img.src = original;
  });
}

async function handleEvidenceUpload(weekId, files) {
  const current = evidenceCache[weekId] || [];
  const remaining = Math.max(0, 12 - current.length);
  if (!remaining) {
    toast("الحد الأقصى ١٢ صورة مؤقتة لكل أسبوع (٣ صفحات A4)");
    return;
  }

  const accepted = [];
  let rejected = 0;
  for (const file of files.slice(0, remaining)) {
    if (!allowedImageTypes.has(file.type) || file.size > MAX_EVIDENCE_FILE_SIZE) {
      rejected += 1;
      continue;
    }
    accepted.push(file);
  }
  if (!accepted.length) {
    toast("اختر PNG أو JPEG أو WebP بحجم لا يتجاوز ٥ م.ب للصورة");
    return;
  }

  setStatus("جارٍ تجهيز صور التوثيق المؤقتة…");
  for (const [index, file] of accepted.entries()) {
    try {
      const dataUrl = await processImage(file, { maxDimension: 1600, quality: 0.8, outputType: "image/jpeg" });
      current.push({
        id: `w${weekId}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`,
        weekId: Number(weekId),
        name: safeString(file.name, 160),
        dataUrl,
        createdAt: Date.now() + index
      });
    } catch {
      rejected += 1;
    }
  }
  evidenceCache[weekId] = current;
  renderEvidenceGrids(weekId);
  refreshDynamicUI();
  toast(rejected ? "تمت إضافة الصور المقبولة فقط؛ الصور غير الآمنة/الكبيرة رُفضت" : "تمت إضافة صور التوثيق مؤقتًا");
}

function updateEvidenceCounts(weekId) {
  const count = evidenceCache[weekId]?.length || 0;
  document.querySelectorAll(`[data-evidence-count="${weekId}"]`).forEach((el) => {
    el.textContent = arNum(count);
  });
}

function renderEvidenceGrids(weekId) {
  const items = evidenceCache[weekId] || [];
  document.querySelectorAll(`[data-evidence-grid="${weekId}"]`).forEach((grid) => {
    grid.innerHTML = "";
    if (!items.length) {
      const empty = document.createElement("div");
      empty.className = "empty-evidence";
      empty.textContent = "لم تُضف صور توثيق مؤقتة بعد";
      grid.appendChild(empty);
      return;
    }
    items.forEach((item) => {
      const wrap = document.createElement("div");
      wrap.className = "evidence-item";
      const img = document.createElement("img");
      img.src = item.dataUrl;
      img.alt = item.name || "صورة توثيق";
      const remove = document.createElement("button");
      remove.type = "button";
      remove.textContent = "×";
      remove.title = "حذف الصورة المؤقتة";
      remove.addEventListener("click", () => {
        if (!confirm("حذف صورة التوثيق المؤقتة؟")) return;
        evidenceCache[weekId] = (evidenceCache[weekId] || []).filter((entry) => entry.id !== item.id);
        renderEvidenceGrids(weekId);
        refreshDynamicUI();
        toast("تم حذف الصورة المؤقتة");
      });
      wrap.append(img, remove);
      grid.appendChild(wrap);
    });
  });
  updateEvidenceCounts(weekId);
}

function loadEvidence() {
  clearEvidenceCache();
  weeks.forEach((week) => renderEvidenceGrids(week.id));
  renderDashboard();
}

function selectedIdeasForWeek(week) {
  return [...getAllIdeas(week, "program"), ...getAllIdeas(week, "value")]
    .filter((idea) => Boolean(state.checks[idea.id]))
    .map((idea) => idea.text);
}

function reportCss() {
  return `
    @page{size:A4;margin:12mm}*{box-sizing:border-box}body{font-family:Tahoma,Arial,sans-serif;direction:rtl;color:#173638;margin:0;background:#fff;line-height:1.75}.report-header{display:grid;grid-template-columns:88px 1fr;gap:16px;align-items:center;padding:20px;border-radius:18px;background:linear-gradient(120deg,#14958f,#056862);color:#fff;margin-bottom:16px}.report-header img{width:78px;height:78px;object-fit:contain;border-radius:16px;background:#fff;padding:6px}.report-header h1{margin:0 0 5px;font-size:22px}.report-header p{margin:2px 0}.meta{display:grid;grid-template-columns:1fr 1fr;gap:9px;margin:13px 0}.meta div,.box{border:1px solid #d9e7e4;border-radius:12px;padding:11px;background:#fbfefd}.box{margin:11px 0;break-inside:avoid}.box h2{font-size:16px;color:#086b67;margin:0 0 9px}.data-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.data-item{padding:9px 10px;border-radius:9px;background:#f3f9f7;border:1px solid #e0ece9}.data-item.wide{grid-column:1/-1}ul{margin:0;padding-right:22px;line-height:1.9}.metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.metric{text-align:center;padding:11px;border-radius:10px;background:#eff8f6}.metric b{display:block;font-size:19px;color:#065c58}.photo-box{break-inside:auto}.photo-edit-hint{margin:0 0 10px;color:#607675;font-size:12px}.photos{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;align-items:start}.photos[data-photo-count="1"]{grid-template-columns:1fr}.report-photo{--photo-height:260px;margin:0;position:relative;min-width:0;padding:8px;border:1px solid #d9e8e5;border-radius:12px;background:#f8fbfa;break-inside:avoid;page-break-inside:avoid}.report-photo.is-wide{grid-column:1/-1}.report-photo img{display:block;width:100%;height:var(--photo-height);max-height:360px;object-fit:contain;object-position:center;border-radius:9px;background:#fff;border:1px solid #e0eae8}.report-photo figcaption{text-align:center;color:#667b79;font-size:11px;padding-top:5px}.report-photo.is-selected{outline:3px solid #15958e;outline-offset:2px}.report-photo.is-cover img{object-fit:cover}.pdf-toolbar{position:sticky;top:0;z-index:999;display:flex;flex-wrap:wrap;align-items:center;gap:7px;margin:0 0 14px;padding:10px;border:1px solid #cee2df;border-radius:14px;background:rgba(255,255,255,.97);box-shadow:0 10px 30px rgba(4,79,75,.14)}.pdf-toolbar button{border:1px solid #cfe1de;border-radius:10px;padding:8px 10px;background:#fff;color:#075f5b;font-weight:700;cursor:pointer}.pdf-toolbar button.primary{background:#0b8f88;color:#fff;border-color:#0b8f88}.pdf-toolbar .pdf-tip{flex:1 1 100%;font-size:11px;color:#607675}.pdf-toolbar button:disabled{opacity:.45;cursor:not-allowed}.pdf-preview-note{padding:8px 10px;border-radius:10px;background:#edf8f6;color:#386462;font-size:12px;margin-bottom:10px}.week-summary{break-inside:avoid;border:1px solid #dbe6e3;border-radius:13px;padding:13px;margin:11px 0}.week-summary h2{margin:0 0 8px;color:#086b67}.status{display:inline-block;padding:5px 9px;border-radius:999px;background:#eaf7f4;color:#065c58;font-weight:bold}.disclaimer{padding:9px 11px;border-radius:10px;background:#fff8e8;border:1px solid #ead9ad;color:#6b5727;font-size:12px}.muted{color:#6a7d7d}footer{text-align:center;margin-top:20px;padding-top:11px;border-top:1px solid #dfe8e6;font-weight:bold;color:#086b67}@media(max-width:600px){.meta,.data-grid{grid-template-columns:1fr}.report-header{grid-template-columns:65px 1fr}.report-header img{width:58px;height:58px}}@media print{.no-print,.pdf-toolbar,.pdf-preview-note{display:none!important}.photo-box{break-inside:auto}.report-photo{break-inside:avoid;page-break-inside:avoid}.report-photo img{background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}`;
}

function displayValue(value) {
  return value == null || String(value).trim() === "" ? "—" : escapeHtml(String(value));
}

function getReportLogoSrc() {
  return state.report?.logoDataUrl || new URL("forum-logo.png", window.location.href).href;
}

function reportHeaderHtml(title, subtitle = "") {
  return `<header class="report-header"><img src="${escapeHtml(getReportLogoSrc())}" alt="شعار التقرير"><div><h1>${escapeHtml(title)}</h1>${subtitle ? `<p>${escapeHtml(subtitle)}</p>` : ""}<p>الخطة التفاعلية لبرامج التوجيه الطلابي والقيم</p></div></header>`;
}

function reportIdentityMeta(extra = "") {
  return `<div class="meta">
    <div><b>اسم مُعدّ التقرير:</b> ${displayValue(state.report?.userName)}</div>
    <div><b>إدارة التعليم:</b> ${displayValue(state.admin)}</div>
    <div><b>اسم المدرسة:</b> ${displayValue(state.school)}</div>
    <div><b>مدير المدرسة:</b> ${displayValue(state.report?.principalName)}</div>
    ${state.report?.academicYear ? `<div><b>العام الدراسي:</b> ${displayValue(state.report.academicYear)}</div>` : ""}
    ${extra}
  </div>`;
}

function dailyPlanReportHtml(week) {
  const days = dailyPlansForWeek(week).filter((day) => dayPlanHasContent(day));
  if (!days.length) return "<p>لم تُكتب خطة يومية لهذا الأسبوع بعد.</p>";
  return `<div class="data-grid">${days.map((day) => {
    const pieces = [day.activity, day.objective, day.details, day.notes].filter((item) => String(item || "").trim());
    const status = day.done ? " — ✓ تم التنفيذ" : "";
    return `<div class="data-item wide"><b>${escapeHtml(day.name)} — ${escapeHtml(day.date)}:</b> ${displayValue(pieces.join(" • "))}${status}</div>`;
  }).join("")}</div>`;
}

function buildWeekSummaryHtml(week, { includePhotos = false, detailed = false } = {}) {
  const indicator = getIndicator(week.id);
  const record = getNoorRecord(week.id);
  const ideas = selectedIdeasForWeek(week);
  const selectedProgramIdeas = selectedProgramIdeasForWeek(week);
  const procedure = record.procedure || selectedProgramIdeas.join(" • ") || "—";
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
  const chosenProgram = record.program || week.programs.join("، ");
  const programNote = state.notes[noteKey(week.id, "program")] || "";
  const valueNote = state.notes[noteKey(week.id, "value")] || "";
  const photos = evidenceCache[week.id] || [];

  if (!detailed) {
    return `<section class="week-summary"><h2>${escapeHtml(week.title)} — ${escapeHtml(week.theme)}</h2><p><span class="status">${status}</span> | <b>القيمة:</b> ${escapeHtml(week.value)}</p><div class="data-grid"><div class="data-item wide"><b>البرنامج:</b> ${displayValue(chosenProgram)}</div><div class="data-item wide"><b>الخطة اليومية:</b> ${displayValue(dailyPlanSummaryText(week))}</div><div class="data-item"><b>الفئة:</b> ${displayValue(record.targetGroup)}</div><div class="data-item"><b>عدد المستفيدين:</b> ${displayValue(record.beneficiaries)}</div><div class="data-item wide"><b>الإجراء:</b> ${displayValue(procedure)}</div><div class="data-item wide"><b>الشواهد:</b> ${displayValue(record.evidenceText)}</div><div class="data-item wide"><b>العوائق:</b> ${displayValue(record.obstacles)}</div></div><p><b>الأفكار المحددة:</b> ${arNum(ideas.length)} | <b>صور التوثيق المؤقتة:</b> ${arNum(photos.length)}</p><div class="metrics"><div class="metric"><b>${indicator.participation === "" ? "—" : `${arNum(indicator.participation)}٪`}</b>المشاركة</div><div class="metric"><b>${indicator.achievement === "" ? "—" : `${arNum(indicator.achievement)}٪`}</b>تحقق الهدف</div><div class="metric"><b>${indicator.satisfaction === "" ? "—" : `${arNum(indicator.satisfaction)}٪`}</b>الرضا</div></div>${indicator.impactNote ? `<p><b>أبرز أثر:</b> ${escapeHtml(indicator.impactNote)}</p>` : ""}${record.notes ? `<p><b>ملاحظات عامة:</b> ${escapeHtml(record.notes)}</p>` : ""}</section>`;
  }

  return `<section class="box"><h2>بيانات البرنامج والتفعيل</h2><div class="data-grid">
      <div class="data-item wide"><b>البرنامج:</b> ${displayValue(chosenProgram)}</div>
      <div class="data-item"><b>القيمة المستهدفة:</b> ${escapeHtml(week.value)}</div>
      <div class="data-item"><b>الفئة المستهدفة:</b> ${displayValue(record.targetGroup)}</div>
      <div class="data-item"><b>عدد المستفيدين:</b> ${displayValue(record.beneficiaries)}</div>
      <div class="data-item"><b>المشاركون في التنفيذ:</b> ${displayValue(record.participants)}</div>
      <div class="data-item wide"><b>إجراء التنفيذ:</b> ${displayValue(procedure)}</div>
    </div></section>
    <section class="box"><h2>الخطة اليومية للأسبوع</h2>${dailyPlanReportHtml(week)}</section>
    <section class="box"><h2>الأفكار المختارة</h2>${ideas.length ? `<ul>${ideas.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : "<p>لم يتم تحديد أفكار بعد.</p>"}</section>
    <section class="box"><h2>مؤشرات تحقيق الأهداف والأثر</h2><div class="metrics"><div class="metric"><b>${indicator.participation === "" ? "—" : `${arNum(indicator.participation)}٪`}</b>المشاركة</div><div class="metric"><b>${indicator.achievement === "" ? "—" : `${arNum(indicator.achievement)}٪`}</b>تحقق الهدف</div><div class="metric"><b>${indicator.satisfaction === "" ? "—" : `${arNum(indicator.satisfaction)}٪`}</b>رضا المستفيدين</div></div><p><b>الأثر الملحوظ:</b> ${displayValue(indicator.impactNote)}</p></section>
    <section class="box"><h2>الشواهد والعوائق والملاحظات</h2><div class="data-grid">
      <div class="data-item wide"><b>شواهد التنفيذ:</b> ${displayValue(record.evidenceText)}</div>
      <div class="data-item wide"><b>العوائق:</b> ${displayValue(record.obstacles)}</div>
      <div class="data-item wide"><b>ملاحظات عامة:</b> ${displayValue(record.notes)}</div>
      ${(programNote || valueNote) ? `<div class="data-item wide"><b>ملاحظات الخطة:</b> ${programNote ? escapeHtml(programNote) : ""}${programNote && valueNote ? " — " : ""}${valueNote ? escapeHtml(valueNote) : ""}</div>` : ""}
    </div></section>
    ${includePhotos ? `<section class="box photo-box"><h2>صور التوثيق المؤقتة</h2>${photos.length ? `<p class="photo-edit-hint no-print">اضغط على أي صورة لتحديدها، ثم عدّل ترتيبها أو حجمها من شريط أدوات المعاينة قبل حفظ PDF.</p><div class="photos photos--count-${Math.min(photos.length, 6)}" data-photo-count="${photos.length}">${photos.map((item, index) => `<figure class="report-photo${photos.length === 1 ? " is-wide" : ""}" data-report-photo="${index}" data-photo-height="260"><img src="${item.dataUrl}" alt="صورة توثيق ${index + 1}"><figcaption class="no-print">صورة ${arNum(index + 1)}</figcaption></figure>`).join("")}</div>` : "<p>لا توجد صور توثيق مؤقتة.</p>"}</section>` : ""}`;
}

function wirePdfPreviewWindow(win) {
  if (!win || win.closed) return;
  const doc = win.document;
  const grid = doc.querySelector('.photos');
  const figures = () => Array.from(doc.querySelectorAll('.report-photo'));
  let selected = null;

  function choose(figure) {
    figures().forEach((item) => item.classList.remove('is-selected'));
    selected = figure || null;
    if (selected) selected.classList.add('is-selected');
    syncButtons();
  }

  function syncButtons() {
    const needsSelection = ['widePhotoBtn','fitPhotoBtn','fillPhotoBtn','smallerPhotoBtn','largerPhotoBtn','rotatePhotoBtn','prevPhotoBtn','nextPhotoBtn'];
    needsSelection.forEach((id) => {
      const button = doc.getElementById(id);
      if (button) button.disabled = !selected;
    });
  }

  function bind(id, handler) {
    const el = doc.getElementById(id);
    if (el) el.addEventListener('click', handler);
  }

  figures().forEach((figure) => {
    figure.tabIndex = 0;
    figure.setAttribute('role', 'button');
    figure.setAttribute('aria-label', 'تحديد صورة التوثيق');
    figure.addEventListener('click', () => choose(figure));
    figure.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        choose(figure);
      }
    });
  });

  if (figures().length) choose(figures()[0]);
  else syncButtons();

  bind('printPdfBtn', () => {
    figures().forEach((item) => item.classList.remove('is-selected'));
    win.focus();
    win.print();
  });

  bind('oneColBtn', () => {
    if (!grid) return;
    grid.style.gridTemplateColumns = '1fr';
    figures().forEach((item) => item.classList.add('is-wide'));
  });

  bind('twoColBtn', () => {
    if (!grid) return;
    grid.style.gridTemplateColumns = 'repeat(2,minmax(0,1fr))';
    figures().forEach((item) => item.classList.remove('is-wide'));
    if (figures().length === 1) figures()[0].classList.add('is-wide');
  });

  bind('widePhotoBtn', () => {
    if (!selected) return;
    selected.classList.toggle('is-wide');
  });

  bind('fitPhotoBtn', () => {
    if (!selected) return;
    selected.classList.remove('is-cover');
  });

  bind('fillPhotoBtn', () => {
    if (!selected) return;
    selected.classList.add('is-cover');
  });

  function resize(delta) {
    if (!selected) return;
    const current = Number(selected.dataset.photoHeight || 260);
    const next = Math.max(120, Math.min(520, current + delta));
    selected.dataset.photoHeight = String(next);
    selected.style.setProperty('--photo-height', `${next}px`);
  }

  bind('smallerPhotoBtn', () => resize(-40));
  bind('largerPhotoBtn', () => resize(40));

  bind('rotatePhotoBtn', async () => {
    if (!selected) return;
    const img = selected.querySelector('img');
    if (!img) return;
    try {
      if (!img.complete && typeof img.decode === 'function') await img.decode();
      const width = img.naturalWidth || img.width;
      const height = img.naturalHeight || img.height;
      if (!width || !height) return;
      const canvas = doc.createElement('canvas');
      canvas.width = height;
      canvas.height = width;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(Math.PI / 2);
      ctx.drawImage(img, -width / 2, -height / 2, width, height);
      img.src = canvas.toDataURL('image/jpeg', .92);
      const current = Number(selected.dataset.photoHeight || 260);
      selected.style.setProperty('--photo-height', `${current}px`);
    } catch (error) {
      console.warn('تعذر تدوير صورة التقرير', error);
    }
  });

  bind('prevPhotoBtn', () => {
    if (!selected || !selected.parentElement) return;
    const previous = selected.previousElementSibling;
    if (previous) selected.parentElement.insertBefore(selected, previous);
  });

  bind('nextPhotoBtn', () => {
    if (!selected || !selected.parentElement) return;
    const next = selected.nextElementSibling;
    if (next) selected.parentElement.insertBefore(next, selected);
  });

  // تأكيد بصري أن أدوات المعاينة أصبحت جاهزة، مهم خصوصًا في Safari على iPad.
  const note = doc.querySelector('.pdf-preview-note');
  if (note) note.dataset.ready = 'true';
}

async function printWeekReport(week) {
  captureIdentity();
  persistState();
  const win = window.open('', '_blank');
  if (!win) {
    toast('اسمح بالنوافذ المنبثقة لفتح معاينة التقرير');
    return;
  }
  try { win.opener = null; } catch {}
  const status = state.completed[completionKey(week.id)] ? 'تم التنفيذ' : 'قيد التنفيذ';
  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>تقرير ${escapeHtml(week.title)}</title><style>${reportCss()}</style></head><body>
    <div class="pdf-toolbar no-print" role="toolbar" aria-label="أدوات ضبط صور التقرير">
      <button class="primary" type="button" id="printPdfBtn">🖨️ حفظ / طباعة PDF</button>
      <button type="button" id="oneColBtn">▣ صورة واحدة بالصف</button>
      <button type="button" id="twoColBtn">▦ صورتان بالصف</button>
      <button type="button" id="widePhotoBtn">↔ عرض كامل</button>
      <button type="button" id="fitPhotoBtn">⬚ احتواء</button>
      <button type="button" id="fillPhotoBtn">▣ ملء الإطار</button>
      <button type="button" id="smallerPhotoBtn">− تصغير</button>
      <button type="button" id="largerPhotoBtn">＋ تكبير</button>
      <button type="button" id="rotatePhotoBtn">↻ تدوير</button>
      <button type="button" id="prevPhotoBtn">← تقديم</button>
      <button type="button" id="nextPhotoBtn">تأخير →</button>
      <span class="pdf-tip">اضغط على الصورة أولًا لتحديدها. التعديلات هنا خاصة بمعاينة PDF الحالية ولا تغيّر الصورة الأصلية داخل التطبيق.</span>
    </div>
    <div class="pdf-preview-note no-print">اختر صورة ثم استخدم الأزرار لتعديل الحجم أو العرض أو الترتيب، وبعدها اختر «حفظ / طباعة PDF».</div>
    ${reportHeaderHtml(`بطاقة التوثيق الأسبوعية — ${week.title}`, week.theme)}
    ${reportIdentityMeta(`<div><b>الفترة:</b> ${escapeHtml(week.dates[0])} – ${escapeHtml(week.dates[1])}</div><div><b>الحالة:</b> <span class="status">${status}</span></div>`)}
    ${buildWeekSummaryHtml(week, { includePhotos: true, detailed: true })}
    <footer>أ/ فاطمة هزازي</footer>
  </body></html>`;
  win.document.open();
  win.document.write(html);
  win.document.close();

  // لا نستخدم JavaScript مضمّنًا داخل نافذة التقرير؛ سياسة CSP تمنعه على Safari.
  // بدلاً من ذلك نربط الأزرار مباشرة من التطبيق الأصلي بعد إنشاء النافذة.
  setTimeout(() => {
    try {
      wirePdfPreviewWindow(win);
      win.focus();
    } catch (error) {
      console.error('تعذر تفعيل أدوات معاينة PDF', error);
    }
  }, 30);

  toast('فتحت معاينة PDF؛ أصبحت أدوات تعديل الصور مفعّلة');
}

function buildFinalReportHtml({ autoPrint = false, includePhotos = false } = {}) {
  captureIdentity();
  const completedCount = weeks.filter((week) => Boolean(state.completed[completionKey(week.id)])).length;
  const totalEvidence = weeks.reduce((sum, week) => sum + (evidenceCache[week.id]?.length || 0), 0);
  const sections = weeks.map((week) => buildWeekSummaryHtml(week, { includePhotos, detailed: false })).join("");
  return `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>التقرير الختامي للخطة</title><style>${reportCss()}</style></head><body>
    ${reportHeaderHtml("التقرير الختامي — «أثري يبدأ مني»", "تقرير منظم للتخطيط والتنفيذ وقياس الأثر")}
    ${reportIdentityMeta(`<div><b>الأسابيع المنفذة:</b> ${arNum(completedCount)} من ٧</div><div><b>صور التوثيق المؤقتة الحالية:</b> ${arNum(totalEvidence)}</div>`)}
    ${sections}
    <footer>أ/ فاطمة هزازي</footer>
    ${autoPrint ? '<script>window.onload=()=>setTimeout(()=>window.print(),250)<\\/script>' : ""}
  </body></html>`;
}

function printFinalReport() {
  captureIdentity();
  persistState();
  const win = window.open("", "_blank");
  if (!win) {
    toast("اسمح بالنوافذ المنبثقة لطباعة التقرير");
    return;
  }
  try { win.opener = null; } catch {}
  win.document.open();
  win.document.write(buildFinalReportHtml({ autoPrint: false, includePhotos: false }));
  win.document.close();
  setTimeout(() => {
    try { win.focus(); win.print(); } catch {}
  }, 180);
}

function cloneStateForWeeks(selection) {
  const selectedWeeks = Array.isArray(selection) && selection.length ? selection : weeks;
  const selectedIds = selectedWeeks.map((week) => Number(week.id));
  const clean = blankState();
  clean.admin = safeString(state.admin, 120);
  clean.school = safeString(state.school, 120);
  clean.privacyAcknowledged = Boolean(state.privacyAcknowledged);
  clean.report = {
    userName: safeString(state.report?.userName, 120),
    principalName: safeString(state.report?.principalName, 120),
    academicYear: safeString(state.report?.academicYear, 60),
    logoDataUrl: safeString(state.report?.logoDataUrl, 5000000),
    logoName: safeString(state.report?.logoName, 200)
  };

  const belongsToSelection = (key) => selectedIds.some((id) => String(key).startsWith(`w${id}`));

  Object.entries(state.checks || {}).forEach(([key, value]) => {
    if (belongsToSelection(key)) clean.checks[key] = Boolean(value);
  });
  Object.entries(state.notes || {}).forEach(([key, value]) => {
    if (belongsToSelection(key)) clean.notes[key] = safeString(value, 1500);
  });
  Object.entries(state.custom || {}).forEach(([key, value]) => {
    if (belongsToSelection(key) && Array.isArray(value)) clean.custom[key] = value.slice(0, 30).map((item) => safeString(item, 300)).filter(Boolean);
  });
  Object.entries(state.dayPlans || {}).forEach(([key, value]) => {
    if (!belongsToSelection(key) || !value || typeof value !== "object") return;
    clean.dayPlans[key] = {
      activity: safeString(value.activity, 240),
      objective: safeString(value.objective, 320),
      details: safeString(value.details, 1800),
      notes: safeString(value.notes, 900),
      done: Boolean(value.done)
    };
  });
  clean.activeWeekId = selectedWeeks[0]?.id || 1;

  selectedWeeks.forEach((week) => {
    const evidenceKey = completionKey(week.id);
    if (state.evidenceDocs?.[evidenceKey]) clean.evidenceDocs[evidenceKey] = sanitizeEvidenceDoc(state.evidenceDocs[evidenceKey]);
    if (state.programReports?.[evidenceKey]) clean.programReports[evidenceKey] = sanitizeProgramReport(state.programReports[evidenceKey]);
    const key = completionKey(week.id);
    clean.completed[key] = Boolean(state.completed?.[key]);
    const indicator = state.indicators?.[key] || {};
    clean.indicators[key] = {
      participation: normalizePercent(indicator.participation),
      achievement: normalizePercent(indicator.achievement),
      satisfaction: normalizePercent(indicator.satisfaction),
      impactNote: safeString(indicator.impactNote, 1000)
    };
    const record = state.noor?.[key] || {};
    clean.noor[key] = {
      program: safeString(record.program, 600),
      targetGroup: safeString(record.targetGroup, 200),
      beneficiaries: safeString(record.beneficiaries, 120),
      participants: safeString(record.participants, 300),
      procedure: safeString(record.procedure, 1500),
      evidenceText: safeString(record.evidenceText, 1500),
      obstacles: safeString(record.obstacles, 1000),
      notes: safeString(record.notes, 1000)
    };
  });

  return clean;
}

function buildPortableState(selection = null) {
  captureIdentity();
  const selectedWeeks = Array.isArray(selection) && selection.length ? selection : null;
  return {
    schema: exportSchema,
    version: exportVersion,
    exportedAt: new Date().toISOString(),
    scope: selectedWeeks && selectedWeeks.length === 1 ? {
      type: "single-week",
      weekId: selectedWeeks[0].id,
      weekTitle: selectedWeeks[0].title,
      weekTheme: selectedWeeks[0].theme
    } : {
      type: selectedWeeks && selectedWeeks.length ? "selected-weeks" : "all-weeks"
    },
    privacy: {
      evidencePhotosIncluded: false,
      note: "صور التوثيق المؤقتة لا تُضمّن في ملف JSON."
    },
    data: JSON.parse(JSON.stringify(selectedWeeks ? cloneStateForWeeks(selectedWeeks) : state))
  };
}

function exportJson(selection = null) {
  persistState();
  const selectedWeeks = Array.isArray(selection) && selection.length ? selection : null;
  const payload = JSON.stringify(buildPortableState(selection), null, 2);
  const fileName = selectedWeeks && selectedWeeks.length
    ? `${exportFileStem(selectedWeeks)}.json`
    : `${safeFileBase(state.school || "مساعد-الموجه-الطلابي")}-بيانات.json`;
  downloadBlob(`﻿${payload}`, "application/json;charset=utf-8", fileName);
  toast(selectedWeeks && selectedWeeks.length === 1
    ? "تم تصدير JSON لبيانات الأسبوع المحدد دون صور التوثيق"
    : "تم تصدير JSON بدون صور التوثيق المؤقتة");
}

function sanitizedImportedState(raw) {
  const source = raw?.schema === exportSchema ? raw.data : (raw?.data && typeof raw.data === "object" ? raw.data : raw);
  if (!source || typeof source !== "object" || Array.isArray(source)) throw new Error("صيغة JSON غير مدعومة");
  const clean = blankState();
  clean.admin = safeString(source.admin, 120);
  clean.school = safeString(source.school, 120);
  clean.privacyAcknowledged = Boolean(source.privacyAcknowledged);

  if (source.checks && typeof source.checks === "object") {
    Object.entries(source.checks).slice(0, 500).forEach(([key, value]) => { clean.checks[safeString(key, 120)] = Boolean(value); });
  }
  if (source.notes && typeof source.notes === "object") {
    Object.entries(source.notes).slice(0, 100).forEach(([key, value]) => { clean.notes[safeString(key, 120)] = safeString(value, 1500); });
  }
  if (source.custom && typeof source.custom === "object") {
    Object.entries(source.custom).slice(0, 100).forEach(([key, value]) => {
      if (Array.isArray(value)) clean.custom[safeString(key, 120)] = value.slice(0, 30).map((item) => safeString(item, 300)).filter(Boolean);
    });
  }
  if (source.completed && typeof source.completed === "object") {
    weeks.forEach((week) => { clean.completed[completionKey(week.id)] = Boolean(source.completed[completionKey(week.id)]); });
  }
  if (source.indicators && typeof source.indicators === "object") {
    weeks.forEach((week) => {
      const key = completionKey(week.id);
      const item = source.indicators[key] || {};
      clean.indicators[key] = {
        participation: normalizePercent(item.participation),
        achievement: normalizePercent(item.achievement),
        satisfaction: normalizePercent(item.satisfaction),
        impactNote: safeString(item.impactNote, 1000)
      };
    });
  }
  if (source.noor && typeof source.noor === "object") {
    weeks.forEach((week) => {
      const key = completionKey(week.id);
      const item = source.noor[key] || {};
      clean.noor[key] = {
        program: safeString(item.program, 300),
        targetGroup: safeString(item.targetGroup, 240),
        beneficiaries: safeString(item.beneficiaries, 40),
        participants: safeString(item.participants, 300),
        procedure: safeString(item.procedure, 1500),
        evidenceText: safeString(item.evidenceText, 1500),
        obstacles: safeString(item.obstacles, 1500),
        notes: safeString(item.notes, 1500)
      };
    });
  }
  if (source.dayPlans && typeof source.dayPlans === "object") {
    weeks.forEach((week) => {
      guidanceWeekdays.forEach((_, dayIndex) => {
        const key = dayPlanKey(week.id, dayIndex);
        const item = source.dayPlans[key];
        if (!item || typeof item !== "object") return;
        clean.dayPlans[key] = {
          activity: safeString(item.activity, 240),
          objective: safeString(item.objective, 320),
          details: safeString(item.details, 1800),
          notes: safeString(item.notes, 900),
          done: Boolean(item.done)
        };
      });
    });
  }
  if (source.evidenceDocs && typeof source.evidenceDocs === "object") {
    weeks.forEach((week) => {
      const key = completionKey(week.id);
      if (source.evidenceDocs[key] && typeof source.evidenceDocs[key] === "object") clean.evidenceDocs[key] = sanitizeEvidenceDoc(source.evidenceDocs[key]);
    });
  }
  if (source.programReports && typeof source.programReports === "object") {
    weeks.forEach((week) => {
      const key = completionKey(week.id);
      if (source.programReports[key] && typeof source.programReports[key] === "object") clean.programReports[key] = sanitizeProgramReport(source.programReports[key]);
    });
  }
  clean.activeWeekId = weeks.some((week) => week.id === Number(source.activeWeekId)) ? Number(source.activeWeekId) : 1;
  const report = source.report && typeof source.report === "object" ? source.report : {};
  clean.report.userName = safeString(report.userName, 120);
  clean.report.principalName = safeString(report.principalName, 120);
  clean.report.academicYear = safeString(report.academicYear, 60);
  clean.report.logoName = safeString(report.logoName, 160);
  const logo = typeof report.logoDataUrl === "string" ? report.logoDataUrl : "";
  if (/^data:image\/(?:jpeg|png|webp);base64,/i.test(logo) && logo.length <= 900000) clean.report.logoDataUrl = logo;
  return clean;
}

async function importJsonFile(file) {
  if (!file || file.size > 2.5 * 1024 * 1024) {
    toast("ملف JSON كبير جدًا أو غير صالح");
    return;
  }
  try {
    const text = await file.text();
    const parsed = JSON.parse(text.replace(/^\uFEFF/, ""));
    const clean = sanitizedImportedState(parsed);
    if (!confirm("سيتم استبدال بيانات الخطة الحالية بالبيانات المستوردة. هل تريد المتابعة؟")) return;
    localStorage.setItem(storageKey, JSON.stringify(clean));
    clearEvidenceCache();
    toast("تم استيراد البيانات بنجاح");
    setTimeout(() => location.reload(), 350);
  } catch {
    toast("تعذر استيراد الملف؛ تأكد أنه JSON صادر من التطبيق");
  }
}


function xmlEscape(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function utf8Bytes(value) {
  return new TextEncoder().encode(String(value ?? ""));
}

const crcTable = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(bytes) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < bytes.length; i += 1) crc = crcTable[(crc ^ bytes[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function zipDateTime(date = new Date()) {
  const year = Math.max(1980, date.getFullYear());
  const time = ((date.getHours() & 31) << 11) | ((date.getMinutes() & 63) << 5) | ((Math.floor(date.getSeconds() / 2)) & 31);
  const day = ((year - 1980) << 9) | (((date.getMonth() + 1) & 15) << 5) | (date.getDate() & 31);
  return { time, day };
}

function writeU16(view, offset, value) { view.setUint16(offset, value, true); }
function writeU32(view, offset, value) { view.setUint32(offset, value >>> 0, true); }

function makeZip(entries, mime = "application/zip") {
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  const { time, day } = zipDateTime();

  entries.forEach((entry) => {
    const nameBytes = utf8Bytes(entry.name);
    const dataBytes = entry.data instanceof Uint8Array ? entry.data : utf8Bytes(entry.data);
    const crc = crc32(dataBytes);

    const local = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(local.buffer);
    writeU32(lv, 0, 0x04034B50);
    writeU16(lv, 4, 20);
    writeU16(lv, 6, 0x0800);
    writeU16(lv, 8, 0);
    writeU16(lv, 10, time);
    writeU16(lv, 12, day);
    writeU32(lv, 14, crc);
    writeU32(lv, 18, dataBytes.length);
    writeU32(lv, 22, dataBytes.length);
    writeU16(lv, 26, nameBytes.length);
    writeU16(lv, 28, 0);
    local.set(nameBytes, 30);
    localParts.push(local, dataBytes);

    const central = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(central.buffer);
    writeU32(cv, 0, 0x02014B50);
    writeU16(cv, 4, 20);
    writeU16(cv, 6, 20);
    writeU16(cv, 8, 0x0800);
    writeU16(cv, 10, 0);
    writeU16(cv, 12, time);
    writeU16(cv, 14, day);
    writeU32(cv, 16, crc);
    writeU32(cv, 20, dataBytes.length);
    writeU32(cv, 24, dataBytes.length);
    writeU16(cv, 28, nameBytes.length);
    writeU16(cv, 30, 0);
    writeU16(cv, 32, 0);
    writeU16(cv, 34, 0);
    writeU16(cv, 36, 0);
    writeU32(cv, 38, 0);
    writeU32(cv, 42, offset);
    central.set(nameBytes, 46);
    centralParts.push(central);

    offset += local.length + dataBytes.length;
  });

  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = new Uint8Array(22);
  const ev = new DataView(end.buffer);
  writeU32(ev, 0, 0x06054B50);
  writeU16(ev, 4, 0);
  writeU16(ev, 6, 0);
  writeU16(ev, 8, entries.length);
  writeU16(ev, 10, entries.length);
  writeU32(ev, 12, centralSize);
  writeU32(ev, 16, offset);
  writeU16(ev, 20, 0);

  return new Blob([...localParts, ...centralParts, end], { type: mime });
}

function officeRows() {
  const headers = ["الأسبوع", "الفترة", "عنوان الأسبوع", "البرامج", "القيمة", "الفئة المستهدفة", "عدد المستفيدين", "المشاركون", "حالة التنفيذ", "إجراء التنفيذ", "شواهد التنفيذ", "العوائق", "ملاحظات عامة", "المشاركة %", "تحقق الهدف %", "الرضا %", "الأثر الملحوظ", "الأفكار المحددة"];
  const rows = weeks.map((week) => {
    const indicator = getIndicator(week.id);
    const record = getNoorRecord(week.id);
    const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
    const program = record.program || week.programs.join("، ");
    const procedure = record.procedure || selectedProgramIdeasForWeek(week).join(" • ");
    return [week.title, `${week.dates[0]} - ${week.dates[1]}`, week.theme, program, week.value, record.targetGroup, record.beneficiaries, record.participants, status, procedure, record.evidenceText, record.obstacles, record.notes, indicator.participation, indicator.achievement, indicator.satisfaction, indicator.impactNote, selectedIdeasForWeek(week).join(" • ")];
  });
  return { headers, rows };
}

function excelColumnName(index) {
  let n = index + 1;
  let name = "";
  while (n > 0) {
    const rem = (n - 1) % 26;
    name = String.fromCharCode(65 + rem) + name;
    n = Math.floor((n - 1) / 26);
  }
  return name;
}

function xlsxCell(value, rowIndex, colIndex, style = 0) {
  const ref = `${excelColumnName(colIndex)}${rowIndex}`;
  return `<c r="${ref}" t="inlineStr"${style ? ` s="${style}"` : ""}><is><t xml:space="preserve">${xmlEscape(value)}</t></is></c>`;
}

function dataUrlToBytes(dataUrl) {
  const match = /^data:([^;,]+);base64,(.+)$/i.exec(dataUrl || "");
  if (!match) return null;
  const binary = atob(match[2]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return { mime: match[1].toLowerCase(), bytes };
}

function defaultLogoJpegDataUrl() {
  try {
    const image = document.querySelector("#headerLogo");
    if (!image || !image.complete || !image.naturalWidth) return "";
    const canvas = document.createElement("canvas");
    canvas.width = 320;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.88);
  } catch {
    return "";
  }
}

function docxRun(text, { bold = false, size = 22 } = {}) {
  return `<w:r><w:rPr><w:rtl/><w:rFonts w:ascii="Tajawal" w:hAnsi="Tajawal" w:cs="Tajawal"/>${bold ? "<w:b/>" : ""}<w:sz w:val="${size}"/><w:szCs w:val="${size}"/></w:rPr><w:t xml:space="preserve">${xmlEscape(text)}</w:t></w:r>`;
}

function docxParagraph(text, options = {}) {
  const { bold = false, size = 22, center = false, spacingAfter = 100 } = options;
  return `<w:p><w:pPr><w:bidi/><w:jc w:val="${center ? "center" : "right"}"/><w:spacing w:after="${spacingAfter}"/></w:pPr>${docxRun(text, { bold, size })}</w:p>`;
}

function docxInfoTable(rows) {
  const body = rows.map(([label, value]) => `<w:tr>
    <w:tc><w:tcPr><w:tcW w:w="2600" w:type="dxa"/><w:shd w:fill="EAF7F4"/></w:tcPr>${docxParagraph(label, { bold: true, spacingAfter: 0 })}</w:tc>
    <w:tc><w:tcPr><w:tcW w:w="6600" w:type="dxa"/></w:tcPr>${docxParagraph(value || "—", { spacingAfter: 0 })}</w:tc>
  </w:tr>`).join("");
  return `<w:tbl><w:tblPr><w:tblW w:w="9200" w:type="dxa"/><w:tblBorders><w:top w:val="single" w:sz="4" w:color="D6E5E2"/><w:left w:val="single" w:sz="4" w:color="D6E5E2"/><w:bottom w:val="single" w:sz="4" w:color="D6E5E2"/><w:right w:val="single" w:sz="4" w:color="D6E5E2"/><w:insideH w:val="single" w:sz="4" w:color="D6E5E2"/><w:insideV w:val="single" w:sz="4" w:color="D6E5E2"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="2600"/><w:gridCol w:w="6600"/></w:tblGrid>${body}</w:tbl>`;
}




async function processReportLogo(file) {
  if (!file || !allowedImageTypes.has(file.type) || file.size > MAX_LOGO_FILE_SIZE) throw new Error("ملف شعار غير صالح");
  return processImage(file, { maxDimension: 420, quality: 0.88, outputType: "image/jpeg" });
}

function refreshReportSettingsUI() {
  const user = document.querySelector("#reportUserName");
  const admin = document.querySelector("#reportEducationAdmin");
  const school = document.querySelector("#reportSchoolName");
  const principal = document.querySelector("#reportPrincipalName");
  const year = document.querySelector("#reportAcademicYear");
  if (user) user.value = state.report?.userName || "";
  if (admin) admin.value = state.admin || "";
  if (school) school.value = state.school || "";
  if (principal) principal.value = state.report?.principalName || "";
  if (year) year.value = state.report?.academicYear || "";
  const logo = state.report?.logoDataUrl || "forum-logo.png";
  const preview = document.querySelector("#reportLogoPreview");
  if (preview) preview.src = logo;
}

function wireReportSettings() {
  const dialog = document.querySelector("#reportSettingsDialog");
  document.querySelector("#reportSettingsBtn")?.addEventListener("click", () => {
    captureIdentity();
    refreshReportSettingsUI();
    dialog?.showModal();
  });
  ["#closeReportSettingsBtn", "#cancelReportSettingsBtn"].forEach((selector) => document.querySelector(selector)?.addEventListener("click", () => dialog?.close()));

  document.querySelector("#reportLogoInput")?.addEventListener("change", async (event) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    try {
      const dataUrl = await processReportLogo(file);
      state.report.logoDataUrl = dataUrl;
      state.report.logoName = safeString(file.name, 160);
      refreshReportSettingsUI();
      syncEvidenceStudio();
      toast("تم تجهيز الشعار بأمان");
    } catch {
      toast("الشعار يجب أن يكون PNG/JPEG/WebP وبحجم لا يتجاوز ٢ م.ب");
    }
    event.currentTarget.value = "";
  });

  document.querySelector("#resetReportLogoBtn")?.addEventListener("click", () => {
    state.report.logoDataUrl = "";
    state.report.logoName = "";
    refreshReportSettingsUI();
    syncEvidenceStudio();
    toast("تمت استعادة شعار التطبيق الافتراضي للتقارير العامة");
  });

  document.querySelector("#saveReportSettingsBtn")?.addEventListener("click", () => {
    state.report.userName = safeString(document.querySelector("#reportUserName")?.value, 120);
    state.admin = safeString(document.querySelector("#reportEducationAdmin")?.value, 120);
    state.school = safeString(document.querySelector("#reportSchoolName")?.value, 120);
    state.report.principalName = safeString(document.querySelector("#reportPrincipalName")?.value, 120);
    state.report.academicYear = safeString(document.querySelector("#reportAcademicYear")?.value, 60);
    persistState("تم حفظ إعدادات التقرير");
    refreshReportSettingsUI();
    syncEvidenceStudio();
    dialog?.close();
  });
  refreshReportSettingsUI();
}

function wirePrivacyGate() {
  const gate = document.querySelector("#privacyGate");
  if (!state.privacyAcknowledged) gate?.showModal();
  document.querySelector("#acceptPrivacyBtn")?.addEventListener("click", () => {
    state.privacyAcknowledged = true;
    persistState("تم اعتماد الاستخدام الآمن");
    gate?.close();
  });
}

function wireToolbar() {
  document.querySelector("#saveBtn")?.addEventListener("click", () => persistState("تم حفظ البيانات"));
  document.querySelector("#printBtn")?.addEventListener("click", () => {
    captureIdentity();
    persistState();
    window.print();
  });
  document.querySelector("#printFinalReportBtn")?.addEventListener("click", printFinalReport);
  document.querySelector("#exportJsonBtn")?.addEventListener("click", exportJson);
  document.querySelector("#exportExcelBtn")?.addEventListener("click", exportExcel);
  document.querySelector("#exportWordBtn")?.addEventListener("click", exportWord);
  document.querySelector("#importJsonBtn")?.addEventListener("click", () => document.querySelector("#jsonImportInput")?.click());
  document.querySelector("#jsonImportInput")?.addEventListener("change", async (event) => {
    const file = event.currentTarget.files?.[0];
    if (file) await importJsonFile(file);
    event.currentTarget.value = "";
  });

  let allOpen = false;
  document.querySelector("#expandAllBtn")?.addEventListener("click", (event) => {
    allOpen = !allOpen;
    document.querySelectorAll(".idea-details").forEach((details) => { details.open = allOpen; });
    event.currentTarget.textContent = allOpen ? "⌃ إغلاق جميع الأفكار" : "⌄ فتح جميع الأفكار";
  });

  document.addEventListener("click", (event) => {
    const menu = document.querySelector("#exportMenu");
    if (menu?.open && !menu.contains(event.target)) menu.removeAttribute("open");
  });

  document.querySelector("#resetBtn")?.addEventListener("click", async () => {
    if (!confirm("سيتم حذف جميع بيانات الخطة وإعدادات التقرير من هذا الجهاز، كما ستُمسح صور التوثيق المؤقتة. هل تريد المتابعة؟")) return;
    localStorage.removeItem(storageKey);
    clearEvidenceCache();
    await purgeLegacyEvidenceDB();
    location.reload();
  });
}

function wireIdentity() {
  // بيانات الإدارة والمدرسة تُدار من نافذة إعدادات التقرير فقط.
}

function wirePWA() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    const button = document.querySelector("#installBtn");
    if (button) button.hidden = false;
  });

  document.querySelector("#installBtn")?.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    document.querySelector("#installBtn").hidden = true;
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(() => {}));
  }
}

function init() {
  void purgeLegacyEvidenceDB();
  wireIdentity();
  wireToolbar();
  wireReportSettings();
  wireWeekNavigator();
  wireEvidenceStudio();
  wireProgramReportStudio();
  wireProgramCenterV15();
  renderAll();
  loadEvidence();
  syncEvidenceStudio();
  syncProgramReportStudio();
  wirePrivacyGate();
  wirePWA();
}

document.addEventListener("DOMContentLoaded", init);


/* ============================================================
   v7 — قائمة تصدير داخل تقرير الأسبوع + JSON أسبوعي
   ============================================================ */

function weekHasReportData(week) {
  const indicator = getIndicator(week.id);
  const record = getNoorRecord(week.id);
  const hasIndicators = [indicator.participation, indicator.achievement, indicator.satisfaction]
    .some((value) => value !== "" && value != null) || Boolean(String(indicator.impactNote || "").trim());
  const hasRecord = [record.program, record.targetGroup, record.beneficiaries, record.participants, record.procedure, record.evidenceText, record.obstacles, record.notes]
    .some((value) => Boolean(String(value || "").trim()));
  const hasNotes = [state.notes[noteKey(week.id, "program")], state.notes[noteKey(week.id, "value")]]
    .some((value) => Boolean(String(value || "").trim()));
  return Boolean(
    state.completed[completionKey(week.id)] ||
    hasIndicators ||
    hasRecord ||
    hasNotes ||
    getWeekDailyStats(week.id).planned > 0 ||
    selectedIdeasForWeek(week).length ||
    (evidenceCache[week.id] || []).length
  );
}

function exportableWeeks(selection) {
  if (Array.isArray(selection) && selection.length) return selection;
  const prepared = weeks.filter(weekHasReportData);
  if (prepared.length) return prepared;
  toast("لم يتم تعبئة أي تقرير أسبوعي بعد");
  return [];
}

function exportFileStem(selectedWeeks) {
  const school = safeFileBase(state.school || "تقرير-التوجيه");
  if (selectedWeeks.length === 1) return `${school}-${safeFileBase(selectedWeeks[0].title)}`;
  return `${school}-الأسابيع-المعبأة`;
}

function weekExportTitle(selectedWeeks) {
  if (selectedWeeks.length === 1) return `تقرير ${selectedWeeks[0].title} — ${selectedWeeks[0].theme}`;
  return "تقرير التوثيق — الأسابيع المعبأة";
}

function imageSizeFromDataUrl(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.naturalWidth || img.width || 1200, height: img.naturalHeight || img.height || 800 });
    img.onerror = () => resolve({ width: 1200, height: 800 });
    img.src = dataUrl;
  });
}

function fitImageEmu(width, height, maxWidthIn = 5.8, maxHeightIn = 3.8) {
  const safeW = Math.max(1, Number(width) || 1);
  const safeH = Math.max(1, Number(height) || 1);
  const scale = Math.min((maxWidthIn * 914400) / safeW, (maxHeightIn * 914400) / safeH);
  return {
    cx: Math.max(914400, Math.round(safeW * scale)),
    cy: Math.max(685800, Math.round(safeH * scale))
  };
}

function docxImageParagraphV6(relId, docPrId, name, cx, cy) {
  const safeName = xmlEscape(name || `صورة ${docPrId}`);
  return `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:after="120"/></w:pPr><w:r><w:drawing><wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${cx}" cy="${cy}"/><wp:docPr id="${docPrId}" name="${safeName}"/><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${docPrId}" name="${safeName}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" r:embed="${relId}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${cx}" cy="${cy}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r></w:p>`;
}


function docxPageBreak() {
  return '<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
}

function docxCell(content, { width = 2200, fill = "FFFFFF", bold = false, center = false, color = "173F3D", size = 20, margin = 90 } = {}) {
  const text = content == null || content === "" ? "—" : String(content);
  const jc = center ? "center" : "right";
  return `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/><w:shd w:fill="${fill}"/><w:tcMar><w:top w:w="${margin}" w:type="dxa"/><w:left w:w="${margin}" w:type="dxa"/><w:bottom w:w="${margin}" w:type="dxa"/><w:right w:w="${margin}" w:type="dxa"/></w:tcMar><w:vAlign w:val="center"/></w:tcPr><w:p><w:pPr><w:bidi/><w:jc w:val="${jc}"/><w:spacing w:after="0"/></w:pPr><w:r><w:rPr><w:rtl/><w:rFonts w:ascii="Tajawal" w:hAnsi="Tajawal" w:cs="Tajawal"/>${bold ? "<w:b/>" : ""}<w:color w:val="${color}"/><w:sz w:val="${size}"/><w:szCs w:val="${size}"/></w:rPr><w:t xml:space="preserve">${xmlEscape(text)}</w:t></w:r></w:p></w:tc>`;
}

function docxBand(text) {
  return `<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/><w:jc w:val="center"/><w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="9400"/></w:tblGrid><w:tr>${docxCell(text, { width: 9400, fill: "087F79", bold: true, center: true, color: "FFFFFF", size: 26, margin: 120 })}</w:tr></w:tbl>`;
}

function docxFormalHeader(logoXml) {
  const official = `${docxParagraph("المملكة العربية السعودية", { bold: true, size: 22, center: true, spacingAfter: 30 })}${docxParagraph("وزارة التعليم", { bold: true, size: 22, center: true, spacingAfter: 30 })}${docxParagraph(state.admin ? `إدارة التعليم: ${state.admin}` : "إدارة التعليم", { size: 20, center: true, spacingAfter: 20 })}${docxParagraph(state.school ? `المدرسة: ${state.school}` : "اسم المدرسة", { size: 20, center: true, spacingAfter: 0 })}`;
  const logoCell = `<w:tc><w:tcPr><w:tcW w:w="1900" w:type="dxa"/><w:vAlign w:val="center"/><w:tcMar><w:top w:w="40" w:type="dxa"/><w:left w:w="40" w:type="dxa"/><w:bottom w:w="40" w:type="dxa"/><w:right w:w="40" w:type="dxa"/></w:tcMar></w:tcPr>${logoXml || docxParagraph("", { spacingAfter: 0 })}</w:tc>`;
  const textCell = `<w:tc><w:tcPr><w:tcW w:w="7500" w:type="dxa"/><w:vAlign w:val="center"/><w:tcMar><w:top w:w="50" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="50" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar></w:tcPr>${official}</w:tc>`;
  return `<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblBorders><w:bottom w:val="single" w:sz="10" w:color="D8B66F"/><w:top w:val="nil"/><w:left w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="1900"/><w:gridCol w:w="7500"/></w:tblGrid><w:tr>${logoCell}${textCell}</w:tr></w:tbl>`;
}

function docxIdentityGrid() {
  const cells = [
    ["اسم مُعدّ التقرير", state.report?.userName || "—", "مدير المدرسة", state.report?.principalName || "—"],
    ["العام الدراسي", state.report?.academicYear || "—", "إدارة التعليم", state.admin || "—"]
  ];
  const rows = cells.map((row) => `<w:tr>${docxCell(row[0], {width:1500, fill:"EAF7F4", bold:true})}${docxCell(row[1], {width:3200})}${docxCell(row[2], {width:1500, fill:"EAF7F4", bold:true})}${docxCell(row[3], {width:3200})}</w:tr>`).join("");
  return `<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblBorders><w:top w:val="single" w:sz="5" w:color="DCEAE7"/><w:left w:val="single" w:sz="5" w:color="DCEAE7"/><w:bottom w:val="single" w:sz="5" w:color="DCEAE7"/><w:right w:val="single" w:sz="5" w:color="DCEAE7"/><w:insideH w:val="single" w:sz="4" w:color="DCEAE7"/><w:insideV w:val="single" w:sz="4" w:color="DCEAE7"/></w:tblBorders></w:tblPr>${rows}</w:tbl>`;
}

function docxDailyTable(week) {
  const widths = [850, 1200, 1900, 2500, 1050, 1900];
  const headers = ["اليوم", "التاريخ", "البرنامج / الهدف", "خطة التنفيذ", "الحالة", "الملاحظات"];
  const head = `<w:tr><w:trPr><w:tblHeader/></w:trPr>${headers.map((h,i)=>docxCell(h,{width:widths[i],fill:"087F79",bold:true,center:true,color:"FFFFFF",size:19})).join("")}</w:tr>`;
  const rows = dailyPlansForWeek(week).map((day) => {
    const activityGoal = [day.activity, day.objective ? `الهدف: ${day.objective}` : ""].filter(Boolean).join(" — ") || "—";
    const status = day.done ? "تم التنفيذ" : (dayPlanHasContent(day) ? "مخطط" : "—");
    const statusFill = day.done ? "DFF3EE" : (dayPlanHasContent(day) ? "FFF3D8" : "FFFFFF");
    return `<w:tr>${docxCell(day.name,{width:widths[0],fill:"F4FAF8",bold:true,center:true})}${docxCell(day.date,{width:widths[1],center:true,size:18})}${docxCell(activityGoal,{width:widths[2],size:18})}${docxCell(day.details || "—",{width:widths[3],size:18})}${docxCell(status,{width:widths[4],fill:statusFill,bold:day.done,center:true,size:18})}${docxCell(day.notes || "—",{width:widths[5],size:18})}</w:tr>`;
  }).join("");
  return `<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblLayout w:type="fixed"/><w:tblBorders><w:top w:val="single" w:sz="5" w:color="D5E5E2"/><w:left w:val="single" w:sz="5" w:color="D5E5E2"/><w:bottom w:val="single" w:sz="5" w:color="D5E5E2"/><w:right w:val="single" w:sz="5" w:color="D5E5E2"/><w:insideH w:val="single" w:sz="4" w:color="D5E5E2"/><w:insideV w:val="single" w:sz="4" w:color="D5E5E2"/></w:tblBorders></w:tblPr><w:tblGrid>${widths.map(w=>`<w:gridCol w:w="${w}"/>`).join("")}</w:tblGrid>${head}${rows}</w:tbl>`;
}

function docxWeekDetailsTable(week) {
  const indicator = getIndicator(week.id);
  const record = getNoorRecord(week.id);
  const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
  const program = record.program || week.programs.join("، ");
  const procedure = record.procedure || selectedProgramIdeasForWeek(week).join(" • ") || "—";
  const rows = [
    ["الفترة", `${week.dates[0]} - ${week.dates[1]}`],
    ["البرنامج", program],
    ["القيمة المستهدفة", week.value],
    ["الفئة المستهدفة", record.targetGroup || "—"],
    ["عدد المستفيدين", record.beneficiaries || "—"],
    ["المشاركون في التنفيذ", record.participants || "—"],
    ["حالة الأسبوع", status],
    ["إجراء التنفيذ", procedure],
    ["الأفكار المختارة", selectedIdeasForWeek(week).join(" • ") || "—"]
  ];
  const body = rows.map(([label,value])=>`<w:tr>${docxCell(label,{width:2200,fill:"EAF7F4",bold:true})}${docxCell(value,{width:7200})}</w:tr>`).join("");
  return `<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblBorders><w:top w:val="single" w:sz="5" w:color="DCEAE7"/><w:left w:val="single" w:sz="5" w:color="DCEAE7"/><w:bottom w:val="single" w:sz="5" w:color="DCEAE7"/><w:right w:val="single" w:sz="5" w:color="DCEAE7"/><w:insideH w:val="single" w:sz="4" w:color="DCEAE7"/><w:insideV w:val="single" w:sz="4" w:color="DCEAE7"/></w:tblBorders></w:tblPr>${body}</w:tbl>`;
}

function docxKpiTable(week) {
  const indicator = getIndicator(week.id);
  const vals = [
    ["المشاركة", indicator.participation === "" ? "—" : `${indicator.participation}%`, "EAF3FF"],
    ["تحقق الهدف", indicator.achievement === "" ? "—" : `${indicator.achievement}%`, "E6F5EC"],
    ["رضا المستفيدين", indicator.satisfaction === "" ? "—" : `${indicator.satisfaction}%`, "FFF3D8"]
  ];
  const row = vals.map(([label,value,fill])=>`<w:tc><w:tcPr><w:tcW w:w="3133" w:type="dxa"/><w:shd w:fill="${fill}"/><w:tcMar><w:top w:w="120" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="120" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar></w:tcPr>${docxParagraph(label,{bold:true,size:19,center:true,spacingAfter:35})}${docxParagraph(value,{bold:true,size:28,center:true,spacingAfter:0})}</w:tc>`).join("");
  return `<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblBorders><w:top w:val="nil"/><w:left w:val="nil"/><w:bottom w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="3133"/><w:gridCol w:w="3133"/><w:gridCol w:w="3134"/></w:tblGrid><w:tr>${row}</w:tr></w:tbl>`;
}

function docxNotesTable(week) {
  const indicator = getIndicator(week.id);
  const record = getNoorRecord(week.id);
  const rows = [
    ["الأثر الملحوظ", indicator.impactNote || "—"],
    ["شواهد التنفيذ", record.evidenceText || "—"],
    ["العوائق", record.obstacles || "—"],
    ["ملاحظات عامة", record.notes || "—"]
  ];
  return `<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblBorders><w:top w:val="single" w:sz="5" w:color="E2E9E7"/><w:left w:val="single" w:sz="5" w:color="E2E9E7"/><w:bottom w:val="single" w:sz="5" w:color="E2E9E7"/><w:right w:val="single" w:sz="5" w:color="E2E9E7"/><w:insideH w:val="single" w:sz="4" w:color="E2E9E7"/><w:insideV w:val="single" w:sz="4" w:color="E2E9E7"/></w:tblBorders></w:tblPr>${rows.map(([l,v])=>`<w:tr>${docxCell(l,{width:2200,fill:"FBF6E9",bold:true,color:"6D542B"})}${docxCell(v,{width:7200})}</w:tr>`).join("")}</w:tbl>`;
}

async function exportWord(selection = null) {
  captureIdentity();
  persistState();
  const selectedWeeks = exportableWeeks(selection);
  if (!selectedWeeks.length) return;

  setStatus("جارٍ تجهيز Word الاحترافي…");
  const relationships = [
    `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>`
  ];
  const mediaEntries = [];
  let relCounter = 2;
  let docPrCounter = 1;

  let logoRelId = "";
  let logoFit = null;
  const logoDataUrl = state.report?.logoDataUrl || defaultLogoJpegDataUrl();
  const logoData = dataUrlToBytes(logoDataUrl);
  if (logoData) {
    logoRelId = `rId${relCounter++}`;
    relationships.push(`<Relationship Id="${logoRelId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/report-logo.jpeg"/>`);
    mediaEntries.push({ name: "word/media/report-logo.jpeg", data: logoData.bytes });
    const dims = await imageSizeFromDataUrl(logoDataUrl);
    logoFit = fitImageEmu(dims.width, dims.height, 0.9, 0.9);
  }
  const nextLogoDrawing = () => (logoRelId && logoFit ? docxImageParagraphV6(logoRelId, docPrCounter++, "شعار التقرير", logoFit.cx, logoFit.cy) : "");

  const reportParts = [];
  reportParts.push(docxFormalHeader(nextLogoDrawing()));
  reportParts.push(docxParagraph("الخطة التفاعلية لبرامج التوجيه الطلابي والقيم", { bold: true, size: 32, center: true, spacingAfter: 50 }));
  reportParts.push(docxParagraph("«أثري يبدأ مني»", { bold: true, size: 24, center: true, spacingAfter: 120 }));
  reportParts.push(docxIdentityGrid());
  reportParts.push(docxParagraph("", { spacingAfter: 120 }));

  for (let weekIndex = 0; weekIndex < selectedWeeks.length; weekIndex += 1) {
    const week = selectedWeeks[weekIndex];
    if (weekIndex > 0) {
      reportParts.push(docxPageBreak());
      reportParts.push(docxFormalHeader(nextLogoDrawing()));
    }
    const readiness = getWeekReadiness(week);
    reportParts.push(docxBand(`${week.title} — ${week.theme}`));
    reportParts.push(docxParagraph(`${week.dates[0]} إلى ${week.dates[1]}  •  القيمة: ${week.value}  •  جاهزية التوثيق: ${readiness}%`, { bold: true, size: 20, center: true, spacingAfter: 120 }));

    reportParts.push(docxParagraph("الخطة اليومية للأسبوع", { bold: true, size: 25, spacingAfter: 70 }));
    reportParts.push(docxDailyTable(week));
    reportParts.push(docxParagraph("", { spacingAfter: 100 }));

    reportParts.push(docxParagraph("بيانات البرنامج والتفعيل", { bold: true, size: 25, spacingAfter: 70 }));
    reportParts.push(docxWeekDetailsTable(week));
    reportParts.push(docxParagraph("", { spacingAfter: 100 }));

    reportParts.push(docxParagraph("مؤشرات تحقيق الأهداف والأثر", { bold: true, size: 25, spacingAfter: 70 }));
    reportParts.push(docxKpiTable(week));
    reportParts.push(docxParagraph("", { spacingAfter: 80 }));
    reportParts.push(docxNotesTable(week));

    const photos = evidenceCache[week.id] || [];
    reportParts.push(docxParagraph("", { spacingAfter: 90 }));
    reportParts.push(docxParagraph("صور الشواهد والتوثيق", { bold: true, size: 25, spacingAfter: 70 }));
    if (!photos.length) {
      reportParts.push(docxParagraph("لا توجد صور توثيق مضافة في الجلسة الحالية.", { size: 20, spacingAfter: 120 }));
    } else {
      for (let index = 0; index < photos.length; index += 1) {
        const photo = photos[index];
        const imageData = dataUrlToBytes(photo.dataUrl);
        if (!imageData) continue;
        const relId = `rId${relCounter++}`;
        const fileName = `evidence-w${week.id}-${index + 1}.jpeg`;
        relationships.push(`<Relationship Id="${relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${fileName}"/>`);
        mediaEntries.push({ name: `word/media/${fileName}`, data: imageData.bytes });
        const dims = await imageSizeFromDataUrl(photo.dataUrl);
        const fit = fitImageEmu(dims.width, dims.height, 5.25, 3.15);
        reportParts.push(docxParagraph(`شاهد ${index + 1}`, { bold: true, size: 18, center: true, spacingAfter: 30 }));
        reportParts.push(docxImageParagraphV6(relId, docPrCounter++, photo.name || `شاهد ${index + 1}`, fit.cx, fit.cy));
      }
    }
    reportParts.push(docxParagraph("أ/ فاطمة هزازي", { bold: true, size: 20, center: true, spacingAfter: 0 }));
  }

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><w:body>
${reportParts.join("")}
<w:sectPr><w:bidi/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="720" w:right="720" w:bottom="720" w:left="720" w:header="360" w:footer="360" w:gutter="0"/></w:sectPr>
</w:body></w:document>`;

  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${mediaEntries.length ? '<Default Extension="jpeg" ContentType="image/jpeg"/>' : ""}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`;

  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Tajawal" w:hAnsi="Tajawal" w:cs="Tajawal"/><w:rtl/><w:color w:val="173F3D"/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:bidi/><w:jc w:val="right"/><w:spacing w:after="80" w:line="300" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>`;

  const coreXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${xmlEscape(weekExportTitle(selectedWeeks))}</dc:title><dc:subject>الخطة التفاعلية لبرامج التوجيه الطلابي والقيم</dc:subject><dc:creator>مساعد الموجه الطلابي</dc:creator><cp:lastModifiedBy>مساعد الموجه الطلابي</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:modified></cp:coreProperties>`;
  const appXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>مساعد الموجه الطلابي</Application><AppVersion>15.0</AppVersion></Properties>`;

  const entries = [
    { name: "[Content_Types].xml", data: contentTypes },
    { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>` },
    { name: "word/document.xml", data: documentXml },
    { name: "word/styles.xml", data: stylesXml },
    { name: "word/_rels/document.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relationships.join("")}</Relationships>` },
    { name: "docProps/core.xml", data: coreXml },
    { name: "docProps/app.xml", data: appXml },
    ...mediaEntries
  ];

  const blob = makeZip(entries, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  downloadBlob(blob, blob.type, `${exportFileStem(selectedWeeks)}-Word-احترافي-v15.docx`);
  setStatus("تم تجهيز Word الاحترافي");
  toast(selectedWeeks.length === 1 ? "تم تصدير Word احترافي للأسبوع المحدد" : "تم تصدير Word؛ كل أسبوع يبدأ في صفحة مستقلة");
}

function xlsxSafeSheetName(value, fallback) {
  const name = String(value || fallback || "تقرير").replace(/[\\\/?*\[\]:]/g, " ").trim().slice(0, 31);
  return name || fallback || "تقرير";
}

function xlsxDrawingPicture({ relId, id, name, col = 0, row = 0, cx, cy, colOff = 0, rowOff = 0 }) {
  return `<oneCellAnchor><from><col>${col}</col><colOff>${Math.max(0, Number(colOff) || 0)}</colOff><row>${row}</row><rowOff>${Math.max(0, Number(rowOff) || 0)}</rowOff></from><ext cx="${cx}" cy="${cy}"/><pic><nvPicPr><cNvPr id="${id}" name="${xmlEscape(name)}" descr="${xmlEscape(name)}"/><cNvPicPr/></nvPicPr><blipFill><a:blip xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" cstate="print" r:embed="${relId}"/><a:stretch xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:fillRect/></a:stretch></blipFill><spPr><a:prstGeom xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" prst="rect"/></spPr></pic><clientData/></oneCellAnchor>`;
}

function xlsxNumberCell(value, rowIndex, colIndex, style = 0) {
  const ref = `${excelColumnName(colIndex)}${rowIndex}`;
  const num = Number(value);
  return `<c r="${ref}"${style ? ` s="${style}"` : ""}><v>${Number.isFinite(num) ? num : 0}</v></c>`;
}

function xlsxMergedCell(value, rowIndex, colIndex, style = 0) {
  return xlsxCell(value == null || value === "" ? "—" : value, rowIndex, colIndex, style);
}

function excelPercentValue(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  return Math.max(0, Math.min(100, num)) / 100;
}

async function exportExcel(selection = null) {
  captureIdentity();
  persistState();
  const selectedWeeks = exportableWeeks(selection);
  if (!selectedWeeks.length) return;
  setStatus("جارٍ تجهيز Excel الاحترافي مع الخطة اليومية والكليشة الجديدة…");

  // تنسيق Excel v12: شعار ثابت في مساحة مستقلة، كليشة رسمية، RTL، A4،
  // خطة يومية واضحة، وكل أسبوع في ورقة مستقلة.
  // style indices:
  // 0 body, 1 label, 2 title, 3 section, 4 value, 5 subtitle,
  // 6 status-done, 7 status-pending, 8 kpi-label, 9 kpi-blue,
  // 10 kpi-green, 11 kpi-orange, 12 note, 13 clean-center, 14 photo-note.
  const stylesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <fonts count="8">
    <font><sz val="11"/><name val="Arial"/><color rgb="FF173F3D"/></font>
    <font><b/><sz val="11"/><name val="Arial"/><color rgb="FF0B5D58"/></font>
    <font><b/><sz val="18"/><name val="Arial"/><color rgb="FFFFFFFF"/></font>
    <font><b/><sz val="12"/><name val="Arial"/><color rgb="FFFFFFFF"/></font>
    <font><b/><sz val="12"/><name val="Arial"/><color rgb="FF0B5D58"/></font>
    <font><b/><sz val="16"/><name val="Arial"/><color rgb="FF0B5D58"/></font>
    <font><b/><sz val="11"/><name val="Arial"/><color rgb="FFFFFFFF"/></font>
    <font><i/><sz val="10"/><name val="Arial"/><color rgb="FF6D7F7D"/></font>
  </fonts>
  <fills count="10">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF087F79"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF0F9B93"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFEAF7F5"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFF7FBFA"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF198754"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFC98A00"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFEAF2FC"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFF4E5"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="2">
    <border><left/><right/><top/><bottom/><diagonal/></border>
    <border><left style="thin"><color rgb="FFD4E4E1"/></left><right style="thin"><color rgb="FFD4E4E1"/></right><top style="thin"><color rgb="FFD4E4E1"/></top><bottom style="thin"><color rgb="FFD4E4E1"/></bottom><diagonal/></border>
  </borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="15">
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="top" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="1" fillId="4" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="2" fillId="2" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="3" fillId="3" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="4" fillId="4" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="6" fillId="6" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="6" fillId="7" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="1" fillId="4" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="9" fontId="5" fillId="8" borderId="1" xfId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center" readingOrder="2"/></xf>
    <xf numFmtId="9" fontId="5" fillId="4" borderId="1" xfId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center" readingOrder="2"/></xf>
    <xf numFmtId="9" fontId="5" fillId="9" borderId="1" xfId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="center" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="top" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="4" fillId="5" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1" readingOrder="2"/></xf>
    <xf numFmtId="0" fontId="7" fillId="5" borderId="1" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="center" wrapText="1" readingOrder="2"/></xf>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;

  const workbookSheets = [];
  const workbookRels = [];
  const entries = [];
  const contentOverrides = [];
  const definedNames = [];
  const mediaMap = new Map();
  let globalMediaCounter = 1;

  const logoDataUrl = state.report?.logoDataUrl || defaultLogoJpegDataUrl();
  const logoData = dataUrlToBytes(logoDataUrl);
  let logoMediaName = "";
  let logoFit = null;
  if (logoData) {
    logoMediaName = `image${globalMediaCounter++}.jpeg`;
    mediaMap.set(logoMediaName, logoData.bytes);
    const dims = await imageSizeFromDataUrl(logoDataUrl);
    logoFit = fitImageEmu(dims.width, dims.height, 1.05, 1.05);
  }

  for (let sheetIndex = 0; sheetIndex < selectedWeeks.length; sheetIndex += 1) {
    const week = selectedWeeks[sheetIndex];
    const sheetNumber = sheetIndex + 1;
    const indicator = getIndicator(week.id);
    const record = getNoorRecord(week.id);
    const status = state.completed[completionKey(week.id)] ? "تم التنفيذ" : "قيد التنفيذ";
    const program = record.program || week.programs.join("، ");
    const procedure = record.procedure || selectedProgramIdeasForWeek(week).join(" • ") || "—";
    const ideas = selectedIdeasForWeek(week).join(" • ") || "لم يتم تحديد أفكار بعد.";
    const photos = evidenceCache[week.id] || [];
    const dailyPlans = dailyPlansForWeek(week);

    const rows = [];
    const merges = [];
    const addRow = (rowNum, height, cells = "") => rows.push(`<row r="${rowNum}" ht="${height}" customHeight="1">${cells}</row>`);
    const merge = (ref) => merges.push(ref);
    let r = 1;

    // الكليشة الرسمية: الشعار في مساحة مستقلة يمين الورقة (A:B في RTL)،
    // والنصوص في مساحة C:H دون تداخل مع الصورة.
    addRow(r, 22, xlsxCell("", r, 0, 13) + xlsxMergedCell("المملكة العربية السعودية", r, 2, 13));
    merge(`A${r}:B${r + 3}`); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 22, xlsxMergedCell("وزارة التعليم", r, 2, 13)); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 22, xlsxMergedCell(state.admin ? `إدارة التعليم: ${state.admin}` : "إدارة التعليم", r, 2, 13)); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 22, xlsxMergedCell(state.school ? `المدرسة: ${state.school}` : "اسم المدرسة", r, 2, 13)); merge(`C${r}:H${r}`); r += 1;

    addRow(r, 31, xlsxMergedCell("الخطة التفاعلية لبرامج التوجيه الطلابي والقيم", r, 0, 2)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 25, xlsxMergedCell(`${week.title} — ${week.theme}`, r, 0, 5)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 20, xlsxMergedCell(`${week.dates[0]} — ${week.dates[1]}`, r, 0, 13)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 7); r += 1;

    // بيانات الهوية الأساسية — دون تكرار الإدارة والمدرسة لأنها في الكليشة.
    addRow(r, 23,
      xlsxCell("اسم مُعدّ التقرير", r, 0, 1) + xlsxMergedCell(state.report?.userName || "—", r, 2, 4) +
      xlsxCell("مدير المدرسة", r, 4, 1) + xlsxMergedCell(state.report?.principalName || "—", r, 6, 4)
    );
    merge(`A${r}:B${r}`); merge(`C${r}:D${r}`); merge(`E${r}:F${r}`); merge(`G${r}:H${r}`); r += 1;
    addRow(r, 23,
      xlsxCell("العام الدراسي", r, 0, 1) + xlsxMergedCell(state.report?.academicYear || "—", r, 2, 4) +
      xlsxCell("حالة الأسبوع", r, 4, 1) + xlsxMergedCell(status, r, 6, status === "تم التنفيذ" ? 6 : 7)
    );
    merge(`A${r}:B${r}`); merge(`C${r}:D${r}`); merge(`E${r}:F${r}`); merge(`G${r}:H${r}`); r += 1;
    addRow(r, 7); r += 1;

    // الخطة اليومية — خمسة أيام واضحة.
    addRow(r, 24, xlsxMergedCell("الخطة اليومية للأسبوع", r, 0, 3)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 23,
      xlsxCell("اليوم", r, 0, 8) + xlsxCell("التاريخ", r, 1, 8) +
      xlsxMergedCell("البرنامج / النشاط والهدف", r, 2, 8) +
      xlsxMergedCell("خطة التنفيذ", r, 4, 8) +
      xlsxCell("الحالة", r, 6, 8) + xlsxCell("الملاحظات", r, 7, 8)
    );
    merge(`C${r}:D${r}`); merge(`E${r}:F${r}`); r += 1;
    for (const day of dailyPlans) {
      const activityAndGoal = [day.activity, day.objective ? `الهدف: ${day.objective}` : ""].filter(Boolean).join(" — ") || "—";
      const dayStatus = day.done ? "تم التنفيذ" : (dayPlanHasContent(day) ? "مخطط" : "—");
      const statusStyle = day.done ? 6 : (dayPlanHasContent(day) ? 7 : 4);
      addRow(r, 44,
        xlsxCell(day.name, r, 0, 8) + xlsxCell(day.date, r, 1, 8) +
        xlsxMergedCell(activityAndGoal, r, 2, 0) + xlsxMergedCell(day.details || "—", r, 4, 0) +
        xlsxCell(dayStatus, r, 6, statusStyle) + xlsxCell(day.notes || "—", r, 7, 12)
      );
      merge(`C${r}:D${r}`); merge(`E${r}:F${r}`); r += 1;
    }
    addRow(r, 7); r += 1;

    // بيانات البرنامج والتفعيل.
    addRow(r, 24, xlsxMergedCell("بيانات البرنامج والتفعيل", r, 0, 3)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 46, xlsxCell("البرنامج", r, 0, 1) + xlsxMergedCell(program, r, 2, 0)); merge(`A${r}:B${r}`); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 25,
      xlsxCell("القيمة المستهدفة", r, 0, 1) + xlsxMergedCell(week.value, r, 2, 4) +
      xlsxCell("الفئة المستهدفة", r, 4, 1) + xlsxMergedCell(record.targetGroup || "—", r, 6, 4)
    );
    merge(`A${r}:B${r}`); merge(`C${r}:D${r}`); merge(`E${r}:F${r}`); merge(`G${r}:H${r}`); r += 1;
    addRow(r, 25,
      xlsxCell("عدد المستفيدين", r, 0, 1) + xlsxMergedCell(record.beneficiaries || "—", r, 2, 4) +
      xlsxCell("المشاركون في التنفيذ", r, 4, 1) + xlsxMergedCell(record.participants || "—", r, 6, 4)
    );
    merge(`A${r}:B${r}`); merge(`C${r}:D${r}`); merge(`E${r}:F${r}`); merge(`G${r}:H${r}`); r += 1;
    addRow(r, 48, xlsxCell("إجراء التنفيذ", r, 0, 1) + xlsxMergedCell(procedure, r, 2, 0)); merge(`A${r}:B${r}`); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 23, xlsxMergedCell("الأفكار المختارة", r, 0, 3)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 42, xlsxMergedCell(ideas, r, 0, 12)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 7); r += 1;

    // مؤشرات الأثر.
    addRow(r, 24, xlsxMergedCell("مؤشرات تحقيق الأهداف والأثر", r, 0, 3)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 22,
      xlsxMergedCell("المشاركة", r, 0, 8) + xlsxMergedCell("تحقق الهدف", r, 3, 8) + xlsxMergedCell("رضا المستفيدين", r, 6, 8)
    );
    merge(`A${r}:C${r}`); merge(`D${r}:F${r}`); merge(`G${r}:H${r}`); r += 1;
    const p1 = excelPercentValue(indicator.participation);
    const p2 = excelPercentValue(indicator.achievement);
    const p3 = excelPercentValue(indicator.satisfaction);
    addRow(r, 30,
      (p1 == null ? xlsxMergedCell("—", r, 0, 9) : xlsxNumberCell(p1, r, 0, 9)) +
      (p2 == null ? xlsxMergedCell("—", r, 3, 10) : xlsxNumberCell(p2, r, 3, 10)) +
      (p3 == null ? xlsxMergedCell("—", r, 6, 11) : xlsxNumberCell(p3, r, 6, 11))
    );
    merge(`A${r}:C${r}`); merge(`D${r}:F${r}`); merge(`G${r}:H${r}`); r += 1;
    addRow(r, 38, xlsxCell("الأثر الملحوظ", r, 0, 1) + xlsxMergedCell(indicator.impactNote || "—", r, 2, 12)); merge(`A${r}:B${r}`); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 7); r += 1;

    // الشواهد والعوائق والملاحظات.
    addRow(r, 24, xlsxMergedCell("الشواهد والعوائق والملاحظات", r, 0, 3)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 42, xlsxCell("شواهد التنفيذ", r, 0, 1) + xlsxMergedCell(record.evidenceText || "—", r, 2, 12)); merge(`A${r}:B${r}`); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 34, xlsxCell("العوائق", r, 0, 1) + xlsxMergedCell(record.obstacles || "—", r, 2, 12)); merge(`A${r}:B${r}`); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 36, xlsxCell("ملاحظات عامة", r, 0, 1) + xlsxMergedCell(record.notes || "—", r, 2, 12)); merge(`A${r}:B${r}`); merge(`C${r}:H${r}`); r += 1;
    addRow(r, 7); r += 1;

    // الصور.
    const photoTitleRow = r;
    addRow(r, 24, xlsxMergedCell("صور الشواهد والتوثيق", r, 0, 3)); merge(`A${r}:H${r}`); r += 1;
    addRow(r, 20, xlsxMergedCell(photos.length ? `عدد الصور المرفقة: ${arNum(photos.length)}` : "لا توجد صور توثيق مضافة في الجلسة الحالية.", r, 0, 14)); merge(`A${r}:H${r}`); r += 1;
    const photoStartRow = r;
    const photoBlocks = Math.max(1, Math.ceil(photos.length / 2));
    const photoRows = photoBlocks * 8;
    for (let rr = photoStartRow; rr < photoStartRow + photoRows; rr += 1) addRow(rr, 15);
    r = photoStartRow + photoRows;
    const footerRow = r;
    addRow(footerRow, 23, xlsxMergedCell("أ/ فاطمة هزازي — مساعد الموجه الطلابي", footerRow, 0, 13)); merge(`A${footerRow}:H${footerRow}`);

    // الرسومات: شعار التقرير وصور الشواهد.
    const drawingPictures = [];
    const drawingRels = [];
    let picId = 1;
    let relIdCounter = 1;
    if (logoData && logoMediaName && logoFit) {
      const relId = `rId${relIdCounter++}`;
      drawingRels.push(`<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/${logoMediaName}" Id="${relId}"/>`);
      drawingPictures.push(xlsxDrawingPicture({ relId, id: picId++, name: "شعار التقرير", col: 0, row: 0, cx: logoFit.cx, cy: logoFit.cy, colOff: 170000, rowOff: 85000 }));
    }

    for (let index = 0; index < photos.length; index += 1) {
      const photo = photos[index];
      const data = dataUrlToBytes(photo.dataUrl);
      if (!data) continue;
      const mediaName = `image${globalMediaCounter++}.jpeg`;
      mediaMap.set(mediaName, data.bytes);
      const dims = await imageSizeFromDataUrl(photo.dataUrl);
      const isOddLast = photos.length % 2 === 1 && index === photos.length - 1;
      const block = Math.floor(index / 2);
      const anchorRow = photoStartRow - 1 + block * 8;
      const fit = fitImageEmu(dims.width, dims.height, isOddLast ? 5.4 : 3.0, 1.55);
      const relId = `rId${relIdCounter++}`;
      drawingRels.push(`<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="../media/${mediaName}" Id="${relId}"/>`);
      const col = isOddLast ? 1 : (index % 2 === 0 ? 0 : 4);
      drawingPictures.push(xlsxDrawingPicture({ relId, id: picId++, name: photo.name || `شاهد ${index + 1}`, col, row: anchorRow, cx: fit.cx, cy: fit.cy, colOff: isOddLast ? 180000 : 100000, rowOff: 70000 }));
    }

    const hasDrawing = drawingPictures.length > 0;
    const mergeXml = merges.length ? `<mergeCells count="${merges.length}">${merges.map((ref) => `<mergeCell ref="${ref}"/>`).join("")}</mergeCells>` : "";
    const columns = [11, 15, 15, 15, 15, 15, 14, 17].map((width, i) => `<col min="${i + 1}" max="${i + 1}" width="${width}" customWidth="1"/>`).join("");
    const printEndRow = footerRow;
    const freezeRow = 13;

    const sheetXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheetPr><pageSetUpPr fitToPage="1" autoPageBreaks="0"/></sheetPr>
  <dimension ref="A1:H${printEndRow}"/>
  <sheetViews><sheetView workbookViewId="0" rightToLeft="1" zoomScale="90" zoomScaleNormal="90"><pane ySplit="${freezeRow}" topLeftCell="A${freezeRow + 1}" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>${columns}</cols>
  <sheetData>${rows.join("")}</sheetData>
  ${mergeXml}
  <printOptions horizontalCentered="1" verticalCentered="0"/>
  <pageMargins left="0.25" right="0.25" top="0.32" bottom="0.35" header="0.15" footer="0.18"/>
  <pageSetup paperSize="9" orientation="portrait" fitToWidth="1" fitToHeight="0" horizontalDpi="300" verticalDpi="300"/>
  <headerFooter differentFirst="0" differentOddEven="0"><oddFooter>&amp;Cأ/ فاطمة هزازي</oddFooter></headerFooter>
  ${hasDrawing ? '<drawing r:id="rId1"/>' : ""}
</worksheet>`;

    entries.push({ name: `xl/worksheets/sheet${sheetNumber}.xml`, data: sheetXml });
    contentOverrides.push(`<Override PartName="/xl/worksheets/sheet${sheetNumber}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`);

    if (hasDrawing) {
      const drawingXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><wsDr xmlns="http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing">${drawingPictures.join("")}</wsDr>`;
      const drawingRelXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${drawingRels.join("")}</Relationships>`;
      entries.push({ name: `xl/drawings/drawing${sheetNumber}.xml`, data: drawingXml });
      entries.push({ name: `xl/drawings/_rels/drawing${sheetNumber}.xml.rels`, data: drawingRelXml });
      entries.push({ name: `xl/worksheets/_rels/sheet${sheetNumber}.xml.rels`, data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing" Target="../drawings/drawing${sheetNumber}.xml" Id="rId1"/></Relationships>` });
      contentOverrides.push(`<Override PartName="/xl/drawings/drawing${sheetNumber}.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/>`);
    }

    const sheetName = xlsxSafeSheetName(week.title, `الأسبوع ${sheetNumber}`);
    workbookSheets.push(`<sheet name="${xmlEscape(sheetName)}" sheetId="${sheetNumber}" r:id="rId${sheetNumber}"/>`);
    workbookRels.push(`<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${sheetNumber}.xml" Id="rId${sheetNumber}"/>`);
    const formulaSheetName = String(sheetName).replace(/'/g, "''");
    definedNames.push(`<definedName name="_xlnm.Print_Area" localSheetId="${sheetIndex}">'${xmlEscape(formulaSheetName)}'!$A$1:$H$${printEndRow}</definedName>`);
  }

  const stylesRelId = selectedWeeks.length + 1;
  workbookRels.push(`<Relationship Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" Id="rId${stylesRelId}"/>`);
  const workbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <bookViews><workbookView activeTab="0"/></bookViews>
  <sheets>${workbookSheets.join("")}</sheets>
  ${definedNames.length ? `<definedNames>${definedNames.join("")}</definedNames>` : ""}
  <calcPr calcId="191029" fullCalcOnLoad="1" forceFullCalc="1"/>
</workbook>`;

  entries.unshift(
    { name: "xl/styles.xml", data: stylesXml },
    { name: "xl/_rels/workbook.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${workbookRels.join("")}</Relationships>` },
    { name: "xl/workbook.xml", data: workbookXml },
    { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>` }
  );

  for (const [name, bytes] of mediaMap.entries()) entries.push({ name: `xl/media/${name}`, data: bytes });
  entries.unshift({ name: "[Content_Types].xml", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${mediaMap.size ? '<Default Extension="jpeg" ContentType="image/jpeg"/>' : ""}<Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${contentOverrides.join("")}</Types>` });

  const blob = makeZip(entries, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
  downloadBlob(blob, blob.type, `${exportFileStem(selectedWeeks)}-Excel-احترافي-v15.xlsx`);
  toast(selectedWeeks.length === 1
    ? "تم تصدير Excel للأسبوع المحدد مع الكليشة الجديدة والخطة اليومية"
    : "تم تصدير Excel؛ كل أسبوع في ورقة مستقلة مع الكليشة الجديدة والخطة اليومية");
}



/* ============================================================
   v13 — استوديو شواهد تنفيذ برنامج مدرسي
   ٤ صور واضحة لكل صفحة A4 + Word/PDF/PNG
   ============================================================ */

const evidenceTypeOptions = ["صورة تنفيذ", "مشاركة طلاب", "مشاركة طالبات", "إعلان", "منتج طلابي", "منتج طالبات", "حضور", "أخرى"];
function evidenceTypeOptionsForSchool(schoolType) {
  if (schoolType === "بنات") return ["صورة تنفيذ", "مشاركة طالبات", "إعلان", "منتج طالبات", "حضور", "أخرى"];
  if (schoolType === "بنين") return ["صورة تنفيذ", "مشاركة طلاب", "إعلان", "منتج طلابي", "حضور", "أخرى"];
  return ["صورة تنفيذ", "إعلان", "حضور", "أخرى"];
}
function normalizeEvidenceTypeForSchool(type, schoolType) {
  let value = evidenceTypeOptions.includes(type) ? type : "صورة تنفيذ";
  if (schoolType === "بنات") {
    if (value === "مشاركة طلاب") value = "مشاركة طالبات";
    if (value === "منتج طلابي") value = "منتج طالبات";
  } else if (schoolType === "بنين") {
    if (value === "مشاركة طالبات") value = "مشاركة طلاب";
    if (value === "منتج طالبات") value = "منتج طلابي";
  }
  return value;
}
function evidenceProgramTitle(programName) {
  const name = safeString(programName, 300).trim();
  if (!name) return "شواهد تنفيذ برنامج مدرسي";
  return /^برنامج(?:\s|$)/.test(name) ? `شواهد تنفيذ ${name}` : `شواهد تنفيذ برنامج ${name}`;
}
const MAX_EVIDENCE_PER_WEEK_V13 = 12;
let evidencePreviewTimer = null;

function blankEvidenceDoc() {
  return {
    schoolName: "",
    schoolType: "",
    programName: "",
    domain: "توجيه طلابي",
    executionDate: "",
    targetGroup: "",
    executor: "",
    summary: "",
    output: "",
    notes: "",
    signature: "",
    footerDate: "",
    items: []
  };
}

function sanitizeEvidenceDoc(source) {
  const doc = source && typeof source === "object" ? source : {};
  const schoolType = ["بنين", "بنات"].includes(doc.schoolType) ? doc.schoolType : "";
  return {
    schoolName: safeString(doc.schoolName, 120),
    schoolType,
    programName: safeString(doc.programName, 300),
    domain: ["نشاط طلابي", "توجيه طلابي", "تعليمي", "توعوي", "مجتمعي", "أخرى"].includes(doc.domain) ? doc.domain : "توجيه طلابي",
    executionDate: safeString(doc.executionDate, 80),
    targetGroup: safeString(doc.targetGroup, 200),
    executor: safeString(doc.executor, 200),
    summary: safeString(doc.summary, 900),
    output: safeString(doc.output, 500),
    notes: safeString(doc.notes, 700),
    signature: safeString(doc.signature, 200),
    footerDate: safeString(doc.footerDate, 80),
    items: Array.isArray(doc.items) ? doc.items.slice(0, MAX_EVIDENCE_PER_WEEK_V13).map((item) => ({
      description: safeString(item?.description, 240) || "شاهد تنفيذ",
      type: normalizeEvidenceTypeForSchool(item?.type, schoolType),
      note: safeString(item?.note, 300)
    })) : []
  };
}

function getEvidenceDoc(weekId) {
  state.evidenceDocs ||= {};
  const key = completionKey(weekId);
  if (!state.evidenceDocs[key] || typeof state.evidenceDocs[key] !== "object") state.evidenceDocs[key] = blankEvidenceDoc();
  const clean = sanitizeEvidenceDoc(state.evidenceDocs[key]);
  state.evidenceDocs[key] = clean;
  return clean;
}

function evidenceWeek() {
  return weeks.find((week) => week.id === Number(state.activeWeekId)) || weeks[0];
}

function evidenceDisplayData(week) {
  const doc = getEvidenceDoc(week.id);
  const record = getNoorRecord(week.id);
  return {
    ...doc,
    schoolName: doc.schoolName || state.school || "",
    programName: doc.programName || record.program || "",
    targetGroup: doc.targetGroup || record.targetGroup || "",
    executor: doc.executor || state.report?.userName || ""
  };
}

function ensureEvidenceItemMetadata(weekId) {
  const doc = getEvidenceDoc(weekId);
  const count = Math.min((evidenceCache[weekId] || []).length, MAX_EVIDENCE_PER_WEEK_V13);
  while (doc.items.length < count) doc.items.push({ description: "شاهد تنفيذ", type: "صورة تنفيذ", note: "" });
  if (doc.items.length > MAX_EVIDENCE_PER_WEEK_V13) doc.items = doc.items.slice(0, MAX_EVIDENCE_PER_WEEK_V13);
  return doc;
}

function evidenceGenderLabels(type) {
  if (type === "بنات") return { executor: "منفذة البرنامج", signature: "اسم المنفذة والتوقيع", targetPlaceholder: "مثال: طالبات الصف الثالث" };
  if (type === "بنين") return { executor: "منفذ البرنامج", signature: "اسم المنفذ والتوقيع", targetPlaceholder: "مثال: طلاب الصف الثالث" };
  return { executor: "منفذ/منفذة البرنامج", signature: "اسم المنفذ/المنفذة والتوقيع", targetPlaceholder: "اكتب الفئة المستهدفة" };
}

function scheduleEvidencePreview() {
  clearTimeout(evidencePreviewTimer);
  evidencePreviewTimer = setTimeout(() => {
    renderEvidenceDocumentPreview(evidenceWeek());
    renderProgramCenterV15();
  }, 70);
}

function bindEvidenceTextField(id, field, { globalSchool = false } = {}) {
  const el = document.querySelector(`#${id}`);
  if (!el) return;
  const eventName = el.tagName === "SELECT" ? "change" : "input";
  el.addEventListener(eventName, () => {
    const week = evidenceWeek();
    const doc = getEvidenceDoc(week.id);
    doc[field] = safeString(el.value, field === "summary" ? 900 : field === "notes" ? 700 : field === "output" ? 500 : 300);
    if (globalSchool) state.school = safeString(el.value, 120);
    persistState();
    if (field === "schoolType") {
      const doc = getEvidenceDoc(week.id);
      doc.items.forEach((item) => { item.type = normalizeEvidenceTypeForSchool(item.type, doc.schoolType); });
      syncEvidenceGenderLabels();
      renderEvidenceItemsEditor(week.id);
    }
    scheduleEvidencePreview();
  });
}

function wireEvidenceStudio() {
  bindEvidenceTextField("evidenceSchoolName", "schoolName", { globalSchool: true });
  bindEvidenceTextField("evidenceSchoolType", "schoolType");
  bindEvidenceTextField("evidenceProgramName", "programName");
  bindEvidenceTextField("evidenceProgramDomain", "domain");
  bindEvidenceTextField("evidenceExecutionDate", "executionDate");
  bindEvidenceTextField("evidenceTargetGroup", "targetGroup");
  bindEvidenceTextField("evidenceExecutor", "executor");
  bindEvidenceTextField("evidenceSummary", "summary");
  bindEvidenceTextField("evidenceOutput", "output");
  bindEvidenceTextField("evidenceNotes", "notes");
  bindEvidenceTextField("evidenceSignature", "signature");
  bindEvidenceTextField("evidenceFooterDate", "footerDate");

  document.querySelector("#evidenceStudioBtn")?.addEventListener("click", () => {
    syncEvidenceStudio();
    document.querySelector("#evidenceStudioSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelector("#evidenceCopyWeekBtn")?.addEventListener("click", () => {
    copyEvidenceDataFromWeek(evidenceWeek());
  });
  document.querySelector("#evidenceCopyReportBtn")?.addEventListener("click", () => copyEvidenceDataFromProgramReportV15(evidenceWeek(), { notify: true }));
  document.querySelector("#exportEvidenceWordBtn")?.addEventListener("click", () => exportEvidenceWord(evidenceWeek()));
  document.querySelector("#printEvidencePdfBtn")?.addEventListener("click", () => printEvidenceDocument(evidenceWeek()));
  document.querySelector("#exportEvidencePngBtn")?.addEventListener("click", () => exportEvidencePng(evidenceWeek()));
}

function copyEvidenceDataFromWeek(week) {
  const doc = getEvidenceDoc(week.id);
  const record = getNoorRecord(week.id);
  doc.schoolName = state.school || doc.schoolName;
  doc.programName = record.program || doc.programName || week.programs[0] || "";
  doc.targetGroup = record.targetGroup || doc.targetGroup;
  doc.executor = state.report?.userName || doc.executor;
  if (!doc.summary) doc.summary = record.procedure ? safeString(record.procedure, 900) : "";
  if (!doc.output) doc.output = getIndicator(week.id).impactNote ? safeString(getIndicator(week.id).impactNote, 500) : "";
  persistState("تمت تعبئة نموذج الشواهد من بيانات الأسبوع المدخلة");
  syncEvidenceStudio();
}

function syncEvidenceGenderLabels() {
  const doc = getEvidenceDoc(evidenceWeek().id);
  const labels = evidenceGenderLabels(doc.schoolType);
  const executorLabel = document.querySelector("#evidenceExecutorLabel");
  const signatureLabel = document.querySelector("#evidenceSignatureLabel");
  const target = document.querySelector("#evidenceTargetGroup");
  if (executorLabel) executorLabel.textContent = labels.executor;
  if (signatureLabel) signatureLabel.textContent = labels.signature;
  if (target) target.placeholder = labels.targetPlaceholder;
}

function syncEvidenceStudio() {
  const week = evidenceWeek();
  const doc = ensureEvidenceItemMetadata(week.id);
  const values = {
    evidenceSchoolName: doc.schoolName || state.school || "",
    evidenceSchoolType: doc.schoolType || "",
    evidenceProgramName: doc.programName || getNoorRecord(week.id).program || "",
    evidenceProgramDomain: doc.domain || "توجيه طلابي",
    evidenceExecutionDate: doc.executionDate || "",
    evidenceTargetGroup: doc.targetGroup || getNoorRecord(week.id).targetGroup || "",
    evidenceExecutor: doc.executor || state.report?.userName || "",
    evidenceSummary: doc.summary || "",
    evidenceOutput: doc.output || "",
    evidenceNotes: doc.notes || "",
    evidenceSignature: doc.signature || "",
    evidenceFooterDate: doc.footerDate || ""
  };
  Object.entries(values).forEach(([id, value]) => {
    const el = document.querySelector(`#${id}`);
    if (el && el.value !== value) el.value = value;
  });
  const chip = document.querySelector("#evidenceWeekChip");
  if (chip) chip.textContent = `${week.title} • ${week.dates[0]} — ${week.dates[1]}`;
  const count = document.querySelector("#evidenceAttachedCount");
  if (count) count.textContent = arNum((evidenceCache[week.id] || []).length);
  syncEvidenceGenderLabels();
  renderEvidenceItemsEditor(week.id);
  renderEvidenceDocumentPreview(week);
}

function renderEvidenceItemsEditor(weekId) {
  const host = document.querySelector("#evidenceItemsEditor");
  if (!host || Number(state.activeWeekId) !== Number(weekId)) return;
  const photos = evidenceCache[weekId] || [];
  const doc = ensureEvidenceItemMetadata(weekId);
  host.innerHTML = "";
  if (!photos.length) {
    host.innerHTML = '<div class="evidence-editor-empty">أضف صور الشواهد من قسم «صور التوثيق» في الأسبوع، ثم ستظهر هنا حقول الوصف والنوع والملاحظة لكل صورة.</div>';
    return;
  }
  photos.forEach((photo, index) => {
    const meta = doc.items[index] || { description: "شاهد تنفيذ", type: "صورة تنفيذ", note: "" };
    const card = document.createElement("article");
    card.className = "evidence-meta-card";
    card.innerHTML = `<div class="evidence-meta-thumb"><img src="${photo.dataUrl}" alt="شاهد ${index + 1}"><span>الشاهد ${arNum(index + 1)}</span></div>`;
    const fields = document.createElement("div");
    fields.className = "evidence-meta-fields";
    const description = document.createElement("input");
    description.type = "text"; description.maxLength = 240; description.value = meta.description || "شاهد تنفيذ"; description.placeholder = "وصف مختصر — أو شاهد تنفيذ";
    description.addEventListener("input", () => { doc.items[index].description = safeString(description.value, 240) || "شاهد تنفيذ"; persistState(); scheduleEvidencePreview(); });
    const type = document.createElement("select");
    const allowedTypes = evidenceTypeOptionsForSchool(doc.schoolType);
    allowedTypes.forEach((optionText) => { const option = document.createElement("option"); option.value=optionText; option.textContent=optionText; type.appendChild(option); });
    type.value = allowedTypes.includes(meta.type) ? meta.type : "صورة تنفيذ";
    type.addEventListener("change", () => { doc.items[index].type = type.value; persistState(); scheduleEvidencePreview(); });
    const note = document.createElement("input");
    note.type = "text"; note.maxLength = 300; note.value = meta.note || ""; note.placeholder = "ملاحظة مختصرة عند الحاجة";
    note.addEventListener("input", () => { doc.items[index].note = safeString(note.value, 300); persistState(); scheduleEvidencePreview(); });
    fields.append(description, type, note);
    card.appendChild(fields);
    host.appendChild(card);
  });
}

function evidencePhotoGroups(weekId) {
  const photos = (evidenceCache[weekId] || []).slice(0, MAX_EVIDENCE_PER_WEEK_V13);
  if (!photos.length) return [[]];
  const groups = [];
  for (let i = 0; i < photos.length; i += 4) groups.push(photos.slice(i, i + 4));
  return groups;
}

function evidencePageHtml(week, group, pageIndex, pageCount, { printable = false } = {}) {
  const data = evidenceDisplayData(week);
  const doc = getEvidenceDoc(week.id);
  const labels = evidenceGenderLabels(data.schoolType);
  const startIndex = pageIndex * 4;
  const logo = state.report?.logoDataUrl || "";
  const title = escapeHtml(evidenceProgramTitle(data.programName));
  const sourceSlots = group.length ? group : [null, null, null, null];
  const photoCells = sourceSlots.map((photo, slot) => {
    const idx = startIndex + slot;
    const meta = doc.items[idx] || { description: "شاهد تنفيذ", type: "صورة تنفيذ", note: "" };
    if (!photo) return `<div class="evidence-sheet-slot evidence-sheet-slot--empty"><span>مساحة شاهد</span></div>`;
    return `<figure class="evidence-sheet-slot"><div class="evidence-sheet-photo"><img src="${photo.dataUrl}" alt="الشاهد ${idx + 1}"></div><figcaption><strong>الشاهد ${arNum(idx + 1)} — ${escapeHtml(meta.description || "شاهد تنفيذ")}</strong><span>نوع الشاهد: ${escapeHtml(meta.type || "صورة تنفيذ")}</span>${meta.note ? `<small>${escapeHtml(meta.note)}</small>` : ""}</figcaption></figure>`;
  }).join("");
  const isLast = pageIndex === pageCount - 1;
  const footer = isLast ? `<div class="evidence-sheet-summary"><div><b>ملخص التنفيذ</b><p>${escapeHtml(data.summary || "") || "&nbsp;"}</p></div><div><b>أبرز مخرج موثّق</b><p>${escapeHtml(data.output || "") || "&nbsp;"}</p></div><div><b>ملاحظات</b><p>${escapeHtml(data.notes || "") || "&nbsp;"}</p></div><div class="evidence-sign"><span><b>${labels.signature}:</b> ${escapeHtml(data.signature || data.executor || "")}</span><span><b>التاريخ:</b> ${escapeHtml(data.footerDate || "")}</span></div></div>` : `<div class="evidence-continuation">صفحة شواهد إضافية • ${arNum(pageIndex + 1)} من ${arNum(pageCount)}</div>`;
  return `<article class="evidence-a4-page${printable ? " is-printable" : ""}">
    <header class="evidence-sheet-header"><div class="evidence-official"><strong>المملكة العربية السعودية</strong><span>وزارة التعليم</span><span>${state.admin ? `إدارة التعليم: ${escapeHtml(state.admin)}` : "إدارة التعليم"}</span><span>${data.schoolName ? `المدرسة: ${escapeHtml(data.schoolName)}` : "اسم المدرسة"}</span></div><div class="evidence-sheet-logo">${logo ? `<img src="${logo}" alt="شعار الجهة">` : '<span>شعار الجهة</span>'}</div></header>
    <div class="evidence-sheet-title"><span>${escapeHtml(week.title)} • ${escapeHtml(week.theme)}</span><h3>${title}</h3></div>
    <div class="evidence-sheet-meta"><span><b>نوع المدرسة:</b> ${escapeHtml(data.schoolType || "—")}</span><span><b>مجال البرنامج:</b> ${escapeHtml(data.domain || "—")}</span><span><b>تاريخ التنفيذ:</b> ${escapeHtml(data.executionDate || "—")}</span><span><b>الفئة المستهدفة:</b> ${escapeHtml(data.targetGroup || "—")}</span><span><b>${labels.executor}:</b> ${escapeHtml(data.executor || "—")}</span><span><b>عدد الصور:</b> ${arNum((evidenceCache[week.id] || []).length)}</span></div>
    <div class="evidence-sheet-grid evidence-sheet-grid--count-${group.length || 0}">${photoCells}</div>
    ${footer}
    <div class="evidence-sheet-brand"><span>ملتقى التعليم التفاعلي</span><strong>أ/ فاطمة هزازي</strong></div>
  </article>`;
}

function renderEvidenceDocumentPreview(week) {
  const host = document.querySelector("#evidenceDocumentPreview");
  if (!host) return;
  const groups = evidencePhotoGroups(week.id);
  host.innerHTML = groups.map((group, index) => evidencePageHtml(week, group, index, groups.length)).join("");
  const count = document.querySelector("#evidenceAttachedCount");
  if (count) count.textContent = arNum((evidenceCache[week.id] || []).length);
}

// v13: إعادة تعريف رفع الصور مع حد ١٢ صورة ومزامنة بيانات الشواهد.
async function handleEvidenceUpload(weekId, files) {
  const current = evidenceCache[weekId] || [];
  const remaining = Math.max(0, MAX_EVIDENCE_PER_WEEK_V13 - current.length);
  if (!remaining) { toast("الحد الأقصى ١٢ صورة مؤقتة لكل أسبوع (٣ صفحات A4)"); return; }
  const accepted = [];
  let rejected = 0;
  for (const file of files.slice(0, remaining)) {
    if (!allowedImageTypes.has(file.type) || file.size > MAX_EVIDENCE_FILE_SIZE) { rejected += 1; continue; }
    accepted.push(file);
  }
  if (!accepted.length) { toast("اختر PNG أو JPEG أو WebP بحجم لا يتجاوز ٥ م.ب للصورة"); return; }
  setStatus("جارٍ تجهيز صور التوثيق المؤقتة…");
  for (const [index, file] of accepted.entries()) {
    try {
      const dataUrl = await processImage(file, { maxDimension: 1500, quality: 0.78, outputType: "image/jpeg" });
      current.push({ id: `w${weekId}-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 8)}`, weekId: Number(weekId), name: safeString(file.name, 160), dataUrl, createdAt: Date.now() + index });
    } catch { rejected += 1; }
  }
  evidenceCache[weekId] = current;
  ensureEvidenceItemMetadata(weekId);
  persistState();
  renderEvidenceGrids(weekId);
  refreshDynamicUI();
  if (Number(state.activeWeekId) === Number(weekId)) syncEvidenceStudio();
  toast(rejected ? "تمت إضافة الصور المقبولة فقط؛ الصور غير الآمنة/الكبيرة رُفضت" : "تمت إضافة صور التوثيق مؤقتًا");
}

// v13: شبكة الصور مع حذف متزامن لوصف الشاهد المقابل.
function renderEvidenceGrids(weekId) {
  const items = evidenceCache[weekId] || [];
  document.querySelectorAll(`[data-evidence-grid="${weekId}"]`).forEach((grid) => {
    grid.innerHTML = "";
    if (!items.length) {
      const empty = document.createElement("div"); empty.className = "empty-evidence"; empty.textContent = "لم تُضف صور توثيق مؤقتة بعد"; grid.appendChild(empty); return;
    }
    items.forEach((item, index) => {
      const wrap = document.createElement("div"); wrap.className = "evidence-item";
      const img = document.createElement("img"); img.src = item.dataUrl; img.alt = item.name || "صورة توثيق";
      const badge = document.createElement("span"); badge.className = "evidence-item-number"; badge.textContent = arNum(index + 1);
      const remove = document.createElement("button"); remove.type = "button"; remove.textContent = "×"; remove.title = "حذف الصورة المؤقتة";
      remove.addEventListener("click", () => {
        if (!confirm("حذف صورة التوثيق المؤقتة؟")) return;
        evidenceCache[weekId] = (evidenceCache[weekId] || []).filter((entry) => entry.id !== item.id);
        const doc = getEvidenceDoc(weekId); if (doc.items[index]) doc.items.splice(index, 1);
        persistState(); renderEvidenceGrids(weekId); refreshDynamicUI(); if (Number(state.activeWeekId) === Number(weekId)) syncEvidenceStudio(); toast("تم حذف الصورة المؤقتة");
      });
      wrap.append(img, badge, remove); grid.appendChild(wrap);
    });
  });
  updateEvidenceCounts(weekId);
  if (Number(state.activeWeekId) === Number(weekId)) { renderEvidenceItemsEditor(weekId); renderEvidenceDocumentPreview(evidenceWeek()); }
}

function evidencePrintStyles() {
  return `@page{size:A4 portrait;margin:0}*{box-sizing:border-box}body{margin:0;background:#edf3f2;font-family:Tajawal,Arial,sans-serif;direction:rtl;color:#233b3a}.print-toolbar{position:sticky;top:0;z-index:9;display:flex;gap:8px;justify-content:center;padding:10px;background:#fff;border-bottom:1px solid #d6e3e0}.print-toolbar button{border:0;border-radius:10px;padding:10px 16px;background:#087f79;color:#fff;font-weight:800}.evidence-a4-page{width:210mm;min-height:297mm;margin:10mm auto;background:#fff;padding:10mm 11mm 8mm;display:flex;flex-direction:column;gap:4mm;box-shadow:0 10px 30px rgba(0,0,0,.12);page-break-after:always}.evidence-a4-page:last-child{page-break-after:auto}.evidence-sheet-header{display:grid;grid-template-columns:1fr 34mm;gap:6mm;align-items:center;border-bottom:1.5mm solid #d8b66f;padding-bottom:3mm}.evidence-official{display:flex;flex-direction:column;text-align:center;font-size:10pt;line-height:1.5}.evidence-official strong{font-size:11pt}.evidence-sheet-logo img{width:30mm;height:24mm;object-fit:contain}.evidence-sheet-title{text-align:center}.evidence-sheet-title span{color:#087f79;font-size:9pt;font-weight:800}.evidence-sheet-title h3{margin:1.5mm 0 0;font-size:16pt;color:#075f5b}.evidence-sheet-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:2mm}.evidence-sheet-meta span{border:1px solid #dce8e5;border-radius:2mm;padding:2mm;font-size:8.5pt;background:#f8fbfa}.evidence-sheet-grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:3mm;min-height:158mm;flex:1}.evidence-sheet-slot{margin:0;border:1px solid #d8e5e2;border-radius:3mm;padding:2mm;background:#fbfdfc;display:flex;flex-direction:column;min-height:0;overflow:hidden}.evidence-sheet-photo{height:54mm;display:flex;align-items:center;justify-content:center;background:#fff;border-radius:2mm;overflow:hidden}.evidence-sheet-photo img{width:100%;height:100%;object-fit:contain}.evidence-sheet-slot figcaption{padding-top:1.7mm;display:grid;gap:.7mm;text-align:right;font-size:8pt;line-height:1.35}.evidence-sheet-slot figcaption strong{color:#075f5b;font-size:8.5pt}.evidence-sheet-slot figcaption small{color:#647a78}.evidence-sheet-slot--empty{align-items:center;justify-content:center;color:#9aabaa;border-style:dashed}.evidence-sheet-summary{border:1px solid #dce7e4;border-radius:3mm;padding:2.5mm;display:grid;grid-template-columns:1fr 1fr;gap:2mm;font-size:8pt}.evidence-sheet-summary>div{background:#f8fbfa;border-radius:2mm;padding:1.5mm}.evidence-sheet-summary p{margin:1mm 0;min-height:5mm}.evidence-sheet-summary .evidence-sign{grid-column:1/-1;display:flex;justify-content:space-between;gap:6mm;border-top:1px solid #d9e5e2;padding-top:2mm}.evidence-continuation{text-align:center;color:#66817e;font-size:8pt}.evidence-sheet-brand{display:flex;justify-content:space-between;border-top:1px solid #e4ecea;padding-top:2mm;color:#087f79;font-size:8pt}@media print{body{background:#fff}.print-toolbar{display:none}.evidence-a4-page{margin:0;box-shadow:none;width:210mm;height:297mm;min-height:297mm;overflow:hidden}}`;
}

function printEvidenceDocument(week) {
  const groups = evidencePhotoGroups(week.id);
  const pages = groups.map((group, index) => evidencePageHtml(week, group, index, groups.length, { printable: true })).join("");
  const win = window.open("", "_blank", "noopener,noreferrer");
  if (!win) { toast("تعذر فتح نافذة الطباعة؛ اسمح بالنوافذ المنبثقة لهذا الموقع"); return; }
  win.document.open();
  win.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>شواهد تنفيذ — ${escapeHtml(evidenceDisplayData(week).programName || week.title)}</title><style>${evidencePrintStyles()}</style></head><body><div class="print-toolbar"><button onclick="window.print()">🖨️ حفظ / طباعة PDF</button></div>${pages}</body></html>`);
  win.document.close();
}

function evidenceDocxRawCell(innerXml, { width = 4700, fill = "FFFFFF", margin = 70, gridSpan = 1 } = {}) {
  return `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/>${gridSpan > 1 ? `<w:gridSpan w:val="${gridSpan}"/>` : ""}<w:shd w:fill="${fill}"/><w:tcMar><w:top w:w="${margin}" w:type="dxa"/><w:left w:w="${margin}" w:type="dxa"/><w:bottom w:w="${margin}" w:type="dxa"/><w:right w:w="${margin}" w:type="dxa"/></w:tcMar><w:vAlign w:val="top"/></w:tcPr>${innerXml || docxParagraph("",{spacingAfter:0})}</w:tc>`;
}

function evidenceDocxMetaTable(data) {
  const labels = evidenceGenderLabels(data.schoolType);
  const rows = [
    ["اسم المدرسة", data.schoolName || "—", "نوع المدرسة", data.schoolType || "—"],
    ["مجال البرنامج", data.domain || "—", "تاريخ التنفيذ", data.executionDate || "—"],
    ["الفئة المستهدفة", data.targetGroup || "—", labels.executor, data.executor || "—"]
  ];
  return `<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblBorders><w:top w:val="single" w:sz="4" w:color="D9E6E3"/><w:left w:val="single" w:sz="4" w:color="D9E6E3"/><w:bottom w:val="single" w:sz="4" w:color="D9E6E3"/><w:right w:val="single" w:sz="4" w:color="D9E6E3"/><w:insideH w:val="single" w:sz="4" w:color="D9E6E3"/><w:insideV w:val="single" w:sz="4" w:color="D9E6E3"/></w:tblBorders></w:tblPr>${rows.map(r=>`<w:tr>${docxCell(r[0],{width:1500,fill:"EAF7F4",bold:true,size:18})}${docxCell(r[1],{width:3200,size:18})}${docxCell(r[2],{width:1500,fill:"EAF7F4",bold:true,size:18})}${docxCell(r[3],{width:3200,size:18})}</w:tr>`).join("")}</w:tbl>`;
}

async function exportEvidenceWord(week) {
  const data = evidenceDisplayData(week);
  const doc = ensureEvidenceItemMetadata(week.id);
  const groups = evidencePhotoGroups(week.id);
  setStatus("جارٍ تجهيز Word مستقل للشواهد…");
  const relationships = [`<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>`];
  const mediaEntries = [];
  let relCounter = 2, docPrCounter = 1;
  let logoRelId = "", logoFit = null;
  const logoDataUrl = state.report?.logoDataUrl || "";
  const logoData = dataUrlToBytes(logoDataUrl);
  if (logoData) {
    logoRelId = `rId${relCounter++}`;
    relationships.push(`<Relationship Id="${logoRelId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/report-logo.jpeg"/>`);
    mediaEntries.push({ name:"word/media/report-logo.jpeg", data:logoData.bytes });
    const dims=await imageSizeFromDataUrl(logoDataUrl); logoFit=fitImageEmu(dims.width,dims.height,.85,.72);
  }
  const imageInfo=[];
  const photos=(evidenceCache[week.id]||[]).slice(0,MAX_EVIDENCE_PER_WEEK_V13);
  for (let i=0;i<photos.length;i++) {
    const imageData=dataUrlToBytes(photos[i].dataUrl); if(!imageData){imageInfo.push(null);continue;}
    const relId=`rId${relCounter++}`; const fileName=`evidence-v13-w${week.id}-${i+1}.jpeg`;
    relationships.push(`<Relationship Id="${relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${fileName}"/>`);
    mediaEntries.push({name:`word/media/${fileName}`,data:imageData.bytes});
    const dims=await imageSizeFromDataUrl(photos[i].dataUrl);
    imageInfo.push({relId,dims,name:photos[i].name||`شاهد ${i+1}`});
  }
  const parts=[];
  const nextLogo=()=>logoRelId&&logoFit?docxImageParagraphV6(logoRelId,docPrCounter++,"شعار التقرير",logoFit.cx,logoFit.cy):"";
  for(let pageIndex=0;pageIndex<groups.length;pageIndex++){
    const group = groups[pageIndex] || [];
    if(pageIndex>0) parts.push(docxPageBreak());
    parts.push(docxFormalHeader(nextLogo()));
    parts.push(docxParagraph(`${week.title} — ${week.theme}`,{bold:true,size:20,center:true,spacingAfter:25}));
    parts.push(docxParagraph(evidenceProgramTitle(data.programName),{bold:true,size:30,center:true,spacingAfter:80}));
    parts.push(evidenceDocxMetaTable(data));
    parts.push(docxParagraph("",{spacingAfter:50}));
    const start=pageIndex*4;
    const actualCount=group.length;
    const makeEvidenceCell=(idx,{wide=false,tall=false}={})=>{
      const info=imageInfo[idx]; const meta=doc.items[idx]||{description:"شاهد تنفيذ",type:"صورة تنفيذ",note:""};
      let inner="";
      if(info){
        const maxW=wide?5.9:3.05; const maxH=tall?3.35:(wide?2.05:1.75);
        const fit=fitImageEmu(info.dims.width,info.dims.height,maxW,maxH);
        inner+=docxImageParagraphV6(info.relId,docPrCounter++,info.name,fit.cx,fit.cy);
        inner+=docxParagraph(`الشاهد ${idx+1} — ${meta.description||"شاهد تنفيذ"}`,{bold:true,size:17,center:true,spacingAfter:20});
        inner+=docxParagraph(`نوع الشاهد: ${meta.type||"صورة تنفيذ"}`,{size:16,center:true,spacingAfter:15});
        if(meta.note) inner+=docxParagraph(meta.note,{size:15,center:true,spacingAfter:0});
      } else inner=docxParagraph("مساحة شاهد",{size:16,center:true,spacingAfter:0});
      return evidenceDocxRawCell(inner,{width:wide?9400:4700,fill:"FBFDFC",margin:65,gridSpan:wide?2:1});
    };
    let photoRows="";
    if(actualCount===0){
      photoRows=`<w:tr>${makeEvidenceCell(start)}${makeEvidenceCell(start+1)}</w:tr><w:tr>${makeEvidenceCell(start+2)}${makeEvidenceCell(start+3)}</w:tr>`;
    } else if(actualCount===1){
      photoRows=`<w:tr>${makeEvidenceCell(start,{wide:true,tall:true})}</w:tr>`;
    } else if(actualCount===2){
      photoRows=`<w:tr>${makeEvidenceCell(start,{tall:true})}${makeEvidenceCell(start+1,{tall:true})}</w:tr>`;
    } else if(actualCount===3){
      photoRows=`<w:tr>${makeEvidenceCell(start)}${makeEvidenceCell(start+1)}</w:tr><w:tr>${makeEvidenceCell(start+2,{wide:true})}</w:tr>`;
    } else {
      photoRows=`<w:tr>${makeEvidenceCell(start)}${makeEvidenceCell(start+1)}</w:tr><w:tr>${makeEvidenceCell(start+2)}${makeEvidenceCell(start+3)}</w:tr>`;
    }
    parts.push(`<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblLayout w:type="fixed"/><w:tblBorders><w:top w:val="single" w:sz="4" w:color="DCE8E5"/><w:left w:val="single" w:sz="4" w:color="DCE8E5"/><w:bottom w:val="single" w:sz="4" w:color="DCE8E5"/><w:right w:val="single" w:sz="4" w:color="DCE8E5"/><w:insideH w:val="single" w:sz="4" w:color="DCE8E5"/><w:insideV w:val="single" w:sz="4" w:color="DCE8E5"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="4700"/><w:gridCol w:w="4700"/></w:tblGrid>${photoRows}</w:tbl>`);
    if(pageIndex===groups.length-1){
      const labels=evidenceGenderLabels(data.schoolType);
      parts.push(docxParagraph("",{spacingAfter:55}));
      parts.push(`<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblBorders><w:top w:val="single" w:sz="4" w:color="DCE8E5"/><w:left w:val="single" w:sz="4" w:color="DCE8E5"/><w:bottom w:val="single" w:sz="4" w:color="DCE8E5"/><w:right w:val="single" w:sz="4" w:color="DCE8E5"/><w:insideH w:val="single" w:sz="4" w:color="DCE8E5"/><w:insideV w:val="single" w:sz="4" w:color="DCE8E5"/></w:tblBorders></w:tblPr>${[["ملخص التنفيذ",data.summary],["أبرز مخرج موثّق",data.output],["ملاحظات",data.notes],[labels.signature,data.signature||data.executor],["التاريخ",data.footerDate]].map(([l,v])=>`<w:tr>${docxCell(l,{width:2200,fill:"EAF7F4",bold:true,size:17})}${docxCell(v||" ",{width:7200,size:17})}</w:tr>`).join("")}</w:tbl>`);
    }
    parts.push(docxParagraph("أ/ فاطمة هزازي — ملتقى التعليم التفاعلي",{bold:true,size:16,center:true,spacingAfter:0}));
  }
  const documentXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><w:body>${parts.join("")}<w:sectPr><w:bidi/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="500" w:right="560" w:bottom="500" w:left="560" w:header="280" w:footer="280" w:gutter="0"/></w:sectPr></w:body></w:document>`;
  const stylesXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Tajawal" w:hAnsi="Tajawal" w:cs="Tajawal"/><w:rtl/><w:color w:val="173F3D"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:bidi/><w:jc w:val="right"/><w:spacing w:after="50" w:line="260" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>`;
  const contentTypes=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${mediaEntries.length?'<Default Extension="jpeg" ContentType="image/jpeg"/>':""}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`;
  const coreXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${xmlEscape(evidenceProgramTitle(data.programName))}</dc:title><dc:creator>مساعد الموجه الطلابي</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created></cp:coreProperties>`;
  const appXml=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>مساعد الموجه الطلابي</Application><AppVersion>15.0</AppVersion></Properties>`;
  const entries=[{name:"[Content_Types].xml",data:contentTypes},{name:"_rels/.rels",data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`},{name:"word/document.xml",data:documentXml},{name:"word/styles.xml",data:stylesXml},{name:"word/_rels/document.xml.rels",data:`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relationships.join("")}</Relationships>`},{name:"docProps/core.xml",data:coreXml},{name:"docProps/app.xml",data:appXml},...mediaEntries];
  const blob=makeZip(entries,"application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  downloadBlob(blob,blob.type,`${safeFileBase(data.schoolName||state.school||"المدرسة")}-${safeFileBase(data.programName||week.title)}-شواهد-v15.docx`);
  setStatus("تم تجهيز Word مستقل للشواهد");
}

function loadCanvasImage(src) {
  return new Promise((resolve,reject)=>{ const img=new Image(); img.onload=()=>resolve(img); img.onerror=()=>reject(new Error("تعذر تحميل الصورة")); img.src=src; });
}
function canvasRoundRect(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.roundRect(x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=3;ctx.stroke()}}
function canvasWrapRtl(ctx,text,x,y,maxWidth,lineHeight,maxLines=3){const words=String(text||"").split(/\s+/).filter(Boolean);let line="",lines=[];for(const word of words){const test=line?`${line} ${word}`:word;if(ctx.measureText(test).width>maxWidth&&line){lines.push(line);line=word}else line=test}if(line)lines.push(line);lines=lines.slice(0,maxLines);lines.forEach((l,i)=>ctx.fillText(l,x,y+i*lineHeight));return y+lines.length*lineHeight}
function drawContained(ctx,img,x,y,w,h){const s=Math.min(w/img.width,h/img.height);const dw=img.width*s,dh=img.height*s;ctx.drawImage(img,x+(w-dw)/2,y+(h-dh)/2,dw,dh)}
function canvasBlob(canvas,type="image/png",quality=1){return new Promise(resolve=>canvas.toBlob(resolve,type,quality))}

async function buildEvidenceCanvasPage(week,pageIndex,pageCount,group){
  await document.fonts?.ready?.catch?.(()=>{});
  const data=evidenceDisplayData(week),doc=getEvidenceDoc(week.id),labels=evidenceGenderLabels(data.schoolType);
  const canvas=document.createElement("canvas");canvas.width=2480;canvas.height=3508;const ctx=canvas.getContext("2d");ctx.fillStyle="#fff";ctx.fillRect(0,0,canvas.width,canvas.height);ctx.direction="rtl";ctx.textAlign="right";ctx.textBaseline="top";
  ctx.fillStyle="#087f79";ctx.fillRect(0,0,canvas.width,28);ctx.fillStyle="#d8b66f";ctx.fillRect(0,370,canvas.width,12);
  let logo=null;try{if(state.report?.logoDataUrl)logo=await loadCanvasImage(state.report.logoDataUrl)}catch{} if(logo){drawContained(ctx,logo,140,65,330,250)}else{canvasRoundRect(ctx,150,85,300,190,22,"#f8fbfa","#dce8e5");ctx.textAlign="center";ctx.fillStyle="#78908d";ctx.font="600 30px Tajawal, Arial";ctx.fillText("شعار الجهة",300,160)}
  ctx.fillStyle="#173f3d";ctx.font="700 48px Tajawal, Arial";ctx.fillText("المملكة العربية السعودية",2290,70);ctx.font="700 45px Tajawal, Arial";ctx.fillText("وزارة التعليم",2290,130);ctx.font="400 35px Tajawal, Arial";ctx.fillText(state.admin?`إدارة التعليم: ${state.admin}`:"إدارة التعليم",2290,195);ctx.fillText(data.schoolName?`المدرسة: ${data.schoolName}`:"اسم المدرسة",2290,245);
  ctx.textAlign="center";ctx.fillStyle="#087f79";ctx.font="700 34px Tajawal, Arial";ctx.fillText(`${week.title} • ${week.theme}`,1240,420);ctx.fillStyle="#075f5b";ctx.font="700 58px Tajawal, Arial";ctx.fillText(evidenceProgramTitle(data.programName),1240,472);
  const meta=[`نوع المدرسة: ${data.schoolType||"—"}`,`مجال البرنامج: ${data.domain||"—"}`,`تاريخ التنفيذ: ${data.executionDate||"—"}`,`الفئة المستهدفة: ${data.targetGroup||"—"}`,`${labels.executor}: ${data.executor||"—"}`,`عدد الصور: ${(evidenceCache[week.id]||[]).length}`];
  const mx=[2300,1590,880], my=[575,690]; ctx.textAlign="right";ctx.font="500 29px Tajawal, Arial";for(let r=0;r<2;r++)for(let c=0;c<3;c++){const i=r*3+c;canvasRoundRect(ctx,mx[c]-650,my[r],630,90,18,"#f6faf9","#dce8e5");ctx.fillStyle="#314b49";ctx.fillText(meta[i],mx[c]-25,my[r]+26)}
  const startY=820,gapX=80,gapY=65,left=110;
  const drawCanvasEvidenceCell=async(photo,idx,x,y,cellW,cellH)=>{
    const metaItem=doc.items[idx]||{description:"شاهد تنفيذ",type:"صورة تنفيذ",note:""};canvasRoundRect(ctx,x,y,cellW,cellH,24,"#fbfdfc","#d6e5e2");
    if(photo){let img=null;try{img=await loadCanvasImage(photo.dataUrl)}catch{};const photoH=Math.max(480,cellH-260);if(img)drawContained(ctx,img,x+35,y+35,cellW-70,photoH);ctx.textAlign="right";ctx.fillStyle="#075f5b";ctx.font="700 30px Tajawal, Arial";canvasWrapRtl(ctx,`الشاهد ${idx+1} — ${metaItem.description||"شاهد تنفيذ"}`,x+cellW-35,y+photoH+70,cellW-70,40,2);ctx.fillStyle="#465f5d";ctx.font="500 26px Tajawal, Arial";ctx.fillText(`نوع الشاهد: ${metaItem.type||"صورة تنفيذ"}`,x+cellW-35,y+photoH+160);if(metaItem.note){ctx.fillStyle="#687c7a";ctx.font="400 23px Tajawal, Arial";canvasWrapRtl(ctx,metaItem.note,x+cellW-35,y+photoH+205,cellW-70,32,2)}}else{ctx.textAlign="center";ctx.fillStyle="#a3b1b0";ctx.font="500 34px Tajawal, Arial";ctx.fillText("مساحة شاهد",x+cellW/2,y+cellH/2)}
  };
  if(group.length===1){await drawCanvasEvidenceCell(group[0],pageIndex*4,left,startY,2260,1740)}
  else if(group.length===2){await drawCanvasEvidenceCell(group[0],pageIndex*4,left,startY,1090,1740);await drawCanvasEvidenceCell(group[1],pageIndex*4+1,left+1170,startY,1090,1740)}
  else if(group.length===3){await drawCanvasEvidenceCell(group[0],pageIndex*4,left,startY,1090,820);await drawCanvasEvidenceCell(group[1],pageIndex*4+1,left+1170,startY,1090,820);await drawCanvasEvidenceCell(group[2],pageIndex*4+2,left,startY+885,2260,855)}
  else {const source=group.length?group:[null,null,null,null];for(let slot=0;slot<4;slot++){const row=Math.floor(slot/2),col=slot%2;await drawCanvasEvidenceCell(source[slot]||null,pageIndex*4+slot,left+col*1170,startY+row*970,1090,905)}}
  const isLast=pageIndex===pageCount-1;if(isLast){const y=2780;canvasRoundRect(ctx,110,y,2260,530,24,"#f8fbfa","#dce8e5");ctx.textAlign="right";ctx.fillStyle="#075f5b";ctx.font="700 28px Tajawal, Arial";ctx.fillText("ملخص التنفيذ",2310,y+25);ctx.fillStyle="#344d4b";ctx.font="400 24px Tajawal, Arial";canvasWrapRtl(ctx,data.summary||"",2310,y+70,2150,34,3);ctx.fillStyle="#075f5b";ctx.font="700 28px Tajawal, Arial";ctx.fillText("أبرز مخرج موثّق",2310,y+175);ctx.fillStyle="#344d4b";ctx.font="400 24px Tajawal, Arial";canvasWrapRtl(ctx,data.output||"",2310,y+220,2150,34,2);ctx.fillStyle="#075f5b";ctx.font="700 28px Tajawal, Arial";ctx.fillText("ملاحظات",2310,y+300);ctx.fillStyle="#344d4b";ctx.font="400 24px Tajawal, Arial";canvasWrapRtl(ctx,data.notes||"",2310,y+345,2150,34,2);ctx.font="500 25px Tajawal, Arial";ctx.fillText(`${labels.signature}: ${data.signature||data.executor||""}`,2310,y+445);ctx.textAlign="left";ctx.fillText(`التاريخ: ${data.footerDate||""}`,170,y+445)}else{ctx.textAlign="center";ctx.fillStyle="#687c7a";ctx.font="500 26px Tajawal, Arial";ctx.fillText(`صفحة شواهد إضافية • ${pageIndex+1} من ${pageCount}`,1240,3290)}
  ctx.textAlign="right";ctx.fillStyle="#087f79";ctx.font="700 22px Tajawal, Arial";ctx.fillText("أ/ فاطمة هزازي",2320,3435);ctx.textAlign="left";ctx.fillText("ملتقى التعليم التفاعلي",160,3435);return canvas;
}

async function exportEvidencePng(week){
  const groups=evidencePhotoGroups(week.id);setStatus("جارٍ إنشاء صفحات PNG عالية الدقة…");
  for(let i=0;i<groups.length;i++){const canvas=await buildEvidenceCanvasPage(week,i,groups.length,groups[i]);const blob=await canvasBlob(canvas,"image/png",1);if(blob)downloadBlob(blob,"image/png",`${safeFileBase(evidenceDisplayData(week).programName||week.title)}-شواهد-${i+1}-من-${groups.length}.png`)}
  setStatus(`تم إنشاء ${groups.length} صفحة PNG عالية الدقة`);
}


/* ============================================================
   v14 — تقرير تنفيذ برنامج مدرسي + DOCX Fillable Content Controls
   - جداول Word حقيقية w:tbl
   - حقول تعبئة Word Content Controls w:sdt
   - قوائم منسدلة Word حقيقية لنوع المدرسة والمجال ونوع الشاهد
   ============================================================ */

const programReportDomainsV14 = ["نشاط طلابي", "توجيه طلابي", "توعوي", "تعليمي", "مجتمعي", "أخرى"];
let programReportPreviewTimer = null;

function blankProgramReport() {
  return {
    schoolName: "",
    schoolType: "",
    programName: "",
    domain: "",
    targetGroup: "",
    executionDate: "",
    location: "",
    executor: "",
    beneficiaries: "",
    goals: "",
    mechanism: "",
    activities: "",
    results: "",
    strengths: "",
    recommendations: "",
    evidenceAvailable: "",
    evidenceLink: "",
    impactTool: "",
    impactResult: "",
    signature: "",
    footerDate: ""
  };
}

function sanitizeProgramReport(source) {
  const item = source && typeof source === "object" ? source : {};
  const schoolType = ["بنين", "بنات"].includes(item.schoolType) ? item.schoolType : "";
  const domain = programReportDomainsV14.includes(item.domain) ? item.domain : "";
  return {
    schoolName: safeString(item.schoolName, 120),
    schoolType,
    programName: safeString(item.programName, 300),
    domain,
    targetGroup: safeString(item.targetGroup, 220),
    executionDate: safeString(item.executionDate, 80),
    location: safeString(item.location, 180),
    executor: safeString(item.executor, 200),
    beneficiaries: safeString(item.beneficiaries, 60),
    goals: safeString(item.goals, 1800),
    mechanism: safeString(item.mechanism, 2200),
    activities: safeString(item.activities, 1800),
    results: safeString(item.results, 1800),
    strengths: safeString(item.strengths, 1400),
    recommendations: safeString(item.recommendations, 1400),
    evidenceAvailable: safeString(item.evidenceAvailable, 700),
    evidenceLink: safeString(item.evidenceLink, 700),
    impactTool: safeString(item.impactTool, 500),
    impactResult: safeString(item.impactResult, 900),
    signature: safeString(item.signature, 220),
    footerDate: safeString(item.footerDate, 80)
  };
}

function getProgramReport(weekId) {
  state.programReports ||= {};
  const key = completionKey(weekId);
  if (!state.programReports[key] || typeof state.programReports[key] !== "object") state.programReports[key] = blankProgramReport();
  state.programReports[key] = sanitizeProgramReport(state.programReports[key]);
  return state.programReports[key];
}

function programReportDisplayData(week) {
  const report = getProgramReport(week.id);
  return {
    ...report,
    schoolName: report.schoolName || state.school || "",
    executor: report.executor || state.report?.userName || "",
    signature: report.signature || report.executor || state.report?.userName || ""
  };
}

function programReportGenderLabels(type) {
  if (type === "بنات") return { executor: "منفذة البرنامج", signature: "اسم المنفذة والتوقيع", participant: "الطالبات" };
  if (type === "بنين") return { executor: "منفذ البرنامج", signature: "اسم المنفذ والتوقيع", participant: "الطلاب" };
  return { executor: "منفذ/منفذة البرنامج", signature: "اسم المنفذ/المنفذة والتوقيع", participant: "الطلاب/الطالبات" };
}

function bindProgramReportField(id, field, maxLength = 1000, { globalSchool = false } = {}) {
  const el = document.querySelector(`#${id}`);
  if (!el) return;
  const eventName = el.tagName === "SELECT" ? "change" : "input";
  el.addEventListener(eventName, () => {
    const week = evidenceWeek();
    const report = getProgramReport(week.id);
    report[field] = safeString(el.value, maxLength);
    if (field === "schoolType" && !["بنين", "بنات"].includes(report[field])) report[field] = "";
    if (field === "domain" && !programReportDomainsV14.includes(report[field])) report[field] = "";
    if (globalSchool) state.school = safeString(el.value, 120);
    persistState();
    syncProgramReportGenderLabels();
    scheduleProgramReportPreview();
  });
}

function wireProgramReportStudio() {
  const fields = [
    ["programReportSchoolName", "schoolName", 120, { globalSchool: true }],
    ["programReportSchoolType", "schoolType", 20],
    ["programReportProgramName", "programName", 300],
    ["programReportDomain", "domain", 60],
    ["programReportTargetGroup", "targetGroup", 220],
    ["programReportExecutionDate", "executionDate", 80],
    ["programReportLocation", "location", 180],
    ["programReportExecutor", "executor", 200],
    ["programReportBeneficiaries", "beneficiaries", 60],
    ["programReportGoals", "goals", 1800],
    ["programReportMechanism", "mechanism", 2200],
    ["programReportActivities", "activities", 1800],
    ["programReportResults", "results", 1800],
    ["programReportStrengths", "strengths", 1400],
    ["programReportRecommendations", "recommendations", 1400],
    ["programReportEvidenceAvailable", "evidenceAvailable", 700],
    ["programReportEvidenceLink", "evidenceLink", 700],
    ["programReportImpactTool", "impactTool", 500],
    ["programReportImpactResult", "impactResult", 900],
    ["programReportSignature", "signature", 220],
    ["programReportFooterDate", "footerDate", 80]
  ];
  fields.forEach(([id, field, maxLength, options]) => bindProgramReportField(id, field, maxLength, options || {}));

  document.querySelector("#programReportStudioBtn")?.addEventListener("click", () => {
    syncProgramReportStudio();
    document.querySelector("#programReportSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  document.querySelector("#programReportCopyWeekBtn")?.addEventListener("click", () => copyProgramReportFromWeek(evidenceWeek()));
  document.querySelector("#exportFillableProgramReportBtn")?.addEventListener("click", () => exportProgramReportWord(evidenceWeek(), { fillable: true }));
  document.querySelector("#exportFilledProgramReportBtn")?.addEventListener("click", () => exportProgramReportWord(evidenceWeek(), { fillable: false }));
  document.querySelector("#programReportEvidenceBtn")?.addEventListener("click", () => openEvidenceFromProgramReportV15(evidenceWeek()));
  document.querySelector("#programReportReviewBtn")?.addEventListener("click", () => showSmartReviewForWeekV15(evidenceWeek()));
}

function copyProgramReportFromWeek(week) {
  const report = getProgramReport(week.id);
  const record = getNoorRecord(week.id);
  const indicator = getIndicator(week.id);
  const evidenceDoc = getEvidenceDoc(week.id);
  const daily = dailyPlansForWeek(week).filter((day) => day.done && dayPlanHasContent(day));

  report.schoolName = report.schoolName || state.school || "";
  report.schoolType = report.schoolType || evidenceDoc.schoolType || "";
  report.programName = report.programName || record.program || "";
  report.domain = report.domain || evidenceDoc.domain || "";
  report.targetGroup = report.targetGroup || record.targetGroup || "";
  report.executor = report.executor || state.report?.userName || "";
  report.beneficiaries = report.beneficiaries || record.beneficiaries || "";
  report.mechanism = report.mechanism || record.procedure || "";
  report.evidenceAvailable = report.evidenceAvailable || record.evidenceText || "";
  if (!report.executionDate && evidenceDoc.executionDate) report.executionDate = evidenceDoc.executionDate;
  if (!report.goals && daily.some((day) => day.objective)) report.goals = daily.map((day) => day.objective).filter(Boolean).join("\n");
  if (!report.activities && daily.some((day) => day.activity)) report.activities = daily.map((day) => day.activity).filter(Boolean).join("\n");
  if (!report.results && indicator.impactNote) report.results = safeString(indicator.impactNote, 1800);
  const impactParts = [];
  if (indicator.participation !== "" && indicator.participation != null) impactParts.push(`المشاركة: ${indicator.participation}%`);
  if (indicator.achievement !== "" && indicator.achievement != null) impactParts.push(`تحقق الهدف: ${indicator.achievement}%`);
  if (indicator.satisfaction !== "" && indicator.satisfaction != null) impactParts.push(`رضا المستفيدين: ${indicator.satisfaction}%`);
  if (!report.impactResult && impactParts.length) report.impactResult = impactParts.join(" • ");
  if (!report.signature) report.signature = report.executor;
  if (!report.footerDate && report.executionDate) report.footerDate = report.executionDate;
  persistState("تم ربط التقرير بالخطة وتعبئة الحقول الفارغة من بيانات الأسبوع");
  syncProgramReportStudio();
}

function syncProgramReportGenderLabels() {
  const report = getProgramReport(evidenceWeek().id);
  const labels = programReportGenderLabels(report.schoolType);
  const executorLabel = document.querySelector("#programReportExecutorLabel");
  const signatureLabel = document.querySelector("#programReportSignatureLabel");
  if (executorLabel) executorLabel.textContent = labels.executor;
  if (signatureLabel) signatureLabel.textContent = labels.signature;
}

function scheduleProgramReportPreview() {
  clearTimeout(programReportPreviewTimer);
  programReportPreviewTimer = setTimeout(() => {
    renderProgramReportPreview(evidenceWeek());
    renderProgramCenterV15();
  }, 70);
}

function syncProgramReportStudio() {
  const week = evidenceWeek();
  const report = getProgramReport(week.id);
  const values = {
    programReportSchoolName: report.schoolName || state.school || "",
    programReportSchoolType: report.schoolType,
    programReportProgramName: report.programName,
    programReportDomain: report.domain,
    programReportTargetGroup: report.targetGroup,
    programReportExecutionDate: report.executionDate,
    programReportLocation: report.location,
    programReportExecutor: report.executor || state.report?.userName || "",
    programReportBeneficiaries: report.beneficiaries,
    programReportGoals: report.goals,
    programReportMechanism: report.mechanism,
    programReportActivities: report.activities,
    programReportResults: report.results,
    programReportStrengths: report.strengths,
    programReportRecommendations: report.recommendations,
    programReportEvidenceAvailable: report.evidenceAvailable,
    programReportEvidenceLink: report.evidenceLink,
    programReportImpactTool: report.impactTool,
    programReportImpactResult: report.impactResult,
    programReportSignature: report.signature,
    programReportFooterDate: report.footerDate
  };
  Object.entries(values).forEach(([id, value]) => {
    const el = document.querySelector(`#${id}`);
    if (el && el.value !== String(value || "")) el.value = value || "";
  });
  const chip = document.querySelector("#programReportWeekChip");
  if (chip) chip.textContent = `${week.title} • ${week.dates[0]} – ${week.dates[1]}`;
  syncProgramReportGenderLabels();
  renderProgramReportPreview(week);
}

function programReportReadinessValue(report) {
  const core = [report.schoolName, report.schoolType, report.programName, report.domain, report.targetGroup, report.executionDate, report.location, report.executor, report.beneficiaries, report.goals, report.mechanism, report.activities, report.results];
  const filled = core.filter((value) => String(value || "").trim()).length;
  return Math.round((filled / core.length) * 100);
}

function renderProgramReportPreview(week) {
  const data = programReportDisplayData(week);
  const readiness = programReportReadinessValue(data);
  const title = document.querySelector("#programReportPreviewTitle");
  if (title) title.textContent = data.programName ? `تقرير تنفيذ برنامج ${data.programName}` : "تقرير تنفيذ برنامج";
  const badge = document.querySelector("#programReportReadiness");
  if (badge) {
    badge.style.setProperty("--report-ready", `${readiness}%`);
    badge.dataset.label = `${arNum(readiness)}٪`;
    badge.textContent = "";
  }
  const body = document.querySelector("#programReportPreviewBody");
  if (!body) return;
  const rows = [
    ["المدرسة", data.schoolName || "غير مدخل"],
    ["البرنامج", data.programName || "غير مدخل"],
    ["المجال", data.domain || "غير مدخل"],
    ["الفئة", data.targetGroup || "غير مدخل"],
    ["التاريخ", data.executionDate || "غير مدخل"],
    ["الشواهد الحالية", `${arNum((evidenceCache[week.id] || []).length)} صورة مؤقتة`]
  ];
  body.innerHTML = rows.map(([label, value]) => `<div class="program-report-preview-row"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join("");
  renderSmartReviewV15(week);
}

function docxFormRunV14(text, { bold = false, size = 20, color = "173F3D", italic = false } = {}) {
  const parts = String(text ?? "").split(/\r?\n/);
  const content = parts.map((part, index) => `${index ? "<w:br/>" : ""}<w:t xml:space="preserve">${xmlEscape(part)}</w:t>`).join("");
  return `<w:r><w:rPr><w:rtl/><w:rFonts w:ascii="Tajawal" w:hAnsi="Tajawal" w:cs="Tajawal" w:eastAsia="Tajawal"/>${bold ? "<w:b/><w:bCs/>" : ""}${italic ? "<w:i/><w:iCs/>" : ""}<w:color w:val="${color}"/><w:sz w:val="${size}"/><w:szCs w:val="${size}"/></w:rPr>${content}</w:r>`;
}

function docxFormParagraphV14(text, { style = "Normal", bold = false, size = 20, color = "173F3D", center = false, spacingAfter = 35, pageBreakBefore = false } = {}) {
  return `<w:p><w:pPr><w:pStyle w:val="${style}"/><w:bidi/><w:jc w:val="${center ? "center" : "right"}"/>${pageBreakBefore ? "<w:pageBreakBefore/>" : ""}<w:spacing w:after="${spacingAfter}"/></w:pPr>${docxFormRunV14(text, { bold, size, color })}</w:p>`;
}

function docxContentControlV14({ id, tag, alias, value = "", placeholder = "اكتب هنا", multiline = false, style = "FieldValue" }) {
  const shown = String(value || "").trim() || placeholder;
  return `<w:sdt><w:sdtPr><w:alias w:val="${xmlEscape(alias)}"/><w:tag w:val="${xmlEscape(tag)}"/><w:id w:val="${id}"/><w:text${multiline ? ' w:multiLine="1"' : ""}/></w:sdtPr><w:sdtContent>${docxFormParagraphV14(shown, { style, color: value ? "173F3D" : "758986", size: 19, spacingAfter: 0 })}</w:sdtContent></w:sdt>`;
}

function docxDropdownControlV14({ id, tag, alias, value = "", options = [] }) {
  const selected = options.includes(value) ? value : "اختر";
  const list = ["اختر", ...options.filter((item) => item !== "اختر")];
  return `<w:sdt><w:sdtPr><w:alias w:val="${xmlEscape(alias)}"/><w:tag w:val="${xmlEscape(tag)}"/><w:id w:val="${id}"/><w:dropDownList>${list.map((item) => `<w:listItem w:displayText="${xmlEscape(item)}" w:value="${xmlEscape(item)}"/>`).join("")}</w:dropDownList></w:sdtPr><w:sdtContent>${docxFormParagraphV14(selected, { style: "FieldValue", color: selected === "اختر" ? "758986" : "173F3D", size: 19, spacingAfter: 0 })}</w:sdtContent></w:sdt>`;
}

function docxProgramLabelCellV14(label, width = 2100) {
  return `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/><w:shd w:fill="EAF7F4"/><w:tcMar><w:top w:w="90" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="90" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar><w:vAlign w:val="center"/></w:tcPr>${docxFormParagraphV14(label, { style: "FieldLabel", bold: true, size: 18, color: "075F5B", spacingAfter: 0 })}</w:tc>`;
}

function docxProgramValueCellV14(inner, width = 2600, { fill = "FFFFFF", span = 1 } = {}) {
  return `<w:tc><w:tcPr><w:tcW w:w="${width}" w:type="dxa"/>${span > 1 ? `<w:gridSpan w:val="${span}"/>` : ""}<w:shd w:fill="${fill}"/><w:tcMar><w:top w:w="80" w:type="dxa"/><w:left w:w="80" w:type="dxa"/><w:bottom w:w="80" w:type="dxa"/><w:right w:w="80" w:type="dxa"/></w:tcMar><w:vAlign w:val="center"/></w:tcPr>${inner}</w:tc>`;
}

function docxProgramTablePrV14() {
  return `<w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblLayout w:type="fixed"/><w:tblBorders><w:top w:val="single" w:sz="5" w:color="D8E6E3"/><w:left w:val="single" w:sz="5" w:color="D8E6E3"/><w:bottom w:val="single" w:sz="5" w:color="D8E6E3"/><w:right w:val="single" w:sz="5" w:color="D8E6E3"/><w:insideH w:val="single" w:sz="4" w:color="D8E6E3"/><w:insideV w:val="single" w:sz="4" w:color="D8E6E3"/></w:tblBorders></w:tblPr>`;
}

function docxProgramSectionV14(title, inner, { fill = "F8FBFA" } = {}) {
  return `<w:tbl>${docxProgramTablePrV14()}<w:tblGrid><w:gridCol w:w="9400"/></w:tblGrid><w:tr>${docxProgramValueCellV14(docxFormParagraphV14(title, { style: "SectionTitle", bold: true, size: 21, color: "FFFFFF", center: false, spacingAfter: 0 }), 9400, { fill: "087F79" })}</w:tr><w:tr>${docxProgramValueCellV14(inner, 9400, { fill })}</w:tr></w:tbl>`;
}

function docxProgramHeaderV14(logoXml, schoolName = "") {
  const official = `${docxFormParagraphV14("المملكة العربية السعودية", { bold: true, size: 21, center: true, spacingAfter: 20 })}${docxFormParagraphV14("وزارة التعليم", { bold: true, size: 21, center: true, spacingAfter: 20 })}${docxFormParagraphV14(state.admin ? `إدارة التعليم: ${state.admin}` : "إدارة التعليم", { size: 18, center: true, spacingAfter: 16 })}${docxFormParagraphV14(schoolName ? `المدرسة: ${schoolName}` : "اسم المدرسة", { size: 18, center: true, spacingAfter: 0 })}`;
  const logoCell = `<w:tc><w:tcPr><w:tcW w:w="2000" w:type="dxa"/><w:vAlign w:val="center"/></w:tcPr>${logoXml || docxFormParagraphV14("مساحة شعار وزارة التعليم / الجهة", { size: 14, color: "7B8E8B", center: true, spacingAfter: 0 })}</w:tc>`;
  const textCell = `<w:tc><w:tcPr><w:tcW w:w="7400" w:type="dxa"/><w:vAlign w:val="center"/></w:tcPr>${official}</w:tc>`;
  return `<w:tbl><w:tblPr><w:tblW w:w="9400" w:type="dxa"/><w:bidiVisual/><w:tblBorders><w:bottom w:val="single" w:sz="10" w:color="D8B66F"/><w:top w:val="nil"/><w:left w:val="nil"/><w:right w:val="nil"/><w:insideH w:val="nil"/><w:insideV w:val="nil"/></w:tblBorders></w:tblPr><w:tblGrid><w:gridCol w:w="2000"/><w:gridCol w:w="7400"/></w:tblGrid><w:tr>${logoCell}${textCell}</w:tr></w:tbl>`;
}

function docxProgramMetaTableV14(data, fillable, nextId) {
  const text = (tag, alias, value, placeholder = "اكتب هنا") => fillable ? docxContentControlV14({ id: nextId(), tag, alias, value, placeholder }) : docxFormParagraphV14(value || "", { style: "FieldValue", size: 19, spacingAfter: 0 });
  const dropdown = (tag, alias, value, options) => fillable ? docxDropdownControlV14({ id: nextId(), tag, alias, value, options }) : docxFormParagraphV14(value || "", { style: "FieldValue", size: 19, spacingAfter: 0 });
  const labels = programReportGenderLabels(data.schoolType);
  const rows = [
    ["اسم المدرسة", text("schoolName", "اسم المدرسة", data.schoolName), "نوع المدرسة", dropdown("schoolType", "نوع المدرسة", data.schoolType, ["بنين", "بنات"])],
    ["اسم البرنامج أو الفعالية", text("programName", "اسم البرنامج أو الفعالية", data.programName), "مجال البرنامج", dropdown("domain", "مجال البرنامج", data.domain, programReportDomainsV14)],
    ["الفئة المستهدفة", text("targetGroup", "الفئة المستهدفة", data.targetGroup), "عدد المستفيدين", text("beneficiaries", "عدد المستفيدين", data.beneficiaries, "اكتب العدد")],
    ["تاريخ التنفيذ", text("executionDate", "تاريخ التنفيذ", data.executionDate, "اكتب التاريخ"), "مكان التنفيذ", text("location", "مكان التنفيذ", data.location, "اكتب المكان")],
    [labels.executor, text("executor", labels.executor, data.executor, "اكتب الاسم أو الصفة"), "الشواهد المتوفرة", text("evidenceAvailable", "الشواهد المتوفرة", data.evidenceAvailable, "صور / حضور / إعلان / رابط / QR / أخرى")]
  ];
  return `<w:tbl>${docxProgramTablePrV14()}<w:tblGrid><w:gridCol w:w="1850"/><w:gridCol w:w="2850"/><w:gridCol w:w="1850"/><w:gridCol w:w="2850"/></w:tblGrid>${rows.map((row) => `<w:tr>${docxProgramLabelCellV14(row[0],1850)}${docxProgramValueCellV14(row[1],2850)}${docxProgramLabelCellV14(row[2],1850)}${docxProgramValueCellV14(row[3],2850)}</w:tr>`).join("")}</w:tbl>`;
}

function docxEvidencePlaceholderTableV14(data, fillable, nextId) {
  const evidenceDoc = getEvidenceDoc(evidenceWeek().id);
  const typeOptions = evidenceTypeOptionsForSchool(data.schoolType);
  const cells = [];
  for (let i = 0; i < 4; i += 1) {
    const meta = evidenceDoc.items[i] || { description: "", type: "صورة تنفيذ", note: "" };
    const imageArea = docxFormParagraphV14(`مساحة الصورة / الشاهد ${i + 1}\n(يمكن إدراج صورة داخل هذه الخلية في Word)`, { style: "Hint", size: 16, color: "718582", center: true, spacingAfter: 50 });
    const type = fillable ? docxDropdownControlV14({ id: nextId(), tag: `evidenceType${i+1}`, alias: `نوع الشاهد ${i+1}`, value: meta.type, options: typeOptions }) : docxFormParagraphV14(meta.type || "", { size: 16, spacingAfter: 0 });
    const desc = fillable ? docxContentControlV14({ id: nextId(), tag: `evidenceDescription${i+1}`, alias: `وصف الشاهد ${i+1}`, value: meta.description === "شاهد تنفيذ" ? "" : meta.description, placeholder: "وصف مختصر للشاهد" }) : docxFormParagraphV14(meta.description || "", { size: 16, spacingAfter: 0 });
    const note = fillable ? docxContentControlV14({ id: nextId(), tag: `evidenceNote${i+1}`, alias: `ملاحظة الشاهد ${i+1}`, value: meta.note, placeholder: "ملاحظة عند الحاجة" }) : docxFormParagraphV14(meta.note || "", { size: 16, spacingAfter: 0 });
    cells.push(evidenceDocxRawCell(`${imageArea}${docxFormParagraphV14("نوع الشاهد",{bold:true,size:15,color:"075F5B",spacingAfter:10})}${type}${docxFormParagraphV14("الوصف",{bold:true,size:15,color:"075F5B",spacingAfter:10})}${desc}${docxFormParagraphV14("ملاحظة",{bold:true,size:15,color:"075F5B",spacingAfter:10})}${note}`, { width: 4700, fill: "FBFDFC", margin: 80 }));
  }
  return `<w:tbl>${docxProgramTablePrV14()}<w:tblGrid><w:gridCol w:w="4700"/><w:gridCol w:w="4700"/></w:tblGrid><w:tr>${cells[0]}${cells[1]}</w:tr><w:tr>${cells[2]}${cells[3]}</w:tr></w:tbl>`;
}

async function buildProgramReportEvidenceWithImagesV14(week, data, imageInfo, docPrCounterRef) {
  if (!imageInfo.length) return "";
  const doc = ensureEvidenceItemMetadata(week.id);
  const parts = [docxFormParagraphV14("شواهد التنفيذ", { style: "ReportTitle", bold: true, size: 28, color: "087F79", center: true, spacingAfter: 70, pageBreakBefore: true })];
  for (let start = 0; start < imageInfo.length; start += 4) {
    if (start > 0) parts.push(docxFormParagraphV14("شواهد التنفيذ - متابعة", { style: "SectionTitle", bold: true, size: 23, color: "087F79", center: true, spacingAfter: 60, pageBreakBefore: true }));
    const subset = imageInfo.slice(start, start + 4);
    const cells = [];
    for (let i = 0; i < 4; i += 1) {
      const globalIndex = start + i;
      const info = subset[i];
      if (!info) { cells.push(evidenceDocxRawCell(docxFormParagraphV14("مساحة شاهد إضافي", { size: 16, color: "8A9A98", center: true, spacingAfter: 0 }), { width: 4700, fill: "FBFDFC", margin: 70 })); continue; }
      const meta = doc.items[globalIndex] || { description: "شاهد تنفيذ", type: "صورة تنفيذ", note: "" };
      const fit = fitImageEmu(info.dims.width, info.dims.height, 3.05, 2.15);
      const drawing = docxImageParagraphV6(info.relId, docPrCounterRef.value++, info.name, fit.cx, fit.cy);
      const caption = `${docxFormParagraphV14(`الشاهد ${globalIndex + 1} — ${meta.description || "شاهد تنفيذ"}`, { bold: true, size: 16, color: "075F5B", center: true, spacingAfter: 15 })}${docxFormParagraphV14(`نوع الشاهد: ${meta.type || "صورة تنفيذ"}`, { size: 15, center: true, spacingAfter: 10 })}${meta.note ? docxFormParagraphV14(meta.note, { size: 14, color: "657A78", center: true, spacingAfter: 0 }) : ""}`;
      cells.push(evidenceDocxRawCell(drawing + caption, { width: 4700, fill: "FBFDFC", margin: 65 }));
    }
    parts.push(`<w:tbl>${docxProgramTablePrV14()}<w:tblGrid><w:gridCol w:w="4700"/><w:gridCol w:w="4700"/></w:tblGrid><w:tr>${cells[0]}${cells[1]}</w:tr><w:tr>${cells[2]}${cells[3]}</w:tr></w:tbl>`);
  }
  return parts.join("");
}

function programReportStylesXmlV14() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Tajawal" w:hAnsi="Tajawal" w:cs="Tajawal" w:eastAsia="Tajawal"/><w:rtl/><w:lang w:bidi="ar-SA"/><w:color w:val="173F3D"/><w:sz w:val="20"/><w:szCs w:val="20"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:bidi/><w:jc w:val="right"/><w:spacing w:after="45" w:line="280" w:lineRule="auto"/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/><w:qFormat/></w:style><w:style w:type="paragraph" w:styleId="ReportTitle"><w:name w:val="عنوان التقرير"/><w:basedOn w:val="Normal"/><w:qFormat/><w:pPr><w:bidi/><w:jc w:val="center"/><w:spacing w:before="80" w:after="80"/></w:pPr><w:rPr><w:b/><w:bCs/><w:color w:val="075F5B"/><w:sz w:val="30"/><w:szCs w:val="30"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="SectionTitle"><w:name w:val="عنوان القسم"/><w:basedOn w:val="Normal"/><w:qFormat/><w:rPr><w:b/><w:bCs/><w:color w:val="087F79"/><w:sz w:val="22"/><w:szCs w:val="22"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="FieldLabel"><w:name w:val="تسمية الحقل"/><w:basedOn w:val="Normal"/><w:rPr><w:b/><w:bCs/><w:color w:val="075F5B"/><w:sz w:val="18"/><w:szCs w:val="18"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="FieldValue"><w:name w:val="قيمة الحقل"/><w:basedOn w:val="Normal"/><w:rPr><w:color w:val="173F3D"/><w:sz w:val="19"/><w:szCs w:val="19"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Hint"><w:name w:val="إرشاد"/><w:basedOn w:val="Normal"/><w:rPr><w:i/><w:iCs/><w:color w:val="718582"/><w:sz w:val="16"/><w:szCs w:val="16"/></w:rPr></w:style></w:styles>`;
}

async function exportProgramReportWord(week, { fillable = true } = {}) {
  const data = programReportDisplayData(week);
  const labels = programReportGenderLabels(data.schoolType);
  setStatus(fillable ? "جارٍ تجهيز قالب Word القابل للتعبئة…" : "جارٍ تجهيز تقرير Word بالبيانات الحالية…");
  let controlId = 140001;
  const nextId = () => controlId++;
  const relationships = [
    `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>`,
    `<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/settings" Target="settings.xml"/>`
  ];
  const mediaEntries = [];
  let relCounter = 3;
  const docPrCounterRef = { value: 1 };
  let logoXml = "";
  const logoDataUrl = state.report?.logoDataUrl || "";
  const logoData = dataUrlToBytes(logoDataUrl);
  if (logoData) {
    const relId = `rId${relCounter++}`;
    relationships.push(`<Relationship Id="${relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/ministry-or-entity-logo.jpeg"/>`);
    mediaEntries.push({ name: "word/media/ministry-or-entity-logo.jpeg", data: logoData.bytes });
    const dims = await imageSizeFromDataUrl(logoDataUrl);
    const fit = fitImageEmu(dims.width, dims.height, .9, .72);
    logoXml = docxImageParagraphV6(relId, docPrCounterRef.value++, "شعار وزارة التعليم أو الجهة", fit.cx, fit.cy);
  }

  const evidenceImages = [];
  if (!fillable) {
    const photos = (evidenceCache[week.id] || []).slice(0, MAX_EVIDENCE_PER_WEEK_V13);
    for (let i = 0; i < photos.length; i += 1) {
      const imageData = dataUrlToBytes(photos[i].dataUrl);
      if (!imageData) continue;
      const relId = `rId${relCounter++}`;
      const fileName = `program-report-evidence-${i+1}.jpeg`;
      relationships.push(`<Relationship Id="${relId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${fileName}"/>`);
      mediaEntries.push({ name: `word/media/${fileName}`, data: imageData.bytes });
      const dims = await imageSizeFromDataUrl(photos[i].dataUrl);
      evidenceImages.push({ relId, dims, name: photos[i].name || `شاهد ${i+1}` });
    }
  }

  const field = (tag, alias, value, placeholder, multiline = true) => fillable
    ? docxContentControlV14({ id: nextId(), tag, alias, value, placeholder, multiline })
    : docxFormParagraphV14(value || "", { style: "FieldValue", size: 19, spacingAfter: 0 });

  const parts = [];
  parts.push(docxProgramHeaderV14(logoXml, data.schoolName));
  parts.push(docxFormParagraphV14(data.programName ? `تقرير تنفيذ برنامج ${data.programName}` : "تقرير تنفيذ برنامج", { style: "ReportTitle", bold: true, size: 30, color: "075F5B", center: true, spacingAfter: 75 }));
  if (fillable) parts.push(docxFormParagraphV14("هذا المستند قالب Word قابل للتعبئة يدويًا. انقر داخل الحقول المظللة والقوائم المنسدلة لتعديلها.", { style: "Hint", size: 15, color: "647B78", center: true, spacingAfter: 65 }));
  parts.push(docxProgramMetaTableV14(data, fillable, nextId));
  parts.push(docxFormParagraphV14("", { spacingAfter: 55 }));

  const sections = [
    ["الأهداف", "goals", "أهداف البرنامج", data.goals, "اكتب أهداف البرنامج أو الصقها هنا"],
    ["خطوات وآلية التنفيذ", "mechanism", "آلية التنفيذ", data.mechanism, "اكتب ما تم تنفيذه باختصار ووضوح"],
    ["الأنشطة المنفذة", "activities", "الأنشطة المنفذة", data.activities, "اكتب الأنشطة المنفذة فعليًا"],
    ["النتائج والمخرجات", "results", "النتائج والمخرجات", data.results, "اكتب النتائج الفعلية فقط"],
    ["أبرز نقاط القوة", "strengths", "أبرز نقاط القوة", data.strengths, "اتركه فارغًا إذا لم تتوفر بيانات"],
    ["التوصيات والتحسينات المقترحة", "recommendations", "التوصيات والتحسينات", data.recommendations, "اكتب التوصيات أو التحسينات"]
  ];
  sections.forEach(([title, tag, alias, value, placeholder]) => {
    parts.push(docxProgramSectionV14(title, field(tag, alias, value, placeholder, true)));
    parts.push(docxFormParagraphV14("", { spacingAfter: 45 }));
  });

  const impactInner = `<w:tbl>${docxProgramTablePrV14()}<w:tblGrid><w:gridCol w:w="2100"/><w:gridCol w:w="7300"/></w:tblGrid><w:tr>${docxProgramLabelCellV14("أداة القياس",2100)}${docxProgramValueCellV14(field("impactTool","أداة قياس الأثر",data.impactTool,"اتركه فارغًا إذا لم تتوفر أداة",false),7300)}</w:tr><w:tr>${docxProgramLabelCellV14("النتيجة",2100)}${docxProgramValueCellV14(field("impactResult","نتيجة قياس الأثر",data.impactResult,"اتركه فارغًا إذا لم تتوفر نتيجة فعلية",true),7300)}</w:tr><w:tr>${docxProgramLabelCellV14("رابط / QR",2100)}${docxProgramValueCellV14(field("evidenceLink", "رابط أو بيانات QR", data.evidenceLink, "ألصق الرابط أو بيانات QR هنا", true),7300)}</w:tr></w:tbl>`;
  parts.push(docxProgramSectionV14("قياس الأثر والروابط", impactInner, { fill: "FFFFFF" }));
  parts.push(docxFormParagraphV14("", { spacingAfter: 35 }));

  if (fillable) {
    parts.push(docxFormParagraphV14("شواهد التنفيذ", { style: "ReportTitle", bold: true, size: 28, color: "087F79", center: true, spacingAfter: 45, pageBreakBefore: true }));
    parts.push(docxFormParagraphV14("أضف الصور أو الأدلة داخل الخلايا التالية، ثم اختر نوع الشاهد من القائمة المنسدلة واكتب وصفًا مختصرًا فقط.", { style: "Hint", size: 15, color: "647B78", center: true, spacingAfter: 55 }));
    parts.push(docxEvidencePlaceholderTableV14(data, true, nextId));
  } else if (evidenceImages.length) {
    parts.push(await buildProgramReportEvidenceWithImagesV14(week, data, evidenceImages, docPrCounterRef));
  } else {
    parts.push(docxFormParagraphV14("شواهد التنفيذ", { style: "ReportTitle", bold: true, size: 28, color: "087F79", center: true, spacingAfter: 45, pageBreakBefore: true }));
    parts.push(docxEvidencePlaceholderTableV14(data, false, nextId));
  }

  parts.push(docxFormParagraphV14("", { spacingAfter: 55 }));
  const signText = fillable ? docxContentControlV14({ id: nextId(), tag: "signature", alias: labels.signature, value: data.signature, placeholder: "الاسم / التوقيع" }) : docxFormParagraphV14(data.signature || data.executor || "", { size: 18, spacingAfter: 0 });
  const dateText = fillable ? docxContentControlV14({ id: nextId(), tag: "footerDate", alias: "التاريخ", value: data.footerDate, placeholder: "التاريخ" }) : docxFormParagraphV14(data.footerDate || "", { size: 18, spacingAfter: 0 });
  parts.push(`<w:tbl>${docxProgramTablePrV14()}<w:tblGrid><w:gridCol w:w="1800"/><w:gridCol w:w="2900"/><w:gridCol w:w="1800"/><w:gridCol w:w="2900"/></w:tblGrid><w:tr>${docxProgramLabelCellV14(labels.signature,1800)}${docxProgramValueCellV14(signText,2900)}${docxProgramLabelCellV14("التاريخ",1800)}${docxProgramValueCellV14(dateText,2900)}</w:tr></w:tbl>`);
  parts.push(docxFormParagraphV14("أ/ فاطمة هزازي — ملتقى التعليم التفاعلي", { bold: true, size: 15, color: "087F79", center: true, spacingAfter: 0 }));

  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><w:body>${parts.join("")}<w:sectPr><w:bidi/><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="560" w:right="620" w:bottom="560" w:left="620" w:header="300" w:footer="300" w:gutter="0"/></w:sectPr></w:body></w:document>`;
  const stylesXml = programReportStylesXmlV14();
  const settingsXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:settings xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:defaultTabStop w:val="720"/><w:themeFontLang w:val="ar-SA" w:bidi="ar-SA"/><w:compat><w:compatSetting w:name="compatibilityMode" w:uri="http://schemas.microsoft.com/office/word" w:val="15"/></w:compat></w:settings>`;
  const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${mediaEntries.length ? '<Default Extension="jpeg" ContentType="image/jpeg"/>' : ""}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/><Override PartName="/word/settings.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml"/><Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`;
  const reportTitle = data.programName ? `تقرير تنفيذ برنامج ${data.programName}` : "تقرير تنفيذ برنامج مدرسي";
  const coreXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${xmlEscape(reportTitle)}</dc:title><dc:creator>مساعد الموجه الطلابي</dc:creator><dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created></cp:coreProperties>`;
  const appXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>مساعد الموجه الطلابي</Application><AppVersion>15.0</AppVersion></Properties>`;
  const entries = [
    { name: "[Content_Types].xml", data: contentTypes },
    { name: "_rels/.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>` },
    { name: "word/document.xml", data: documentXml },
    { name: "word/styles.xml", data: stylesXml },
    { name: "word/settings.xml", data: settingsXml },
    { name: "word/_rels/document.xml.rels", data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relationships.join("")}</Relationships>` },
    { name: "docProps/core.xml", data: coreXml },
    { name: "docProps/app.xml", data: appXml },
    ...mediaEntries
  ];
  const blob = makeZip(entries, "application/vnd.openxmlformats-officedocument.wordprocessingml.document");
  const kind = fillable ? "قالب-قابل-للتعبئة" : "تقرير-مكتمل";
  downloadBlob(blob, blob.type, `${safeFileBase(data.schoolName || state.school || "المدرسة")}-${safeFileBase(data.programName || "برنامج-مدرسي")}-${kind}-v15.docx`);
  setStatus(fillable ? "تم تجهيز قالب Word القابل للتعبئة" : "تم تجهيز تقرير Word بالبيانات الحالية");
  toast(fillable ? "تم إنشاء DOCX حقيقي بحقـول تعبئة وقوائم Word منسدلة" : "تم إنشاء تقرير DOCX حقيقي بالبيانات الحالية");
}

/* ============================================================
   v15 — ربط الخطة بالتقرير والشواهد + مراجع ذكي + مركز البرامج
   ============================================================ */

const programCenterFiltersV15 = { search: "", domain: "", status: "" };

function rawProgramReportV15(weekId) {
  const raw = state.programReports?.[completionKey(weekId)];
  return raw && typeof raw === "object" ? sanitizeProgramReport(raw) : blankProgramReport();
}

function rawEvidenceDocV15(weekId) {
  const raw = state.evidenceDocs?.[completionKey(weekId)];
  return raw && typeof raw === "object" ? sanitizeEvidenceDoc(raw) : blankEvidenceDoc();
}

function rawNoorRecordV15(weekId) {
  const raw = state.noor?.[completionKey(weekId)];
  if (raw && typeof raw === "object") return raw;
  return { program: "", targetGroup: "", beneficiaries: "", participants: "", procedure: "", evidenceText: "", obstacles: "", notes: "" };
}

function programReportDataV15(week) {
  const report = rawProgramReportV15(week.id);
  return {
    ...report,
    schoolName: report.schoolName || state.school || "",
    executor: report.executor || state.report?.userName || "",
    signature: report.signature || report.executor || state.report?.userName || ""
  };
}

function programReportHasDataV15(weekId) {
  const raw = rawProgramReportV15(weekId);
  const keys = [
    "programName", "schoolType", "domain", "targetGroup", "executionDate", "location",
    "beneficiaries", "goals", "mechanism", "activities", "results", "strengths",
    "recommendations", "evidenceAvailable", "evidenceLink", "impactTool", "impactResult"
  ];
  return keys.some((key) => Boolean(String(raw[key] || "").trim()));
}

function evidenceDocHasDataV15(weekId) {
  const raw = rawEvidenceDocV15(weekId);
  const keys = ["programName", "schoolType", "executionDate", "targetGroup", "summary", "output", "notes"];
  return keys.some((key) => Boolean(String(raw[key] || "").trim())) || Boolean((evidenceCache[weekId] || []).length);
}

function weekPlanHasDataV15(week) {
  const daily = getWeekDailyStats(week.id);
  const record = rawNoorRecordV15(week.id);
  const recordHas = [record.program, record.targetGroup, record.beneficiaries, record.procedure, record.evidenceText]
    .some((value) => Boolean(String(value || "").trim()));
  return daily.planned > 0 || selectedIdeasForWeek(week).length > 0 || recordHas || Boolean(state.completed[completionKey(week.id)]);
}

function parseBeneficiariesV15(value) {
  const western = toWesternDigits(String(value || "")).replace(/[,،\s]/g, "");
  if (!/^\d+$/.test(western)) return null;
  const parsed = Number(western);
  return Number.isFinite(parsed) ? parsed : null;
}

function programReportReviewV15(week) {
  const data = programReportDataV15(week);
  const issues = [];
  const missing = (pairs) => pairs.filter(([, value]) => !String(value || "").trim()).map(([label]) => label);

  const missingIdentity = missing([
    ["اسم المدرسة", data.schoolName], ["نوع المدرسة", data.schoolType], ["اسم البرنامج", data.programName],
    ["مجال البرنامج", data.domain], ["الفئة المستهدفة", data.targetGroup], ["تاريخ التنفيذ", data.executionDate],
    ["مكان التنفيذ", data.location], [programReportGenderLabels(data.schoolType).executor, data.executor], ["عدد المستفيدين", data.beneficiaries]
  ]);
  if (missingIdentity.length) {
    issues.push({ level: "error", title: "بيانات أساسية ناقصة", detail: `استكمل: ${missingIdentity.join("، ")}.` });
  }

  const missingContent = missing([
    ["الأهداف", data.goals], ["آلية التنفيذ", data.mechanism], ["الأنشطة المنفذة", data.activities], ["النتائج والمخرجات", data.results]
  ]);
  if (missingContent.length) {
    issues.push({ level: "error", title: "محتوى التقرير غير مكتمل", detail: `الحقول الناقصة: ${missingContent.join("، ")}.` });
  }

  if (String(data.beneficiaries || "").trim() && parseBeneficiariesV15(data.beneficiaries) == null) {
    issues.push({ level: "warning", title: "عدد المستفيدين يحتاج مراجعة", detail: "يفضل إدخال عدد رقمي واضح حتى يظهر صحيحًا في الملخصات الفصلية." });
  }

  const target = String(data.targetGroup || "");
  if (data.schoolType === "بنات" && target.includes("طلاب") && !target.includes("طالبات")) {
    issues.push({ level: "warning", title: "اتساق الصياغة", detail: "نوع المدرسة «بنات» بينما الفئة المستهدفة تتضمن صياغة «طلاب». راجع الصياغة قبل التصدير." });
  }
  if (data.schoolType === "بنين" && target.includes("طالبات")) {
    issues.push({ level: "warning", title: "اتساق الصياغة", detail: "نوع المدرسة «بنين» بينما الفئة المستهدفة تتضمن صياغة «طالبات». راجع الصياغة قبل التصدير." });
  }

  if (data.impactTool && !data.impactResult) {
    issues.push({ level: "info", title: "قياس الأثر", detail: "أداة القياس مدخلة دون نتيجة. اترك النتيجة فارغة فقط إذا لم تتوفر بيانات فعلية." });
  } else if (!data.impactTool && data.impactResult) {
    issues.push({ level: "warning", title: "قياس الأثر غير موضح", detail: "تم إدخال نتيجة قياس أثر دون تحديد الأداة المستخدمة." });
  } else if (!data.impactTool && !data.impactResult) {
    issues.push({ level: "info", title: "قياس الأثر غير مدخل", detail: "هذا ليس خطأ؛ يبقى القسم فارغًا إذا لم تتوفر بيانات فعلية." });
  }

  const photos = (evidenceCache[week.id] || []).length;
  if (!photos && !data.evidenceAvailable && !data.evidenceLink) {
    issues.push({ level: "warning", title: "لا توجد شواهد مرتبطة", detail: "أضف نوع الشاهد أو صورًا مؤقتة أو رابطًا/QR عند توفرها." });
  } else if (photos && !data.evidenceAvailable) {
    issues.push({ level: "info", title: "صور موجودة دون وصف عام للشواهد", detail: `يوجد ${arNum(photos)} صورة مؤقتة؛ يمكن تحديد أنواع الشواهد في نموذج الشواهد.` });
  }

  if (!String(data.signature || "").trim()) {
    issues.push({ level: "info", title: "التوقيع", detail: "خانة الاسم والتوقيع فارغة ويمكن تعبئتها داخل Word لاحقًا." });
  }
  if (!String(data.footerDate || "").trim()) {
    issues.push({ level: "info", title: "تاريخ الاعتماد", detail: "خانة التاريخ النهائية فارغة ويمكن تعبئتها يدويًا عند الاعتماد." });
  }
  if (!state.report?.logoDataUrl) {
    issues.push({ level: "info", title: "شعار الجهة غير مرفوع", detail: "ارفع الشعار المعتمد من إعدادات التقرير إذا رغبت في ظهوره داخل الملفات الرسمية." });
  }

  const readiness = programReportReadinessValue(data);
  const errors = issues.filter((item) => item.level === "error").length;
  const warnings = issues.filter((item) => item.level === "warning").length;
  const info = issues.filter((item) => item.level === "info").length;
  const score = Math.max(0, Math.min(100, readiness - warnings * 3));
  return { data, issues, errors, warnings, info, score, readiness };
}

function renderSmartReviewV15(week) {
  const panel = document.querySelector("#programReportSmartReview");
  const badge = document.querySelector("#smartReviewBadge");
  const summary = document.querySelector("#smartReviewSummary");
  const list = document.querySelector("#smartReviewList");
  if (!panel || !badge || !summary || !list) return;
  const review = programReportReviewV15(week);
  panel.classList.toggle("has-errors", review.errors > 0);
  panel.classList.toggle("is-clean", review.errors === 0 && review.warnings === 0);
  badge.textContent = `${arNum(review.score)}٪`;
  if (review.errors) {
    summary.textContent = `يوجد ${arNum(review.errors)} تنبيه أساسي و${arNum(review.warnings)} ملاحظة تحتاج مراجعة قبل اعتماد التقرير.`;
  } else if (review.warnings) {
    summary.textContent = `البيانات الأساسية مكتملة، مع ${arNum(review.warnings)} ملاحظة تحسين. التصدير متاح في جميع الأحوال.`;
  } else {
    summary.textContent = "البيانات الأساسية متناسقة وفق الفحص الحالي، ويمكن التصدير مع مراجعة بشرية نهائية قبل الاعتماد.";
  }

  const important = review.issues.slice(0, 8);
  if (!important.length) {
    list.innerHTML = '<div class="smart-review-success">✓ لا توجد ملاحظات ظاهرة في الفحص الحالي</div>';
    return;
  }
  const icons = { error: "!", warning: "•", info: "i" };
  list.innerHTML = important.map((item) => `<div class="smart-review-item smart-review-item--${item.level}"><i>${icons[item.level]}</i><div><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail)}</small></div></div>`).join("");
}

function activateWeekForWorkflowV15(week) {
  if (!week) return;
  state.activeWeekId = Number(week.id);
  persistState();
  renderWeekWorkspace();
  syncEvidenceStudio();
  syncProgramReportStudio();
  renderProgramCenterV15();
}

function openProgramReportFromWeekV15(week) {
  activateWeekForWorkflowV15(week);
  copyProgramReportFromWeek(week);
  renderProgramCenterV15();
  setTimeout(() => document.querySelector("#programReportSection")?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
}

function copyEvidenceDataFromProgramReportV15(week, { notify = false } = {}) {
  const report = programReportDataV15(week);
  const doc = getEvidenceDoc(week.id);
  doc.schoolName = doc.schoolName || report.schoolName || "";
  doc.schoolType = doc.schoolType || report.schoolType || "";
  doc.programName = doc.programName || report.programName || "";
  if (!doc.domain || doc.domain === "توجيه طلابي") doc.domain = report.domain || doc.domain || "توجيه طلابي";
  doc.executionDate = doc.executionDate || report.executionDate || "";
  doc.targetGroup = doc.targetGroup || report.targetGroup || "";
  doc.executor = doc.executor || report.executor || "";
  doc.summary = doc.summary || report.mechanism || report.activities || "";
  doc.output = doc.output || report.results || "";
  doc.notes = doc.notes || report.recommendations || "";
  doc.signature = doc.signature || report.signature || report.executor || "";
  doc.footerDate = doc.footerDate || report.footerDate || report.executionDate || "";
  doc.items.forEach((item) => { item.type = normalizeEvidenceTypeForSchool(item.type, doc.schoolType); });
  persistState(notify ? "تم ربط نموذج الشواهد بتقرير البرنامج وتعبئة الحقول الفارغة" : "");
  syncEvidenceStudio();
  renderProgramCenterV15();
  return doc;
}

function openEvidenceFromProgramReportV15(week) {
  activateWeekForWorkflowV15(week);
  copyEvidenceDataFromProgramReportV15(week, { notify: true });
  setTimeout(() => document.querySelector("#evidenceStudioSection")?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
}

function openEvidenceWorkflowV15(week) {
  activateWeekForWorkflowV15(week);
  if (programReportHasDataV15(week.id)) copyEvidenceDataFromProgramReportV15(week, { notify: true });
  else copyEvidenceDataFromWeek(week);
  setTimeout(() => document.querySelector("#evidenceStudioSection")?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
}

function showSmartReviewForWeekV15(week) {
  activateWeekForWorkflowV15(week);
  renderSmartReviewV15(week);
  const panel = document.querySelector("#programReportSmartReview");
  setTimeout(() => {
    document.querySelector("#programReportSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
    panel?.classList.remove("smart-review-flash");
    void panel?.offsetWidth;
    panel?.classList.add("smart-review-flash");
  }, 50);
}

function programCenterRecordV15(week) {
  const report = rawProgramReportV15(week.id);
  const evidence = rawEvidenceDocV15(week.id);
  const noor = rawNoorRecordV15(week.id);
  const planStarted = weekPlanHasDataV15(week);
  const reportStarted = programReportHasDataV15(week.id);
  const evidenceStarted = evidenceDocHasDataV15(week.id);
  const completed = Boolean(state.completed[completionKey(week.id)]);
  const review = programReportReviewV15(week);
  const beneficiaries = parseBeneficiariesV15(report.beneficiaries || noor.beneficiaries);
  const programName = report.programName || noor.program || evidence.programName || "لم يُحدد برنامج بعد";
  const domain = report.domain || (evidenceStarted ? evidence.domain : "") || "";
  const photos = (evidenceCache[week.id] || []).length;
  let statusLabel = "لم يبدأ";
  if (planStarted) statusLabel = "بدأ التخطيط";
  if (reportStarted) statusLabel = "التقرير قيد الإعداد";
  if (evidenceStarted) statusLabel = "التوثيق جارٍ";
  if (completed) statusLabel = "✓ تم التنفيذ";
  return { week, report, evidence, noor, planStarted, reportStarted, evidenceStarted, completed, review, beneficiaries, programName, domain, photos, statusLabel };
}

function programCenterMatchesV15(record) {
  const search = String(programCenterFiltersV15.search || "").trim().toLowerCase();
  if (search) {
    const haystack = [record.week.title, record.week.theme, record.programName, record.domain, record.report.targetGroup, record.evidence.targetGroup]
      .join(" ").toLowerCase();
    if (!haystack.includes(search)) return false;
  }
  if (programCenterFiltersV15.domain && record.domain !== programCenterFiltersV15.domain) return false;
  const status = programCenterFiltersV15.status;
  if (status === "planned" && !record.planStarted) return false;
  if (status === "report" && !record.reportStarted) return false;
  if (status === "evidence" && !record.evidenceStarted) return false;
  if (status === "completed" && !record.completed) return false;
  if (status === "needs-review" && !(record.reportStarted && (record.review.errors > 0 || record.review.warnings > 0))) return false;
  return true;
}

function renderProgramCenterV15() {
  const statsHost = document.querySelector("#programCenterStats");
  const listHost = document.querySelector("#programCenterList");
  if (!statsHost || !listHost) return;
  const records = weeks.map(programCenterRecordV15);
  const startedPlans = records.filter((record) => record.planStarted).length;
  const startedReports = records.filter((record) => record.reportStarted).length;
  const evidenceWeeks = records.filter((record) => record.evidenceStarted).length;
  const completed = records.filter((record) => record.completed).length;
  const beneficiaryValues = records.map((record) => record.beneficiaries).filter((value) => value != null);
  const totalBeneficiaries = beneficiaryValues.reduce((sum, value) => sum + value, 0);
  const photoCount = records.reduce((sum, record) => sum + record.photos, 0);

  statsHost.innerHTML = `
    <div class="program-center-stat"><span>أسابيع بدأ تخطيطها</span><strong>${arNum(startedPlans)} / ${arNum(weeks.length)}</strong><small>الخطة اليومية أو المتابعة</small></div>
    <div class="program-center-stat"><span>تقارير بدأ إعدادها</span><strong>${arNum(startedReports)}</strong><small>مرتبطة ببيانات الأسابيع</small></div>
    <div class="program-center-stat"><span>أسابيع تم تنفيذها</span><strong>${arNum(completed)}</strong><small>وفق حالة التنفيذ</small></div>
    <div class="program-center-stat"><span>إجمالي المستفيدين المدخل</span><strong>${arNum(totalBeneficiaries)}</strong><small>${beneficiaryValues.length ? "من الأعداد الرقمية المسجلة" : "لا توجد أعداد رقمية بعد"}</small></div>
    <div class="program-center-stat"><span>شواهد الجلسة الحالية</span><strong>${arNum(photoCount)}</strong><small>${arNum(evidenceWeeks)} أسابيع بدأ توثيقها</small></div>`;

  const filtered = records.filter(programCenterMatchesV15);
  if (!filtered.length) {
    listHost.innerHTML = '<div class="program-center-empty">لا توجد نتائج مطابقة للتصفية الحالية.</div>';
    return;
  }

  listHost.innerHTML = filtered.map((record) => {
    const reportReady = record.reportStarted ? programReportReadinessValue(programReportDataV15(record.week)) : 0;
    const reportText = record.reportStarted ? `${arNum(reportReady)}٪` : "لم يبدأ";
    const evidenceText = record.evidenceStarted ? `${arNum(record.photos)} صورة • نموذج بدأ` : "لم يبدأ";
    const beneficiaryText = record.beneficiaries == null ? "—" : arNum(record.beneficiaries);
    const reviewText = record.reportStarted ? (record.review.errors ? `${arNum(record.review.errors)} أساسي` : record.review.warnings ? `${arNum(record.review.warnings)} ملاحظة` : "مكتمل") : "بعد بدء التقرير";
    return `<article class="program-center-card" data-center-week="${record.week.id}">
      <div class="program-center-card__head">
        <div><span class="program-center-card__week">${escapeHtml(record.week.title)} • ${escapeHtml(record.week.dates[0])} – ${escapeHtml(record.week.dates[1])}</span><h3>${escapeHtml(record.programName)}</h3></div>
        <span class="program-center-card__status ${record.completed ? "is-complete" : ""}">${escapeHtml(record.statusLabel)}</span>
      </div>
      <div class="program-center-card__body">
        <div class="program-center-meta">
          <div><span>المجال</span><strong>${escapeHtml(record.domain || "غير محدد")}</strong></div>
          <div><span>المستفيدون</span><strong>${escapeHtml(beneficiaryText)}</strong></div>
          <div><span>الشواهد</span><strong>${escapeHtml(evidenceText)}</strong></div>
          <div><span>التقرير</span><strong>${escapeHtml(reportText)}</strong></div>
          <div><span>المراجع الذكي</span><strong>${escapeHtml(reviewText)}</strong></div>
          <div><span>جاهزية الأسبوع</span><strong>${arNum(getWeekReadiness(record.week))}٪</strong></div>
        </div>
        <div class="program-center-readiness"><div class="program-center-readiness__line"><span>جاهزية تقرير التنفيذ</span><strong>${escapeHtml(reportText)}</strong></div><div class="program-center-readiness__bar"><i style="width:${reportReady}%"></i></div></div>
        <div class="program-center-actions">
          <button class="btn btn--soft" type="button" data-center-action="week" data-week-id="${record.week.id}">📅 فتح الأسبوع</button>
          <button class="btn btn--report-form" type="button" data-center-action="report" data-week-id="${record.week.id}">🧾 التقرير</button>
          <button class="btn btn--evidence" type="button" data-center-action="evidence" data-week-id="${record.week.id}">📷 الشواهد</button>
          <button class="btn btn--review" type="button" data-center-action="review" data-week-id="${record.week.id}">🔍 مراجعة</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function wireProgramCenterV15() {
  document.querySelector("#programCenterBtn")?.addEventListener("click", () => {
    renderProgramCenterV15();
    document.querySelector("#programCenterSection")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  const search = document.querySelector("#programCenterSearch");
  const domain = document.querySelector("#programCenterDomain");
  const status = document.querySelector("#programCenterStatus");
  search?.addEventListener("input", () => { programCenterFiltersV15.search = safeString(search.value, 120); renderProgramCenterV15(); });
  domain?.addEventListener("change", () => { programCenterFiltersV15.domain = safeString(domain.value, 60); renderProgramCenterV15(); });
  status?.addEventListener("change", () => { programCenterFiltersV15.status = safeString(status.value, 30); renderProgramCenterV15(); });
  document.querySelector("#programCenterClearFilters")?.addEventListener("click", () => {
    programCenterFiltersV15.search = ""; programCenterFiltersV15.domain = ""; programCenterFiltersV15.status = "";
    if (search) search.value = ""; if (domain) domain.value = ""; if (status) status.value = "";
    renderProgramCenterV15();
  });
  document.querySelector("#programCenterList")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-center-action]");
    if (!button) return;
    const week = weeks.find((item) => item.id === Number(button.dataset.weekId));
    if (!week) return;
    const action = button.dataset.centerAction;
    if (action === "week") {
      activateWeekForWorkflowV15(week);
      setTimeout(() => document.querySelector("#weekWorkspace")?.scrollIntoView({ behavior: "smooth", block: "start" }), 40);
    } else if (action === "report") openProgramReportFromWeekV15(week);
    else if (action === "evidence") openEvidenceWorkflowV15(week);
    else if (action === "review") showSmartReviewForWeekV15(week);
  });
}
