export interface ServiceItem {
  id: string;
  slug: string;
  title: { en: string; tr: string };
  shortDesc: { en: string; tr: string };
  fullDesc: { en: string; tr: string };
  category: string;
  loaRange: string;
  features: { en: string[]; tr: string[] };
  specifications: { label: { en: string; tr: string }; value: string }[];
  image: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "luxury-yacht-construction",
    slug: "luxury-yacht-construction",
    title: {
      en: "Luxury Yacht Construction",
      tr: "Lüks Yat İnşası"
    },
    shortDesc: {
      en: "Full custom and semi-custom luxury motor yachts fabricated in high-tensile marine steel and grade 5083 aluminium.",
      tr: "Yüksek mukavemetli deniz çeliği ve 5083 alüminyum alaşımı ile üretilen tam ve yarı özel lüks motor yatlar."
    },
    fullDesc: {
      en: "Royal Caribbean specializes in bespoke mega and superyacht manufacturing ranging from 40 to 120 meters LOA. Combining European naval elegance with advanced computational hydrodynamics, our Tuzla compound constructs vessels with whisper-quiet propulsion, floating sound-decoupled decks, and bespoke luxury interior joinery.",
      tr: "Royal Caribbean, 40 ila 120 metre boyları arasında değişen özel mega ve süperyat üretiminde uzmanlaşmıştır. Avrupa gemi estetiğini gelişmiş hesaplamalı hidrodinamik ile birleştiren Tuzla tesisimiz, fısıltı sessizliğinde sevk sistemleri, ses yalıtımlı zeminler ve lüks iç mobilyalarla donatılmış tekneler inşa eder."
    },
    category: "40m – 120m LOA",
    loaRange: "40m – 120m",
    features: {
      en: [
        "Computational fluid dynamics (CFD) hull optimization",
        "Sound & vibration attenuation below 42 dBA in staterooms",
        "IMO Tier III Hybrid & Dual-Fuel propulsion integration",
        "Touch-and-go helicopter deck engineering (CAP 437)",
        "Custom hydraulic transom beach clubs & side tender garages"
      ],
      tr: [
        "Hesaplamalı akışkanlar mekaniği (CFD) gövde optimizasyonu",
        "Kamaralarda 42 dBA altında ses ve titreşim yalıtımı",
        "IMO Tier III Hibrit ve Çift Yakıtlı sevk sistemi entegrasyonu",
        "Helikopter pisti mühendisliği (CAP 437 uyumlu)",
        "Özel hidrolik plaj kulüpleri ve yan bot garajları"
      ]
    },
    specifications: [
      { label: { en: "Displacement Range", tr: "Deplasman Aralığı" }, value: "500 GT – 5,500 GT" },
      { label: { en: "Hull Metallurgy", tr: "Gövde Metalurjisi" }, value: "Grade AH36 Steel / AL 5083" },
      { label: { en: "Propulsion Type", tr: "Sevk Tipi" }, value: "MTU 16V4000 + PTI Electric Motors" },
      { label: { en: "Class Society", tr: "Klass Kuruluşu" }, value: "Lloyd's Register +100A1 SSC Yacht" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCH9P9vLjyDykVGNNWi95ID9Oo6_8ngquIkCrcseMD03SZEpW9qRg1dQveA3eKN5oQIVvTYcYEgB8emyc6wrPfhbf3QXQrX--r3Gru0hGNWGsNHy15_3Gtlr1TwAAOmZnNwfOFsCw5wHpEFsTXJC1y6HAng_McQTNlDRj6CcOQYIgT_1YiABta2cAeQ30Xq8oIjPtfGCVu_LkWrOF8E8804fY4IjvNJBtZEF_ErT0l9o4clE2MbPu2e",
    iconName: "Anchor"
  },
  {
    id: "commercial-shipbuilding",
    slug: "commercial-shipbuilding",
    title: {
      en: "Commercial Shipbuilding",
      tr: "Ticari Gemi İnşası"
    },
    shortDesc: {
      en: "Fast passenger catamarans, Ro-Pax ferries, offshore oceanographic research vessels, and pilot craft built to rigid HSC codes.",
      tr: "Katı HSC standartlarına uygun inşa edilen hızlı yolcu katamaranları, Ro-Pax feribotları, açık deniz araştırma gemileri ve kılavuz kaptan tekneleri."
    },
    fullDesc: {
      en: "Our commercial division engineers high-speed wave-piercing catamarans, fast commuter ferries, and specialized offshore supply vessels. Built to DNV GL and Bureau Veritas High-Speed Craft (HSC 2000) standards, these vessels deliver operational efficiency, low wake wash, and maximum payload capacity.",
      tr: "Ticari gemi departmanımız; dalga yaran hızlı katamaranlar, feribotlar ve açık deniz destek tekneleri tasarlayıp inşa eder. DNV GL ve Bureau Veritas HSC 2000 standartlarına uygun olarak üretilen bu gemiler yüksek yakıt verimliliği ve maksimum taşıma kapasitesi sunar."
    },
    category: "COMMERCIAL & PASSENGER",
    loaRange: "25m – 95m",
    features: {
      en: [
        "High-speed wave-piercing twin hull configurations",
        "Waterjet propulsion with dynamic vector thrust control",
        "IMO Tier III emission compliance with SCR catalytic systems",
        "Active T-foil interceptor motion damping for sea comfort",
        "Heavy-lift cargo decks & rapid passenger embarkation gangways"
      ],
      tr: [
        "Hızlı dalga yarıcı ikiz gövde tasarımları",
        "Dinamik vektör kontrollü su jeti sevk sistemleri",
        "SCR katalitik sistemleri ile IMO Tier III emisyon uyumu",
        "Yolcu konforu için aktif T-foil yalpa sönümleme",
        "Ağır yük güverteleri ve hızlı yolcu tahliye sistemleri"
      ]
    },
    specifications: [
      { label: { en: "Speed Envelope", tr: "Hız Aralığı" }, value: "28 – 42 Knots" },
      { label: { en: "Passenger Capacity", tr: "Yolcu Kapasitesi" }, value: "Up to 600 Guests" },
      { label: { en: "Structure", tr: "Yapı" }, value: "High-Tensile Marine Aluminium" },
      { label: { en: "Class Code", tr: "Klass Kodu" }, value: "HSC 2000 Category B / DNV GL" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrponVuj53CUP-HCuyi9SqBKbmPhZMWxvQprBvifzKFiEmIeebpfu7zLk-TbSDVX_LsLSYqgeOZJNTies54TqrzzIFm0kSMjPxyZeKtq95B9aM9iTQ4bAxWUrWZ5CcauTQQNsbvbWzVEfdz-Pz1Kw5u38Ax1qgwXMpmADgpTkdAZhVUATCPrrATNPeWN2gU7q2XrnAMe0tzt2HFTYEpMM6BiSes91F1qrXIC-aJd4faNDJr26MzatN",
    iconName: "Ship"
  },
  {
    id: "custom-boat-manufacturing",
    slug: "custom-boat-manufacturing",
    title: {
      en: "Custom Boat Manufacturing",
      tr: "Özel Tekne Üretimi"
    },
    shortDesc: {
      en: "High-performance tenders, chase boats, and bespoke coastal cruisers built with carbon-reinforced composite materials.",
      tr: "Karbon takviyeli kompozit malzemelerle üretilen yüksek performanslı servis tekneleri, takip tekneleri ve özel kıyı yatları."
    },
    fullDesc: {
      en: "For owners demanding agility and distinct style, Royal Caribbean fabricates custom tenders, limousine chase boats, and day cruisers. Utilizing vacuum-infused carbon fiber and epoxy resin matrixes, these vessels achieve incredible power-to-weight ratios and sharp maneuvering.",
      tr: "Çeviklik ve özgün stil arayan yat sahipleri için servis tekneleri, limuzin botlar ve günlük gezi tekneleri üretiyoruz. Vakum infüzyon karbon fiber ve epoksi reçine matrisleri kullanılarak inşa edilen bu tekneler, mükemmel güç-ağırlık oranına sahiptir."
    },
    category: "12m – 30m LOA",
    loaRange: "12m – 30m",
    features: {
      en: [
        "Infused carbon-epoxy composite construction",
        "Custom teak woodwork and premium waterproof leather upholstery",
        "Joystick maneuverability with surface drives or outboard quad power",
        "Integrated Garmin/Raymarine glass bridge navigation systems"
      ],
      tr: [
        "Vakum infüzyon karbon-epoksi kompozit inşa",
        "Özel tik ağacı işçiliği ve suya dayanıklı deri döşemeler",
        "Yüzey sevk veya dörtlü dıştan takma motor ile joystick kontrolü",
        "Entegre Garmin/Raymarine cam köprü navigasyon sistemleri"
      ]
    },
    specifications: [
      { label: { en: "Top Speed", tr: "Maksimum Hız" }, value: "45 – 58 Knots" },
      { label: { en: "Hull Composite", tr: "Gövde Kompoziti" }, value: "Pre-preg Carbon Fiber & Epoxy" },
      { label: { en: "Draft", tr: "Su Çekimi" }, value: "0.85 m (Shallow Water Able)" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChXtiHAl9LKxyCwXGPpXbfdma3bWCob1ZXUDdrLTIPomG63lfYltq1NClBTyt369DwSX-sJGPf6vRoNsH4gtBhPK308iHFHt6o7xitGmVTw4rYdrhNiF4acN6fGVnoGm6NSHhUnrECuh-V82KyYjgcohefRyrzoddPLSapM0HwsW1WPHIiNS-OobY7cI-eYJ1aidnSpBB8pLmCAOMVuEyz4i6cLf_HgPIy3NrDPPhUrHuCjaMPPO2W",
    iconName: "Zap"
  },
  {
    id: "steel-aluminum-hull-construction",
    slug: "steel-aluminum-hull-construction",
    title: {
      en: "Steel and Aluminum Hull Construction",
      tr: "Çelik ve Alüminyum Gövde İnşası"
    },
    shortDesc: {
      en: "Precision CNC plasma cutting, submerged arc welding, and 3D laser-guided hull block assembly inside climate-controlled halls.",
      tr: "İklim kontrollü hangarlarda hassas CNC plazma kesimi, toz altı kaynağı ve 3D lazer güdümlü gövde blok montajı."
    },
    fullDesc: {
      en: "Grounded in metallurgical precision, our Tuzla fabrication yards process Grade A/AH36 high-tensile steel plate and 5083-H116 marine aluminium. Utilizing 5-axis plasma lofting and 100% radiographic weld testing, we guarantee sub-millimetre alignment across massive hull structures.",
      tr: "Metalurjik hassasiyete dayanan Tuzla üretim tesislerimiz, Grade A/AH36 yüksek mukavemetli çelik saç ve 5083-H116 alüminyum işler. 5 eksenli plazma kesim ve %100 röntgen kaynak testleri ile milimetre altı hassasiyet garanti edilir."
    },
    category: "HEAVY METALLURGY",
    loaRange: "Up to 120m",
    features: {
      en: [
        "Submerged 5-axis CNC plasma plate preparation",
        "100% Non-Destructive Ultrasonic & X-Ray weld verification",
        "400-Ton tandem gantry crane modular block lifting",
        "Sub-millimetre 3D laser spatial fairing alignment"
      ],
      tr: [
        "Sualtı 5 eksenli CNC plazma saç hazırlığı",
        "%100 Tahribatsız Ultrasonik ve X-Ray kaynak denetimi",
        "400 Tonluk senkronize vinçlerle blok montajı",
        "Milimetre altı 3D lazer hizalama kontrolleri"
      ]
    },
    specifications: [
      { label: { en: "Tolerance Limit", tr: "Hassasiyet Limiti" }, value: "± 0.5 mm Structural" },
      { label: { en: "Crane Capacity", tr: "Vinç Kapasitesi" }, value: "400 Metric Tonnes Tandem" },
      { label: { en: "Steel Grade", tr: "Çelik Kalitesi" }, value: "Lloyd's Grade AH36 / EH36" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLkhxjhRAbCOnikLA25SJE8esKTO_xNmIeIs7nTa1Zywl96sdSYKToaI6iZrfIk8A4XcCs0fdcmveJZosBOv0B23_IsffIUurnZnHOOlo_4NrLo5syKRefkmlYC3Rl1xp6upRrTVx1pKiEeku6ZVWOtx9OAxQS2KvmiMGUFKQ2BylwFAOkld-xFKNDfh6bHJogp0eIX8oNMSLkbOqIVSn2RQHGzInTDAxI-VB6p5XE6EjZp_b394hM",
    iconName: "Hammer"
  },
  {
    id: "marine-engineering",
    slug: "marine-engineering",
    title: {
      en: "Marine Engineering & Propulsion",
      tr: "Deniz Mühendisliği ve Sevk Sistemleri"
    },
    shortDesc: {
      en: "Turnkey mechanical, electrical, cryogenic LNG fuel, and hybrid propulsion system integration.",
      tr: "Anahtar teslim mekanik, elektrik, kriyojenik LNG yakıt ve hibrit sevk sistemi entegrasyonu."
    },
    fullDesc: {
      en: "Our marine engineering bureau delivers total system design covering main propulsion, electrical power management (PMS), HVAC climate loops, and piping networks. We pioneer clean-tech solutions including LNG dual-fuel vaporizers, zero-emission battery banks, and SCR exhaust aftertreatment.",
      tr: "Deniz mühendisliği büromuz; ana sevk, elektrik güç yönetimi (PMS), iklimlendirme döngüleri ve boru devreleri dahil tüm sistem tasarımını üstlenir. LNG çift yakıtlı buharlaştırıcılar ve sıfır emisyonlu akü bankaları gibi çevreci çözümlere öncülük ediyoruz."
    },
    category: "PROPULSION & POWER",
    loaRange: "All Vessels",
    features: {
      en: [
        "Hybrid electro-diesel PTI/PTO shaftline integration",
        "IMO Tier III Selective Catalytic Reduction (SCR) systems",
        "Ultra-quiet sound-decoupling elastic engine mounts (<38 dBA)",
        "Automated Power Management System (PMS) & switchboard design"
      ],
      tr: [
        "Hibrit elektro-dizel PTI/PTO şaft hattı entegrasyonu",
        "IMO Tier III Katalitik İndirgeme (SCR) sistemleri",
        "Sessiz elastik motor takozları ile titreşim izolasyonu (<38 dBA)",
        "Otomatik Güç Yönetim Sistemi (PMS) ve pano tasarımı"
      ]
    },
    specifications: [
      { label: { en: "Noise Rating", tr: "Ses Seviyesi" }, value: "< 38 dBA in Master Staterooms" },
      { label: { en: "Emissions Standard", tr: "Emisyon Standardı" }, value: "IMO Tier III / Zero-Emission Port Capable" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDG61WLA9OMS11QFxIBDNni3hWZ2kI_r7N7PpyLlI8n_m1C3meyKiyyeEhOXkiVxqX8fENLIkR34_vK6POSwAZDltr76XfERifsrWDOtohUnH5IeR5OQXwZweXTTN0QzRZ9wQgZLmIjfk6s3FUNstiGfepbbuN3Y10xt5565G8vRAo6zWudtnW3sYaVfdK80Il2ZeJXYWwTlT9EPgtjL0lgYm50FB_uqvFiJP_yHGrV3IKSJBiEUegp",
    iconName: "Cpu"
  },
  {
    id: "ship-repair-maintenance",
    slug: "ship-repair-maintenance",
    title: {
      en: "Ship Repair and Maintenance",
      tr: "Gemi Tamir ve Bakımı"
    },
    shortDesc: {
      en: "24/7 drydocking, hull underwater inspections, shaftline optical alignments, and Lloyd's/RINA special survey prep.",
      tr: "7/24 havuzlama, sualtı gövde denetimleri, optik şaft hizalama ve Lloyd's/RINA sörvey hazırlıkları."
    },
    fullDesc: {
      en: "Operating deepwater berths and covered drydocks in Tuzla, our emergency repair unit provides rapid response for commercial and luxury fleets. Services include high-pressure hull blasting, shaft & rudder re-alignment, valve overhauls, and 5-year/10-year classification society surveys.",
      tr: "Tuzla'daki derin su rıhtımları ve kapalı havuzlarımızda acil tamir birimimiz 7/24 hizmet sunar. Yüksek basınçlı gövde raspa-boya, şaft ve dümen hizalama, vana bakımları ve 5/10 yıllık klas sörvey çalışmaları eksiksiz gerçekleştirilir."
    },
    category: "MAINTENANCE & DOCKING",
    loaRange: "Up to 130m",
    features: {
      en: [
        "Rapid dewatering graving docks (190 min full cycle)",
        "Ultra-high pressure (UHP) hydro-blasting & Awlgrip topcoat application",
        "Laser optical shaftline and rudder stock deflection checks",
        "24/7 emergency dive team and underwater hull survey"
      ],
      tr: [
        "Hızlı tahliye havuzları (190 dakika tam döngü)",
        "Yüksek basınçlı su jeti raspa ve Awlgrip son kat boya",
        "Lazer optik şaft ve dümen mili sapma denetimleri",
        "7/24 acil dalgıç ekibi ve sualtı gövde denetimi"
      ]
    },
    specifications: [
      { label: { en: "Drydock Time", tr: "Havuzlama Süresi" }, value: "Express 48h Turnaround Available" },
      { label: { en: "Shore Power", tr: "Karadan Besleme" }, value: "400V/690V, 50/60Hz, 2.5 MVA" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAp3nwodTCC8mXy5LJ7kTzA0ysvzPZnGq2xnN-6MTNS-JeIa5Nzg_C4oGCXSCQBJeRy_A2o0vOfNz8k_KbD6uRHnD2HHHf6Fbs_EX5c0N-rdYxoO1IHUgO4m4q_XuxFD2EcA7O-ib4RnxaEi8gQoCzwOm500VNeaOy5iRSTW5ePPHDGFATV0vk6W61rENPIhm5y52toGKT3FM1lpEoGMtnkotOpH5vQpN9_mgKGiLgSdirMkktYWPL",
    iconName: "Wrench"
  },
  {
    id: "vessel-refitting",
    slug: "vessel-refitting",
    title: {
      en: "Vessel Refitting & Modernization",
      tr: "Gemi Yenileme ve Modernizasyon (Refit)"
    },
    shortDesc: {
      en: "Major structural hull lengthening, superyacht cabin remodels, bulbous bow additions, and state-of-the-art navigation repowering.",
      tr: "Gövde uzatma, süperyat kabin yenileme, yumru pruva (bulbous bow) eklenmesi ve seyrüsefer sistemleri modernizasyonu."
    },
    fullDesc: {
      en: "Transforming existing motor yachts and commercial ships into contemporary, highly efficient assets. Our refit team handles complex structural mid-body insertions, teak deck re-caulking, interior joinery overhauls, and complete bridge deck glass automation upgrades.",
      tr: "Mevcut motor yatları ve ticari gemileri günümüzün yüksek verimlilik ve lüks standartlarına dönüştürüyoruz. Refit ekibimiz gövde uzatma, tik güverte yenileme, iç mekan mobilya değişimleri ve köprüüstü otomasyon güncellemelerini başarıyla yürütür."
    },
    category: "REFIT & REPOWERING",
    loaRange: "30m – 120m",
    features: {
      en: [
        "Structural mid-body lengthening insertions",
        "Bulbous bow retrofitting guided by 3D laser scanning",
        "Climate-controlled paint shed refinishing (Class 10,000 cleanroom)",
        "Complete bridge glass-cockpit & automation repowering"
      ],
      tr: [
        "Yapısal orta gövde uzatma operasyonları",
        "3D lazer tarama ile yumru pruva (bulb) entegrasyonu",
        "İklim kontrollü boya hangarı uygulamaları",
        "Komple köprüüstü cam kokpit ve otomasyon yenileme"
      ]
    },
    specifications: [
      { label: { en: "Paint Shed Size", tr: "Boya Hangarı Boyutu" }, value: "85m Climate-Controlled Enclosure" },
      { label: { en: "Refit Warranty", tr: "Refit Garantisi" }, value: "24 Months Full Yard Guarantee" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZPX774SAjNVVyt0eAiLMGAR1n4oIIt5EVVAs9DOvYV8SqBqVgJfDvMCGTnOb3pBi7o1vU_2skATTFvU0z3KebKLvIazN8wPBDVtfFN-s8qejBRaDWhjCG2gePzmhOUbZIq-MJ3YVnH8-cK_t8AQkfQnnOM2DbcK0qA7EpkTMEmQ4919mUvOWmTm_WXVqT6x5AV0v-BbZvQ0JCtkwgh_gJJANUbHbVBVb5ZL3QGLeVTqgkCx3kM90o",
    iconName: "RotateCw"
  },
  {
    id: "naval-architecture",
    slug: "naval-architecture",
    title: {
      en: "Naval Architecture & Design Studio",
      tr: "Gemi Mimarisi ve Tasarım Stüdyosu"
    },
    shortDesc: {
      en: "Supercomputing CFD analysis, Finite Element Analysis (FEA) structural modeling, and parametric 3D hull line lofting.",
      tr: "Süper bilgisayar CFD analizleri, Sonlu Elemanlar Analizi (FEA) yapısal modelleme ve parametrik 3D gövde tasarımı."
    },
    fullDesc: {
      en: "Our in-house design bureau units PhD-level hydrodynamics researchers with master yacht stylists. Utilizing dedicated HPC clusters, we calculate Froude wave patterns, dynamic trim angles, and finite element stress concentrations to deliver optimal performance before a single plate is cut.",
      tr: "Bünyemizdeki tasarım stüdyosu, doktor düzeyindeki hidrodinamik uzmanlarını usta yat tasarımcılarıyla buluşturur. Yüksek performanslı bilgisayar kümelerimizi kullanarak, ilk saç kesilmeden önce tüm gövde performansını simüle ediyoruz."
    },
    category: "RESEARCH & DESIGN",
    loaRange: "All Projects",
    features: {
      en: [
        "1,024-Core HPC cluster for STAR-CCM+ & OpenFOAM simulations",
        "Finite Element Analysis (FEA) global torsional load modeling",
        "Parametric 3D CAD modeling (Rhino 3D, NAPA, Tribon)",
        "Model towing tank correlation within ± 0.8% accuracy"
      ],
      tr: [
        "STAR-CCM+ ve OpenFOAM analizleri için 1.024 Çekirdekli HPC kümesi",
        "Sonlu Elemanlar Analizi (FEA) burulma ve yük modellemesi",
        "Parametrik 3D CAD modelleme (Rhino 3D, NAPA, Tribon)",
        "Model havuz deneyleri ile %99.2 doğrulukta korelasyon"
      ]
    },
    specifications: [
      { label: { en: "Sim Mesh Size", tr: "Simülasyon Ağ Boyutu" }, value: "Up to 50M Fluid Cells" },
      { label: { en: "Plan Approval Rate", tr: "Plan Onay Oranı" }, value: "99.4% First-Pass Class Approval" }
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQHxB6xFL9UJMT0Zk90BaOCyGZlSCrjbVPEj4t2OZR7LashDti-5pVEWckXaAMZbGYIMEdpzOfLT89Ndp1B2m-8rJYozg6VmgVp7XpJZQ_YRkMOKxbPs3OWQISFZDBGQt8sjTNvr9fCx5KMIanOcxHMcfAX-Mae5rxNlRUsKKw2VMMUfl_I4cTRGQlJadlT9MzNsmIsoIZxyr1dawBKlwUA46deMUkvnmHhFThbeCTY5b8sMyHN2vv",
    iconName: "Compass"
  }
];
