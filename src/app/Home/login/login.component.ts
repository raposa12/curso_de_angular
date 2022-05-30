import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core-service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  //Variavel de validaçao de login
  loginForm: any = FormGroup;
  


  //evento de entrar
  /*onSubmit(form: any){
    console.log(form)

    console.log(this.usuario)
  }*/
 
    //Variavel de login
    //loginForm!: FormGroup;
    /*Mascara do fromulario */
    constructor(private formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router) {}

    /*Validaçao do nome e senha do usuario */
    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
    }
    

    login(){
      console.log("Autenticando.");
      const usuario = this.loginForm.get('username').value;
      const senha = this.loginForm.get('password').value;

      this.authService.autenticar(usuario,senha)
          .subscribe(
            res => {
              console.log("Usuário Autenticado.")
              this.router.navigate(['principal']);
            },
            error => {
              console.log("Erro no Servidor")
              this.router.navigate(['principal']);
            }
          )

      /*this.router.navigate(['principal']);

      if(this.authService.autenticar(usuario, senha)) {
        console.log("Usuário Autenticado.")
      }else{
        console.log("Usuário não autenticado")
      }*/

    }

}



