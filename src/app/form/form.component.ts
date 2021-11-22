import {Component, HostListener, OnInit, VERSION} from '@angular/core';
import {Personel} from '../user-list/personel';
import {PersonelListesi} from '../user-list/personel-list';
import {Injectable} from '@angular/core';
import {LocalStorageService} from 'angular-2-local-storage';
import {StorageService} from '../storage.service';
import {Router} from "@angular/router";
import {DevService} from "../dev.service";
import {colors} from "@angular/cli/utilities/color";
import {Routes,RouterModule} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    {
      this.btnclick()
    }
  }
  array1: Array<Personel> = []
  inputadi?: string;
  inputsoy?: string;
  inputdept?: string;
  inputuyruk?: string;
  inputdg?: string;
  inputid?: number;


  i: number = 0;
  mod?: string;



  btnval = "Ekle";


  constructor(private devService: DevService,private router: Router) {
  }


  ngOnInit(): void {
    console.log("url=",this.router.url)
    if(this.router.url=="/form"){

    }

    let isim1 = document.getElementById("isim")
    this.devService.getirindex().subscribe((d) => {
      this.i = d;

    });

    this.devService.getmod().subscribe((a) => {
      this.mod = a;
    });

    if (this.mod == "ekle") {
      this.btnval = "Ekle"
    }

    if (this.mod == "degis") {

      this.degistir()
      this.btnval = "Degiştir"

    }

    if (this.mod == "incele") {
      this.incele()
      this.isEnabled = true;
      this.btnval = "Geri";
    }

  }

  kisi1 = new Personel()
  isEnabled: any;

  degistir() {

    this.array1 = JSON.parse(<string>localStorage.getItem("liste"))

    this.inputadi = (this.array1[this.i].Adi)
    this.inputsoy = (this.array1[this.i].SoyAdi)
    this.inputdept = (this.array1[this.i].Departman)
    this.inputuyruk = (this.array1[this.i].Memleketi)
    this.inputdg = (this.array1[this.i].DogumTarihi)
    this.inputid = (this.array1[this.i].PersonelNo)


  let isim1 = document.getElementById("isim") as HTMLInputElement
let soyisim= document.getElementById("soyisim") as HTMLInputElement
    let departman= document.getElementById("departman") as HTMLInputElement
    let uyruk= document.getElementById("uyruk") as HTMLInputElement
    let date= document.getElementById("date") as HTMLInputElement
    let id= document.getElementById("id") as HTMLInputElement



this.array1[this.i].Adi = isim1.value
this.array1[this.i].SoyAdi=soyisim.value
this.array1[this.i].Departman=departman.value
this.array1[this.i].Memleketi=uyruk.value
this.array1[this.i].DogumTarihi=date.value
this.array1[this.i].PersonelNo=parseInt(id.value)


console.log(isim1.value)

    localStorage.setItem('liste', JSON.stringify(this.array1))
    let button= document.getElementById("button") as HTMLInputElement
    button.style.background="orange";
    button.style.color="black"
  }


  incele() {
    this.array1 = JSON.parse(<string>localStorage.getItem('liste'))

    this.inputadi = (this.array1[this.i].Adi)
    this.inputsoy = (this.array1[this.i].SoyAdi)
    this.inputdept = (this.array1[this.i].Departman)
    this.inputuyruk = (this.array1[this.i].Memleketi)
    this.inputdg = (this.array1[this.i].DogumTarihi)
    this.inputid = (this.array1[this.i].PersonelNo)
    let button= document.getElementById("button") as HTMLInputElement
    button.style.background="yellow";
    button.style.color="black";

  }

  ekle() {



    this.kisi1.Adi = this.inputadi;
      this.kisi1.PersonelNo = this.inputid;
      this.kisi1.Departman = this.inputdept;
      this.kisi1.SoyAdi = this.inputsoy;
      this.kisi1.Memleketi = this.inputuyruk;
      this.kisi1.DogumTarihi = this.inputdg;

    if(JSON.parse(<string>localStorage.getItem('liste')) !== null) {
      this.array1 = JSON.parse(<string>localStorage.getItem('liste'))
    }



    this.array1.push(this.kisi1);
    localStorage.setItem('liste', JSON.stringify(this.array1))

  }



  btnclick() {
    if (this.mod == "incele") {
      this.incele()
      this.isEnabled = true;
      this.btnval = "Geri";
      this.router.navigateByUrl("/list")

    }


    if (this.mod == "ekle") {
      console.log("ekle çalıştı")
      this.ekle()
      this.router.navigateByUrl("/list")
    }
    if (this.mod == "degis") {
      console.log("degis çalış")
      this.degistir()
      this.router.navigateByUrl("/list")

    }
  }
}


