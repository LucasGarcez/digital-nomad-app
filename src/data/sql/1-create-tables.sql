CREATE EXTENSION IF NOT EXISTS postgis;

-- CITIES
CREATE TABLE cities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  description TEXT NOT NULL,
  location GEOGRAPHY(Point, 4326) -- Stores latitude/longitude
);

-- TOURIST ATTRACTIONS
CREATE TABLE tourist_attractions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  city_id UUID REFERENCES cities ON DELETE CASCADE
);

-- CATEGORIES
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT  NOT NULL,
  code TEXT NOT NULL
);

-- LINK TABLE: City ⇄ Categories (many-to-many)
CREATE TABLE city_categories (
  city_id UUID REFERENCES cities ON DELETE CASCADE,
  category_id UUID REFERENCES categories ON DELETE CASCADE,
  PRIMARY KEY (city_id, category_id)
);

-- LINK TABLE: City ⇄ City (many-to-many)
CREATE TABLE city_cities (
  city_id UUID REFERENCES cities ON DELETE CASCADE,
  related_city_id UUID REFERENCES cities ON DELETE CASCADE,
  PRIMARY KEY (city_id, related_city_id)
);

-- Enable Row Level Security
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE tourist_attractions ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE city_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE city_cities ENABLE ROW LEVEL SECURITY;

-- Create read access policies for all users
CREATE POLICY "Enable read access for all users" ON "public"."cities"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."tourist_attractions"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."categories"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."city_categories"
AS PERMISSIVE FOR SELECT
TO public
USING (true);

CREATE POLICY "Enable read access for all users" ON "public"."city_cities"
AS PERMISSIVE FOR SELECT
TO public
USING (true);


