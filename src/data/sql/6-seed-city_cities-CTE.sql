WITH city_relationships AS (
  SELECT 
    c1.id as city_id,
    c2.id as related_city_id
  FROM cities c1
  CROSS JOIN cities c2
  WHERE (c1.name, c2.name) IN (
    ('Rio de Janeiro', 'Bali'),
    ('Rio de Janeiro', 'Cancún'),
    ('Rio de Janeiro', 'Krabi'),
    ('Tóquio', 'Bangkok'),
    ('Tóquio', 'Hong Kong'),
    ('Tóquio', 'Singapura'),
    ('Bangkok', 'Tóquio'),
    ('Bangkok', 'Hong Kong'),
    ('Bangkok', 'Singapura'),
    ('Barcelona', 'Košice'),
    ('Barcelona', 'Amsterdã'),
    ('Barcelona', 'Cidade do México'),
    ('Nova York', 'Hong Kong'),
    ('Nova York', 'Singapura'),
    ('Nova York', 'Dubai'),
    ('Krabi', 'Bali'),
    ('Krabi', 'Rio de Janeiro'),
    ('Krabi', 'Cancún'),
    ('Bali', 'Rio de Janeiro'),
    ('Bali', 'Tóquio'),
    ('Bali', 'Bangkok'),
    ('Amsterdã', 'Barcelona'),
    ('Amsterdã', 'Cidade do México'),
    ('Amsterdã', 'Košice'),
    ('Cancún', 'Bali'),
    ('Cancún', 'Rio de Janeiro'),
    ('Cancún', 'Krabi'),
    ('Dubai', 'Tóquio'),
    ('Dubai', 'Singapura'),
    ('Dubai', 'Bangkok'),
    ('Cidade do México', 'Bali'),
    ('Cidade do México', 'Melbourne'),
    ('Cidade do México', 'Hong Kong'),
    ('Hong Kong', 'Tóquio'),
    ('Hong Kong', 'Singapura'),
    ('Hong Kong', 'Dubai'),
    ('Košice', 'Amsterdã'),
    ('Košice', 'Cidade do México'),
    ('Košice', 'Melbourne'),
    ('Melbourne', 'Amsterdã'),
    ('Melbourne', 'Cidade do México'),
    ('Melbourne', 'Košice'),
    ('Singapura', 'Tóquio'),
    ('Singapura', 'Bangkok'),
    ('Singapura', 'Dubai')
  )
)
INSERT INTO city_cities (city_id, related_city_id)
SELECT city_id, related_city_id
FROM city_relationships;