-- USER FAVORITE CITIES
CREATE TABLE favorite_cities (
  user_id UUID REFERENCES auth.users ON DELETE CASCADE,
  city_id UUID REFERENCES cities ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (user_id, city_id)
);


ALTER TABLE favorite_cities ENABLE ROW LEVEL SECURITY;


CREATE POLICY "Users can view their own favorite cities" 
  ON favorite_cities
  FOR SELECT
  USING (auth.uid() = user_id);


CREATE POLICY "Users can insert their own favorite cities" 
  ON favorite_cities
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorite cities" 
  ON favorite_cities
  FOR DELETE
  USING (auth.uid() = user_id);