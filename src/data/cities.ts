import { City, CityPreview } from "../types";
import { categories } from "./categories";

export const cities: City[] = [
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brasil",
    coverImage: require("./images/rio-de-janeiro.jpg"),
    description:
      "Rio de Janeiro, a Cidade Maravilhosa, é mundialmente famosa por suas praias icônicas, montanhas exuberantes e o Carnaval. A cidade oferece uma combinação única de cultura vibrante, belezas naturais e um estilo de vida animado.",
    categories: [categories[2], categories[3], categories[1]], // Praia, Natureza, Urbano
    touristAttractions: [
      {
        id: "rio1",
        name: "Cristo Redentor",
        description:
          "Uma das Sete Maravilhas do Mundo Moderno, a estátua do Cristo Redentor é um marco icônico que oferece vistas espetaculares da cidade.",
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio2",
        name: "Pão de Açúcar",
        description:
          "Uma das montanhas mais famosas do Brasil, acessível por bondinho, oferecendo uma vista panorâmica impressionante do Rio de Janeiro.",
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio3",
        name: "Praia de Copacabana",
        description:
          "Uma das praias mais famosas do mundo, conhecida por sua extensa faixa de areia, vida noturna animada e eventos culturais.",
        cityId: "rio-de-janeiro",
      },
      {
        id: "rio4",
        name: "Jardim Botânico",
        description:
          "Um dos maiores e mais antigos jardins botânicos do Brasil, repleto de flora tropical, trilhas e áreas de preservação.",
        cityId: "rio-de-janeiro",
      },
    ],
    relatedCitiesIds: ["bali", "cancun", "krabi"], // Beach, Nature, Adventure destinations
    location: {
      latitude: -22.9068,
      longitude: -43.1729,
    },
  },
  {
    id: "tokyo",
    name: "Tóquio",
    country: "Japão",
    coverImage: require("./images/tokyo.jpg"),
    description:
      "Tóquio, capital do Japão, combina tradição e modernidade, com templos antigos e arquitetura futurista. É um centro global de cultura, tecnologia e economia, além de ser famosa por sua gastronomia. A cidade também possui uma das redes de transporte mais eficientes do mundo.",
    categories: [categories[1], categories[4], categories[5]], // Urbano, Cultura, Compras
    touristAttractions: [
      {
        id: "tokyo1",
        name: "Templo Senso-ji",
        description:
          "O templo mais antigo de Tóquio e um local de grande importância espiritual.",
        cityId: "tokyo",
      },
      {
        id: "tokyo2",
        name: "Torre de Tóquio",
        description:
          "Um dos ícones da cidade, com vistas panorâmicas incríveis.",
        cityId: "tokyo",
      },
      {
        id: "tokyo3",
        name: "Shibuya Crossing",
        description:
          "A famosa interseção movimentada, conhecida em todo o mundo.",
        cityId: "tokyo",
      },
      {
        id: "tokyo4",
        name: "Parque Ueno",
        description:
          "Um amplo parque com museus, templos e cerejeiras em flor na primavera.",
        cityId: "tokyo",
      },
    ],
    relatedCitiesIds: ["bangkok", "hong-kong", "singapore"], // Urban, Shopping, Modern cities
    location: {
      latitude: 35.6762,
      longitude: 139.6503,
    },
  },
  {
    id: "bangkok",
    name: "Bangkok",
    country: "Tailândia",
    coverImage: require("./images/bangkok.jpg"),
    description:
      "Bangkok, a capital vibrante da Tailândia, é uma cidade que mistura tradição e modernidade. Famosa por seus templos históricos, mercados de rua movimentados e arranha-céus imponentes, a cidade é um dos destinos turísticos mais dinâmicos do Sudeste Asiático.",
    categories: [
      categories[0],
      categories[4],
      categories[1],
      categories[6],
      categories[5],
    ], // Cultura, História, Compras
    touristAttractions: [
      {
        id: "bangkok1",
        name: "Grande Palácio",
        description:
          "Um dos marcos mais famosos de Bangkok, o Grande Palácio é um complexo de edifícios majestosos que serviu como residência dos reis da Tailândia.",
        cityId: "bangkok",
      },
      {
        id: "bangkok2",
        name: "Templo do Buda de Esmeralda (Wat Phra Kaew)",
        description:
          "Localizado dentro do Grande Palácio, este templo é considerado o mais sagrado da Tailândia e abriga a famosa estátua do Buda de Esmeralda.",
        cityId: "bangkok",
      },
      {
        id: "bangkok3",
        name: "Mercado de Chatuchak",
        description:
          "Um dos maiores mercados de rua do mundo, com mais de 8.000 barracas vendendo uma enorme variedade de produtos, de artesanato a roupas e comida.",
        cityId: "bangkok",
      },
      {
        id: "bangkok4",
        name: "Wat Arun (Templo do Amanhecer)",
        description:
          "Localizado às margens do rio Chao Phraya, Wat Arun é conhecido por sua torre central imponente e sua arquitetura intrincada.",
        cityId: "bangkok",
      },
    ],
    relatedCitiesIds: ["tokyo", "hong-kong", "singapore"], // Urban, Shopping, Modern cities
    location: {
      latitude: 13.7563,
      longitude: 100.5018,
    },
  },
  {
    id: "barcelona",
    name: "Barcelona",
    country: "Espanha",
    coverImage: require("./images/barcelona.jpg"),
    description:
      "Barcelona, a vibrante capital da Catalunha, é conhecida por sua arquitetura modernista, belas praias e uma cultura rica. A cidade é famosa pela obra-prima de Gaudí, a Sagrada Família, e pelo movimentado boulevard Las Ramblas.",
    categories: [categories[4], categories[1], categories[6]], // Cultura, Urbano, História
    relatedCitiesIds: ["kosice", "amsterdam", "ciudad-de-mexico"], // History, Culture, Architecture
    touristAttractions: [
      {
        id: "barcelona1",
        name: "Sagrada Família",
        description:
          "Uma das basílicas mais impressionantes do mundo, projetada por Antoni Gaudí.",
        cityId: "barcelona",
      },
      {
        id: "barcelona2",
        name: "Parque Güell",
        description:
          "Um parque público cheio de jardins e elementos arquitetônicos projetados por Gaudí.",
        cityId: "barcelona",
      },
      {
        id: "barcelona3",
        name: "Casa Batlló",
        description:
          "Outro marco arquitetônico de Gaudí, conhecido por sua fachada distinta.",
        cityId: "barcelona",
      },
      {
        id: "barcelona4",
        name: "La Rambla",
        description:
          "Um famoso boulevard no centro de Barcelona, repleto de lojas, restaurantes e entretenimento.",
        cityId: "barcelona",
      },
    ],
    location: {
      latitude: 41.3851,
      longitude: 2.1734,
    },
  },
  {
    id: "new-york",
    name: "Nova York",
    country: "Estados Unidos",
    coverImage: require("./images/new-york.jpg"),
    description:
      "Nova York, a cidade que nunca dorme, é um centro global de cultura, negócios e entretenimento. Famosa por seus arranha-céus, museus icônicos e um estilo de vida acelerado, a cidade oferece uma experiência única para visitantes de todo o mundo.",
    categories: [categories[1], categories[8], categories[6]], // Urbano, Luxo, História
    relatedCitiesIds: ["hong-kong", "singapore", "dubai"], // Urban, Luxury, Modern cities
    touristAttractions: [
      {
        id: "newyork1",
        name: "Estátua da Liberdade",
        description:
          "Um símbolo da liberdade e democracia, situada na entrada do porto de Nova York.",
        cityId: "new_york",
      },
      {
        id: "newyork2",
        name: "Central Park",
        description:
          "Um vasto parque no coração de Manhattan, um local perfeito para lazer e atividades ao ar livre.",
        cityId: "new_york",
      },
      {
        id: "newyork3",
        name: "Times Square",
        description:
          "A famosa interseção iluminada por outdoors gigantes e sede de muitos teatros da Broadway.",
        cityId: "new_york",
      },
      {
        id: "newyork4",
        name: "Empire State Building",
        description:
          "Um dos arranha-céus mais famosos do mundo, oferecendo vistas deslumbrantes de Nova York.",
        cityId: "new_york",
      },
    ],
    location: {
      latitude: 40.7128,
      longitude: -74.006,
    },
  },
  {
    id: "krabi",
    name: "Krabi",
    country: "Tailândia",
    coverImage: require("./images/krabi.jpg"),
    description:
      "Krabi, localizada na costa oeste da Tailândia, é famosa por suas paisagens deslumbrantes, praias de areia branca e águas cristalinas. Com falésias calcárias, ilhas paradisíacas e aventuras ao ar livre, é um dos destinos mais procurados por turistas em busca de natureza e tranquilidade.",
    categories: [categories[2], categories[3], categories[7]], // Praia, Natureza, Aventura
    relatedCitiesIds: ["bali", "rio-de-janeiro", "cancun"], // Beach, Nature, Adventure
    touristAttractions: [
      {
        id: "krabi1",
        name: "Railay Beach",
        description:
          "Uma das praias mais bonitas da Tailândia, famosa por suas falésias calcárias e paisagens de tirar o fôlego.",
        cityId: "krabi",
      },
      {
        id: "krabi2",
        name: "Ilhas Phi Phi",
        description:
          "Um arquipélago de tirar o fôlego, com praias paradisíacas e águas cristalinas, perfeito para mergulho.",
        cityId: "krabi",
      },
      {
        id: "krabi3",
        name: "Templo da Caverna do Tigre",
        description:
          "Um templo budista situado em uma montanha, acessível por uma longa escadaria, oferecendo vistas panorâmicas incríveis.",
        cityId: "krabi",
      },
      {
        id: "krabi4",
        name: "Praia de Ao Nang",
        description:
          "Uma das praias mais populares de Krabi, conhecida por sua beleza natural e uma ótima base para explorar as ilhas próximas.",
        cityId: "krabi",
      },
    ],
    location: {
      latitude: 8.0863,
      longitude: 98.9063,
    },
  },

  {
    id: "bali",
    name: "Bali",
    country: "Indonésia",
    coverImage: require("./images/bali.jpg"),
    description:
      "Bali, também conhecida como a Ilha dos Deuses, é um dos destinos turísticos mais procurados do mundo. Famosa por suas praias exóticas, templos antigos, cultura rica e vulcões ativos, Bali oferece um equilíbrio perfeito entre relaxamento e aventura.",
    categories: [categories[0], categories[2], categories[3], categories[4]], // Praia, Natureza, Cultura
    relatedCitiesIds: ["rio-de-janeiro", "tokyo", "bangkok"], // Beach, Nature, Adventure destinations
    touristAttractions: [
      {
        id: "bali1",
        name: "Templo de Uluwatu",
        description:
          "Um dos templos mais importantes de Bali, localizado no topo de uma falésia com vista para o oceano, famoso por suas apresentações de dança Kecak ao pôr do sol.",
        cityId: "bali",
      },
      {
        id: "bali2",
        name: "Floresta dos Macacos de Ubud",
        description:
          "Um santuário natural e cultural, habitado por centenas de macacos, em meio a templos e florestas tropicais densas.",
        cityId: "bali",
      },
      {
        id: "bali3",
        name: "Terraços de Arroz de Tegallalang",
        description:
          "Uma das paisagens mais icônicas de Bali, com impressionantes terraços de arroz que proporcionam vistas espetaculares.",
        cityId: "bali",
      },
      {
        id: "bali4",
        name: "Monte Batur",
        description:
          "Um vulcão ativo que atrai caminhantes e aventureiros para subir até o topo e contemplar um incrível nascer do sol.",
        cityId: "bali",
      },
    ],
    location: {
      latitude: -8.3405,
      longitude: 115.092,
    },
  },
  {
    id: "amsterdam",
    name: "Amsterdã",
    country: "Países Baixos",
    coverImage: require("./images/amsterdam.jpg"),
    description:
      "Amsterdã, a capital vibrante dos Países Baixos, é conhecida por seus canais pitorescos, museus renomados e uma rica história cultural. A cidade é famosa por suas bicicletas, arquitetura única e uma atmosfera acolhedora.",
    categories: [categories[6], categories[4], categories[1]], // História, Cultura, Urbano
    relatedCitiesIds: ["barcelona", "ciudad-de-mexico", "kosice"], // History, Culture, Architecture
    touristAttractions: [
      {
        id: "amsterdam1",
        name: "Museu Van Gogh",
        description:
          "Lar da maior coleção de obras de Vincent Van Gogh, este museu oferece uma viagem pela vida e trabalho do pintor.",
        cityId: "amsterdam",
      },
      {
        id: "amsterdam2",
        name: "Casa de Anne Frank",
        description:
          "Um museu no antigo esconderijo de Anne Frank durante a Segunda Guerra Mundial, oferecendo uma visão emocionante de sua história.",
        cityId: "amsterdam",
      },
      {
        id: "amsterdam3",
        name: "Rijksmuseum",
        description:
          "O museu nacional dos Países Baixos, abrigando uma vasta coleção de arte, história e cultura, incluindo obras-primas de Rembrandt.",
        cityId: "amsterdam",
      },
      {
        id: "amsterdam4",
        name: "Vondelpark",
        description:
          "O maior parque de Amsterdã, um lugar perfeito para caminhar, andar de bicicleta, relaxar e aproveitar o ar livre.",
        cityId: "amsterdam",
      },
    ],
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
    },
  },

  {
    id: "cancun",
    name: "Cancún",
    country: "México",
    coverImage: require("./images/cancun.jpg"),
    description:
      "Cancún, localizada na costa caribenha do México, é famosa por suas praias de areia branca, águas cristalinas e vida noturna vibrante. Este paraíso tropical é um dos destinos turísticos mais populares do mundo, oferecendo uma mistura de relaxamento, aventura e história antiga.",
    categories: [categories[2], categories[3], categories[7]], // Praia, Natureza, Aventura
    relatedCitiesIds: ["bali", "rio-de-janeiro", "krabi"], // Beach, Nature, Adventure
    touristAttractions: [
      {
        id: "cancun1",
        name: "Chichén Itzá",
        description:
          "Uma das Novas Sete Maravilhas do Mundo, este sítio arqueológico maia é uma das atrações mais visitadas perto de Cancún.",
        cityId: "cancun",
      },
      {
        id: "cancun2",
        name: "Isla Mujeres",
        description:
          "Uma pequena ilha a apenas 13 km de Cancún, famosa por suas praias tranquilas e excelente mergulho com snorkel.",
        cityId: "cancun",
      },
      {
        id: "cancun3",
        name: "Xcaret Park",
        description:
          "Um parque temático ecoarqueológico que oferece atividades ao ar livre, shows culturais e uma chance de conhecer a fauna local.",
        cityId: "cancun",
      },
      {
        id: "cancun4",
        name: "Praia de Delfines",
        description:
          "Uma das praias mais populares de Cancún, com vistas deslumbrantes do mar do Caribe e um local ideal para relaxar ao sol.",
        cityId: "cancun",
      },
    ],
    location: {
      latitude: 21.1619,
      longitude: -86.8515,
    },
  },

  {
    id: "dubai",
    name: "Dubai",
    country: "Emirados Árabes Unidos",
    coverImage: require("./images/dubai.jpg"),
    description:
      "Dubai, uma cidade global conhecida por seu luxo, inovação e arquitetura impressionante, é um dos destinos turísticos mais icônicos do mundo. A cidade combina cultura árabe tradicional com modernidade, oferecendo experiências de compras, aventura no deserto e arranha-céus futuristas.",
    categories: [categories[0], categories[8], categories[5], categories[1]], // Luxo, Compras, Urbano
    relatedCitiesIds: ["tokyo", "singapore", "bangkok"], // Urban, Luxury, Modern cities
    touristAttractions: [
      {
        id: "dubai1",
        name: "Burj Khalifa",
        description:
          "O edifício mais alto do mundo, com 828 metros de altura, oferecendo vistas panorâmicas incríveis de Dubai do seu mirante.",
        cityId: "dubai",
      },
      {
        id: "dubai2",
        name: "Dubai Mall",
        description:
          "Um dos maiores centros comerciais do mundo, com mais de 1.200 lojas, restaurantes, um aquário e um parque temático interno.",
        cityId: "dubai",
      },
      {
        id: "dubai3",
        name: "Ilha Palm Jumeirah",
        description:
          "Uma ilha artificial em forma de palmeira, famosa por seus resorts de luxo, restaurantes, e vistas impressionantes da cidade.",
        cityId: "dubai",
      },
      {
        id: "dubai4",
        name: "Deserto de Dubai",
        description:
          "Aventure-se no deserto de Dubai com passeios de safári, dunas de areia e experiências culturais beduínas.",
        cityId: "dubai",
      },
    ],
    location: {
      latitude: 25.276987,
      longitude: 55.296249,
    },
  },

  {
    id: "ciudad-de-mexico",
    name: "Cidade do México",
    country: "México",
    coverImage: require("./images/ciudad-de-mexico.jpg"),
    description:
      "A Cidade do México, uma das maiores e mais antigas cidades das Américas, é uma metrópole vibrante que combina história, cultura e modernidade. Famosa por suas praças históricas, museus e rica gastronomia, a cidade oferece uma experiência inesquecível aos visitantes.",
    categories: [categories[4], categories[6], categories[9]], // Cultura, História, Gastronomia
    relatedCitiesIds: ["bali", "melbourne", "hong-kong"], // Culture, Food, Markets
    touristAttractions: [
      {
        id: "cdmx1",
        name: "Zócalo",
        description:
          "A maior praça da cidade, rodeada por edifícios históricos, incluindo a Catedral Metropolitana e o Palácio Nacional.",
        cityId: "ciudad-de-mexico",
      },
      {
        id: "cdmx2",
        name: "Museu Nacional de Antropologia",
        description:
          "Um dos museus mais importantes do México, com uma vasta coleção de artefatos arqueológicos e etnográficos que celebram a cultura mexicana.",
        cityId: "ciudad-de-mexico",
      },
      {
        id: "cdmx3",
        name: "Castelo de Chapultepec",
        description:
          "Localizado no alto do bosque de Chapultepec, este castelo oferece uma visão única da história mexicana e vistas espetaculares da cidade.",
        cityId: "ciudad-de-mexico",
      },
      {
        id: "cdmx4",
        name: "Coyoacán",
        description:
          "Um bairro histórico e artístico, onde se encontra a Casa Azul, a antiga residência e agora museu da famosa pintora Frida Kahlo.",
        cityId: "ciudad-de-mexico",
      },
    ],
    location: {
      latitude: 19.4326,
      longitude: -99.1332,
    },
  },
  {
    id: "hong-kong",
    name: "Hong Kong",
    country: "China",
    coverImage: require("./images/hong-kong.jpg"),
    description:
      "Hong Kong, uma das cidades mais vibrantes e densamente povoadas do mundo, é conhecida por seu horizonte icônico, portos movimentados e uma mistura única de cultura oriental e ocidental. A cidade oferece uma rica história, cultura diversificada e experiências gastronômicas incomparáveis.",
    categories: [categories[1], categories[5], categories[4]], // Urbano, Compras, Cultura
    relatedCitiesIds: ["tokyo", "singapore", "dubai"], // Urban, Shopping, Modern cities
    touristAttractions: [
      {
        id: "hk1",
        name: "Victoria Peak",
        description:
          "O ponto mais alto de Hong Kong, oferecendo vistas panorâmicas deslumbrantes do horizonte da cidade e do porto de Victoria.",
        cityId: "hong-kong",
      },
      {
        id: "hk2",
        name: "Avenida das Estrelas",
        description:
          "Uma caminhada ao longo do porto de Victoria, homenageando as estrelas do cinema de Hong Kong, com uma vista incrível da baía.",
        cityId: "hong-kong",
      },
      {
        id: "hk3",
        name: "Big Buddha (Tian Tan Buddha)",
        description:
          "Uma impressionante estátua de bronze do Buda, localizada na ilha de Lantau, acessível por teleférico.",
        cityId: "hong-kong",
      },
      {
        id: "hk4",
        name: "Mercado Noturno de Temple Street",
        description:
          "Um famoso mercado noturno onde turistas e moradores locais encontram comida de rua, roupas e itens tradicionais.",
        cityId: "hong-kong",
      },
    ],
    location: {
      latitude: 22.3193,
      longitude: 114.1694,
    },
  },
  {
    id: "kosice",
    name: "Košice",
    country: "Eslováquia",
    coverImage: require("./images/kosice.jpg"),
    description:
      "Košice, a segunda maior cidade da Eslováquia, é um centro histórico e cultural com uma rica arquitetura gótica e uma atmosfera vibrante. Conhecida por sua bela catedral, praças animadas e festivais culturais, Košice oferece uma combinação perfeita de tradição e modernidade.",
    categories: [categories[6], categories[4], categories[3]], // História, Cultura, Natureza
    relatedCitiesIds: ["amsterdam", "ciudad-de-mexico", "melbourne"], // History, Culture, Architecture
    touristAttractions: [
      {
        id: "kosice1",
        name: "Catedral de Santa Isabel",
        description:
          "A maior catedral da Eslováquia e um dos mais belos exemplos de arquitetura gótica na Europa Central.",
        cityId: "kosice",
      },
      {
        id: "kosice2",
        name: "Rua Hlavná",
        description:
          "A rua principal de Košice, repleta de edifícios históricos, restaurantes e cafés, sendo o coração da cidade.",
        cityId: "kosice",
      },
      {
        id: "kosice3",
        name: "Teatro Estatal de Košice",
        description:
          "Um teatro deslumbrante do século XIX, famoso por suas apresentações de ópera, balé e teatro.",
        cityId: "kosice",
      },
      {
        id: "kosice4",
        name: "Museu da Eslováquia Oriental",
        description:
          "Um museu que oferece uma visão abrangente da história, arte e cultura da região leste da Eslováquia.",
        cityId: "kosice",
      },
    ],
    location: {
      latitude: 48.7164,
      longitude: 21.2611,
    },
  },
  {
    id: "melbourne",
    name: "Melbourne",
    country: "Austrália",
    coverImage: require("./images/melbourne.jpg"),
    description:
      "Melbourne, a capital cultural da Austrália, é conhecida por sua vibrante cena artística, vida noturna, cafés e eventos esportivos de classe mundial. Com uma mistura única de arquitetura vitoriana e moderna, a cidade oferece uma atmosfera cosmopolita e criativa.",
    categories: [categories[1], categories[4], categories[9]], // Urbano, Cultura, Gastronomia
    relatedCitiesIds: ["amsterdam", "ciudad-de-mexico", "kosice"], // Urban, Shopping, Modern cities
    touristAttractions: [
      {
        id: "melbourne1",
        name: "Federation Square",
        description:
          "Um dos principais marcos da cidade, Federation Square é um espaço público vibrante, cercado por museus, galerias e restaurantes.",
        cityId: "melbourne",
      },
      {
        id: "melbourne2",
        name: "Jardins Botânicos Reais de Melbourne",
        description:
          "Uma das áreas verdes mais importantes da cidade, oferecendo trilhas relaxantes e uma variedade de flora nativa.",
        cityId: "melbourne",
      },
      {
        id: "melbourne3",
        name: "Crown Casino",
        description:
          "Um dos maiores complexos de entretenimento da cidade, oferecendo cassinos, restaurantes e uma vista impressionante do rio Yarra.",
        cityId: "melbourne",
      },
      {
        id: "melbourne4",
        name: "Queen Victoria Market",
        description:
          "Um dos mercados mais antigos e famosos da Austrália, oferecendo uma ampla variedade de produtos frescos, artesanato e eventos culturais.",
        cityId: "melbourne",
      },
    ],
    location: {
      latitude: -37.8136,
      longitude: 144.9631,
    },
  },

  {
    id: "singapore",
    name: "Singapura",
    country: "Singapura",
    coverImage: require("./images/singapore.jpg"),
    description:
      "Singapura, uma cidade-estado moderna e cosmopolita, é conhecida por seu impressionante horizonte urbano, jardins futuristas e uma mistura fascinante de culturas asiáticas. Famosa por sua limpeza, inovação e eficiência, Singapura oferece uma experiência única de modernidade e tradição.",
    categories: [categories[8], categories[1], categories[4]], // Luxo, Urbano, Cultura
    relatedCitiesIds: ["tokyo", "bangkok", "dubai"], // Urban, Shopping, Modern cities
    touristAttractions: [
      {
        id: "singapore1",
        name: "Marina Bay Sands",
        description:
          "Um dos marcos mais icônicos de Singapura, conhecido por seu hotel de luxo, cassino e a famosa piscina de borda infinita no topo.",
        cityId: "singapore",
      },
      {
        id: "singapore2",
        name: "Gardens by the Bay",
        description:
          "Jardins futuristas que apresentam as famosas 'Supertrees' e cúpulas de plantas que criam um espetáculo visual e tecnológico.",
        cityId: "singapore",
      },
      {
        id: "singapore3",
        name: "Merlion Park",
        description:
          "Um dos símbolos mais reconhecidos de Singapura, o parque abriga a famosa estátua de Merlion, metade peixe e metade leão.",
        cityId: "singapore",
      },
      {
        id: "singapore4",
        name: "Chinatown",
        description:
          "Um vibrante bairro que oferece uma imersão na cultura chinesa com templos, mercados e restaurantes tradicionais.",
        cityId: "singapore",
      },
    ],
    location: {
      latitude: 1.3521,
      longitude: 103.8198,
    },
  },
];

export const cityPreviewList: CityPreview[] = cities;
