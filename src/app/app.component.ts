import { Component,VERSION } from '@angular/core';
import { PersonelListesi } from './user-list/personel-list';
import { Personel } from './user-list/personel';
import { StorageService } from './storage.service';
import {LocalStorageService} from "angular-2-local-storage";
import {DevService} from "./dev.service";
import {isRouterModuleForRoot} from "@angular/core/schematics/migrations/initial-navigation/util";
import {Location} from "@angular/common";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


title = 'odev';

array2: Array<Personel> = []
    listeval= "Liste";
   ekle?: any;



constructor(private devService:DevService) { }
ngOnInit(): void {

}








ataindex(i:number,mod:string):void{
  this.devService.ataindex(i,mod);

}

}
