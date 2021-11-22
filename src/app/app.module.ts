import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ListComponent } from './list/list.component';
import {FormsModule} from "@angular/forms";


const route: Route[] = [

  { path: 'list', component:ListComponent},
  { path: 'form', component:FormComponent},
  ];

@NgModule({
  exports:[RouterModule],
  declarations: [
    AppComponent,
    FormComponent,
    UserListComponent,
    ListComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(route),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


