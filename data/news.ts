export interface NewsItem {
  id: string;
  slug: string;
  title: { en: string; tr: string };
  category: "launch" | "whitepaper" | "expansion" | "green";
  categoryLabel: { en: string; tr: string };
  date: string;
  readTime: string;
  refNo: string;
  summary: { en: string; tr: string };
  content: { en: string; tr: string };
  image: string;
}

export const newsData: NewsItem[] = [
  {
    id: "sovereign-horizon-launch",
    slug: "sovereign-horizon-launch",
    title: {
      en: "The Ceremonial Handover & Maiden Sea Trials of 68-Meter Transoceanic M/Y Sovereign Horizon",
      tr: "68 Metrelik Okyanus Aşan M/Y Sovereign Horizon'un Törensel Teslimatı ve İlk Deniz Denemeleri"
    },
    category: "launch",
    categoryLabel: { en: "Launch Ceremony", tr: "Törensel İndirme" },
    date: "October 24, 2024",
    readTime: "6 Min Read",
    refNo: "LR-94028-TU",
    summary: {
      en: "Following twenty-six months of precision engineering at our Tuzla slipways, M/Y Sovereign Horizon was christened and handed over to her commissioning owner after executing 22.8-knot endurance runs.",
      tr: "Tuzla kızaklarımızdaki 26 aylık mühendislik çalışmasının ardından M/Y Sovereign Horizon, 22.8 knot hız denemelerini başarıyla tamamlayarak sahibine törenle teslim edildi."
    },
    content: {
      en: "Following twenty-six months of precision engineering at our Tuzla slipways, M/Y Sovereign Horizon was officially christened and handed over to her commissioning owner. With resident Lloyd's Register marine surveyors presiding alongside the naval architecture board, the vessel executed deep-water high-speed maneuvering and continuous 22.8-knot propulsion endurance in the Sea of Marmara.\n\nBuilt with a Grade AH36 high-tensile steel hull and weight-optimized 5083 aluminium superstructure, the 1,420 GT flagship achieves a 5,400 nautical mile transoceanic range at 12 knots. Floating sound-decoupling floors maintain ambient sound levels below 38 dBA in the owner's suite during full-power cruising.",
      tr: "Tuzla kızaklarımızdaki 26 aylık hassas mühendislik sürecinin ardından M/Y Sovereign Horizon resmi olarak vaftiz edildi ve sahibine teslim edildi. Yerleşik Lloyd's Register sörveylerinin denetiminde, gemi Marmara Denizi'nde derin su yüksek hız manevralarını ve 22.8 knot kesintisiz sevk dayanıklılık testlerini başarıyla geçti.\n\nGrade AH36 yüksek mukavemetli çelik gövde ve hafifletilmiş 5083 alüminyum üst yapı ile inşa edilen 1.420 GT amiral gemisi, 12 knotta 5.400 deniz mili okyanus aşırı menzile ulaşmaktadır. Yüzer ses yalıtım zeminleri, tam güç seyir sırasında dahi ana kamarada 38 dBA altında ortam ses seviyesi sağlar."
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4YXzwlEmtlBn4x1-WYBB-Rg7HcxSKlONWu6b7vHw04WCievjjnkeiXEWvm_euszsmWpfi8c_XBrrXVMhrGVsPLunqYrbXKtIiIbTxdYlAg8CH9QMFRID-2X-bRSIWEhBUUpWqgW0Z41JQATnJ1o0HJwi2gdn0iwc0ZGDoYRTNFOHOWdtssh7Thbb7fHqOlA9f_PG6EqC02nNjpvy-jY8tgkRCBabWnCTehqGG3FTYfOJ5SylCfVji"
  },
  {
    id: "cfd-hydrodynamics-whitepaper",
    slug: "cfd-hydrodynamics-whitepaper",
    title: {
      en: "CFD Hydrodynamics: How Digital Twin Simulations Reduced Hull Resistance by 9.4%",
      tr: "CFD Hidrodinamik: Dijital İkiz Simülasyonları Gövde Direncini Nasıl %9.4 Azalttı"
    },
    category: "whitepaper",
    categoryLabel: { en: "Engineering Whitepaper", tr: "Teknik Rapor" },
    date: "November 12, 2024",
    readTime: "8 Min Read",
    refNo: "RC-WP-084",
    summary: {
      en: "Over 1,200 core-hours of finite volume Navier-Stokes mesh analysis revealed boundary layer vorticity around the skeg, guiding a revised parametric bow bulb geometry.",
      tr: "1.200 saatlik Navier-Stokes simülasyonu, braket etrafındaki girdap hareketlerini ortaya çıkararak yenilikçi bir yumru pruva geometrisi geliştirmemizi sağladı."
    },
    content: {
      en: "Our hydrodynamics design bureau published whitepaper RC-WP-084, detailing the application of 48-million cell multiphase Navier-Stokes meshes to 75m displacement platforms. By optimizing boundary layer fluid dynamics around the skeg and bow bulb, total towing tank wave resistance was reduced by 9.4%, yielding a 320 nautical mile increase in fuel range.",
      tr: "Hidrodinamik tasarım büromuz, 75 metrelik deplasman platformlarına uygulanan 48 milyon hücreli Navier-Stokes ağ analizlerini içeren RC-WP-084 teknik raporunu yayınladı. Braket ve yumru pruva etrafındaki akış hatlarının optimizasyonu ile toplam gövde direnci %9.4 azaltılmış, yakıt menzilinde 320 deniz mili artış elde edilmiştir."
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQHxB6xFL9UJMT0Zk90BaOCyGZlSCrjbVPEj4t2OZR7LashDti-5pVEWckXaAMZbGYIMEdpzOfLT89Ndp1B2m-8rJYozg6VmgVp7XpJZQ_YRkMOKxbPs3OWQISFZDBGQt8sjTNvr9fCx5KMIanOcxHMcfAX-Mae5rxNlRUsKKw2VMMUfl_I4cTRGQlJadlT9MzNsmIsoIZxyr1dawBKlwUA46deMUkvnmHhFThbeCTY5b8sMyHN2vv"
  },
  {
    id: "gantry-crane-expansion",
    slug: "gantry-crane-expansion",
    title: {
      en: "Expansion Complete: Tuzla Graving Dock Commissioning 400-Tonne Synchronous Gantry Hoist",
      tr: "Tesis Genişletmesi Tamamlandı: Tuzla Havuzunda 400 Tonluk Senkronize Vinç Devreye Alındı"
    },
    category: "expansion",
    categoryLabel: { en: "Yard Expansion", tr: "Tersane Genişlemesi" },
    date: "September 18, 2024",
    readTime: "4 Min Read",
    refNo: "TUZ-ENG-400T",
    summary: {
      en: "The €18.5M modernization phase culminates with dual laser-guided synchronous trolleys enabling single-pick placement of pre-outfitted mega-blocks up to 400 metric tonnes.",
      tr: "18.5M €'luk modernizasyon yatırımı, 400 tona kadar donatılmış blokların lazer rehberliğinde tek seferde montajını sağlayan senkronize vinç sistemi ile tamamlandı."
    },
    content: {
      en: "Royal Caribbean has officially commissioned its upgraded 400-tonne tandem gantry crane spanning Drydock 1 in Tuzla. Featuring sub-millimeter laser position transducers, the crane allows fully pre-outfitted engine room blocks to be lifted directly into covered drydocks, shortening total hull assembly timelines by 22%.",
      tr: "Royal Caribbean, Tuzla 1. Havuz üzerinde yükselen 400 tonluk senkronize portal vincini hizmete aldı. Lazer konum sensörlerine sahip vinç, donatılmış makine dairesi bloklarının doğrudan kapalı havuza yerleştirilmesini sağlayarak gövde montaj sürelerini %22 kısaltmaktadır."
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfAreg_AGbd7tvnTdiyfGfQHHcudR-tfTAlIBSc4wmcZHV1Om4ydixTH3t-n3OYp4PYlXr8QQ3wX_gSEea9aYnT9_dkGkni8iJkQdiKCGsoiaf4D1CtkCcNA1ihIRgxe3_n0mVUf8C1HO9oJWipvZmwgv4adraZ3hTX4g2C3PdqJfSMcJOuRq0OiAvedKyWpurPU28BT0xRER6mIa7fbRcxKVnMEwTsemnWIKsOoENGbSxqASVhhQs"
  },
  {
    id: "methanol-fuel-cells-accord",
    slug: "methanol-fuel-cells-accord",
    title: {
      en: "Royal Caribbean Signs Research Accord for Re-Formed Methanol Fuel Cells",
      tr: "Royal Caribbean Metanol Yakıt Hücreleri İçin Araştırma Anlaşması İmzaladı"
    },
    category: "green",
    categoryLabel: { en: "Sustainability", tr: "Sürdürülebilirlik" },
    date: "August 30, 2024",
    readTime: "5 Min Read",
    refNo: "IMO-TIER-IV",
    summary: {
      en: "A formal tripartite R&D pact to engineer 1.2MW modular reformed-methanol fuel cell power plants for zero-emission harbor maneuvering.",
      tr: "Liman içi manevralarda sıfır emisyon sağlayan 1.2MW modüler metanol yakıt hücresi güç santralleri geliştirmek üzere üçlü Ar-Ge anlaşması imzalandı."
    },
    content: {
      en: "Aligning with IMO 2030 decarbonization directives, Royal Caribbean has partnered with European clean-tech institutes to develop 1.2MW modular reformed-methanol fuel cells. Installed on custom superyacht platforms, the system provides zero-emission harbor maneuvering and 48 hours of silent anchor operation without starting diesel generators.",
      tr: "IMO 2030 dekarbonizasyon hedefleri doğrultusunda Royal Caribbean, 1.2MW modüler metanol yakıt hücreleri geliştirmek için Avrupalı temiz teknoloji enstitüleriyle ortaklık kurdu. Süperyat platformlarına entegre edilecek sistem, jeneratör çalıştırmadan 48 saatlik sessiz demirleme olanağı sunar."
    },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCqkN6b1dR-G7QLiflU8b1628Y1NX5YmJOVzZ19vAO8RcXS9v-nOqemhzRfD5B_W18qLVH2T1ZaAiHBY_C7LdQ0T3CIq7alB5GIG3cMVjUO7aUGxisoLKUqIjs0it99JBvZslrRF6O0uixNm59HR5Qqk1xUYbt5KXpnDFtt5SJFW64huG9U6YyZNiqsy3g6Xuyepl466KrvCa84pN8_dqdO2mwnBV4TGCPW6XCydD57AYpYhw1dFCY"
  }
];
