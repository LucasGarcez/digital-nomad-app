UPDATE cities
SET cover_image = REPLACE(cover_image, 'digital-nomand', 'digital-nomad')
WHERE cover_image LIKE 'digital-nomand%';