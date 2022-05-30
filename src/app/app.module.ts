import { TempaleFormModule } from './template-form/tempale-form.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule,  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Home/login/login.component';
import { RegistrarComponent } from './Home/registrar/registrar.component';
import { MensagemComponent } from './Shared/mensagem/mensagem.component';
import { HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './Home/Dashboard/principal/principal.component';
import { UsuarioComponent } from './Home/Dashboard/usuario/usuario.component';
import { ClienteComponent } from './Home/Dashboard/cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    MensagemComponent,
    PrincipalComponent,
    UsuarioComponent,
    ClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*teve que importar para funcionar os formularios */
    ReactiveFormsModule,
    FormsModule,
    TempaleFormModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
