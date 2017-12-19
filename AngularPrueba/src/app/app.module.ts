import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { onClick } from './onCLick/onClick.component';
import { CrudComponent } from './CRUD/crud.component';


@NgModule({
  declarations: [
    AppComponent, onClick, CrudComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
