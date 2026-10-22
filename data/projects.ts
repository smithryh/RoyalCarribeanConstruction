export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "superyacht" | "expedition" | "commercial" | "specialized" | "in-build";
  categoryLabel: { en: string; tr: string };
  hullNo: string;
  loa: string;
  beam: string;
  gt: string;
  speed: string;
  range: string;
  year: string;
  classSociety: string;
  shortDesc: { en: string; tr: string };
  fullDesc: { en: string; tr: string };
  specs: { label: { en: string; tr: string }; value: string }[];
  image: string;
  gallery: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "sovereign-horizon",
    slug: "sovereign-horizon",
    title: "M/Y Sovereign Horizon",
    category: "superyacht",
    categoryLabel: { en: "Full Displacement Superyacht", tr: "Tam Deplasman Süperyat" },
    hullNo: "RC-092",
    loa: "68.2 m",
    beam: "11.8 m",
    gt: "1,450 GT",
    speed: "17.5 kts",
    range: "6,000 nm",
    year: "2024",
    classSociety: "RINA / Lloyd's Register",
    shortDesc: {
      en: "68m Full-displacement twin-screw luxury motor yacht built with high-tensile steel hull and aluminium superstructure.",
      tr: "Yüksek mukavemetli çelik gövde ve alüminyum üst yapıya sahip 68m çift pervaneli lüks motor yat."
    },
    fullDesc: {
      en: "M/Y Sovereign Horizon is the flagship delivery of Royal Caribbean's Tuzla shipyard. Featuring a razor-sharp plumb bow, hybrid electric-diesel shaftline, floating acoustic floors, and an expansive beach club with side-opening tender garages.",
      tr: "M/Y Sovereign Horizon, Royal Caribbean Tuzla tersanesinin amiral gemisidir. Dikey pruva yapısı, hibrit elektrik-dizel şaft hattı, ses yalıtımlı zeminleri ve yan kapaklı bot garajına sahip plaj kulübü ile öne çıkar."
    },
    specs: [
      { label: { en: "Length Overall (LOA)", tr: "Tam Boy (LOA)" }, value: "68.20 m" },
      { label: { en: "Beam Moulded", tr: "Genişlik" }, value: "11.80 m" },
      { label: { en: "Draft (Full Load)", tr: "Su Çekimi (Dolu)" }, value: "3.45 m" },
      { label: { en: "Gross Tonnage", tr: "Gross Tonaj" }, value: "1,450 GT" },
      { label: { en: "Main Engines", tr: "Ana Motorlar" }, value: "2 x MTU 16V 4000 M73L (2,160 kW each)" },
      { label: { en: "Cruising Speed", tr: "Seyir Hızı" }, value: "14.0 kts" },
      { label: { en: "Max Speed", tr: "Maksimum Hız" }, value: "17.5 kts" },
      { label: { en: "Guest Accommodation", tr: "Misafir Kapasitesi" }, value: "12 Guests in 6 Suites" },
      { label: { en: "Crew Capacity", tr: "Mürettebat Kapasitesi" }, value: "16 Crew Members" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRKgnqq7_4tlPQ0G7z_cK8KFpP7L1qR6f9AiQqNscwizZQNctYcZf7fBpLqewg6F9IXHqJCzdWtGOsMpizh2Zd-PoExcCXn5D5yqvW7Yud7cAeJ_JZRoRqG6dAKdoYqbzZISPovFsgoWIC5_jBPUBOOwq_BleTHT2aljuqLZuRCMQnOeJWchzmW3Ol0RrIKL-R6F-6jO1AbsWazKJXe_0-6sbKbezzhE0-TYML1J1FHxRyL1uW9y-J",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRKgnqq7_4tlPQ0G7z_cK8KFpP7L1qR6f9AiQqNscwizZQNctYcZf7fBpLqewg6F9IXHqJCzdWtGOsMpizh2Zd-PoExcCXn5D5yqvW7Yud7cAeJ_JZRoRqG6dAKdoYqbzZISPovFsgoWIC5_jBPUBOOwq_BleTHT2aljuqLZuRCMQnOeJWchzmW3Ol0RrIKL-R6F-6jO1AbsWazKJXe_0-6sbKbezzhE0-TYML1J1FHxRyL1uW9y-J",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAJ3QAM8sQAnPJXcvf_kbR8LZo04-w1__moB9qg07ewz5QfkUVcsyzrEfseeFmCNMtLMLWJ6soqKUd6JCt4kbAVECRr8OXMSqe1iAXFeN6BLGzZzzj6tyMmh_tA3EetBRFim29IZ3yW_Mj_rgXhTz8cvF6QuORT94hbiJkG19jRiSfMacm_VWaQnba3fmzKiZ5pDO5XmJaSKPJOEoRLshAANengjJ9PZ5PwW5_H-qIzt1FEd2UuLEGW",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAv0LUsIiZNC4MHCPHIb6vTg2av7nE7KzehmSrrnNTjyToucrfPqgQk5lK3yILSR0rEU7UOeNqO-D1rE5xYS5tWr506jwKJFQfHD1M9flC63B27L_JHioXQr8Uem60ZZ7NMVJ0ZmvDjOQ8u69WU1HfckIwWITgsP7GsfjR3DB93--rxFcklVlwFbN0iiUc4bIMeBDHdqSklxFytPKuE6U4N4UWJlK2PreVOFa6Zp_rA0OL974pU0ly3"
    ]
  },
  {
    id: "borealis-voyager",
    slug: "borealis-voyager",
    title: "X/V Borealis Voyager",
    category: "expedition",
    categoryLabel: { en: "Polar Expedition Explorer", tr: "Kutup Keşif Yatı" },
    hullNo: "RC-079",
    loa: "55.0 m",
    beam: "10.4 m",
    gt: "820 GT",
    speed: "14.2 kts",
    range: "6,500 nm",
    year: "2023",
    classSociety: "Lloyd's Register Polar Ice Class 1D",
    shortDesc: {
      en: "55m Long-range ice-strengthened expedition cruiser built for autonomous polar exploration.",
      tr: "Otonom kutup keşifleri için inşa edilmiş 55m uzun menzilli, buza dayanıklı keşif yatı."
    },
    fullDesc: {
      en: "X/V Borealis Voyager combines rugged ice-class hull plating with luxury interior appointments. Outfitted with an Airbus H145 helipad, sub-sea scientific sonar davits, and 45-day non-stop fuel and victualing endurance.",
      tr: "X/V Borealis Voyager, buza dayanıklı çelik gövdeyi lüks iç mekan detaylarıyla buluşturur. Airbus H145 helikopter pisti, deniz altı sonar sistemleri ve 45 günlük kesintisiz seyir kapasitesine sahiptir."
    },
    specs: [
      { label: { en: "Length Overall (LOA)", tr: "Tam Boy (LOA)" }, value: "55.00 m" },
      { label: { en: "Beam", tr: "Genişlik" }, value: "10.40 m" },
      { label: { en: "Ice Rating", tr: "Buz Sınıfı" }, value: "Ice Class 1D / DNV SILENT-R" },
      { label: { en: "Autonomous Range", tr: "Otonom Menzil" }, value: "6,500 nm @ 11 kts" },
      { label: { en: "Helipad", tr: "Helikopter Pisti" }, value: "Airbus H145 Certified (CAP 437)" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnKdP6DXQMpNtfUnt6OoCWgjgQGnuEYv9XB7RwWsEIEJWtjjpoaFMxEczl8cfontl_WB7dqTMJbwDMFbs46AZ4EG4EqpOofcs6vQZiJqBK_la_3IbWOWsUIvPD7Ukj10zati4d7a4xXFLc7zrCC82SCHNSljh8275ldb2mUqd8gMYK_hBhJOdu1M2MONJykcXSE8H90nQeu3dD6LVgUhyXgIlEUt5rBRyOswQ0g4kjgTdyzuusUPTM",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBnKdP6DXQMpNtfUnt6OoCWgjgQGnuEYv9XB7RwWsEIEJWtjjpoaFMxEczl8cfontl_WB7dqTMJbwDMFbs46AZ4EG4EqpOofcs6vQZiJqBK_la_3IbWOWsUIvPD7Ukj10zati4d7a4xXFLc7zrCC82SCHNSljh8275ldb2mUqd8gMYK_hBhJOdu1M2MONJykcXSE8H90nQeu3dD6LVgUhyXgIlEUt5rBRyOswQ0g4kjgTdyzuusUPTM",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWyajaUnGoD606BL9Mp2QEYQ2VE5PNO9ficQNfTO1hx3EQArQyv2V-57lykMMtA-Ttk47beePCt17sD9Vz6cgjho6Sa2as0yf3yjfCAP4JTRLK7L8biT_aFKrtsIltWb17a6Ci_Pf6JZSeEhMPZeqk3SRK_7w8zUqByWYGyu4lcWCutTwRIpMZUfOyt6gVi7Q1sjFfhj87hPONnvivVE-01gjNETsMkcBNCqPlOcb8RDDAx6EMAOFq"
    ]
  },
  {
    id: "aerocat-45",
    slug: "aerocat-45",
    title: "AeroCat 45 Hydrofoil",
    category: "commercial",
    categoryLabel: { en: "High-Speed Passenger Catamaran", tr: "Hızlı Yolcu Katamaranı" },
    hullNo: "CF-104",
    loa: "45.4 m",
    beam: "11.2 m",
    gt: "480 GT",
    speed: "34.0 kts",
    range: "800 nm",
    year: "2024",
    classSociety: "DNV GL HSC 2000 Cat B",
    shortDesc: {
      en: "45m Hydrofoil-assisted high-speed passenger catamaran carrying 420 commuters with minimal wake wash.",
      tr: "420 yolcu kapasiteli, alçak dalga izi bırakan 45m hidrofoil destekli hızlı yolcu katamaranı."
    },
    fullDesc: {
      en: "AeroCat 45 is built from high-strength marine aluminium alloys with active T-foil motion damping. Equipped with four Kamewa waterjets, it delivers a smooth 34-knot cruising speed for archipelagic passenger transport.",
      tr: "AeroCat 45, aktif T-foil yalpa sönümleyicili yüksek mukavemetli alüminyum alaşımdan inşa edilmiştir. Dört adet Kamewa su jeti ile adalar arası geçişlerde 34 knot sarsıntısız seyir olanağı sunar."
    },
    specs: [
      { label: { en: "Length Overall (LOA)", tr: "Tam Boy (LOA)" }, value: "45.40 m" },
      { label: { en: "Passenger Capacity", tr: "Yolcu Kapasitesi" }, value: "420 Commuters" },
      { label: { en: "Cruising Speed", tr: "Seyir Hızı" }, value: "34.0 kts" },
      { label: { en: "Propulsion", tr: "Sevk Sistemi" }, value: "4 x MTU 16V 2000 + Kamewa Waterjets" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3RGXCKyN5WKS0Qog6GSIq7ONadigha7uykGSjJFaSPHHwOhkNx1U4796sNuB-4NY0Hhka1zUYNoQb12FCQPyBvLoXsxnWgquxd1p5xt0w2zqrX6NxNH0KBBX6-IJ1lq15klsAAY6t7H-lzuAhPaDxAX2qSSDlXiUTlroYSfmykgyklFiJLGF2xVbQA27a_0YKyddf88tb1FEI-Q1BPrYe4qYp5FcGdUZS3107OeodctJASZnjS0n",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3RGXCKyN5WKS0Qog6GSIq7ONadigha7uykGSjJFaSPHHwOhkNx1U4796sNuB-4NY0Hhka1zUYNoQb12FCQPyBvLoXsxnWgquxd1p5xt0w2zqrX6NxNH0KBBX6-IJ1lq15klsAAY6t7H-lzuAhPaDxAX2qSSDlXiUTlroYSfmykgyklFiJLGF2xVbQA27a_0YKyddf88tb1FEI-Q1BPrYe4qYp5FcGdUZS3107OeodctJASZnjS0n",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWNS6mvIcrYDIXc0gBGwrPhWKwLls19ot1540aAGam4r_I07ZPoqFqAUyh8iVZWlfl1l8fIYUtZiRBnlWQ13CnHMtOFD1XOKx8t8xEEHv-zFJlwGQ8vD9W9xeTgtQKBrTAu2GAkA7_LmvvYKGYxWCMU_L57i5Q8x2JlT6jaQ8hcFUd2jG6HLthj6B0B67oNcqocQz8CqLikw5gG7R1a9Ula4jNtPIf9hJZwfZ-JEs78be9KWjQ5JoU"
    ]
  },
  {
    id: "solstice-iv",
    slug: "solstice-iv",
    title: "M/Y Solstice IV (Hull RC-095)",
    category: "in-build",
    categoryLabel: { en: "In-Build Tri-Deck Superyacht", tr: "İnşası Süren Üç Güverteli Süperyat" },
    hullNo: "RC-095",
    loa: "62.0 m",
    beam: "10.8 m",
    gt: "1,280 GT",
    speed: "16.8 kts",
    range: "5,000 nm",
    year: "Handover Q3 2025",
    classSociety: "Lloyd's Register +100A1",
    shortDesc: {
      en: "62m Tri-deck luxury displacement superyacht currently in final machinery and outfitting phase in Drydock 1.",
      tr: "Tuzla 1. Havuz'da makine ve donatım aşamasında olan 62m üç güverteli lüks deplasman süperyatı."
    },
    fullDesc: {
      en: "Currently undergoing final interior joinery and propulsion shaftline installation in Drydock 1. Solstice IV features an glass-bottom infinity pool, touch-and-go forward helipad, and IMO Tier III hybrid engine suite.",
      tr: "1. Havuz'da iç ahşap montajı ve şaft hattı entegrasyonu devam eden Solstice IV; cam tabanlı sonsuzluk havuzuna, helikopter pistine ve IMO Tier III hibrit motor grubuna sahiptir."
    },
    specs: [
      { label: { en: "Build Progress", tr: "İnşa İlerlemesi" }, value: "78% Complete" },
      { label: { en: "Expected Launch", tr: "Tahmini Denize İndirme" }, value: "Q3 2025" },
      { label: { en: "Length Overall (LOA)", tr: "Tam Boy (LOA)" }, value: "62.00 m" },
      { label: { en: "Gross Tonnage", tr: "Gross Tonaj" }, value: "1,280 GT" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1PZZdx8x6xrtmm4lEjKj-rRKNEByuhEiuowaHWxocFL3e7tn05HS3FFuAL4kZwTWCICbyeSjDumyMxFvvAQ5HR3r35CfvherVkX1QHgHN7exSp27v9a6IR_pRmTQkklhXp71OB3_JJ3xA-WkvkS-1lKC0AeBQY-IxrWq3M2Zwxv3Nm8bsyDORod53Lx9Zj6jrd6h4P7LzxvfpDuIkVucfa6_7rOGrKHF67z1qU6c7GFpWKfuRvPt6",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1PZZdx8x6xrtmm4lEjKj-rRKNEByuhEiuowaHWxocFL3e7tn05HS3FFuAL4kZwTWCICbyeSjDumyMxFvvAQ5HR3r35CfvherVkX1QHgHN7exSp27v9a6IR_pRmTQkklhXp71OB3_JJ3xA-WkvkS-1lKC0AeBQY-IxrWq3M2Zwxv3Nm8bsyDORod53Lx9Zj6jrd6h4P7LzxvfpDuIkVucfa6_7rOGrKHF67z1qU6c7GFpWKfuRvPt6",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrmIp3LiBlurTeVn9oTiAt2cndVEFdh-lGSy2dAiAIpcO6aXTQEd3Vat_5fndunOyTs3EAp7UcPKgC1cWuZnmRojIupls6tItCKAjN94M2viLhwlWa5H_6PNQqkSx8JszLkIHSFhDQGqPd6pZmmlK_2TIIgOX6mG4a7F3dpsRE3cWrLLsE94AghE0LuWUcBGXEPfPbrl6T9Pnwks9q_XUO081qu4urkd5FmQ8kQqcxDB579HuDXyCO"
    ]
  },
  {
    id: "deepscan-or112",
    slug: "deepscan-or112",
    title: "DeepScan OR-112",
    category: "specialized",
    categoryLabel: { en: "Oceanographic Survey Vessel", tr: "Oşinografik Araştırma Gemisi" },
    hullNo: "OR-112",
    loa: "58.4 m",
    beam: "12.0 m",
    gt: "1,150 GT",
    speed: "13.5 kts",
    range: "7,200 nm",
    year: "2022",
    classSociety: "DNV GL DP-2 / SILENT-R",
    shortDesc: {
      en: "58m Acoustically quietted oceanographic survey vessel equipped with DP-2 station keeping and sub-sea ROV davits.",
      tr: "DP-2 dinamik konumlandırma ve ROV sistemleri ile donatılmış 58m akustik sessizleştirilmiş araştırma gemisi."
    },
    fullDesc: {
      en: "OR-112 DeepScan is a specialized hydrographic survey vessel engineered for deepwater bathymetry mapping and ROV deployment down to 3,000 meters. Meets SILENT-R underwater noise emission criteria.",
      tr: "OR-112 DeepScan, 3.000 metre derinliğe kadar hidrografik haritalama ve ROV operasyonları için tasarlanmış özel bir araştırma gemisidir. SILENT-R gürültü emisyon kriterlerine tam uygundur."
    },
    specs: [
      { label: { en: "Length Overall (LOA)", tr: "Tam Boy (LOA)" }, value: "58.40 m" },
      { label: { en: "DP Rating", tr: "Dinamik Konumlandırma" }, value: "DNV DP-2 Certified" },
      { label: { en: "Endurance", tr: "Seyir Dayanımı" }, value: "35 Days at Sea" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_itGfSs5lhndzsyEU8XYKNdcgeDUhiIgN970J2Je90aNFCGW-jYp3oJft1dgOvPx8rK1D5ImT-PBW7hTlagoWuhbwDJ-TA-sJSoX-u-u6W8SCPvgS-CY293nk-EPCofLeJw7TCOpL6yHQ318rHhsCcAqR-MhQwna4RUSeYhAnTVikb22ae8wrK3DlRWVWmOOZW1wW7KHSKpv7QT1P0R3rkHkVPaklV049NIIDcI3l_w2e6hrWHZqo",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_itGfSs5lhndzsyEU8XYKNdcgeDUhiIgN970J2Je90aNFCGW-jYp3oJft1dgOvPx8rK1D5ImT-PBW7hTlagoWuhbwDJ-TA-sJSoX-u-u6W8SCPvgS-CY293nk-EPCofLeJw7TCOpL6yHQ318rHhsCcAqR-MhQwna4RUSeYhAnTVikb22ae8wrK3DlRWVWmOOZW1wW7KHSKpv7QT1P0R3rkHkVPaklV049NIIDcI3l_w2e6hrWHZqo"
    ]
  },
  {
    id: "azure-crest",
    slug: "azure-crest",
    title: "M/Y Azure Crest",
    category: "superyacht",
    categoryLabel: { en: "Fast Displacement Aluminium Yacht", tr: "Hızlı Deplasman Alüminyum Yat" },
    hullNo: "RC-081",
    loa: "44.0 m",
    beam: "8.6 m",
    gt: "485 GT",
    speed: "22.0 kts",
    range: "3,800 nm",
    year: "2023",
    classSociety: "RINA Green Plus",
    shortDesc: {
      en: "44m All-aluminium fast displacement motor yacht offering 22-knot top speed and shallow 2.1m draft.",
      tr: "22 knot azami hıza ve 2.1m sığ su çekimine sahip 44m alüminyum hızlı deplasman motor yat."
    },
    fullDesc: {
      en: "Engineered in 5083 aluminium alloy, M/Y Azure Crest delivers high speed with transatlantic efficiency at 12 knots. Features a panoramic main deck master suite and open flybridge tender cranes.",
      tr: "5083 alüminyum alaşımından üretilen M/Y Azure Crest, 12 knotta transatlantik menzili 22 knot azami hız ile buluşturur. Panoramik ana güverte süiti ve açık flybridge vinç sistemlerine sahiptir."
    },
    specs: [
      { label: { en: "Length Overall (LOA)", tr: "Tam Boy (LOA)" }, value: "44.00 m" },
      { label: { en: "Top Speed", tr: "Azami Hız" }, value: "22.0 kts" },
      { label: { en: "Structure", tr: "Yapı" }, value: "AlMg4.5Mn Aluminium Alloy" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChXtiHAl9LKxyCwXGPpXbfdma3bWCob1ZXUDdrLTIPomG63lfYltq1NClBTyt369DwSX-sJGPf6vRoNsH4gtBhPK308iHFHt6o7xitGmVTw4rYdrhNiF4acN6fGVnoGm6NSHhUnrECuh-V82KyYjgcohefRyrzoddPLSapM0HwsW1WPHIiNS-OobY7cI-eYJ1aidnSpBB8pLmCAOMVuEyz4i6cLf_HgPIy3NrDPPhUrHuCjaMPPO2W",
    gallery: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChXtiHAl9LKxyCwXGPpXbfdma3bWCob1ZXUDdrLTIPomG63lfYltq1NClBTyt369DwSX-sJGPf6vRoNsH4gtBhPK308iHFHt6o7xitGmVTw4rYdrhNiF4acN6fGVnoGm6NSHhUnrECuh-V82KyYjgcohefRyrzoddPLSapM0HwsW1WPHIiNS-OobY7cI-eYJ1aidnSpBB8pLmCAOMVuEyz4i6cLf_HgPIy3NrDPPhUrHuCjaMPPO2W"
    ]
  }
];
