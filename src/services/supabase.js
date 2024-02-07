import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fwryjlvuzwxokyrclytm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3cnlqbHZ1end4b2t5cmNseXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM5NDQ2ODksImV4cCI6MjAxOTUyMDY4OX0.ksosMCEr-JbvN-dswN8dupT0FFDmZY0294yPqBPxZA8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
