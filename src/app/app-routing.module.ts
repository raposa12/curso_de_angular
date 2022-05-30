import { UsuarioComponent } from './Home/Dashboard/usuario/usuario.component';
import { RegistrarComponent } from './Home/registrar/registrar.component';
import { LoginComponent } from './Home/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './Home/Dashboard/principal/principal.component';
import { ClienteComponent } from './Home/Dashboard/cliente/cliente.component';

const routes: Routes = [
  /*Criando rotas */
  { path:'login', component: LoginComponent },
  { path:'registrar', component: RegistrarComponent },
  { path: 'principal', component: PrincipalComponent,
      children: [//Ligaçao de rotas do meu
        { path: 'usuario', component: UsuarioComponent },
        { path: 'cliente', component: ClienteComponent }
      ] 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
