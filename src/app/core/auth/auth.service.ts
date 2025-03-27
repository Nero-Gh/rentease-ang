import {Injectable} from "@angular/core";
import {createClient, Session, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../../environments/environment.development";
import {BehaviorSubject, from, Observable} from "rxjs";


@Injectable({
  providedIn:"root"
})


export class AuthService{
private supabase:SupabaseClient;
private authState:BehaviorSubject<Session|null> = new BehaviorSubject<Session|null>(null);

constructor() {
  this.supabase = createClient(environment.supabaseUrl as string, environment.supabaseKey as string);
  this.supabase.auth.onAuthStateChange((event, session) => {
    this.authState.next(session);
  });
}


public  getAuthState():Observable<Session | null>{
  return this.authState.asObservable();
}


public  signUp(form:signUpType):Observable<any>{
  const promiseData = this.supabase.auth.signUp({
    email:form.email,
    password:form.password
  })
  return from(promiseData)
}

  public signIn(form:signUpType){
    const promiseData = this.supabase.auth.signInWithOtp({
      email:form.email
    })
    return from(promiseData)
  }
}




type signUpType = {
  email:string,
  password:string
}
