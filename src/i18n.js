import { createI18n } from 'vue-i18n';

const messages = {
  sv: {
    facts: {
      companyName: 'BohagsBolaget',
      phone: '0123 456 789',
    },
    // Routes
    routes: {
      home: 'Hem',
      about: 'Om oss',
      contact: 'Kontakt',
      testimonials: 'Kundrecensioner',
      questions: 'Frågor och svar',
    },
    // Views
    home: {
      header: 'Välkommen till',
      hero: {
        text1: 'Vi köper dina personliga tillhörigheter och egendomar.',
        text2: 'Vi är glada att ha dig här!',
      },
      introduction: {
        header: 'Om oss',
        text: 'På {companyName} är vi dedikerade till att erbjuda en smidig och respektfull tjänst för individer som vill sälja sina personliga egendomar. Vår mission är att göra processen så enkel och bekväm som möjligt.',
      },
      features: {
        header: 'Våra Funktioner',
        items: [
          {
            title: 'Enkel Process',
            text: 'Vi erbjuder en enkel och transparent process för att sälja dina personliga egendomar.',
          },
          {
            title: 'Snabb Utvärdering',
            text: 'Vårt team ger en snabb och rättvis utvärdering av dina tillhörigheter.',
          },
          {
            title: 'Respektfull Service',
            text: 'Vi behandlar varje kund med respekt och förståelse under hela processen.',
          },
        ],
      },
    },
    about: {
      header: 'Om oss',
      introduction: {
        text: {
          welcome:
            '{companyName} grundades med målet att erbjuda en pålitlig och effektiv tjänst för att köpa personliga egendomar. Vårt team av experter är här för att hjälpa dig genom varje steg av försäljningsprocessen.',

          online:
            'Vi bedriver vår verksamhet uteslutande online, utan fysisk butik, vilket säkerställer att vår verksamhet är så effektiv, bekväm och miljövänlig som möjligt.',

          how: 'På sidan Kundrecensioner kan du läsa vad våra kunder tycker om oss och våra tjänster. Vi har även en sida med frågor och svar där du kan få svar på några av de vanligaste frågaorna. Har du ytterligare frågor? Ring oss så berättar vi mer!',
        },
      },
      content: {
        header: 'Vårt team',
        text: 'Vårt team består av engagerade personer som arbetar tillsammans för att göra heminredning mer hållbar. Alla spelar en viktig roll, från att hjälpa kunder till att hitta de bästa produkterna.',
      },
      values: {
        header: 'Våra värderingar',
        satisfaction: {
          header: 'Kundnöjdhet',
          text: 'Vi prioriterar våra kunders behov och strävar efter att överträffa deras förväntningar vid varje försäljning.',
        },
        sustainability: {
          header: 'Hållbarhet',
          text: 'Vi är engagerade i att minska avfall genom att främja återanvändning och återvinning av möbler och dekorationer.',
        },
        integrity: {
          header: 'Integritet',
          text: 'Vi bedriver vår verksamhet med ärlighet och transparens, och bygger förtroende med våra kunder och partners.',
        },
      },
    },
    contact: {
      header: 'Kontakta oss',
      text: 'Har du frågor eller behöver du hjälp? Kontakta oss via telefon, så hjälper vi dig gärna.',
    },
    testimonials: {
      header: 'Kundrecensioner',
      text: 'Läs vad våra kunder säger om oss och våra tjänster.',
    },
    questions: {
      header: 'Frågor och svar',
      text: 'Här hittar du svar på vanliga frågor om våra tjänster och hur vi arbetar.',
    },
    notFound: {
      header: 'Sidan hittades inte!',
      text: 'Tyvärr, sidan du letar efter finns inte. Om du har klickat på en länk kan sidan ha tagits bort sedan länken skapades.',
      back: 'Gå tillbaka till startsidan',
    },
    // Components
    button: {
      text: 'Klicka',
    },

    footer: {
      bottom: '© {currentYear} {companyName}. Alla rättigheter förbehållna.',
      about: {
        header: 'Om oss',
        text: 'Vi är ett företag dedikerat till att tillhandahålla de bästa tjänsterna till våra kunder.',
      },
      links: {
        header: 'Snabblänkar',
      },
      contact: {
        header: 'Kontakta oss',
        text2: 'Telefon',
      },
      social: {
        header: 'Följ oss',
      },
    },
  },
  en: {
    // Facts
    facts: {
      companyName: 'BohagsBolaget',
      phone: '+46 123 456 789',
    },
    // Routes
    routes: {
      home: 'Home',
      about: 'About',
      contact: 'Contact',
      testimonials: 'Customer Reviews',
      questions: 'Questions and Answers',
    },
    // Views
    home: {
      header: 'Welcome to',
      hero: {
        text1:
          'We will buy your personal belongings and estates.',
        text2: 'We are delighted to have you here!',
      },
      introduction: {
        header: 'About us',
        text: "At {companyName}, we are dedicated to providing a smooth and respectful service for individuals looking to sell their personal belongings. Our mission is to make the process as easy and convenient as possible.",
      },
      features: {
        header: 'Our Features',
        items: [
          {
            title: 'Simple Process',
            text: 'We offer a straightforward and transparent process for selling your personal belongings.',
          },
          {
            title: 'Fast Evaluation',
            text: 'Our team provides a quick and fair evaluation of your estates.',
           },
          {
            title: 'Respectful Service',
            text: 'We treat every customer with respect and understanding throughout the process.',
          },
        ],
      },
    },
    about: {
      header: 'About us',
      introduction: {
        text: {
          welcome:
          '{companyName} was founded with the goal of providing a reliable and efficient service for buying personal estates. Our team of experts is here to help you through every step of the selling process.',
          online:
          'We operate exclusively online, with no physical showroom, ensuring that our operations are as effecient, comfortable and eco-friendly as possible.',
          how: 'On the Customer Reviews page, you can read what our customers think about us and our services. We also have a Questions and Answers page where you can get answers to some of the most common questions. Do you have any further questions? Call us and we will tell you more!',
        },
      },
      content: {
        header: 'Our team',
        text: 'Our team is composed of dedicated professionals who are passionate about sustainable living. From our customer service representatives to our product curators, everyone plays a crucial role in our mission to make home decor more sustainable.',
      },
      values: {
        header: 'Our values',
        satisfaction: {
          header: 'Customer Satisfaction',
          text: "We prioritize our customers' needs and strive to exceed their expectations with every sale.",
        },
        sustainability: {
          header: 'Sustainability',
          text: 'We are committed to reducing waste by promoting the reuse and recycling of furniture and decorations.',
        },
        integrity: {
          header: 'Integrity',
          text: 'We conduct our business with honesty and transparency, building trust with our customers and partners.',
        },
      },
    },

    contact: {
      header: 'Contact us',
     text: 'Do you have any questions or need assistance? Contact us by phone, and we will be happy to help.',
    },
    testimonials: {
      header: 'Customer Reviews',
      text: 'Read what our customers have to say about us and our services.',
    },
    questions: {
      header: 'Questions and Answers',
      text: 'Here you can find answers to common questions about our services and how we operate.',
    },
    notFound: {
      header: 'Page not found!',
      text: 'Sorry, the page you are looking for does not exist. If you clicked on a link, the page may have been removed since the link was created.',
      back: 'Go back to the start page',
    },
    // Components
    button: {
      text: 'Click',
    },

    footer: {
      about: {
        header: 'About us',
        text: 'We are a company dedicated to providing the best services to our customers.',
      },
      links: {
        header: 'Quick Links',
      },
      contact: {
        header: 'Contact us',
        text2: 'Phone',
      },
      social: {
        header: 'Follow us',
      },
      bottom: '© {currentYear} {companyName}. All rights reserved.',
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'sv',
  fallbackLocale: 'en',
  messages,
});
export default i18n;
