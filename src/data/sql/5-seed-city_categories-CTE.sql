WITH city_category_relationships AS (
  SELECT 
    c.id as city_id,
    cc.id as category_id
  FROM cities c
  CROSS JOIN categories cc
  WHERE (c.name, cc.name) IN (
    -- Rio de Janeiro
    ('Rio de Janeiro', 'Praia'),
    ('Rio de Janeiro', 'Natureza'),
    ('Rio de Janeiro', 'Urbano'),
    
    -- Tóquio
    ('Tóquio', 'Urbano'),
    ('Tóquio', 'Cultura'),
    ('Tóquio', 'Compras'),
    
    -- Bangkok
    ('Bangkok', 'Destaques'),
    ('Bangkok', 'Cultura'),
    ('Bangkok', 'História'),
    ('Bangkok', 'Compras'),
    
    -- Barcelona
    ('Barcelona', 'Cultura'),
    ('Barcelona', 'Urbano'),
    ('Barcelona', 'História'),
    
    -- Nova York
    ('Nova York', 'Urbano'),
    ('Nova York', 'Luxo'),
    ('Nova York', 'História'),
    
    -- Krabi
    ('Krabi', 'Praia'),
    ('Krabi', 'Natureza'),
    ('Krabi', 'Aventura'),
    
    -- Bali
    ('Bali', 'Destaques'),
    ('Bali', 'Praia'),
    ('Bali', 'Natureza'),
    ('Bali', 'Cultura'),
    
    -- Amsterdã
    ('Amsterdã', 'História'),
    ('Amsterdã', 'Cultura'),
    ('Amsterdã', 'Urbano'),
    
    -- Cancún
    ('Cancún', 'Praia'),
    ('Cancún', 'Natureza'),
    ('Cancún', 'Aventura'),
    
    -- Dubai
    ('Dubai', 'Destaques'),
    ('Dubai', 'Luxo'),
    ('Dubai', 'Compras'),
    ('Dubai', 'Urbano'),
    
    -- Cidade do México
    ('Cidade do México', 'Cultura'),
    ('Cidade do México', 'História'),
    ('Cidade do México', 'Gastronomia'),
    
    -- Hong Kong
    ('Hong Kong', 'Urbano'),
    ('Hong Kong', 'Compras'),
    ('Hong Kong', 'Cultura'),
    
    -- Košice
    ('Košice', 'História'),
    ('Košice', 'Cultura'),
    ('Košice', 'Natureza'),
    
    -- Melbourne
    ('Melbourne', 'Urbano'),
    ('Melbourne', 'Cultura'),
    ('Melbourne', 'Gastronomia'),
    
    -- Singapura
    ('Singapura', 'Luxo'),
    ('Singapura', 'Urbano'),
    ('Singapura', 'Cultura')
  )
)
INSERT INTO city_categories (city_id, category_id)
SELECT city_id, category_id
FROM city_category_relationships;