import { supabase } from "./supabase";

async function findAll() {
  const cities = await supabase.from("cities").select("id,name,description");
  console.log({ cities });
}

export const supabaseService = { findAll };
