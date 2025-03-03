import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';  // 🔹 Importa IonicModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
  imports: [IonicModule, FormsModule]  // 🔹 Agrégalo aquí
})
export class EditProfilePage {
  profileImage: string = 'assets/logo2.svg'; // Imagen de perfil por defecto
  userName: string = '';

  constructor(private navCtrl: NavController) {}

  changeProfilePicture() {
    // Aquí podrías abrir la galería o la cámara
    console.log('Cambiar foto de perfil');
  }

  saveProfile() {
    console.log('Perfil guardado:', this.userName);
    this.navCtrl.navigateForward('/home'); // Redirigir a otra pantalla
  }
}
