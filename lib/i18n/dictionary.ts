export type Lang = "ar" | "en";

const en = {
  meta: {
    title: "Zaytoun — Libyan & Mediterranean Kitchen",
    description:
      "Zaytoun is a warm, modern restaurant serving Libyan and Mediterranean dishes made with fresh local ingredients.",
  },
  brand: { name: "Zaytoun", tagline: "Libyan & Mediterranean Kitchen" },
  nav: {
    home: "Home",
    about: "Our Story",
    menu: "Menu",
    reviews: "Reviews",
    reserve: "Reserve",
    contact: "Contact",
    bookTable: "Book a Table",
    language: "عربي",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Since 2012 · Tripoli",
    title: "Where every table feels like home",
    subtitle:
      "Slow-cooked Libyan classics and fresh Mediterranean flavours, served in a space made for long evenings with the people you love.",
    ctaPrimary: "Reserve a table",
    ctaSecondary: "Explore the menu",
    stats: [
      { value: "12+", label: "Years of hospitality" },
      { value: "40", label: "Dishes made daily" },
      { value: "4.8", label: "Guest rating" },
    ],
    badge: "Chef's pick",
    badgeDish: "Lamb Bazin",
  },
  about: {
    eyebrow: "Our Story",
    title: "Rooted in tradition, cooked with care",
    paragraphs: [
      "Zaytoun began as a family kitchen where recipes were passed down by taste, not by paper. Today we still cook that way: patiently, generously, and with ingredients we trust.",
      "Our olive oil comes from small groves in the Nafusa mountains, our bread is baked every morning, and our spices are ground in-house. Nothing is rushed, and nothing is wasted.",
    ],
    features: [
      { title: "Fresh & local", text: "Seasonal produce from nearby farms, delivered every morning." },
      { title: "Cooked slowly", text: "Stews and sauces simmered for hours, the way they should be." },
      { title: "Made to share", text: "Generous plates designed for the whole table." },
    ],
  },
  menu: {
    eyebrow: "The Menu",
    title: "A taste of the Mediterranean",
    subtitle: "Dishes we are proud of, made fresh throughout the day.",
    categories: {
      all: "All",
      starters: "Starters",
      mains: "Mains",
      grill: "From the Grill",
      desserts: "Desserts",
      drinks: "Drinks",
    },
    tags: { popular: "Popular", vegetarian: "Vegetarian", spicy: "Spicy", new: "New" },
    currency: "LYD",
    note: "Prices are shown for demonstration purposes.",
  },
  reviews: {
    eyebrow: "Kind Words",
    title: "Loved by our guests",
    items: [
      {
        name: "Salma A.",
        role: "Regular guest",
        text: "The bazin tastes exactly like my grandmother's. The atmosphere is calm and the staff make you feel like family.",
      },
      {
        name: "Omar K.",
        role: "Food blogger",
        text: "Easily one of the best grills in the city. Everything arrives hot, fresh, and beautifully presented.",
      },
      {
        name: "Huda M.",
        role: "Birthday dinner",
        text: "We celebrated here with a big group and everything was perfect, from the starters to the dessert.",
      },
    ],
  },
  reserve: {
    eyebrow: "Reservations",
    title: "Save your table",
    subtitle: "Tell us when you are coming and we will have everything ready.",
    form: {
      name: "Full name",
      phone: "Phone number",
      date: "Date",
      time: "Time",
      guests: "Guests",
      guestsUnit: "guests",
      notes: "Special requests (optional)",
      submit: "Confirm reservation",
      successTitle: "Thank you!",
      successText: "We received your request and will confirm by phone shortly.",
      another: "Make another reservation",
    },
  },
  contact: {
    title: "Visit us",
    address: "Omar Al-Mukhtar St., Tripoli, Libya",
    phone: "+218 91 000 0000",
    hoursTitle: "Opening hours",
    hours: [
      { days: "Saturday – Thursday", time: "12:00 – 23:30" },
      { days: "Friday", time: "14:00 – 00:00" },
    ],
    followUs: "Follow us",
  },
  footer: {
    rights: "All rights reserved.",
    demo: "Demo website design",
  },
};

export type Dictionary = typeof en;

const ar: Dictionary = {
  meta: {
    title: "زيتون — مطبخ ليبي ومتوسطي",
    description:
      "زيتون مطعم دافئ وعصري يقدّم أطباقاً ليبية ومتوسطية محضّرة بمكوّنات محلية طازجة.",
  },
  brand: { name: "زيتون", tagline: "مطبخ ليبي ومتوسطي" },
  nav: {
    home: "الرئيسية",
    about: "قصتنا",
    menu: "القائمة",
    reviews: "آراء الضيوف",
    reserve: "الحجز",
    contact: "تواصل معنا",
    bookTable: "احجز طاولة",
    language: "English",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
  hero: {
    eyebrow: "منذ ٢٠١٢ · طرابلس",
    title: "حيث تشعر كل مائدة أنها بيتك",
    subtitle:
      "أطباق ليبية أصيلة مطهوّة على نار هادئة ونكهات متوسطية طازجة، في مكان صُمّم لأمسيات طويلة مع من تحب.",
    ctaPrimary: "احجز طاولتك",
    ctaSecondary: "استعرض القائمة",
    stats: [
      { value: "+١٢", label: "عاماً من الضيافة" },
      { value: "٤٠", label: "طبقاً يومياً" },
      { value: "٤٫٨", label: "تقييم الضيوف" },
    ],
    badge: "اختيار الشيف",
    badgeDish: "بازين باللحم",
  },
  about: {
    eyebrow: "قصتنا",
    title: "جذورنا في التقاليد، وطبخنا بحب",
    paragraphs: [
      "بدأ زيتون كمطبخ عائلي تنتقل فيه الوصفات بالتذوّق لا بالورق. وما زلنا نطبخ بالطريقة نفسها: بصبر وسخاء ومكوّنات نثق بها.",
      "زيت الزيتون من بساتين صغيرة في جبل نفوسة، والخبز يُخبز كل صباح، والبهارات تُطحن عندنا. لا شيء يُستعجل ولا شيء يضيع.",
    ],
    features: [
      { title: "طازج ومحلي", text: "خضار موسمية من مزارع قريبة تصلنا كل صباح." },
      { title: "طبخ بهدوء", text: "يخنات وصلصات تُترك على النار ساعات كما يجب." },
      { title: "للمشاركة", text: "أطباق سخية صُمّمت لتجمع الطاولة كلها." },
    ],
  },
  menu: {
    eyebrow: "القائمة",
    title: "مذاق البحر المتوسط",
    subtitle: "أطباق نفخر بها، تُحضَّر طازجة على مدار اليوم.",
    categories: {
      all: "الكل",
      starters: "المقبلات",
      mains: "الأطباق الرئيسية",
      grill: "من الشواية",
      desserts: "الحلويات",
      drinks: "المشروبات",
    },
    tags: { popular: "الأكثر طلباً", vegetarian: "نباتي", spicy: "حار", new: "جديد" },
    currency: "د.ل",
    note: "الأسعار معروضة لأغراض العرض التوضيحي فقط.",
  },
  reviews: {
    eyebrow: "كلمات طيبة",
    title: "يحبّه ضيوفنا",
    items: [
      {
        name: "سلمى ع.",
        role: "ضيفة دائمة",
        text: "البازين طعمه مثل طعم بازين جدّتي تماماً. الأجواء هادئة والعاملون يعاملونك كأنك من العائلة.",
      },
      {
        name: "عمر ك.",
        role: "مدوّن طعام",
        text: "من أفضل المشاويات في المدينة بلا منازع. كل شيء يصل ساخناً وطازجاً ومقدَّماً بشكل جميل.",
      },
      {
        name: "هدى م.",
        role: "عشاء عيد ميلاد",
        text: "احتفلنا هنا مع مجموعة كبيرة وكان كل شيء مثالياً، من المقبلات إلى الحلويات.",
      },
    ],
  },
  reserve: {
    eyebrow: "الحجوزات",
    title: "احجز طاولتك",
    subtitle: "أخبرنا بموعد زيارتك وسنجهّز كل شيء لك.",
    form: {
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      date: "التاريخ",
      time: "الوقت",
      guests: "عدد الضيوف",
      guestsUnit: "أشخاص",
      notes: "طلبات خاصة (اختياري)",
      submit: "تأكيد الحجز",
      successTitle: "شكراً لك!",
      successText: "استلمنا طلبك وسنتصل بك قريباً للتأكيد.",
      another: "حجز آخر",
    },
  },
  contact: {
    title: "زورونا",
    address: "شارع عمر المختار، طرابلس، ليبيا",
    phone: "٠٠٢١٨ ٩١ ٠٠٠ ٠٠٠٠",
    hoursTitle: "ساعات العمل",
    hours: [
      { days: "السبت – الخميس", time: "١٢:٠٠ – ٢٣:٣٠" },
      { days: "الجمعة", time: "١٤:٠٠ – ٠٠:٠٠" },
    ],
    followUs: "تابعونا",
  },
  footer: {
    rights: "جميع الحقوق محفوظة.",
    demo: "تصميم موقع تجريبي",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, ar };
