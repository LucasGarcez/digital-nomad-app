create or replace view cities_with_categories as
select
  c.*,
  cc.id as category_id,
  cc.name as category_name,
  cc.description as category_description,
  cc.code as category_code
from cities c
join city_categories ccl on ccl.city_id = c.id
join categories cc on cc.id = ccl.category_id;