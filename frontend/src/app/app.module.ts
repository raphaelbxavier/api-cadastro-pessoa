import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { UpdatePessoaComponent } from './update-pessoa/update-pessoa.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreatePessoaComponent,
    PessoaListComponent,
    UpdatePessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
