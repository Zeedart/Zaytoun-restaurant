import type { Lang } from "@/lib/i18n/dictionary";

export type MenuCategory = "starters" | "mains" | "grill" | "desserts" | "drinks";
export type MenuTag = "popular" | "vegetarian" | "spicy" | "new";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  price: number;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  tags?: MenuTag[];
  /** Optional photo, e.g. "/images/bazin.jpg" (put files in /public/images). Falls back to an illustrated plate. */
  image?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "mbakbaka",
    category: "starters",
    price: 14,
    name: { ar: "مبكبكة", en: "Mbakbaka" },
    description: {
      ar: "معكرونة صغيرة بصلصة الطماطم والفلفل الحار وزيت الزيتون.",
      en: "Small pasta in a rich tomato and chili sauce with olive oil.",
    },
    tags: ["spicy"],
  },
  {
    id: "hummus",
    category: "starters",
    price: 12,
    name: { ar: "حمّص بالطحينة", en: "Classic Hummus" },
    description: {
      ar: "حمّص ناعم مع زيت زيتون بكر وقليل من الكمون.",
      en: "Silky hummus with extra-virgin olive oil and a touch of cumin.",
    },
    tags: ["vegetarian"],
  },
  {
    id: "briq",
    category: "starters",
    price: 10,
    name: { ar: "بريك بالتونة", en: "Tuna Brik" },
    description: {
      ar: "رقائق مقرمشة محشوة بالتونة والبيض والبقدونس.",
      en: "Crisp pastry filled with tuna, egg and fresh parsley.",
    },
  },
  {
    id: "bazin",
    category: "mains",
    price: 48,
    name: { ar: "بازين باللحم", en: "Lamb Bazin" },
    description: {
      ar: "عصيدة الشعير التقليدية مع لحم الضأن والبيض والبطاطس وصلصة حارة.",
      en: "Traditional barley dough served with tender lamb, egg, potatoes and spicy sauce.",
    },
    tags: ["popular"],
  },
  {
    id: "couscous",
    category: "mains",
    price: 42,
    name: { ar: "كسكسي بالخضار واللحم", en: "Couscous with Lamb" },
    description: {
      ar: "كسكسي مبخّر مع خضار موسمية ولحم مطهو ببطء.",
      en: "Steamed couscous with seasonal vegetables and slow-cooked lamb.",
    },
    tags: ["popular"],
  },
  {
    id: "usban",
    category: "mains",
    price: 38,
    name: { ar: "عصبان", en: "Usban" },
    description: {
      ar: "أمعاء محشوة بالأرز والخضار والأعشاب تُقدَّم في مرق غني.",
      en: "A Libyan specialty stuffed with rice and herbs, served in a rich broth.",
    },
  },
  {
    id: "shakshuka",
    category: "mains",
    price: 26,
    name: { ar: "شكشوكة", en: "Shakshuka" },
    description: {
      ar: "بيض مطبوخ في صلصة الطماطم والفلفل مع خبز طازج.",
      en: "Eggs poached in spiced tomato and pepper sauce with fresh bread.",
    },
    tags: ["vegetarian"],
  },
  {
    id: "mixed-grill",
    category: "grill",
    price: 65,
    name: { ar: "مشاوي مشكّلة", en: "Mixed Grill Platter" },
    description: {
      ar: "ريش ضأن وكفتة ودجاج متبّل مع أرز وسلطة وخبز.",
      en: "Lamb chops, kofta and marinated chicken with rice, salad and bread.",
    },
    tags: ["popular"],
  },
  {
    id: "kebab",
    category: "grill",
    price: 40,
    name: { ar: "كباب لحم", en: "Beef Kebab" },
    description: {
      ar: "قطع لحم بقري مشوية على الفحم مع خضار مشوية.",
      en: "Charcoal-grilled beef skewers with roasted vegetables.",
    },
  },
  {
    id: "grilled-fish",
    category: "grill",
    price: 55,
    name: { ar: "سمك مشوي", en: "Grilled Sea Bream" },
    description: {
      ar: "سمك طازج مشوي بالليمون والثوم وزيت الزيتون.",
      en: "Fresh sea bream grilled with lemon, garlic and olive oil.",
    },
    tags: ["new"],
  },
  {
    id: "assida",
    category: "desserts",
    price: 14,
    name: { ar: "عصيدة بالتمر والعسل", en: "Date & Honey Assida" },
    description: {
      ar: "عصيدة دافئة مع التمر والعسل وقليل من السمن.",
      en: "Warm assida with dates, honey and a little ghee.",
    },
    tags: ["vegetarian"],
  },
  {
    id: "baklava",
    category: "desserts",
    price: 16,
    name: { ar: "بقلاوة بالفستق", en: "Pistachio Baklava" },
    description: {
      ar: "طبقات رقيقة مقرمشة مع الفستق وقطر خفيف.",
      en: "Flaky layers with pistachio and a light syrup.",
    },
    tags: ["vegetarian"],
  },
  {
    id: "mint-tea",
    category: "drinks",
    price: 6,
    name: { ar: "شاي بالنعناع", en: "Fresh Mint Tea" },
    description: {
      ar: "شاي أخضر مع نعناع طازج يُقدَّم في إبريق.",
      en: "Green tea with fresh mint served in a pot.",
    },
    tags: ["vegetarian"],
  },
  {
    id: "lemonade",
    category: "drinks",
    price: 9,
    name: { ar: "ليمونادة بالنعناع", en: "Mint Lemonade" },
    description: {
      ar: "ليمون طازج ونعناع مثلّج.",
      en: "Fresh lemon and mint over ice.",
    },
    tags: ["vegetarian"],
  },
  {
    id: "arabic-coffee",
    category: "drinks",
    price: 7,
    name: { ar: "قهوة عربية", en: "Arabic Coffee" },
    description: {
      ar: "قهوة بالهيل تُقدَّم مع التمر.",
      en: "Cardamom coffee served with dates.",
    },
  },
];

export const menuCategories: ("all" | MenuCategory)[] = [
  "all",
  "starters",
  "mains",
  "grill",
  "desserts",
  "drinks",
];
