export type MenuItemType = 'snack' | 'sweet' | 'drink';

export interface MenuItem {
  name: string;
  type: MenuItemType;
  description: string;
  signature?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Location {
  id: string;
  label: string;
  address: string;
  timing: string;
  phone?: string;
}

export const brandInfo = {
  name: "RattiLal's",
  tagline: 'Committed Towards Quality',
  established: 1937,
  city: 'Lucknow',
  shortDescription:
    "One of Lucknow's oldest and best-known eateries, serving traditional snacks, sweets, and drinks with care since 1937.",
  heroSubline:
    "Lucknow's iconic breakfast and sweets — khasta, desi ghee jalebi, lassi, and more.",
};

export const aboutParagraphs = [
  "Rattilals is one of the oldest well-known eateries in Lucknow. Established in 1937, we specialize in snacks like khasta, bada, puri, samosa, chola bhatura, and dahi bada, along with sweets and drinks including jalebi desi ghee, rasmalai, rasgulla, raj bhog, rattilal special lassi, and milk badam.",
  'Located in the heart of Lucknow, we serve health- and hygiene-conscious customers with the best quality food at affordable prices and great service. This principle has kept us prospering for generations.',
  'We retain our old values while expanding with current trends. With skilled and experienced cooks, we prepare quality products hygienically — food that captivates not just your taste buds, but your heart, soul, and mind.',
];

export const signatureItems: MenuItem[] = [
  {
    name: 'Khasta',
    type: 'snack',
    signature: true,
    description:
      'Flaky, crispy kachori with spicy moong dal stuffing — a Lucknow breakfast classic served with chutneys and sabzi.',
  },
  {
    name: 'Jalebi Desi Ghee',
    type: 'sweet',
    signature: true,
    description:
      'Deep-fried spirals soaked in saffron-laced sugar syrup, made with desi ghee — the celebration sweet of India.',
  },
  {
    name: 'Rattilal Special Lassi',
    type: 'drink',
    signature: true,
    description:
      'Traditional Punjabi-style lassi — creamy, refreshing, and perfect chilled on a warm Lucknow morning.',
  },
  {
    name: 'Milk Badam',
    type: 'drink',
    signature: true,
    description:
      'Saffron-flavored milk enriched with almonds, served warm and garnished — a comforting classic.',
  },
];

export const menuSections: MenuSection[] = [
  {
    id: 'snacks',
    title: 'Snacks',
    items: [
      {
        name: 'Khasta',
        type: 'snack',
        signature: true,
        description:
          'Flaky deep-fried pastry with spicy moong dal stuffing. Crispy crust, served with yogurt and chutneys topped with sev.',
      },
      {
        name: 'Puris',
        type: 'snack',
        description:
          'Well-puffed puris for special occasions — perfect with aloo, chole, or halwa combinations.',
      },
      {
        name: 'Samosa',
        type: 'snack',
        description:
          "India's beloved snack — crisp exterior filled with savory potato stuffing.",
      },
      {
        name: 'Chola Bhatura',
        type: 'snack',
        description:
          'Spicy white chickpea curry with fried leavened bhatura — hearty, flavorful, and filling.',
      },
      {
        name: 'Dahi Vada',
        type: 'snack',
        description:
          'Crispy lentil dumplings topped with spiced yogurt and tamarind chutney — best served chilled.',
      },
      {
        name: 'Bada',
        type: 'snack',
        description:
          'Traditional lentil fritters — a staple snack enjoyed across Lucknow.',
      },
    ],
  },
  {
    id: 'sweets',
    title: 'Sweets & Desserts',
    items: [
      {
        name: 'Jalebi Desi Ghee',
        type: 'sweet',
        signature: true,
        description:
          'Spiral-shaped crunchy sweets dipped in saffron-laced sugar syrup, made with desi ghee.',
      },
      {
        name: 'Rasmalai',
        type: 'sweet',
        description:
          'Soft paneer balls immersed in chilled, sweetened, flavored milk — a Bengali classic.',
      },
      {
        name: 'Rasgulla',
        type: 'sweet',
        description:
          'Soft, spongy paneer balls soaked in sugar syrup — you cannot stop at just one.',
      },
      {
        name: 'Raj Bhog',
        type: 'sweet',
        description:
          'Saffron-flavored rasgullas stuffed with dry fruits — rich, juicy, and indulgent.',
      },
    ],
  },
  {
    id: 'drinks',
    title: 'Drinks',
    items: [
      {
        name: 'Rattilal Special Lassi',
        type: 'drink',
        signature: true,
        description:
          'Yogurt-based drink with salt, sugar, and spices — a real thirst quencher, best enjoyed chilled.',
      },
      {
        name: 'Milk Badam',
        type: 'drink',
        signature: true,
        description:
          'Creamy almond milk shake with saffron — served warm and garnished with silver leaf.',
      },
    ],
  },
];

export const previewItems: MenuItem[] = menuSections
  .flatMap((section) => section.items)
  .filter((item) => !item.signature)
  .slice(0, 6);

export const locations: Location[] = [
  {
    id: 'hewett',
    label: 'Hewett Road',
    address: '1, Jadunath Sanyal Road, Hewett Road, Lucknow – 226001',
    timing: '6 am – 10 pm',
    phone: '+919838532096',
  },
  {
    id: 'aliganj',
    label: 'Aliganj',
    address: 'A-12, Kalash Plaza, Behind Purania Petrol Pump, Aliganj – 226024',
    timing: '7 am – 5 pm',
    phone: '+919838532096',
  },
];

export const contact = {
  phones: ['+919838532096', '05224045726'],
  displayPhones: ['+91 98385 32096', '0522 404 5726'],
  email: 'rattilallucknow@gmail.com',
  bulkOrderPhones: ['+919820325632', '+919838532096'],
  bulkOrderDisplay: ['+91 9820 325 632', '+91 9838 532 096'],
  bulkOrderNote: 'For corporate bookings and bulk orders across the globe.',
  deliveryNote: 'For home delivery, call us at +91 9838532096.',
};

export const socialProofSnippets = [
  'Featured on popular Lucknow food trails for khasta-kachori at Hewett Road.',
  'An iconic breakfast stop loved for khasta, jalebi, and classic Lucknowi combos since 1937.',
  'A Nawabi food trail destination where locals and visitors return for tradition and taste.',
];
