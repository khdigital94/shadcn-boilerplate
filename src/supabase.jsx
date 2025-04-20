import { createClient } from "@supabase/supabase-js";

const url = "https://mhutvjtzzhimwkqbgkpb.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1odXR2anR6emhpbXdrcWJna3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxNDQ0ODksImV4cCI6MjA2MDcyMDQ4OX0.m-NuwKgy1KVUv44sALmUu6sLLW50eTVYyNkUlu8c6lQ";

export const supabase = createClient(url, key);
