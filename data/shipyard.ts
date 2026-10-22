export interface ShipyardFacility {
  id: string;
  title: { en: string; tr: string };
  specs: { label: { en: string; tr: string }; value: string }[];
  desc: { en: string; tr: string };
  image: string;
}

export const shipyardFacilities: ShipyardFacility[] = [
  {
    id: "drydock-1",
    title: { en: "Covered Graving Drydock 1 (120m)", tr: "1. Kapalı Kuru Havuz (120m)" },
    specs: [
      { label: { en: "Dimensions", tr: "Boyutlar" }, value: "120m x 26m" },
      { label: { en: "Lift Capacity", tr: "Kaldırma Kapasitesi" }, value: "6,000 Metric Tonnes" },
      { label: { en: "Dewatering Time", tr: "Su Tahliye Süresi" }, value: "190 Minutes Full Cycle" }
    ],
    desc: {
      en: "Fully enclosed graving basin with climate-regulated atmospheric filters, high-output dewatering pumps, and direct deep-trench rail transfer.",
      tr: "İklim kontrollü filtreleme sistemlerine, yüksek debili tahliye pompalarına ve doğrudan derin hat raylı transfer sistemine sahip kapalı kuru havuz."
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcWWV8IhUW8UnSo8UBp4J9bDoZoOU6PlrK1gIsuMfwd62kQ8atqoESLY06PwCl466nTiiMvVYPwqJLIIcW3eW-hSg840eZSiywHDpbGgImkGO3Qglip-G4jMS7ctBG1J724d-OWT1rNUwlTd_1L2UMep4yqMQ-6kU2Q9IVFbOfK4FjZNYglXy536p1JfTmeWvzyMklgHgykyU3KZOC2_43DwBRde9kCybSyLmjTleOHnDxRLXGEJ9P"
  },
  {
    id: "cnc-assembly",
    title: { en: "Precision CNC & Sub-Assembly Hall", tr: "Hassas CNC ve Alt-Montaj Hangarı" },
    specs: [
      { label: { en: "Plate Size", tr: "Saç Boyutu" }, value: "12m x 3m (Up to 90mm thickness)" },
      { label: { en: "Cutting Precision", tr: "Kesim Hassasiyeti" }, value: "Sub-millimetre ±0.3mm" }
    ],
    desc: {
      en: "5-axis submerged plasma and waterjet profiling for marine Grade A steel and 5083 aluminium plate, integrated with 100% X-ray certified seam welding.",
      tr: "Gemi yapım çeliği ve 5083 alüminyum saçlar için 5 eksenli sualtı plazma ve su jeti kesim hatları, %100 röntgen sertifikalı kaynak birimleri."
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLkhxjhRAbCOnikLA25SJE8esKTO_xNmIeIs7nTa1Zywl96sdSYKToaI6iZrfIk8A4XcCs0fdcmveJZosBOv0B23_IsffIUurnZnHOOlo_4NrLo5syKRefkmlYC3Rl1xp6upRrTVx1pKiEeku6ZVWOtx9OAxQS2KvmiMGUFKQ2BylwFAOkld-xFKNDfh6bHJogp0eIX8oNMSLkbOqIVSn2RQHGzInTDAxI-VB6p5XE6EjZp_b394hM"
  },
  {
    id: "woodwork-atelier",
    title: { en: "12,000 m² Joinery & Teak Atelier", tr: "12.000 m² Mobilya ve Tik Ağacı Atölyesi" },
    specs: [
      { label: { en: "Materials", tr: "Malzemeler" }, value: "Burmese Teak, Italian Burl Marbles" },
      { label: { en: "Acoustic Standard", tr: "Akustik Standart" }, value: "Floating Acoustic Floor Panels" }
    ],
    desc: {
      en: "Humidity-controlled workshops housing master carpenters crafting Burmese teak decks, book-matched marble veneers, and sound-insulated bulkhead bulkheads.",
      tr: "Bordo ve iç mekanlar için Birmanya tik ağacı güverteleri, mermer kaplamalar ve ses yalıtımlı bölme panelleri üreten nem kontrollü marangozluk atölyesi."
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7d1Xx8WS9hS4wxzMyhwredftejBJTU9TxRH39G3a7THbm2vQsW5p-JRq4cPaDBwt4mJFA-JrzkWyTCE3litW6psMzrO6tj-HIavp6MOYETFDZVZy379xuJzT8WGBVvxXPMczcQxgCwus9J-Uwg0gbBJ4doy327M3Cnj2KhwfKW_m7dFWiWkIIyuKBzKNbZojqmk0dyq2A7VuljCvp_tjcqbMvcLam0x_UhqOmMYWzg8XAN2Q8euzd"
  }
];

export const processStages = [
  {
    num: "01",
    title: { en: "Consultation & Feasibility", tr: "Danışmanlık ve Fizibilite" },
    desc: {
      en: "Initial requirements evaluation, flag state selection, and preliminary deadweight/LOA envelope modeling.",
      tr: "İlk ihtiyaç değerlendirmesi, bayrak devleti seçimi ve ön deplasman/boyut modellemesi."
    }
  },
  {
    num: "02",
    title: { en: "Concept Design & Hydrodynamics", tr: "Kavramsal Tasarım ve Hidrodinamik" },
    desc: {
      en: "Computational fluid dynamics (CFD) virtual wave basin testing, hull line optimization, and towing tank correlation.",
      tr: "Hesaplamalı akışkanlar mekaniği (CFD) dijital havuz testleri ve gövde formu optimizasyonu."
    }
  },
  {
    num: "03",
    title: { en: "Naval Architecture & FEA Structural", tr: "Gemi Mimarisi ve Yapısal FEA" },
    desc: {
      en: "Global torsional load calculations, bulkhead placement, and 3D parametric CAD drawing signoffs.",
      tr: "Global burulma yük hesapları, perde yerleşimleri ve 3D parametrik CAD çizim onayları."
    }
  },
  {
    num: "04",
    title: { en: "Marine Engineering & Systems", tr: "Deniz Mühendisliği ve Sistemler" },
    desc: {
      en: "Main propulsion, electrical switchboards, piping networks, and SCR exhaust aftertreatment layouts.",
      tr: "Ana sevk motorları, elektrik panoları, boru devreleri ve SCR egzoz arıtma düzenlemeleri."
    }
  },
  {
    num: "05",
    title: { en: "Material CNC Preparation", tr: "Malzeme CNC Hazırlığı" },
    desc: {
      en: "Submerged 5-axis plasma lofting of Lloyd's-certified Grade AH36 steel and 5083 aluminium plates.",
      tr: "Lloyd's sertifikalı AH36 çelik ve 5083 alüminyum levhaların 5 eksenli sualtı plazma kesimi."
    }
  },
  {
    num: "06",
    title: { en: "Keel Laying & Block Mating", tr: "Omurga Koyma ve Blok Montajı" },
    desc: {
      en: "Ceremonial keel coin placement followed by 400-tonne tandem crane lifting of pre-outfitted hull blocks.",
      tr: "Geleneksel omurga sikke töreninin ardından 400 tonluk vinçlerle donatılmış blokların birleştirilmesi."
    }
  },
  {
    num: "07",
    title: { en: "Systems Installation & Outfitting", tr: "Sistem Montajı ve Donatım" },
    desc: {
      en: "Engine room shaftline alignment, teak deck caulking, interior joinery fitment, and glass bridge wiring.",
      tr: "Makine dairesi şaft hizalaması, tik güverte kaplaması, iç mobilya montajı ve seyir otomasyonu."
    }
  },
  {
    num: "08",
    title: { en: "Testing & Sea Trials", tr: "Testler ve Deniz Denemeleri" },
    desc: {
      en: "Inclining experiments, 72-hour open water full-power endurance runs, and vibration acoustics measurement.",
      tr: "Meyil deneyleri, Marmara Denizi'nde 72 saatlik tam güç hız/dayanıklılık testleri ve ses ölçümleri."
    }
  },
  {
    num: "09",
    title: { en: "Sovereign Delivery & Handover", tr: "Teslimat ve Bayrak Töreni" },
    desc: {
      en: "Final Lloyd's Register/RINA classification certificate issuance, digital twin handover, and maiden voyage dispatch.",
      tr: "Resmi klas sertifikalarının teslimi, 3D dijital ikiz aktarımı ve ilk seyir uğurlaması."
    }
  }
];
