WITH city_ids AS (
  SELECT id, name FROM cities
),
tourist_attractions_data AS (
  SELECT 
    (SELECT id FROM city_ids WHERE name = city_name) as city_id,
    attraction_name as name,
    description
  FROM (VALUES
    -- Rio de Janeiro
    ('Rio de Janeiro', 'Cristo Redentor', 'Uma das Sete Maravilhas do Mundo Moderno, a estátua do Cristo Redentor é um marco icônico que oferece vistas espetaculares da cidade.'),
    ('Rio de Janeiro', 'Pão de Açúcar', 'Uma das montanhas mais famosas do Brasil, acessível por bondinho, oferecendo uma vista panorâmica impressionante do Rio de Janeiro.'),
    ('Rio de Janeiro', 'Praia de Copacabana', 'Uma das praias mais famosas do mundo, conhecida por sua extensa faixa de areia, vida noturna animada e eventos culturais.'),
    ('Rio de Janeiro', 'Jardim Botânico', 'Um dos maiores e mais antigos jardins botânicos do Brasil, repleto de flora tropical, trilhas e áreas de preservação.'),

    -- Tóquio
    ('Tóquio', 'Templo Senso-ji', 'O templo mais antigo de Tóquio e um local de grande importância espiritual.'),
    ('Tóquio', 'Torre de Tóquio', 'Um dos ícones da cidade, com vistas panorâmicas incríveis.'),
    ('Tóquio', 'Shibuya Crossing', 'A famosa interseção movimentada, conhecida em todo o mundo.'),
    ('Tóquio', 'Parque Ueno', 'Um amplo parque com museus, templos e cerejeiras em flor na primavera.'),

    -- Bangkok
    ('Bangkok', 'Grande Palácio', 'Um dos marcos mais famosos de Bangkok, o Grande Palácio é um complexo de edifícios majestosos que serviu como residência dos reis da Tailândia.'),
    ('Bangkok', 'Templo do Buda de Esmeralda (Wat Phra Kaew)', 'Localizado dentro do Grande Palácio, este templo é considerado o mais sagrado da Tailândia e abriga a famosa estátua do Buda de Esmeralda.'),
    ('Bangkok', 'Mercado de Chatuchak', 'Um dos maiores mercados de rua do mundo, com mais de 8.000 barracas vendendo uma enorme variedade de produtos, de artesanato a roupas e comida.'),
    ('Bangkok', 'Wat Arun (Templo do Amanhecer)', 'Localizado às margens do rio Chao Phraya, Wat Arun é conhecido por sua torre central imponente e sua arquitetura intrincada.'),

    -- Barcelona
    ('Barcelona', 'Sagrada Família', 'Uma das basílicas mais impressionantes do mundo, projetada por Antoni Gaudí.'),
    ('Barcelona', 'Parque Güell', 'Um parque público cheio de jardins e elementos arquitetônicos projetados por Gaudí.'),
    ('Barcelona', 'Casa Batlló', 'Outro marco arquitetônico de Gaudí, conhecido por sua fachada distinta.'),
    ('Barcelona', 'La Rambla', 'Um famoso boulevard no centro de Barcelona, repleto de lojas, restaurantes e entretenimento.'),

    -- Nova York
    ('Nova York', 'Estátua da Liberdade', 'Um símbolo da liberdade e democracia, situada na entrada do porto de Nova York.'),
    ('Nova York', 'Central Park', 'Um vasto parque no coração de Manhattan, um local perfeito para lazer e atividades ao ar livre.'),
    ('Nova York', 'Times Square', 'A famosa interseção iluminada por outdoors gigantes e sede de muitos teatros da Broadway.'),
    ('Nova York', 'Empire State Building', 'Um dos arranha-céus mais famosos do mundo, oferecendo vistas deslumbrantes de Nova York.'),

    -- Krabi
    ('Krabi', 'Railay Beach', 'Uma das praias mais bonitas da Tailândia, famosa por suas falésias calcárias e paisagens de tirar o fôlego.'),
    ('Krabi', 'Ilhas Phi Phi', 'Um arquipélago de tirar o fôlego, com praias paradisíacas e águas cristalinas, perfeito para mergulho.'),
    ('Krabi', 'Templo da Caverna do Tigre', 'Um templo budista situado em uma montanha, acessível por uma longa escadaria, oferecendo vistas panorâmicas incríveis.'),
    ('Krabi', 'Praia de Ao Nang', 'Uma das praias mais populares de Krabi, conhecida por sua beleza natural e uma ótima base para explorar as ilhas próximas.'),

    -- Bali
    ('Bali', 'Templo de Uluwatu', 'Um dos templos mais importantes de Bali, localizado no topo de uma falésia com vista para o oceano, famoso por suas apresentações de dança Kecak ao pôr do sol.'),
    ('Bali', 'Floresta dos Macacos de Ubud', 'Um santuário natural e cultural, habitado por centenas de macacos, em meio a templos e florestas tropicais densas.'),
    ('Bali', 'Terraços de Arroz de Tegallalang', 'Uma das paisagens mais icônicas de Bali, com impressionantes terraços de arroz que proporcionam vistas espetaculares.'),
    ('Bali', 'Monte Batur', 'Um vulcão ativo que atrai caminhantes e aventureiros para subir até o topo e contemplar um incrível nascer do sol.'),

    -- Amsterdã
    ('Amsterdã', 'Museu Van Gogh', 'Lar da maior coleção de obras de Vincent Van Gogh, este museu oferece uma viagem pela vida e trabalho do pintor.'),
    ('Amsterdã', 'Casa de Anne Frank', 'Um museu no antigo esconderijo de Anne Frank durante a Segunda Guerra Mundial, oferecendo uma visão emocionante de sua história.'),
    ('Amsterdã', 'Rijksmuseum', 'O museu nacional dos Países Baixos, abrigando uma vasta coleção de arte, história e cultura, incluindo obras-primas de Rembrandt.'),
    ('Amsterdã', 'Vondelpark', 'O maior parque de Amsterdã, um lugar perfeito para caminhar, andar de bicicleta, relaxar e aproveitar o ar livre.'),

    -- Cancún
    ('Cancún', 'Chichén Itzá', 'Uma das Novas Sete Maravilhas do Mundo Moderno, este sítio arqueológico maia é uma das atrações mais visitadas perto de Cancún.'),
    ('Cancún', 'Isla Mujeres', 'Uma pequena ilha a apenas 13 km de Cancún, famosa por suas praias tranquilas e excelente mergulho com snorkel.'),
    ('Cancún', 'Xcaret Park', 'Um parque temático ecoarqueológico que oferece atividades ao ar livre, shows culturais e uma chance de conhecer a fauna local.'),
    ('Cancún', 'Praia de Delfines', 'Uma das praias mais populares de Cancún, com vistas deslumbrantes do mar do Caribe e um local ideal para relaxar ao sol.'),

    -- Dubai
    ('Dubai', 'Burj Khalifa', 'O edifício mais alto do mundo, com 828 metros de altura, oferecendo vistas panorâmicas incríveis de Dubai do seu mirante.'),
    ('Dubai', 'Dubai Mall', 'Um dos maiores centros comerciais do mundo, com mais de 1.200 lojas, restaurantes, um aquário e um parque temático interno.'),
    ('Dubai', 'Ilha Palm Jumeirah', 'Uma ilha artificial em forma de palmeira, famosa por seus resorts de luxo, restaurantes, e vistas impressionantes da cidade.'),
    ('Dubai', 'Deserto de Dubai', 'Aventure-se no deserto de Dubai com passeios de safári, dunas de areia e experiências culturais beduínas.'),

    -- Cidade do México
    ('Cidade do México', 'Zócalo', 'A maior praça da cidade, rodeada por edifícios históricos, incluindo a Catedral Metropolitana e o Palácio Nacional.'),
    ('Cidade do México', 'Museu Nacional de Antropologia', 'Um dos museus mais importantes do México, com uma vasta coleção de artefatos arqueológicos e etnográficos que celebram a cultura mexicana.'),
    ('Cidade do México', 'Castelo de Chapultepec', 'Localizado no alto do bosque de Chapultepec, este castelo oferece uma visão única da história mexicana e vistas espetaculares da cidade.'),
    ('Cidade do México', 'Coyoacán', 'Um bairro histórico e artístico, onde se encontra a Casa Azul, a antiga residência e agora museu da famosa pintora Frida Kahlo.'),

    -- Hong Kong
    ('Hong Kong', 'Victoria Peak', 'O ponto mais alto de Hong Kong, oferecendo vistas panorâmicas deslumbrantes do horizonte da cidade e do porto de Victoria.'),
    ('Hong Kong', 'Avenida das Estrelas', 'Uma caminhada ao longo do porto de Victoria, homenageando as estrelas do cinema de Hong Kong, com uma vista incrível da baía.'),
    ('Hong Kong', 'Big Buddha (Tian Tan Buddha)', 'Uma impressionante estátua de bronze do Buda, localizada na ilha de Lantau, acessível por teleférico.'),
    ('Hong Kong', 'Mercado Noturno de Temple Street', 'Um famoso mercado noturno onde turistas e moradores locais encontram comida de rua, roupas e itens tradicionais.'),

    -- Košice
    ('Košice', 'Catedral de Santa Isabel', 'A maior catedral da Eslováquia e um dos mais belos exemplos de arquitetura gótica na Europa Central.'),
    ('Košice', 'Rua Hlavná', 'A rua principal de Košice, repleta de edifícios históricos, restaurantes e cafés, sendo o coração da cidade.'),
    ('Košice', 'Teatro Estatal de Košice', 'Um teatro deslumbrante do século XIX, famoso por suas apresentações de ópera, balé e teatro.'),
    ('Košice', 'Museu da Eslováquia Oriental', 'Um museu que oferece uma visão abrangente da história, arte e cultura da região leste da Eslováquia.'),

    -- Melbourne
    ('Melbourne', 'Federation Square', 'Um dos principais marcos da cidade, Federation Square é um espaço público vibrante, cercado por museus, galerias e restaurantes.'),
    ('Melbourne', 'Jardins Botânicos Reais de Melbourne', 'Uma das áreas verdes mais importantes da cidade, oferecendo trilhas relaxantes e uma variedade de flora nativa.'),
    ('Melbourne', 'Crown Casino', 'Um dos maiores complexos de entretenimento da cidade, oferecendo cassinos, restaurantes e uma vista impressionante do rio Yarra.'),
    ('Melbourne', 'Queen Victoria Market', 'Um dos mercados mais antigos e famosos da Austrália, oferecendo uma ampla variedade de produtos frescos, artesanato e eventos culturais.'),

    -- Singapura
    ('Singapura', 'Marina Bay Sands', 'Um dos marcos mais icônicos de Singapura, conhecido por seu hotel de luxo, cassino e a famosa piscina de borda infinita no topo.'),
    ('Singapura', 'Gardens by the Bay', 'Jardins futuristas que apresentam as famosas "Supertrees" e cúpulas de plantas que criam um espetáculo visual e tecnológico.'),
    ('Singapura', 'Merlion Park', 'Um dos símbolos mais reconhecidos de Singapura, o parque abriga a famosa estátua de Merlion, metade peixe e metade leão.'),
    ('Singapura', 'Chinatown', 'Um vibrante bairro que oferece uma imersão na cultura chinesa com templos, mercados e restaurantes tradicionais.')
  ) AS t(city_name, attraction_name, description)
)
INSERT INTO tourist_attractions (city_id, name, description)
SELECT city_id, name, description
FROM tourist_attractions_data;