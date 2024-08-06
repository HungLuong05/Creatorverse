import { createClient } from '@supabase/supabase-js';

const URL = 'https://aetonvyaovbmmdbvgxpu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFldG9udnlhb3ZibW1kYnZneHB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2NjkwMzgsImV4cCI6MjAzNTI0NTAzOH0.8H4CA-styjZPFkUnmWf5tNBXbWvxpN32xNnqHfONoRI';
const supabase = createClient(URL, API_KEY);
export default supabase;
