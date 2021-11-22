import { Component, OnInit } from '@angular/core';
import { PersonelListesi } from '../user-list/personel-list';
import {Personel} from "../user-list/personel";
import {FormComponent} from "../form/form.component";
import {DevService} from "../dev.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'odev';

  array2: Array<Personel> = []



constructor(private devService:DevService) {
}
  ngOnInit(): void {



    if (localStorage.getItem("liste") != null) {
      this.array2 = JSON.parse(<string>localStorage.getItem("liste"));

    }

  }

  ataindex(i:number,mod:string):void{
    this.devService.ataindex(i,mod);



  }


  sil(i:number) {
    this.array2 = JSON.parse(<string>localStorage.getItem("liste"));

    this.array2.splice(i,1)

      localStorage.setItem('liste', JSON.stringify(this.array2))


    }

}


