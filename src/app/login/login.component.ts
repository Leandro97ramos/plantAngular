import { Component } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  myForm: FormGroup;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.myForm = new FormGroup({
      email: new FormControl(''),  // Inicialización de campos
      password: new FormControl(''),


    })
  }

  login() {

    if (this.myForm.valid) {
      const credentials = this.myForm.value; // Obtiene email y password
      this.authService.login(credentials).subscribe(
        (response: any) => {
          // Guarda el token recibido en el localStorage
          this.authService.setToken(response.token);
          console.log('Login exitoso');
        },
        (error) => {
          console.error('Error en el login', error);
        }
      );
    } else {
      console.error('Formulario inválido');
    }

  }


}
