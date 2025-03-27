import { Injectable } from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../../../../environments/environment.development";


@Injectable({
  providedIn: 'root'
})
export class SuperbaseService {
  private supabase:SupabaseClient
  private supabaseUrl = environment.supabaseUrl as string
  private supabaseKey = environment.supabaseKey as string

  constructor() {
    this.supabase=createClient(this.supabaseUrl ,this.supabaseKey)
  }

  get supabaseClient(){
    return this.supabase
  }
}
