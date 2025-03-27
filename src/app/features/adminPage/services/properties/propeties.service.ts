import {inject, Injectable} from '@angular/core';
import {SuperbaseService} from "../superbase/superbase.service";
import {forkJoin, from, map, Observable} from "rxjs";
import {PropertiesType} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class PropetiesService {
private supabase = inject(SuperbaseService)
  constructor() { }

  public addProperties(properties:PropertiesType){
    return from(this.supabase.supabaseClient.from('properties').insert(properties).select('id')).pipe(
      map((res)=>res?.data[0].id)
    )
  }


    public getProperties(){
        return from(this.supabase.supabaseClient.from('properties').select('*')).pipe(
        map((res)=>res?.data)
        )
    }

    public deleteProperties(id:string){
        return from(this.supabase.supabaseClient.from('properties').delete().eq('id',id))
    }

    public updateProperties(id:string,properties:PropertiesType){
        return from(this.supabase.supabaseClient.from('properties').update(properties).eq('id',id))
    }

    public getPropertiesById(id:string){
        return from(this.supabase.supabaseClient.from('properties').select('*').eq('id',id)).pipe(
        map((res)=>res?.data)
        )
    }

    public  addUnits(id:string,units:string[]){
        return from(this.supabase.supabaseClient.from('properties').update({units}).eq('id',id))
    }

  uploadImages(files: File[], unitId: string): Observable<string[]> {
    const uploads = files.map((file) => {
      const filePath = `units/${unitId}/${file.name}`;
      return from(this.supabase.supabaseClient.storage.from('unit-images').upload(filePath, file)).pipe(
        map((res) => this.supabase.supabaseClient.storage.from('unit-images').getPublicUrl(res?.data.path).data.publicUrl)
      );
    });
    return forkJoin(uploads);
  }

}
