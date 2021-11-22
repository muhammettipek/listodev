import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {catchError,map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DevService {
   degis=new BehaviorSubject<number>(1);
   degis$=this.degis.asObservable();

   mod=new BehaviorSubject<string>("");
   mod$=this.mod.asObservable();


  constructor() { }

  ataindex(i: number,mod:string) {
    this.degis.next(i);
    this.mod.next(mod);

  }

  getmod():Observable<string>{
    return this.mod.asObservable();
  }

  getirindex():Observable<number>{
    return this.degis.asObservable();
  }
}
