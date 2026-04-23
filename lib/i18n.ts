export type Locale = 'en' | 'te';

export type Dictionary = {
  common: { appName: string; tagline: string; subtitle: string };
  nav: { home: string; about: string; schemes: string; facilities: string; gallery: string; events: string; contact: string; complaint: string };
  hero: { title: string; tagline: string; subtitle: string; cta: string };
  about: { 
    title: string; 
    tagline: string;
    description: string;
    leadership: string;
    sarpanch: string;
    vision: string;
    features: {
      funds: { title: string; desc: string };
      schemes: { title: string; desc: string };
      ikb: { title: string; desc: string };
      updates: { title: string; desc: string };
    };
    footer: string;
  };
  comingSoon: {
    title: string;
    description: string;
    backHome: string;
  };
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
  nav: { home: "Home", about: "About", schemes: "Schemes", facilities: "Facilities", gallery: "Gallery", events: "Events", contact: "Contact", complaint: "Complaint" },
  hero: { title: "Mallaram", tagline: "Mana Ooru", subtitle: "Smart village rooted in nature", cta: "Submit Complaint" },
  about: { 
    title: "Village Digital Governance",
    tagline: "One Vision, Digital Telangana",
    description: "Under the leadership of Revanth Reddy, our village has taken a crucial step towards transparent and accountable governance through Digital Telangana's 'One Vision'.",
    leadership: "Leadership of Revanth Reddy",
    sarpanch: "Led by Sarpanch Sangam Arpitha",
    vision: "Our goal is simple: a village where services are predictable, systems are transparent, and people are empowered.",
    features: {
      funds: {
        title: "Full Fund Transparency",
        desc: "Every rupee received and spent by the village is clearly visible to the public. No hidden policies."
      },
      schemes: {
        title: "Direct Access to Schemes",
        desc: "People can directly learn about, apply for, and track government schemes without any middlemen."
      },
      ikb: {
        title: "IKB Slot System",
        desc: "Integrated Knowledge & Booking system for organized and timely access to village services, reducing wait times."
      },
      updates: {
        title: "Real-time Updates",
        desc: "Stay informed about village development works, decisions, and progress in real-time."
      }
    },
    footer: "This is not just a website. It is a governance control system—designed to run fast, transparently, and accountably."
  },
  comingSoon: {
    title: "Coming Soon",
    description: "We are currently working hard to bring you the full details of all government schemes. Please check back soon!",
    backHome: "Back to Home"
  },
  facilities: { title: "Facilities", schools: "Schools", healthcare: "Healthcare", roads: "Roads", water: "Water", electricity: "Electricity" },
  gallery: { title: "Gallery" },
  events: { title: "Events", festivals: "Festivals", localEvents: "Local Events" },
  complaint: { title: "Have a Complaint?", description: "We value your feedback. Help us improve by submitting your complaints or suggestions.", cta: "Submit Complaint / suggestion" },
  contact: { title: "Contact Us", panchayat: "Panchayat Office", phone: "Phone", address: "Address" },
  footer: { copyright: "© 2026 Mallaram Village. All rights reserved. \n Developed by Samhithreddy Sangam" },
  language: { toggle: "తెలుగు" }
};

// Telugu dictionary
const teDict: Dictionary = {
  common: { appName: "మల్లారం గ్రామం", tagline: "మనా ఊరు", subtitle: "స్మార్ట్ విలేజ్" },
  nav: { home: "హోమ్", about: "పాలన", schemes: "పథకాలు", facilities: "సౌకర్యాలు", gallery: "ఫోటోలు", events: "కార్యక్రమాలు", contact: "సంప్రదింపు", complaint: "ఫిర్యాదు" },
  hero: { title: "మల్లారం", tagline: "మనా ఊరు", subtitle: "స్మార్ట్ విలేజ్", cta: "ఫిర్యాదు" },
  about: { 
    title: "గ్రామ డిజిటల్ గవర్నెన్స్ ప్రారంభం",
    tagline: "డిజిటల్ తెలంగాణ “వన్ విజన్”",
    description: "Revanth Reddy నాయకత్వంలో, డిజిటల్ తెలంగాణ “వన్ విజన్” దిశగా మా గ్రామం పారదర్శకమైన మరియు బాధ్యతాయుతమైన పాలన వైపు ఒక కీలక అడుగు వేసింది.",
    leadership: "రేవంత్ రెడ్డి నాయకత్వంలో",
    sarpanch: "సర్పంచ్ సంగం అర్పిత నాయకత్వంలో",
    vision: "మా లక్ష్యం సులభం: సేవలు ముందుగా అంచనా వేసుకునే విధంగా, వ్యవస్థలు పారదర్శకంగా, ప్రజలు శక్తివంతంగా ఉండే గ్రామం.",
    features: {
      funds: {
        title: "నిధుల పూర్తి పారదర్శకత",
        desc: "గ్రామానికి వచ్చే ప్రతి రూపాయి, ఖర్చయ్యే ప్రతి రూపాయి ప్రజలకు స్పష్టంగా కనిపిస్తుంది. ఎటువంటి దాచిపెట్టే విధానం లేదు."
      },
      schemes: {
        title: "ప్రభుత్వ పథకాలపై నేరుగా ప్రాప్తి",
        desc: "ప్రజలు స్వయంగా పథకాలను తెలుసుకొని, దరఖాస్తు చేసుకొని, వాటి స్థితిని ట్రాక్ చేసుకోవచ్చు — మధ్యవర్తులు అవసరం లేదు."
      },
      ikb: {
        title: "IKB స్లాట్ సిస్టమ్",
        desc: "గ్రామ సేవలను క్రమబద్ధంగా, సమయపాలనతో పొందే విధానం — గందరగోళం, వేచి ఉండే సమయం తగ్గింపు."
      },
      updates: {
        title: "రియల్-టైమ్ అప్డేట్స్",
        desc: "గ్రామ అభివృద్ధి పనులు, నిర్ణయాలు, పురోగతి — అన్నీ ప్రజలకు అందుబాటులో ఉంటాయి."
      }
    },
    footer: "ఇది కేవలం ఒక వెబ్సైట్ కాదు. ఇది పాలనను నియంత్రించే వ్యవస్థ — వేగంగా, పారదర్శకంగా, బాధ్యతాయుతంగా నడిచేలా రూపొందించబడింది."
  },
  comingSoon: {
    title: "త్వరలో వస్తుంది",
    description: "మేము ప్రస్తుతం అన్ని ప్రభుత్వ పథకాల పూర్తి వివరాలను మీకు అందించడానికి కృషి చేస్తున్నాము. దయచేసి త్వరలో మళ్ళీ చూడండి!",
    backHome: "తిరిగి హోమ్ పేజీకి"
  },
  facilities: { title: " ", schools: " ", healthcare: " ", roads: " ", water: " ", electricity: " " },
  gallery: { title: " " },
  events: { title: " ", festivals: " ", localEvents: " " },
  complaint: { title: " ?", description: " ", cta: " " },
  contact: { title: " ", panchayat: " ", phone: " ", address: " " },
  footer: { copyright: "© 2026 మల్లారం గ్రామం. అన్ని హక్కులు ప్రత్యేకించబడ్డాయి. \n Made with ❤️ by Samhithreddy Sangam" },
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