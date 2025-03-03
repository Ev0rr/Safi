import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { FormsModule } from '@angular/forms'; // ✅ Importa FormsModule

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.page.html',
  styleUrls: ['./verify-code.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule] // ✅ Agrega IonicModule aquí
})
export class VerifyCodePage {
  verificationCode: string = '';

  constructor(private router: Router) {}

  // Función para verificar el código
  verifyCode() {
    if (this.verificationCode.length === 6) {
      console.log('Código verificado:', this.verificationCode);
      this.router.navigate(['/edit-profile']); // Redirige a la siguiente pantalla
    }
  }

  // Función para reenviar código
  resendCode() {
    console.log('Código reenviado');
    alert('A new verification code has been sent to your phone.');
  }
}
