CREATE OR REPLACE VIEW related_cities AS
SELECT 
  c.id,
  c.name,
  c.country,
  c.cover_image as "cover_image",
  cc.city_id as "source_city_id"
FROM cities c
JOIN city_cities cc ON cc.related_city_id = c.id;


-- Generate types: https://supabase.com/docs/guides/api/rest/generating-types
-- Go to API Docs -> TABLES AND VIEWS -> Introduction