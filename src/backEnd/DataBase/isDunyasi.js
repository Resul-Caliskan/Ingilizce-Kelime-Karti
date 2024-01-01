const isDunyasi = {
  IsDunyasi: {
    Grup: "IsDunyasi",
    ogrenilen: 0,
    ilkKez: 0,
    kelimeler: [
      {
        id: 1,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "company",
          turkce: "şirket",
          okunusu: "kʌmpəni",
        },
      },
      {
        id: 2,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "business",
          turkce: "iş",
          okunusu: "bɪznɪs",
        },
      },
      {
        id: 3,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "manager",
          turkce: "yönetici",
          okunusu: "ˈmænɪdʒər",
        },
      },
      {
        id: 4,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "employee",
          turkce: "çalışan",
          okunusu: "ɪmˈplɔɪi",
        },
      },
      {
        id: 5,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "project",
          turkce: "proje",
          okunusu: "ˈprɒdʒɛkt",
        },
      },
      {
        id: 6,
        ilkKez: true,
        goruldu: false,
        kelime: { ingilizce: "team", turkce: "ekip", okunusu: "tiːm" },
      },
      {
        id: 7,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "meeting",
          turkce: "toplantı",
          okunusu: "ˈmiːtɪŋ",
        },
      },
      {
        id: 8,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "client",
          turkce: "müşteri",
          okunusu: "ˈklaɪənt",
        },
      },
      {
        id: 9,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "product",
          turkce: "ürün",
          okunusu: "ˈprɒdʌkt",
        },
      },
      {
        id: 10,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "service",
          turkce: "hizmet",
          okunusu: "ˈsɜːvɪs",
        },
      },
      {
        id: 11,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "market",
          turkce: "pazar",
          okunusu: "ˈmɑːrkɪt",
        },
      },
      {
        id: 12,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "sales",
          turkce: "satış",
          okunusu: "seɪlz",
        },
      },
      {
        id: 13,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "revenue",
          turkce: "gelir",
          okunusu: "ˈrɛvənuː",
        },
      },
      {
        id: 14,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "profit",
          turkce: "kar",
          okunusu: "ˈprɒfɪt",
        },
      },
      {
        id: 15,
        ilkKez: true,
        goruldu: false,
        kelime: { ingilizce: "loss", turkce: "zarar", okunusu: "lɒs" },
      },
      {
        id: 16,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "budget",
          turkce: "bütçe",
          okunusu: "ˈbʌdʒɪt",
        },
      },
      {
        id: 17,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "strategy",
          turkce: "strateji",
          okunusu: "ˈstrætədʒi",
        },
      },
      {
        id: 18,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "innovation",
          turkce: "inovasyon",
          okunusu: "ɪnəˈveɪʒən",
        },
      },
      {
        id: 19,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "leadership",
          turkce: "liderlik",
          okunusu: "ˈliːdərʃɪp",
        },
      },
      {
        id: 20,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "collaboration",
          turkce: "işbirliği",
          okunusu: "kəˌlæbəˈreɪʃən",
        },
      },
      {
        id: 21,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "partnership",
          turkce: "ortaklık",
          okunusu: "ˈpɑːrtnərʃɪp",
        },
      },
      {
        id: 22,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "negotiation",
          turkce: "müzakere",
          okunusu: "nɪˌɡoʊʃiˈeɪʃən",
        },
      },
      {
        id: 23,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "contract",
          turkce: "sözleşme",
          okunusu: "ˈkɒntrækt",
        },
      },
      {
        id: 24,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "deadline",
          turkce: "son tarih",
          okunusu: "ˈdɛdlaɪn",
        },
      },
      {
        id: 25,
        ilkKez: true,
        goruldu: false,
        kelime: { ingilizce: "goal", turkce: "hedef", okunusu: "ɡoʊl" },
      },
      {
        id: 26,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "objective",
          turkce: "amaç",
          okunusu: "əbˈdʒɛktɪv",
        },
      },
      {
        id: 27,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "mission",
          turkce: "misyon",
          okunusu: "ˈmɪʃən",
        },
      },
      {
        id: 28,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "vision",
          turkce: "vizyon",
          okunusu: "ˈvɪʒən",
        },
      },
      {
        id: 29,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "stakeholder",
          turkce: "paydaş",
          okunusu: "ˈsteɪkhoʊldər",
        },
      },
      {
        id: 30,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "investment",
          turkce: "yatırım",
          okunusu: "ɪnˈvɛstmənt",
        },
      },
      {
        id: 31,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "entrepreneur",
          turkce: "girişimci",
          okunusu: "ˌɑːntrəprəˈnɜːr",
        },
      },
      {
        id: 32,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "market research",
          turkce: "pazar araştırması",
          okunusu: "ˈmɑːrkɪt rɪˈsɜːrtʃ",
        },
      },
      {
        id: 33,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "customer satisfaction",
          turkce: "müşteri memnuniyeti",
          okunusu: "ˈkʌstəmər ˌsætɪsˈfækʃən",
        },
      },
      {
        id: 34,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "feedback",
          turkce: "geribildirim",
          okunusu: "ˈfiːdbæk",
        },
      },
      {
        id: 35,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "analysis",
          turkce: "analiz",
          okunusu: "əˈnæləsɪs",
        },
      },
      {
        id: 36,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "trend",
          turkce: "trend",
          okunusu: "trɛnd",
        },
      },
      {
        id: 37,
        ilkKez: true,
        goruldu: false,
        kelime: { ingilizce: "risk", turkce: "risk", okunusu: "rɪsk" },
      },
      {
        id: 38,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "opportunity",
          turkce: "fırsat",
          okunusu: "ˌɒpərˈtuːnəti",
        },
      },
      {
        id: 39,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "growth",
          turkce: "büyüme",
          okunusu: "ɡroʊθ",
        },
      },
      {
        id: 40,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "expansion",
          turkce: "genişleme",
          okunusu: "ɪkˈspænʃən",
        },
      },
      {
        id: 41,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "merger",
          turkce: "birleşme",
          okunusu: "ˈmɜːrdʒər",
        },
      },
      {
        id: 42,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "acquisition",
          turkce: "satın alma",
          okunusu: "ˌæk.wɪˈzɪʃ.ən",
        },
      },
      {
        id: 43,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "capital",
          turkce: "sermaye",
          okunusu: "ˈkæpɪtl̩",
        },
      },
      {
        id: 44,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "budgeting",
          turkce: "bütçeleme",
          okunusu: "ˈbʌdʒɪtɪŋ",
        },
      },
      {
        id: 45,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "forecast",
          turkce: "tahmin",
          okunusu: "ˈfɔːrˌkæst",
        },
      },
      {
        id: 46,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "sustainability",
          turkce: "sürdürülebilirlik",
          okunusu: "səˌsteɪnəˈbɪləti",
        },
      },
      {
        id: 47,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "compliance",
          turkce: "uygunluk",
          okunusu: "kəmˈplaɪəns",
        },
      },
      {
        id: 48,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "ethics",
          turkce: "etik",
          okunusu: "ˈɛθɪks",
        },
      },
      {
        id: 49,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "corporate social responsibility",
          turkce: "kurumsal sosyal sorumluluk",
          okunusu: "ˈkɔːrpərət ˈsoʊʃəl rɪˌspɒnsəˈbɪləti",
        },
      },
      ,
      {
        id: 50,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "innovate",
          turkce: "inovasyon yapmak",
          okunusu: "ˈɪnəˌveɪt",
        },
      },
      {
        id: 51,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "efficiency",
          turkce: "verimlilik",
          okunusu: "ɪˈfɪʃənsi",
        },
      },
      {
        id: 52,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "benchmark",
          turkce: "referans noktası",
          okunusu: "ˈbɛnʧmɑːrk",
        },
      },
      {
        id: 53,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "strategic planning",
          turkce: "stratejik planlama",
          okunusu: "strəˈtiːdʒɪk ˈplænɪŋ",
        },
      },
      {
        id: 54,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "globalization",
          turkce: "globalleşme",
          okunusu: "ˌɡloʊbəlɪˈzeɪʃən",
        },
      },
      {
        id: 55,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "outsourcing",
          turkce: "dış kaynak kullanımı",
          okunusu: "ˈaʊtˌsɔːrsɪŋ",
        },
      },
      {
        id: 56,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "automation",
          turkce: "otomasyon",
          okunusu: "ɔːtəˈmeɪʃən",
        },
      },
      {
        id: 57,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "agile",
          turkce: "çevik",
          okunusu: "ˈædʒaɪl",
        },
      },
      {
        id: 58,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "disruptive innovation",
          turkce: "bozucu inovasyon",
          okunusu: "dɪsˈrʌptɪv ˌɪnəˈveɪʒən",
        },
      },
      {
        id: 59,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "virtual team",
          turkce: "sanal ekip",
          okunusu: "ˈvɜːrtʃuəl tiːm",
        },
      },
      {
        id: 60,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "telecommuting",
          turkce: "uzaktan çalışma",
          okunusu: "ˌtɛlɪˈkjuːmjuːtɪŋ",
        },
      },
      {
        id: 61,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "work-life balance",
          turkce: "iş-yaşam dengesi",
          okunusu: "wɜːrk-laɪf ˈbæləns",
        },
      },
      {
        id: 62,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "incentive",
          turkce: "teşvik",
          okunusu: "ɪnˈsɛntɪv",
        },
      },
      {
        id: 63,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "benchmarking",
          turkce: "referans noktası belirleme",
          okunusu: "ˈbɛnʧmɑːrkɪŋ",
        },
      },
      {
        id: 64,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "stakeholder engagement",
          turkce: "paydaş katılımı",
          okunusu: "ˈsteɪkhoʊldər ɪnˈɡeɪdʒmənt",
        },
      },
      {
        id: 65,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "competitive advantage",
          turkce: "rekabet avantajı",
          okunusu: "kəmˈpɛtətɪv ədˈvæntɪdʒ",
        },
      },
      {
        id: 66,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "core competency",
          turkce: "ana yetenek",
          okunusu: "kɔːr kəmˈpɛtənsi",
        },
      },
      {
        id: 67,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "intellectual property",
          turkce: "fikri mülkiyet",
          okunusu: "ˌɪnˈtɛlɛktʃuəl ˈprɒpərti",
        },
      },
      {
        id: 68,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "strategic alliance",
          turkce: "stratejik ittifak",
          okunusu: "strəˈtiːdʒɪk əˈlaɪəns",
        },
      },
      {
        id: 69,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "branding",
          turkce: "marka oluşturma",
          okunusu: "ˈbrændɪŋ",
        },
      },
      {
        id: 70,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "customer retention",
          turkce: "müşteri koruma",
          okunusu: "ˈkʌstəmər rɪˈtɛnʃən",
        },
      },
      {
        id: 71,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "rebranding",
          turkce: "yeniden marka oluşturma",
          okunusu: "riˈbrændɪŋ",
        },
      },
      {
        id: 72,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "demographics",
          turkce: "demografi",
          okunusu: "ˌdiːməˈɡræfɪks",
        },
      },
      {
        id: 73,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "market segmentation",
          turkce: "pazar segmentasyonu",
          okunusu: "ˈmɑːrkɪt ˌsɛɡmənˈteɪʃən",
        },
      },
      {
        id: 74,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "target audience",
          turkce: "hedef kitle",
          okunusu: "ˈtɑːrɡɪt ˈɔdiəns",
        },
      },
      {
        id: 75,
        ilkKez: true,
        goruldu: false,
        kelime: {
          ingilizce: "value proposition",
          turkce: "değer teklifi",
          okunusu: "ˈvæljuː ˌprɑːpəˈzɪʃən",
        },
      },
    ],
  },
};
isDunyasi.IsDunyasi.kelimeler = isDunyasi.IsDunyasi.kelimeler.filter(Boolean);

export default isDunyasi;
