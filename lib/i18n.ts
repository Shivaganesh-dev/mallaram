export type Locale = 'en' | 'te';

export type Dictionary = {
  common: { appName: string; tagline: string; subtitle: string };
  nav: { home: string; about: string; facilities: string; gallery: string; events: string; contact: string; complaint: string };
  hero: { title: string; tagline: string; subtitle: string; cta: string };
  about: { title: string; description: string };
  facilities: { title: string; schools: string; healthcare: string; roads: string; water: string; electricity: string };
  gallery: { title: string };
  events: { title: string; festivals: string; localEvents: string };
  complaint: { title: string; description: string; cta: string };
  contact: { title: string; panchayat: string; phone: string; address: string };
  footer: { copyright: string };
  language: { toggle: string };
};

// Supported locales
export const locales: Locale[] = ['en', 'te'];
export const defaultLocale: Locale = 'en';

// English dictionary (default)
const enDict: Dictionary = {
  common: { appName: "Mallaram Village", tagline: "Mana Ooru", subtitle: "Smart village rooted in nature" },
  nav: { home: "Home", about: "About", facilities: "Facilities", gallery: "Gallery", events: "Events", contact: "Contact", complaint: "Complaint" },
  hero: { title: "Mallaram", tagline: "Mana Ooru", subtitle: "Smart village rooted in nature", cta: "Submit Complaint" },
  about: { title: "About Mallaram", description: "Mallaram is a progressive village in Telangana, recognized for its development and natural beauty." },
  facilities: { title: "Facilities", schools: "Schools", healthcare: "Healthcare", roads: "Roads", water: "Water", electricity: "Electricity" },
  gallery: { title: "Gallery" },
  events: { title: "Events", festivals: "Festivals", localEvents: "Local Events" },
  complaint: { title: "Have a Complaint?", description: "We value your feedback. Help us improve by submitting your complaints or suggestions.", cta: "Submit Complaint" },
  contact: { title: "Contact Us", panchayat: "Panchayat Office", phone: "Phone", address: "Address" },
  footer: { copyright: "© 2026 Mallaram Village. All rights reserved." },
  language: { toggle: "తెలుగు" }
};

// Telugu dictionary
const teDict: Dictionary = {
  common: { appName: "మల్లaram గ్రామం", tagline: "మనా ఊరు", subtitle: "స్మార్ట్ విలేజ్" },
  nav: { home: "హం", about: "గురువు", facilities: "సౌకర్యాలు", gallery: "ఫోటోలు", events: "కార్యక్రమాలు", contact: "సంప్రదింపు", complaint: "ఫిర్యావు" },
  hero: { title: "మల్లaram", tagline: "మనా ఊరు", subtitle: "స్మార్ట్ విలేజ్", cta: "ఫిర్యావు" },
  about: { title: " ", description: " " },
  facilities: { title: " ", schools: " ", healthcare: " ", roads: " ", water: " ", electricity: " " },
  gallery: { title: " " },
  events: { title: " ", festivals: " ", localEvents: " " },
  complaint: { title: " ?", description: " ", cta: " " },
  contact: { title: " ", panchayat: " ", phone: " ", address: " " },
  footer: { copyright: "© 2026 . " },
  language: { toggle: "EN" }
};

// Dictionary map
export const dictionaries: Record<Locale, Dictionary> = {
  en: enDict,
  te: teDict
};

// Get dictionary by locale
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}

// Get translation function
export function getTranslations(dictionary: Dictionary) {
  return (key: string): string => {
    const keys = key.split('.');
    let value: any = dictionary;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };
}