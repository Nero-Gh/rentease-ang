import * as dotenv from 'dotenv';
dotenv.config();
export const environment = {
  production: false,
  apiUrl: process.env['apiUrl'],
  apiKey: process.env['api_key'],
  supabaseUrl: process.env['supabase_url'],
  supabaseKey: process.env['supabase_key'],
};
